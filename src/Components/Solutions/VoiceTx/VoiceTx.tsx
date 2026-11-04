import React from "react";
import { ArrowRight, CircleCheck, Globe2, LockKeyhole, Mic2, RotateCcw, Send, ShieldCheck, Smartphone, Volume2, WifiOff } from "lucide-react";

const steps = [
	{ number: "01", icon: LockKeyhole, title: "Prepare and sign", description: "Review the payment and sign it on the sending device. The audio carries an already signed transaction." },
	{ number: "02", icon: Volume2, title: "Play the transfer", description: "VoiceTx turns the signed data into audible tones and plays them through the device speaker." },
	{ number: "03", icon: Mic2, title: "Listen and reconstruct", description: "A nearby receiver captures the sound, rebuilds the complete payload, and checks it for transmission errors." },
	{ number: "04", icon: Send, title: "Choose how to forward", description: "After a complete capture, the receiver can explicitly forward a supported transaction. Network confirmation comes later." },
];

const benefits = [
	{ icon: WifiOff, title: "No direct data link", description: "The signing device can stay disconnected while sound carries the signed data to a nearby receiver." },
	{ icon: ShieldCheck, title: "Complete before forwarding", description: "Packet and payload checks help reject incomplete or damaged captures instead of forwarding partial data." },
	{ icon: RotateCcw, title: "Replay when needed", description: "If the receiver misses the transfer, the same prepared audio can play again from the beginning." },
];

const waveformHeights = [24, 42, 64, 38, 82, 53, 34, 74, 48, 90, 59, 32, 72, 46, 86, 51, 30, 67, 42, 78, 36];

const VoiceTxVisual = () => (
	<div className="voicetx-visual" role="img" aria-label="Illustration of a disconnected sending device playing transaction data as sound to a listening receiver">
		<div className="voicetx-visual-top"><span>ACOUSTIC HANDOFF</span><span>VOICE TX / 01</span></div>
		<div className="voicetx-visual-stage">
			<div className="voicetx-visual-device"><span className="voicetx-visual-device-icon"><Volume2 size={27} aria-hidden="true" /></span><strong>Send</strong><small>Signed transaction</small></div>
			<div className="voicetx-visual-sound" aria-hidden="true">{waveformHeights.map((height, index) => <i key={index} style={{ height: `${height}%`, animationDelay: `${index * -90}ms` }} />)}</div>
			<div className="voicetx-visual-device"><span className="voicetx-visual-device-icon"><Mic2 size={27} aria-hidden="true" /></span><strong>Receive</strong><small>Checked payload</small></div>
		</div>
		<div className="voicetx-visual-bottom"><span>NO DIRECT DATA LINK</span><span>LISTEN · CHECK · FORWARD</span></div>
	</div>
);

const VoiceTx = () => (
	<section className="voicetx-page solution-detail container mx-auto flex flex-col gap-12 px-4 lg:px-0">
		<div className="voicetx-hero flex flex-col justify-between gap-10 lg:flex-row">
			<div className="voicetx-hero-copy flex flex-col justify-center sm:text-center lg:w-5/12 lg:text-left">
				<span className="section-eyebrow">ACOUSTIC TRANSACTION TRANSFER</span>
				<h1 className="mb-6 text-4xl font-bold text-black sm:text-5xl md:text-6xl">VoiceTx</h1>
				<p className="voicetx-lead">Move a signed transaction between nearby devices using sound.</p>
				<p className="voicetx-support">One device plays the prepared audio. A second device listens, checks the complete message, and can forward it when a delivery channel is available.</p>
				<a className="voicetx-button" href="#voice-flow">Explore the flow <ArrowRight size={18} aria-hidden="true" /></a>
			</div>
			<VoiceTxVisual />
		</div>

		<section id="voice-flow" className="voicetx-section">
			<div className="voicetx-section-heading"><span className="section-eyebrow">HOW IT WORKS</span><h2>From signature to sound to network.</h2><p>VoiceTx separates signing, acoustic delivery, and network submission into deliberate steps.</p></div>
			<div className="voicetx-steps">
				{steps.map(({ number, icon: Icon, title, description }) => (
					<article className="voicetx-step" key={number}><span className="voicetx-step-number">{number}</span><span className="voicetx-step-icon"><Icon size={24} aria-hidden="true" /></span><h3>{title}</h3><p>{description}</p></article>
				))}
			</div>
		</section>

		<section className="voicetx-section">
			<div className="voicetx-section-heading"><span className="section-eyebrow">BUILT FOR HANDOFFS</span><h2>Useful when devices cannot connect directly.</h2></div>
			<div className="voicetx-benefits">
				{benefits.map(({ icon: Icon, title, description }) => (
					<article className="voicetx-benefit" key={title}><span className="voicetx-benefit-icon"><Icon size={23} aria-hidden="true" /></span><div><h3>{title}</h3><p>{description}</p></div></article>
				))}
			</div>
		</section>

		<section className="voicetx-forwarding">
			<div><span className="section-eyebrow">AFTER CAPTURE</span><h2>The receiver stays in control.</h2><p>A completed audio transfer gives the receiving device a checked, signed payload. Forwarding is a separate choice.</p></div>
			<div className="voicetx-forwarding-options">
				<article><span className="voicetx-benefit-icon"><Globe2 size={22} aria-hidden="true" /></span><div><h3>Forward over the Internet</h3><p>Submit supported transactions through a network connection and receive a transaction ID after submission.</p></div></article>
				<article><span className="voicetx-benefit-icon"><Smartphone size={22} aria-hidden="true" /></span><div><h3>Forward through TxMS</h3><p>For a single transaction, an available SMS channel can provide another delivery route.</p></div></article>
			</div>
		</section>

		<div className="voicetx-clarity"><span className="voicetx-clarity-icon"><CircleCheck size={27} aria-hidden="true" /></span><div><h2>Clear status at every step</h2><p>Audio is audible and does not encrypt the transaction. A successful capture means the data arrived intact; the embedded signature supplies authorization, and the blockchain confirms the transaction only after forwarding and acceptance.</p></div></div>
	</section>
);

export default VoiceTx;
