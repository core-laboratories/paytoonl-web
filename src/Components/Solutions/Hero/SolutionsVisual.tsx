import React from "react";

const SolutionsVisual = () => (
	<div className="solutions-visual" role="img" aria-label="Animated globe showing offline payments in rural Africa, cross-border settlement in Europe, digital wallet access in Asia Pacific, and direct transfers in the Americas">
		<div className="solutions-visual-top"><span>PAYMENTS WITHOUT BORDERS</span><span>GLOBAL USE CASES</span></div>
		<div className="solutions-globe-stage">
			<svg className="solutions-globe-art" viewBox="0 0 650 470" aria-hidden="true">
				<defs>
					<radialGradient id="solutions-ocean" cx="35%" cy="30%" r="75%"><stop offset="0" stopColor="#286b83" /><stop offset=".6" stopColor="#17415e" /><stop offset="1" stopColor="#0b253f" /></radialGradient>
					<radialGradient id="solutions-ocean-light" cx="35%" cy="30%" r="75%"><stop offset="0" stopColor="#d8f9ed" /><stop offset=".62" stopColor="#a4d7d6" /><stop offset="1" stopColor="#6da9b5" /></radialGradient>
					<linearGradient id="solutions-land" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#6fc9c0" /><stop offset="1" stopColor="#438aa9" /></linearGradient>
					<clipPath id="solutions-globe-clip"><circle cx="325" cy="235" r="170" /></clipPath>
				</defs>
				<circle className="solutions-globe-halo" cx="325" cy="235" r="207" />
				<circle className="solutions-globe-rim" cx="325" cy="235" r="170" fill="url(#solutions-ocean)" />
				<g clipPath="url(#solutions-globe-clip)">
					<g className="solutions-globe-grid"><ellipse cx="325" cy="235" rx="83" ry="170" /><ellipse cx="325" cy="235" rx="133" ry="170" /><path d="M155 235h340 M169 170c80 35 232 35 312 0 M169 300c80-35 232-35 312 0 M212 112c62 50 164 50 226 0 M212 358c62-50 164-50 226 0" /></g>
					<g className="solutions-globe-land" fill="url(#solutions-land)">
						<path d="M157 127l24-20 30-3 18-18 29 8 19 20 27 8 3 19-18 12-10 28-19 9-11 24-18-3-15-22-24-4-13-22-20-8z M207 193l19 9 11 15-8 9-19-7z" />
						<path d="M249 220l25-8 23 11 20 23-5 32-12 30-9 35-18 27-11-11 3-27-13-24-2-26-12-22z" />
						<path d="M330 117l22-15 24 4 19-13 29 9 15 18-12 18-25-2-12 19-26-2-18 13-19-13 3-19z" />
						<path d="M337 167l34-14 29 10 20 20-8 34-12 20-12 37-22 23-20-11-4-30-19-22 2-31z" />
						<path d="M395 116l28-19 34 1 29 18 18 25-11 18-30-8-22 17 16 20-8 20-32-9-18-24-10-26z M451 212l26 14 14 25-15 16-19-18z" />
						<path d="M434 300l28-8 24 16-7 20-33 3-18-14z" />
					</g>
					<circle className="solutions-globe-sheen" cx="325" cy="235" r="170" />
				</g>
				<g className="solutions-globe-routes"><path d="M239 157 Q325 101 376 146" /><path d="M376 146 Q430 173 374 229" /><path d="M374 229 Q339 302 277 290" /><path d="M374 229 Q428 188 453 205" /></g>
				<g className="solutions-globe-pins"><g transform="translate(239 157)"><circle r="17" /><circle r="5" /></g><g transform="translate(376 146)"><circle r="17" /><circle r="5" /></g><g transform="translate(374 229)"><circle r="17" /><circle r="5" /></g><g transform="translate(453 205)"><circle r="17" /><circle r="5" /></g><g transform="translate(277 290)"><circle r="17" /><circle r="5" /></g></g>
			</svg>
			<div className="solutions-globe-label solutions-globe-label-americas"><strong>Americas</strong><span>Direct transfers</span></div>
			<div className="solutions-globe-label solutions-globe-label-europe"><strong>Europe</strong><span>Cross-border settlement</span></div>
			<div className="solutions-globe-label solutions-globe-label-africa"><strong>Rural Africa</strong><span>Offline payments</span></div>
			<div className="solutions-globe-label solutions-globe-label-asia"><strong>Asia Pacific</strong><span>Digital wallet access</span></div>
		</div>
		<div className="solutions-visual-bottom"><span>LOCAL ACCESS</span><i /><span>GLOBAL REACH</span></div>
	</div>
);

export default SolutionsVisual;
