import React, { useEffect, useMemo, useState } from "react";
import { ContactRound, Globe2, QrCode, X } from "lucide-react";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import QRCode from "qrcode";
import { countries } from "txms.js/numbers";

type NumberOption = {
	id: string;
	countryCode: string;
	countryName: string;
	number: string;
};

const getFlag = (countryCode: string) =>
	countryCode
		.toUpperCase()
		.split("")
		.map((letter) => String.fromCodePoint(127397 + letter.charCodeAt(0)))
		.join("");

const getCountryName = (countryCode: string) => {
	if (countryCode === "global") {
		return "Global";
	}

	try {
		return new Intl.DisplayNames(["en"], { type: "region" }).of(countryCode.toUpperCase()) || countryCode.toUpperCase();
	} catch {
		return countryCode.toUpperCase();
	}
};

const formatNumber = (number: string) => {
	const parsedNumber = parsePhoneNumberFromString(number);
	return parsedNumber?.formatInternational() || number;
};

type TxMSNumbersProps = {
	network?: "mainnet" | "testnet";
};

const createVCard = (option: NumberOption, network: "mainnet" | "testnet") => {
	const suffix = option.countryCode === "global" ? "Global" : option.countryCode.toUpperCase();
	const name = network === "testnet" ? `TxMS Devín - ${suffix}` : `TxMS - ${suffix}`;

	return [
		"BEGIN:VCARD",
		"VERSION:3.0",
		`FN:${name}`,
		`N:${name};;;;`,
		`TEL;TYPE=CELL:${option.number}`,
		"URL:https://txms.info/",
		"END:VCARD",
	].join("\r\n");
};

const TxMSNumbers = ({ network = "mainnet" }: TxMSNumbersProps) => {
	const options = useMemo<NumberOption[]>(() => {
		const numberPool = countries[network === "testnet" ? "xab" : "xcb"];

		return Object.entries(numberPool)
			.sort(([first], [second]) => {
				if (first === "global") return -1;
				if (second === "global") return 1;
				return getCountryName(first).localeCompare(getCountryName(second));
			})
			.flatMap(([countryCode, numbers]) =>
				numbers.map((number, index) => ({
					id: `${countryCode}-${index}`,
					countryCode,
					countryName: getCountryName(countryCode),
					number,
				})),
			);
	}, [network]);
	const [selectedId, setSelectedId] = useState(options[0]?.id || "");
	const [isQrOpen, setIsQrOpen] = useState(false);
	const [qrCode, setQrCode] = useState("");
	const selectedOption = options.find(({ id }) => id === selectedId) || options[0];

	useEffect(() => {
		if (!isQrOpen || !selectedOption) return;

		let isCurrent = true;
		QRCode.toDataURL(createVCard(selectedOption, network), {
			errorCorrectionLevel: "M",
			margin: 2,
			width: 320,
			color: {
				dark: "#111827",
				light: "#ffffff",
			},
		}).then((dataUrl) => {
			if (isCurrent) setQrCode(dataUrl);
		});

		return () => {
			isCurrent = false;
		};
	}, [isQrOpen, network, selectedOption]);

	useEffect(() => {
		if (!isQrOpen) return;

		const closeOnEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") setIsQrOpen(false);
		};
		document.addEventListener("keydown", closeOnEscape);
		return () => document.removeEventListener("keydown", closeOnEscape);
	}, [isQrOpen]);

	if (!selectedOption) {
		return null;
	}

	const contactSuffix = selectedOption.countryCode === "global"
		? "Global"
		: selectedOption.countryCode.toUpperCase();
	const contactName = network === "testnet"
		? `TxMS Devín - ${contactSuffix}`
		: `TxMS - ${contactSuffix}`;
	const isTestnet = network === "testnet";

	const downloadContact = () => {
		const contact = new Blob([createVCard(selectedOption, network)], { type: "text/vcard;charset=utf-8" });
		const contactUrl = URL.createObjectURL(contact);
		const link = document.createElement("a");
		link.href = contactUrl;
		link.download = `${contactName.replaceAll(" ", "-").toLowerCase()}.vcf`;
		document.body.appendChild(link);
		link.click();
		link.remove();
		URL.revokeObjectURL(contactUrl);
	};

	return (
		<>
			<div className={`txms-number-card ${isTestnet ? "txms-number-card--testnet" : "txms-number-card--mainnet"}`}>
				<div className="txms-number-body">
					<div className="txms-number-header">
						<div className="txms-number-icon">
							{selectedOption.countryCode === "global" ? (
								<Globe2 className="h-5 w-5" aria-hidden="true" />
							) : (
								<span className="text-xl" aria-hidden="true">{getFlag(selectedOption.countryCode)}</span>
							)}
						</div>
						<div><p className="txms-number-network">{isTestnet ? "Testnet “Devín”" : "Core Mainnet"}</p><h3>{selectedOption.countryName} TxMS number</h3></div>
						<span className="txms-number-status">{isTestnet ? "Test network" : "Live network"}</span>
					</div>

					<label htmlFor={`txms-number-${network}`} className="txms-number-label">
						Choose a number
					</label>
					<select
						id={`txms-number-${network}`}
						value={selectedId}
						onChange={(event) => setSelectedId(event.target.value)}
						className="txms-number-select"
					>
						{options.map((option) => (
							<option key={option.id} value={option.id}>
								{option.countryCode === "global" ? "🌐" : getFlag(option.countryCode)}{" "}
								{option.countryName} · {formatNumber(option.number)}
							</option>
						))}
					</select>

					<div className="txms-number-current"><span>SELECTED TXMS NUMBER</span><a href={`tel:${selectedOption.number}`}>{formatNumber(selectedOption.number)}</a></div>

					<div className="txms-number-actions">
						<button
							type="button"
							onClick={downloadContact}
							className="txms-number-primary"
						>
							<ContactRound className="h-5 w-5" aria-hidden="true" />
							Add to contacts
						</button>
						<button
							type="button"
							onClick={() => {
								setQrCode("");
								setIsQrOpen(true);
							}}
							className="txms-number-secondary"
						>
							<QrCode className="h-5 w-5" aria-hidden="true" />
							Show contact QR
						</button>
					</div>
				</div>
			</div>

			{isQrOpen && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/60 p-4 backdrop-blur-sm"
					role="presentation"
					onMouseDown={(event) => {
						if (event.target === event.currentTarget) setIsQrOpen(false);
					}}
				>
					<div
						role="dialog"
						aria-modal="true"
						aria-labelledby={`txms-qr-title-${network}`}
					className="txms-qr-dialog relative w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-2xl"
					>
						<button
							type="button"
							onClick={() => setIsQrOpen(false)}
							aria-label="Close QR code"
							className="absolute right-4 top-4 rounded-full p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
						>
							<X className="h-5 w-5" aria-hidden="true" />
						</button>
						<div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-indigo-50 text-indigo-500">
							<QrCode className="h-6 w-6" aria-hidden="true" />
						</div>
						<h3 id={`txms-qr-title-${network}`} className="text-xl font-bold text-gray-800">
							Scan to add contact
						</h3>
						<p className="mt-2 text-sm text-gray-500">
							Scan this QR code with your phone to add {contactName}.
						</p>
						<div className="mx-auto mt-5 flex aspect-square w-full max-w-64 items-center justify-center rounded-xl border border-gray-100 bg-white p-2">
							{qrCode ? (
								<img src={qrCode} alt={`QR code for ${contactName}`} className="h-full w-full" />
							) : (
								<span className="text-sm text-gray-400">Generating QR code…</span>
							)}
						</div>
						<p className="mt-4 font-semibold text-gray-800">{formatNumber(selectedOption.number)}</p>
					</div>
				</div>
			)}
		</>
	);
};

export default TxMSNumbers;
