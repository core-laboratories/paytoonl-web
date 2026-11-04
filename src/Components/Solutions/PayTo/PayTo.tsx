import React from "react";
import data from "../../../data/paytoStandarts.json" with { type: "json" };
import { ArrowRight, Check, CircleCheck, Code2, Copy, Globe2, Link2, QrCode, ScanLine, Send, ShieldCheck, Smartphone } from "lucide-react";

const steps = [
	{ number: "01", icon: Link2, title: "Create a request", description: "Choose a payment method and destination. Where supported, add details such as an amount." },
	{ number: "02", icon: Send, title: "Share it anywhere", description: "Send the link, place it behind a QR code, or use it in a compatible website or app." },
	{ number: "03", icon: ShieldCheck, title: "Let the payer review", description: "A compatible payment app reads the details and presents them for review before the payer authorizes a transfer." },
];

const uses = [
	{ icon: QrCode, title: "On a counter", description: "Put a payment request behind a scannable code for an in-person handoff." },
	{ icon: Globe2, title: "On a website", description: "Give a checkout or donation page a clear route into a compatible payment app." },
	{ icon: Smartphone, title: "In a conversation", description: "Share a payment request in a message without asking someone to retype the destination." },
];

const PayToVisual = () => (
	<div className="payto-visual" role="img" aria-label="Illustration of a PayTo link carrying payment details into a mobile payment review screen">
		<div className="payto-visual-top"><span>STRUCTURED PAYMENT REQUEST</span><span>PAYTO / 01</span></div>
		<div className="payto-visual-stage">
			<div className="payto-visual-link"><span className="payto-visual-link-icon"><Link2 size={26} aria-hidden="true" /></span><small>ONE SHAREABLE LINK</small><strong>payto://xcb/CB…</strong><span className="payto-visual-link-detail"><CircleCheck size={15} aria-hidden="true" /> Destination + details</span></div>
			<div className="payto-visual-bridge" aria-hidden="true"><span /><ArrowRight size={27} /></div>
			<div className="payto-visual-phone"><span className="payto-visual-phone-top">PAYMENT PREVIEW</span><span className="payto-visual-phone-icon"><ScanLine size={30} aria-hidden="true" /></span><strong>Review before paying</strong><small>Destination · amount · method</small><span className="payto-visual-phone-button">Continue</span></div>
		</div>
		<div className="payto-visual-bottom"><span>CREATE · SHARE · REVIEW</span><span>PAYMENT REQUIRES APPROVAL</span></div>
	</div>
);

const PayTo = () => (
	<section className="payto-page solution-detail container mx-auto flex flex-col">
		<div className="payto-hero">
			<div className="payto-hero-copy"><span className="section-eyebrow">A CLEARER WAY TO ASK FOR PAYMENT</span><h1>PayTo</h1><p className="payto-lead">One link. The right payment details.</p><p className="payto-support">Turn a destination into a structured request that people can open, scan, and review in a compatible payment app. Less copying. A smoother path from request to payment.</p><a className="payto-button" href="https://payto.money" target="_blank" rel="noopener noreferrer">Create a PayTo link <ArrowRight size={18} aria-hidden="true" /></a></div>
			<PayToVisual />
		</div>

		<section className="payto-section" id="payto-flow"><div className="payto-section-heading"><span className="section-eyebrow">FROM REQUEST TO REVIEW</span><h2>Make every handoff easier.</h2><p>PayTo packages the information a payer needs in a link that compatible services can understand.</p></div><div className="payto-steps">{steps.map(({ number, icon: Icon, title, description }) => <article className="payto-step" key={number}><span className="payto-step-number">{number}</span><span className="payto-icon"><Icon size={24} aria-hidden="true" /></span><h3>{title}</h3><p>{description}</p></article>)}</div></section>

		<section className="payto-story"><div className="payto-story-copy"><span className="section-eyebrow">BUILT FOR THE MOMENT OF PAYMENT</span><h2>Useful wherever a payment begins.</h2><p>A request can travel as a link or a code, then hand its details to a compatible app. The payer gets a chance to check the destination and amount before continuing.</p><div className="payto-story-note"><Check size={20} aria-hidden="true" /><span>Payment details travel with the request; authorization stays with the payer.</span></div></div><div className="payto-use-grid">{uses.map(({ icon: Icon, title, description }) => <article className="payto-use" key={title}><span className="payto-icon"><Icon size={22} aria-hidden="true" /></span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></section>

		<section className="payto-formats"><div className="payto-section-heading"><span className="section-eyebrow">ONE WAY TO PRESENT MANY DESTINATIONS</span><h2>Explore payment identifiers.</h2><p>PayTo can describe different payment methods and destinations. Open the generator to explore each option; support depends on the receiving app and provider.</p></div><div className="payto-format-grid">{data.map((item) => <a className="payto-format" key={item.title} href={item.link.href} target={item.link.href.startsWith("http") ? "_blank" : undefined} rel={item.link.href.startsWith("http") ? "noopener noreferrer" : undefined}><span className="payto-format-icon">{item.title === "Want more?" ? <Copy size={21} aria-hidden="true" /> : <Code2 size={21} aria-hidden="true" />}</span><span className="payto-format-copy"><strong>{item.title}</strong>{item.text && <small>{item.text}</small>}</span><ArrowRight className="payto-format-arrow" size={18} aria-hidden="true" /></a>)}</div></section>

		<div className="payto-closing"><div><span className="section-eyebrow">READY TO GET STARTED?</span><h2>Give the next payment a clearer beginning.</h2><p>Create a request and share it through the channel that fits your customers.</p></div><a className="payto-button" href="https://payto.money" target="_blank" rel="noopener noreferrer">Generate PayTo <ArrowRight size={18} aria-hidden="true" /></a></div>
		<div className="payto-clarity"><ShieldCheck size={24} aria-hidden="true" /><p><strong>Clear by design.</strong> A PayTo link describes a payment request. Opening or sharing one does not send money or confirm a transaction; the receiving app must support the method, and the payer must review and authorize the transfer.</p></div>
	</section>
);

export default PayTo;
