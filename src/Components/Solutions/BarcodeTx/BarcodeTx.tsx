import React from "react";
import { ArrowRight, Camera, CheckCheck, LockKeyhole, QrCode, RadioTower, ScanLine, ShieldCheck, WifiOff } from "lucide-react";

const steps = [
	{
		number: "01",
		icon: LockKeyhole,
		title: "Sign on the sending device",
		description: "Create and sign the transaction before transfer. The device holding the signing keys can remain disconnected from the internet."
	},
	{
		number: "02",
		icon: QrCode,
		title: "Show an animated QR sequence",
		description: "BarcodeTx splits the signed data across repeating QR frames. The sequence keeps running so a scanner can recover frames it missed."
	},
	{
		number: "03",
		icon: Camera,
		title: "Scan, verify, and forward",
		description: "A receiving device reconstructs the complete transaction, checks its integrity, and can explicitly forward supported transactions."
	}
];

const benefits = [
	{
		icon: WifiOff,
		title: "An air-gapped handoff",
		description: "Move signed transaction data optically between devices without a cable, Wi-Fi, Bluetooth, or a direct network connection."
	},
	{
		icon: ScanLine,
		title: "Resilient scanning",
		description: "Repeating frames and error checks help the receiving device recover a complete transfer even when some frames are missed or scanned out of order."
	},
	{
		icon: ShieldCheck,
		title: "Validation before forwarding",
		description: "The receiver checks the reconstructed data before offering to forward it. The transaction signature remains the source of authorization."
	}
];

const BarcodeTx = () => (
	<div className="barcodetx-page solution-detail">
		<section className="barcodetx-hero container mx-auto px-4 lg:px-0">
			<div className="barcodetx-hero-copy">
				<span className="barcodetx-eyebrow"><QrCode size={16} aria-hidden="true" /> Optical transaction transfer</span>
				<h1>BarcodeTx</h1>
				<p className="barcodetx-lead">Move a signed transaction from one device to another through an animated QR sequence, even when the signing device is air-gapped.</p>
				<p className="barcodetx-support">The receiving device scans the sequence, verifies the complete data, and can forward a supported transaction when a network connection is available.</p>
				<a className="barcodetx-button" href="/solutions/barcodetx#how-it-works">See how it works <ArrowRight size={18} aria-hidden="true" /></a>
			</div>
			<div className="barcodetx-demo" role="img" aria-label="An air-gapped device displays animated QR frames for a second device to scan and forward">
				<div className="barcodetx-demo-device">
					<span className="barcodetx-demo-caption"><WifiOff size={14} /> OFFLINE DEVICE</span>
					<div className="barcodetx-qr"><QrCode size={116} strokeWidth={1.35} aria-hidden="true" /></div>
					<span className="barcodetx-demo-status">Signed transaction ready</span>
				</div>
				<div className="barcodetx-demo-transfer"><span>AIR GAP</span><i /><ArrowRight size={24} aria-hidden="true" /></div>
				<div className="barcodetx-demo-device barcodetx-demo-receiver">
					<span className="barcodetx-demo-caption"><RadioTower size={14} /> RECEIVING DEVICE</span>
					<div className="barcodetx-scan"><ScanLine size={64} strokeWidth={1.2} aria-hidden="true" /><span>Frames received</span><b>✓</b></div>
					<span className="barcodetx-demo-status">Verify, then forward</span>
				</div>
			</div>
		</section>

		<section id="how-it-works" className="barcodetx-section container mx-auto px-4 lg:px-0">
			<div className="barcodetx-section-heading"><span className="barcodetx-eyebrow">The flow</span><h2>From signature to scan</h2><p>BarcodeTx carries transaction data across the gap. Signing and network submission happen as separate, deliberate steps.</p></div>
			<div className="barcodetx-steps">
				{steps.map(({ number, icon: Icon, title, description }) => (
					<div className="barcodetx-card" key={number}>
						<div className="barcodetx-card-top"><span className="barcodetx-icon"><Icon size={25} aria-hidden="true" /></span><span className="barcodetx-number">{number}</span></div>
						<h3>{title}</h3><p>{description}</p>
					</div>
				))}
			</div>
		</section>

		<section className="barcodetx-section container mx-auto px-4 lg:px-0">
			<div className="barcodetx-section-heading"><span className="barcodetx-eyebrow">Built for offline handoffs</span><h2>A visual bridge between devices</h2></div>
			<div className="barcodetx-benefits">
				{benefits.map(({ icon: Icon, title, description }) => (
					<div className="barcodetx-benefit" key={title}><span className="barcodetx-icon"><Icon size={23} aria-hidden="true" /></span><div><h3>{title}</h3><p>{description}</p></div></div>
				))}
			</div>
			<div className="barcodetx-note">
				<CheckCheck size={27} aria-hidden="true" />
				<div><h2>Clear transfer, clear status</h2><p>QR frames are visible and do not encrypt the transaction. A completed scan means the data was received and checked; blockchain confirmation comes only after a supported transaction is forwarded and accepted by the network.</p></div>
			</div>
		</section>
	</div>
);

export default BarcodeTx;
