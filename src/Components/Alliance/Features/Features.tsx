import React from "react";
import { Code2, Handshake, Lightbulb, Network } from "lucide-react";

const opportunities = [
	{ number: "01", icon: Lightbulb, title: "Shape useful standards", description: "Bring the needs of real products and customers into discussions about payment requests, identifiers, and interoperability." },
	{ number: "02", icon: Handshake, title: "Work across disciplines", description: "Exchange ideas with institutions, builders, and service providers solving connected payment problems." },
	{ number: "03", icon: Code2, title: "Explore practical integration", description: "Test how shared formats and interfaces can fit into wallets, websites, infrastructure, and provider services." },
	{ number: "04", icon: Network, title: "Support wider adoption", description: "Help make emerging solutions easier for other teams to understand, implement, and use." },
];

const Features = () => (
	<section className="alliance-opportunities container mx-auto" id="opportunities">
		<div className="alliance-section-heading"><span className="section-eyebrow">WHAT WE CAN DO TOGETHER</span><h2>Turn shared ideas into useful connections.</h2><p>The Alliance gives contributors a place to compare real needs, refine standards, and explore how they work in practice.</p></div>
		<div className="alliance-opportunity-grid">{opportunities.map(({ number, icon: Icon, title, description }) => <article className="alliance-opportunity" key={number}><div className="alliance-opportunity-top"><span className="alliance-opportunity-icon"><Icon size={24} aria-hidden="true" /></span><span className="alliance-opportunity-number">{number}</span></div><h3>{title}</h3><p>{description}</p></article>)}</div>
	</section>
);

export default Features;
