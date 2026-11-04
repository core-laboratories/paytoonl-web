import React from "react";
import { ArrowRight, Check, ContactRound, Globe2, Palette, ScanLine, ShieldCheck, Smartphone, WalletCards } from "lucide-react";

const steps = [
	{ number: "01", icon: ContactRound, title: "Present your destination", description: "Put your payment identity in a recognizable pass with your name, branding, and a scannable code." },
	{ number: "02", icon: ScanLine, title: "Let people scan or save it", description: "Share the pass on screen or add it to a supported mobile wallet, so the details are easy to find again." },
	{ number: "03", icon: ShieldCheck, title: "Pay in a compatible app", description: "The payer reviews the destination and authorizes the transfer in a payment app. The pass itself does not move funds." },
];

const benefits = [
	{ icon: WalletCards, title: "Familiar by design", description: "A pass puts payment details in a format people already know, with a clear name and visual identity." },
	{ icon: Palette, title: "Make it yours", description: "Choose a card color, hero image, and supported barcode format to suit your brand and use case." },
	{ icon: Globe2, title: "Ready to share", description: "Display your payment destination in person or save a supported pass to Apple Wallet or Google Wallet." },
];

const PayPassVisual = () => (
	<div className="paypass-visual" role="img" aria-label="Illustration of a branded payment pass with a CORE ID and scannable payment code">
		<div className="paypass-visual-orbit paypass-visual-orbit-one" />
		<div className="paypass-visual-orbit paypass-visual-orbit-two" />
		<div className="paypass-preview">
			<div className="paypass-preview-top"><span className="paypass-preview-symbol">P</span><span>PAYMENT PASS</span><Smartphone size={18} aria-hidden="true" /></div>
			<div className="paypass-preview-identity"><small>YOUR PAYMENT IDENTITY</small><strong>Ready when they are.</strong><span>CORE ID · XCB</span></div>
			<div className="paypass-preview-code"><ScanLine size={68} strokeWidth={1.2} aria-hidden="true" /><span>Scan to open payment details</span></div>
			<div className="paypass-preview-bottom"><span>PAYPASS</span><span>YOUR BRAND. YOUR DESTINATION.</span></div>
		</div>
		<span className="paypass-visual-caption">Illustrative pass preview</span>
	</div>
);

const PayPass = () => (
	<section className="paypass-page solution-detail container mx-auto flex flex-col">
		<div className="paypass-hero">
			<div className="paypass-hero-copy">
				<span className="section-eyebrow">PAYMENT DETAILS, BEAUTIFULLY PRESENTED</span>
				<h1>PayPass</h1>
				<p className="paypass-lead">Give your payment identity a place in their wallet.</p>
				<p className="paypass-support">PayPass turns a payment destination into a branded, scannable pass. People can find your details, recognize who they are paying, and continue in a compatible payment app.</p>
				<a className="paypass-button" href="https://payto.money?pass=1" target="_blank" rel="noopener noreferrer">Create a PayPass <ArrowRight size={18} aria-hidden="true" /></a>
			</div>
			<PayPassVisual />
		</div>

		<section className="paypass-section" id="how-paypass-works">
			<div className="paypass-section-heading"><span className="section-eyebrow">A BETTER FIRST IMPRESSION</span><h2>From a payment detail to a confident handoff.</h2><p>Make the destination easy to recognize and easy to use, while keeping payment authorization where it belongs.</p></div>
			<div className="paypass-steps">{steps.map(({ number, icon: Icon, title, description }) => <article className="paypass-step" key={number}><span className="paypass-step-number">{number}</span><span className="paypass-icon"><Icon size={24} aria-hidden="true" /></span><h3>{title}</h3><p>{description}</p></article>)}</div>
		</section>

		<section className="paypass-story">
			<div className="paypass-story-copy"><span className="section-eyebrow">MADE TO BE RECOGNIZED</span><h2>More than an address on a screen.</h2><p>A payment destination works better when the person receiving it can tell who it belongs to. PayPass brings the name, visual identity, and scannable details together in one place.</p><div className="paypass-story-note"><Check size={20} aria-hidden="true" /><span>Keep your payment identity close at hand, in person or in a supported mobile wallet.</span></div></div>
			<div className="paypass-benefits">{benefits.map(({ icon: Icon, title, description }) => <article className="paypass-benefit" key={title}><span className="paypass-icon"><Icon size={22} aria-hidden="true" /></span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div>
		</section>

		<section className="paypass-wallets"><div><span className="section-eyebrow">WHERE PEOPLE ALREADY LOOK</span><h2>A pass they can keep. A payment they can review.</h2><p>Supported passes can be saved to Apple Wallet or Google Wallet. The card remains a convenient way to show a destination; a payment app handles the actual transfer.</p><a className="paypass-text-link" href="https://payto.money?pass=1" target="_blank" rel="noopener noreferrer">Generate your pass <ArrowRight size={18} aria-hidden="true" /></a></div><div className="paypass-wallet-stack"><div className="paypass-wallet-layer paypass-wallet-layer-back" /><div className="paypass-wallet-layer paypass-wallet-layer-front"><WalletCards size={34} aria-hidden="true" /><strong>Your details,<br />at hand.</strong><span>SCAN · SAVE · SHARE</span></div></div></section>

		<div className="paypass-clarity"><ShieldCheck size={24} aria-hidden="true" /><p><strong>Clear at every step.</strong> A pass displays payment information; it does not authorize, send, or confirm a payment. Recipients should review the destination and amount before approving a transfer in their payment app.</p></div>
	</section>
);

export default PayPass;
