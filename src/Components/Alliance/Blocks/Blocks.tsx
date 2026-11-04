import React from "react";
import { Building2, Coins, Landmark, ShieldCheck, Store, WalletCards } from "lucide-react";

const audiences = [
	{ icon: Landmark, title: "Financial institutions", description: "Connect established services with new payment formats." },
	{ icon: Building2, title: "Fintech teams", description: "Build practical products around shared interfaces." },
	{ icon: Coins, title: "Digital asset services", description: "Make wallet and provider identifiers easier to use." },
	{ icon: WalletCards, title: "Wallet builders", description: "Create clearer routes from a request to a reviewed payment." },
	{ icon: ShieldCheck, title: "Trust and compliance teams", description: "Bring identity, verification, and operational needs into the discussion." },
	{ icon: Store, title: "Digital platforms", description: "Improve how customers find and act on payment details." },
];

const Blocks = () => (
	<section className="alliance-audiences container mx-auto">
		<div className="alliance-section-heading"><span className="section-eyebrow">DIFFERENT PERSPECTIVES, ONE NETWORK</span><h2>There is room for your expertise.</h2><p>Standards grow stronger when the people who build, operate, and use payment services can work together.</p></div>
		<div className="alliance-audience-grid">{audiences.map(({ icon: Icon, title, description }) => <article className="alliance-audience" key={title}><span className="alliance-audience-icon"><Icon size={23} aria-hidden="true" /></span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div>
	</section>
);

export default Blocks;
