import React from "react";

type PaymentNetworkProps = {
	variant: "home" | "solutions";
};

const PaymentNetwork = ({ variant }: PaymentNetworkProps) => {
	const id = `network-${variant}`;
	return (
		<div className="payment-network" role="img" aria-label="Animated diagram connecting PayTo with wallets, providers, merchants, and settlement systems">
			<div className="payment-network-top"><span>PAYMENT NETWORK</span><span>FIG. 01 / PAYTO</span></div>
			<svg viewBox="0 0 600 470" aria-hidden="true" focusable="false">
				<defs>
					<radialGradient id={`${id}-halo`}><stop stopColor="#5eead4" stopOpacity=".32" /><stop offset="1" stopColor="#5eead4" stopOpacity="0" /></radialGradient>
					<linearGradient id={`${id}-glass`} x1="0" x2="1" y1="0" y2="1"><stop stopColor="#ffffff" stopOpacity=".24" /><stop offset="1" stopColor="#ffffff" stopOpacity=".06" /></linearGradient>
					<linearGradient id={`${id}-core`} x1="0" x2="1" y1="0" y2="1"><stop stopColor="#48c59c" /><stop offset="1" stopColor="#3372c4" /></linearGradient>
				</defs>
				<circle cx="300" cy="235" r="200" fill={`url(#${id}-halo)`} />
				<circle className="network-orbit" cx="300" cy="235" r="174" />
				<circle className="network-orbit network-orbit-inner" cx="300" cy="235" r="122" />
				<path className="network-link" d="M300 235 L140 108 M300 235 L460 108 M300 235 L140 362 M300 235 L460 362" />
				<g className="network-packets">
					<circle r="5" fill="#7df5cb"><animateMotion dur="4s" repeatCount="indefinite" path="M140 108 L300 235 L460 362" /></circle>
					<circle r="5" fill="#99c8ff"><animateMotion dur="4.8s" begin="-2s" repeatCount="indefinite" path="M460 108 L300 235 L140 362" /></circle>
				</g>
				<g className="network-node" transform="translate(48 64)"><rect width="184" height="88" rx="18" fill={`url(#${id}-glass)`} /><circle cx="33" cy="33" r="13" fill="#79e7c2" /><text x="57" y="38">WALLET</text><text className="network-node-detail" x="22" y="68">01 / initiate</text></g>
				<g className="network-node" transform="translate(368 64)"><rect width="184" height="88" rx="18" fill={`url(#${id}-glass)`} /><circle cx="33" cy="33" r="13" fill="#8dbdff" /><text x="57" y="38">PROVIDER</text><text className="network-node-detail" x="22" y="68">02 / route</text></g>
				<g className="network-node" transform="translate(48 318)"><rect width="184" height="88" rx="18" fill={`url(#${id}-glass)`} /><circle cx="33" cy="33" r="13" fill="#8dbdff" /><text x="57" y="38">MERCHANT</text><text className="network-node-detail" x="22" y="68">03 / receive</text></g>
				<g className="network-node" transform="translate(368 318)"><rect width="184" height="88" rx="18" fill={`url(#${id}-glass)`} /><circle cx="33" cy="33" r="13" fill="#79e7c2" /><text x="57" y="38">SETTLEMENT</text><text className="network-node-detail" x="22" y="68">04 / complete</text></g>
				<g className="network-core"><circle cx="300" cy="235" r="77" fill={`url(#${id}-core)`} /><circle cx="300" cy="235" r="68" fill="#132a40" fillOpacity=".8" /><text x="300" y="230" textAnchor="middle">PayTo</text><text className="network-core-detail" x="300" y="253" textAnchor="middle">OPEN PROTOCOL</text></g>
			</svg>
			<div className="payment-network-bottom"><span>INTEROPERABLE BY DESIGN</span><span>CONNECTED</span></div>
		</div>
	);
};

export default PaymentNetwork;
