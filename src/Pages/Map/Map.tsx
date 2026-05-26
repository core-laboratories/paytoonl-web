import React, { useEffect, useMemo, useRef, useState } from "react";
import {
	MapPinned,
	MailPlus,
	Map as MapIcon,
	Navigation,
	RefreshCcw,
} from "lucide-react";

type PaymentMethod = string;

interface LocationProperties {
	id: string;
	name: string;
	address: string | null;
	city: string | null;
	country: string | null;
	category: string | null;
	payment_methods: PaymentMethod[];
	source_url: string;
	source_text: string | null;
	verified_at: string | null;
}

interface GeoJsonFeature {
	type: "Feature";
	geometry: {
		type: "Point";
		coordinates: [number, number];
	};
	properties: LocationProperties;
}

interface GeoJsonFeatureCollection {
	type: "FeatureCollection";
	features: GeoJsonFeature[];
}

interface MerchantLocation extends LocationProperties {
	lat: number;
	lng: number;
}

interface UserLocation {
	lat: number;
	lng: number;
}

const API_URL = "https://map.payto.onl/api/v1/locations";
const MAP_STYLE_URL = "https://demotiles.maplibre.org/style.json";
const MAPLIBRE_CSS_URL = "https://unpkg.com/maplibre-gl@5.7.1/dist/maplibre-gl.css";
const MAPLIBRE_JS_URL = "https://unpkg.com/maplibre-gl@5.7.1/dist/maplibre-gl.js";
const DEFAULT_CENTER: [number, number] = [15.2551, 48.669];
const DEFAULT_ZOOM = 4.6;

const addMerchantMailto = createMerchantMailtoHref();

type MapLibreGlobal = {
	Map: new (options: Record<string, unknown>) => MapLibreMap;
	NavigationControl: new () => unknown;
	Marker: new (options?: { element?: HTMLElement }) => MapLibreMarker;
	Popup: new (options?: Record<string, unknown>) => MapLibrePopup;
	LngLatBounds: new () => MapLibreLngLatBounds;
};

type MapLibreMap = {
	addControl(control: unknown, position?: string): void;
	flyTo(options: Record<string, unknown>): void;
	fitBounds(bounds: MapLibreLngLatBounds, options?: Record<string, unknown>): void;
	remove(): void;
};

type MapLibreMarker = {
	setLngLat(lngLat: [number, number]): MapLibreMarker;
	setPopup(popup: MapLibrePopup): MapLibreMarker;
	addTo(map: MapLibreMap): MapLibreMarker;
	remove(): void;
	getPopup(): MapLibrePopup;
	togglePopup(): void;
};

type MapLibrePopup = {
	setDOMContent(node: HTMLElement): MapLibrePopup;
	isOpen(): boolean;
};

type MapLibreLngLatBounds = {
	extend(lngLat: [number, number]): MapLibreLngLatBounds;
};

declare global {
	interface Window {
		maplibregl?: MapLibreGlobal;
	}
}

const MapPage = () => {
	const mapContainerRef = useRef<HTMLDivElement | null>(null);
	const mapRef = useRef<MapLibreMap | null>(null);
	const markersRef = useRef<Map<string, MapLibreMarker>>(new Map());
	const [mapLibre, setMapLibre] = useState<MapLibreGlobal | null>(null);

	const [locations, setLocations] = useState<MerchantLocation[]>([]);
	const [selectedLocationId, setSelectedLocationId] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [refreshNonce, setRefreshNonce] = useState(0);
	const [userLocation, setUserLocation] = useState<UserLocation | null>(null);
	const [hasCenteredOnUser, setHasCenteredOnUser] = useState(false);

	const selectedLocation = useMemo(
		() => locations.find((location) => location.id === selectedLocationId) ?? null,
		[locations, selectedLocationId],
	);

	useEffect(() => {
		let cancelled = false;

		void loadMapLibreAssets()
			.then((library) => {
				if (!cancelled) {
					setMapLibre(library);
				}
			})
			.catch((assetError) => {
				console.error("Failed to load MapLibre assets", assetError);
				if (!cancelled) {
					setError("Could not load the map renderer right now.");
				}
			});

		return () => {
			cancelled = true;
		};
	}, []);

	useEffect(() => {
		if (!navigator.geolocation) {
			return;
		}

		navigator.geolocation.getCurrentPosition(
			(position) => {
				setUserLocation({
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				});
			},
			(geoError) => {
				console.warn("User geolocation unavailable", geoError);
			},
			{
				enableHighAccuracy: false,
				timeout: 8000,
				maximumAge: 300000,
			},
		);
	}, []);

	useEffect(() => {
		if (!mapContainerRef.current || mapRef.current || !mapLibre) {
			return;
		}

		const map = new mapLibre.Map({
			container: mapContainerRef.current,
			style: MAP_STYLE_URL,
			center: DEFAULT_CENTER,
			zoom: DEFAULT_ZOOM,
			attributionControl: true,
		});

		map.addControl(new mapLibre.NavigationControl(), "top-right");
		mapRef.current = map;

		return () => {
			markersRef.current.forEach((marker) => marker.remove());
			markersRef.current.clear();
			map.remove();
			mapRef.current = null;
		};
	}, [mapLibre]);

	useEffect(() => {
		const controller = new AbortController();

		async function loadLocations(): Promise<void> {
			try {
				setLoading(true);
				setError(null);

				const response = await fetch(API_URL, { signal: controller.signal });
				if (!response.ok) {
					throw new Error(`Map API returned ${response.status}`);
				}

				const geojson = (await response.json()) as GeoJsonFeatureCollection;
				const nextLocations = geojson.features
					.filter((feature) => feature.geometry?.coordinates?.length === 2)
					.map((feature) => ({
						...feature.properties,
						lng: feature.geometry.coordinates[0],
						lat: feature.geometry.coordinates[1],
					}));

				setLocations(nextLocations);
				setSelectedLocationId((currentId) => {
					if (currentId && nextLocations.some((location) => location.id === currentId)) {
						return currentId;
					}

					return nextLocations[0]?.id ?? null;
				});
			} catch (loadError) {
				if (controller.signal.aborted) {
					return;
				}

				console.error("Failed to load map locations", loadError);
				setError("Could not load merchant locations right now.");
			} finally {
				if (!controller.signal.aborted) {
					setLoading(false);
				}
			}
		}

		void loadLocations();

		return () => controller.abort();
	}, [refreshNonce]);

	useEffect(() => {
		const map = mapRef.current;
		if (!map || !mapLibre) {
			return;
		}

		markersRef.current.forEach((marker) => marker.remove());
		markersRef.current.clear();

		if (locations.length === 0) {
			map.flyTo({ center: DEFAULT_CENTER, zoom: DEFAULT_ZOOM, essential: true });
			return;
		}

		const bounds = new mapLibre.LngLatBounds();

		for (const location of locations) {
			const markerElement = document.createElement("button");
			markerElement.type = "button";
			markerElement.className = "payto-map-marker";
			markerElement.setAttribute("aria-label", `Show ${location.name} on the map`);

			const popupContent = createPopupContent(location);

			const popup = new mapLibre.Popup({
				offset: 18,
				closeButton: false,
				className: "payto-map-popup",
			}).setDOMContent(popupContent);

			const marker = new mapLibre.Marker({ element: markerElement })
				.setLngLat([location.lng, location.lat])
				.setPopup(popup)
				.addTo(map);

			markerElement.addEventListener("click", () => {
				setSelectedLocationId(location.id);
				openMarkerPopup(marker);
			});

			markersRef.current.set(location.id, marker);
			bounds.extend([location.lng, location.lat]);
		}

		if (locations.length === 1) {
			map.flyTo({
				center: [locations[0].lng, locations[0].lat],
				zoom: 12,
				essential: true,
			});
			return;
		}

		map.fitBounds(bounds, {
			padding: 64,
			maxZoom: 12,
			duration: 0,
		});
	}, [locations, mapLibre]);

	useEffect(() => {
		const map = mapRef.current;
		if (!map || !userLocation || hasCenteredOnUser) {
			return;
		}

		map.flyTo({
			center: [userLocation.lng, userLocation.lat],
			zoom: 11,
			essential: true,
		});
		setHasCenteredOnUser(true);
	}, [hasCenteredOnUser, userLocation]);

	const focusLocation = (location: MerchantLocation): void => {
		const map = mapRef.current;
		const marker = markersRef.current.get(location.id);

		setSelectedLocationId(location.id);

		if (!map) {
			return;
		}

		map.flyTo({
			center: [location.lng, location.lat],
			zoom: 13,
			essential: true,
		});

		if (marker) {
			openMarkerPopup(marker);
		}
	};

	const focusUserLocation = (): void => {
		const map = mapRef.current;
		if (!map || !userLocation) {
			return;
		}

		map.flyTo({
			center: [userLocation.lng, userLocation.lat],
			zoom: 12,
			essential: true,
		});
	};

	return (
		<section className="bg-[radial-gradient(circle_at_top_left,_rgba(20,184,166,0.18),_transparent_30%),linear-gradient(180deg,_#f8fffe_0%,_#ffffff_100%)]">
			<div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
				<div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
					<div className="space-y-5">
						<div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700">
							<MapPinned className="h-4 w-4" />
							PayTo merchant map
						</div>
						<h1 className="max-w-3xl font-zephirum text-4xl tracking-tight text-slate-900 sm:text-5xl">
							Find merchants that already accept PayTo.
						</h1>
						<p className="max-w-3xl text-lg leading-8 text-slate-600">
							Explore verified locations, jump to each merchant on the map, and
							help us grow coverage by sending new merchant suggestions straight to
							the PayTo team.
						</p>
					</div>

					<div className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white/80 p-5 shadow-[0_22px_70px_rgba(15,23,42,0.08)] backdrop-blur">
						<div>
							<p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
								Live dataset
							</p>
							<p className="mt-2 text-3xl font-semibold text-slate-900">
								{loading ? "..." : locations.length}
							</p>
							<p className="mt-1 text-sm text-slate-500">Active mapped merchants</p>
						</div>

						<div className="grid gap-3 sm:grid-cols-2">
							<div className="rounded-2xl bg-slate-50 p-4">
								<p className="text-sm font-semibold text-slate-700">Source</p>
								<p className="mt-1 text-sm leading-6 text-slate-500">
									Locations are fetched from the dedicated PayTo map API.
								</p>
							</div>
							<div className="rounded-2xl bg-slate-50 p-4">
								<p className="text-sm font-semibold text-slate-700">Navigation</p>
								<p className="mt-1 text-sm leading-6 text-slate-500">
									Use the merchant list to focus the map or open directions.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
					<div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-5 py-4 sm:px-6">
						<div>
							<h2 className="text-xl font-semibold text-slate-900">Merchant map</h2>
							<p className="text-sm text-slate-500">
								Data source: <span className="font-medium">{API_URL}</span>
							</p>
						</div>

						<div className="flex flex-wrap gap-2">
							{userLocation && (
								<button
									type="button"
									onClick={focusUserLocation}
									className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700 transition hover:border-teal-300 hover:bg-teal-100"
								>
									<Navigation className="h-4 w-4" />
									My location
								</button>
							)}

							<button
								type="button"
								onClick={() => setRefreshNonce((current) => current + 1)}
								className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-teal-300 hover:text-teal-700"
							>
								<RefreshCcw className="h-4 w-4" />
								Refresh
							</button>
						</div>
					</div>

					<div className="relative">
						<div
							ref={mapContainerRef}
							className="h-[26rem] w-full bg-slate-100 sm:h-[34rem]"
						/>

						{loading && (
							<div className="absolute inset-0 flex items-center justify-center bg-white/70 backdrop-blur-sm">
								<div className="rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-lg">
									Loading locations...
								</div>
							</div>
						)}

						{error && (
							<div className="absolute inset-x-4 top-4 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700 shadow-lg sm:inset-x-auto sm:right-4 sm:max-w-sm">
								{error}
							</div>
						)}
					</div>

					<div className="border-t border-slate-200 bg-slate-50/70 px-5 py-5 sm:px-6">
						<div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
							<div className="space-y-1">
								<p className="text-lg font-semibold text-slate-900">
									Know a merchant that should be added?
								</p>
								<p className="text-sm leading-6 text-slate-500">
									Send the merchant details and supporting source link to the PayTo
									team. We prefill the email with the information needed for review.
								</p>
							</div>

							<a
								href={addMerchantMailto}
								className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
							>
								<MailPlus className="h-4 w-4" />
								Add PayTo merchant
							</a>
						</div>
					</div>
				</div>

				<div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
					<div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_22px_60px_rgba(15,23,42,0.06)]">
						<h2 className="text-2xl font-semibold text-slate-900">Selected merchant</h2>
						{selectedLocation ? (
							<div className="mt-5 space-y-4">
								<div>
									<p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-600">
										{selectedLocation.category ?? "Merchant"}
									</p>
									<h3 className="mt-2 text-2xl font-semibold text-slate-900">
										{selectedLocation.name}
									</h3>
								</div>

								<p className="text-sm leading-7 text-slate-600">
									{formatAddress(selectedLocation)}
								</p>

								<div className="flex flex-wrap gap-2">
									{selectedLocation.payment_methods.length > 0 ? (
										selectedLocation.payment_methods.map((method) => (
											<span
												key={method}
												className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700"
											>
												{method}
											</span>
										))
									) : (
										<span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
											Payment methods not listed yet
										</span>
									)}
								</div>

								<div className="grid gap-3 sm:grid-cols-2">
									<a
										href={buildDirectionsUrl(selectedLocation)}
										target="_blank"
										rel="noreferrer"
										className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
									>
										<Navigation className="h-4 w-4" />
										Get directions
									</a>
									<a
										href={selectedLocation.source_url}
										target="_blank"
										rel="noreferrer"
										className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-teal-300 hover:text-teal-700"
									>
										<MapIcon className="h-4 w-4" />
										View source
									</a>
								</div>

								<div className="rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-600">
									<p>
										<span className="font-semibold text-slate-900">Evidence:</span>{" "}
										{selectedLocation.source_text ?? "No evidence note provided."}
									</p>
									<p className="mt-2">
										<span className="font-semibold text-slate-900">Verified:</span>{" "}
										{selectedLocation.verified_at ?? "Not specified"}
									</p>
								</div>
							</div>
						) : (
							<p className="mt-5 text-sm leading-7 text-slate-500">
								Select a merchant from the list to preview it here.
							</p>
						)}
					</div>

					<div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_22px_60px_rgba(15,23,42,0.06)]">
						<div className="flex items-center justify-between gap-3">
							<div>
								<h2 className="text-2xl font-semibold text-slate-900">Locations</h2>
								<p className="text-sm text-slate-500">
									Click a merchant to center the map and open its marker.
								</p>
							</div>
							<p className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
								{locations.length} total
							</p>
						</div>

						<div className="mt-5 grid gap-4">
							{locations.map((location) => {
								const isActive = location.id === selectedLocationId;

								return (
									<div
										key={location.id}
										className={`rounded-[1.5rem] border p-4 transition ${
											isActive
												? "border-teal-300 bg-teal-50/70 shadow-[0_12px_30px_rgba(20,184,166,0.15)]"
												: "border-slate-200 bg-white hover:border-slate-300"
										}`}
									>
										<div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
											<div className="space-y-2">
												<div className="flex flex-wrap items-center gap-2">
													<h3 className="text-lg font-semibold text-slate-900">
														{location.name}
													</h3>
													{location.category && (
														<span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
															{location.category}
														</span>
													)}
												</div>
												<p className="text-sm leading-6 text-slate-600">
													{formatAddress(location)}
												</p>
												<div className="flex flex-wrap gap-2">
													{location.payment_methods.length > 0 ? (
														location.payment_methods.map((method) => (
															<span
																key={`${location.id}-${method}`}
																className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-teal-700 ring-1 ring-teal-100"
															>
																{method}
															</span>
														))
													) : (
														<span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-500">
															Payment methods pending
														</span>
													)}
												</div>
											</div>

											<div className="flex flex-col gap-2 sm:min-w-[150px]">
												<button
													type="button"
													onClick={() => focusLocation(location)}
													className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-700"
												>
													<MapPinned className="h-4 w-4" />
													Show on map
												</button>
												<a
													href={buildDirectionsUrl(location)}
													target="_blank"
													rel="noreferrer"
													className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-teal-300 hover:text-teal-700"
												>
													<Navigation className="h-4 w-4" />
													Route
												</a>
											</div>
										</div>
									</div>
								);
							})}

							{!loading && locations.length === 0 && !error && (
								<div className="rounded-[1.5rem] border border-dashed border-slate-300 bg-slate-50 p-6 text-sm leading-7 text-slate-500">
									No active merchant locations are available yet.
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

function createPopupContent(location: MerchantLocation): HTMLDivElement {
	const root = document.createElement("div");
	root.className = "payto-map-popup__content";

	const title = document.createElement("div");
	title.className = "payto-map-popup__title";
	title.textContent = location.name;

	const meta = document.createElement("div");
	meta.className = "payto-map-popup__meta";
	meta.textContent = formatAddress(location);

	root.append(title, meta);
	return root;
}

function formatAddress(location: MerchantLocation): string {
	const parts: string[] = [];
	const address = location.address?.trim();
	const city = location.city?.trim();
	const country = location.country?.trim();
	const normalizedAddress = address?.toLowerCase() ?? "";

	if (address) {
		parts.push(address);
	}

	if (city && !normalizedAddress.includes(city.toLowerCase())) {
		parts.push(city);
	}

	if (country && !normalizedAddress.includes(country.toLowerCase())) {
		parts.push(country);
	}

	return parts.join(", ");
}

function buildDirectionsUrl(location: MerchantLocation): string {
	const destination = `${location.lat},${location.lng}`;
	return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
}

async function loadMapLibreAssets(): Promise<MapLibreGlobal> {
	if (window.maplibregl) {
		return window.maplibregl;
	}

	ensureStylesheet(MAPLIBRE_CSS_URL, "payto-map-maplibre-css");
	await ensureScript(MAPLIBRE_JS_URL, "payto-map-maplibre-js");

	if (!window.maplibregl) {
		throw new Error("MapLibre global was not initialized");
	}

	return window.maplibregl;
}

function ensureStylesheet(href: string, id: string): void {
	if (document.getElementById(id)) {
		return;
	}

	const link = document.createElement("link");
	link.id = id;
	link.rel = "stylesheet";
	link.href = href;
	document.head.appendChild(link);
}

function ensureScript(src: string, id: string): Promise<void> {
	const existing = document.getElementById(id) as HTMLScriptElement | null;
	if (existing?.dataset.loaded === "true") {
		return Promise.resolve();
	}

	if (existing) {
		return new Promise((resolve, reject) => {
			existing.addEventListener("load", () => resolve(), { once: true });
			existing.addEventListener("error", () => reject(new Error(`Failed to load ${src}`)), {
				once: true,
			});
		});
	}

	return new Promise((resolve, reject) => {
		const script = document.createElement("script");
		script.id = id;
		script.src = src;
		script.async = true;
		script.onload = () => {
			script.dataset.loaded = "true";
			resolve();
		};
		script.onerror = () => reject(new Error(`Failed to load ${src}`));
		document.head.appendChild(script);
	});
}

function openMarkerPopup(marker: MapLibreMarker): void {
	const popup = marker.getPopup();
	if (!popup.isOpen()) {
		marker.togglePopup();
	}
}

function createMerchantMailtoHref(): string {
	const subject = "Merchant addition for PayTo map";
	const body = [
		"Please add this merchant to the PayTo merchant map.",
		"",
		"Merchant name:",
		"Full address:",
		"City:",
		"Country:",
		"Category / business type:",
		"Supported PayTo payment methods (example: ICAN/IBAN/BIC/UPI):",
		"Latitude / longitude:",
		"Plus code (optional):",
		"Contact email (optional):",
		"Contact phone (optional):",
		"",
		"Additional notes:",
	].join("\n");

	return `mailto:support@payto.onl?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default MapPage;
