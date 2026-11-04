import React from "react";
import { ArrowRight, Building2, Code2, Globe2, Link2, ShieldCheck, WalletCards } from "lucide-react";

const AllianceVisual = () => (
	<div className="alliance-visual" role="img" aria-label="Animated illustration of payment standards linking financial institutions, builders, and wallets">
		<div className="alliance-visual-top"><span>ONE SHARED DIRECTION</span><span>ALLIANCE / 01</span></div>
		<div className="alliance-visual-stage">
			<div className="alliance-visual-orbit alliance-visual-orbit-one" />
			<div className="alliance-visual-orbit alliance-visual-orbit-two" />
			<div className="alliance-visual-core"><Link2 size={30} aria-hidden="true" /><strong>Open standards</strong><small>Better connections</small></div>
			<div className="alliance-visual-participant alliance-visual-participant-a"><Building2 size={23} aria-hidden="true" /><span>FINANCE</span></div>
			<div className="alliance-visual-participant alliance-visual-participant-b"><Code2 size={23} aria-hidden="true" /><span>BUILDERS</span></div>
			<div className="alliance-visual-participant alliance-visual-participant-c"><WalletCards size={23} aria-hidden="true" /><span>WALLETS</span></div>
			<div className="alliance-visual-participant alliance-visual-participant-d"><ShieldCheck size={23} aria-hidden="true" /><span>PROVIDERS</span></div>
		</div>
		<div className="alliance-visual-bottom"><span>PAYTO · ICAN · ORIC · FINTAG</span><span>BUILT TO CONNECT</span></div>
	</div>
);

const Hero = () => (
	<section className="alliance-hero container mx-auto" id="alliance-agenda">
		<div className="alliance-hero-copy">
			<span className="section-eyebrow">THE PAYTO ALLIANCE</span>
			<h1>Better payments are built together.</h1>
			<p className="alliance-hero-lead">A place for organizations building the next generation of payment connections.</p>
			<p>We bring financial institutions, technology teams, and service providers together around open standards that make payment details easier to share, understand, and use.</p>
			<div className="alliance-hero-actions"><a href="/joinus" className="alliance-primary-action">Join the Alliance <ArrowRight size={18} aria-hidden="true" /></a><a href="#opportunities" className="alliance-secondary-action">See the opportunities <ArrowRight size={18} aria-hidden="true" /></a></div>
			<div className="alliance-hero-points"><span><Globe2 size={17} aria-hidden="true" /> Open standards</span><span><Link2 size={17} aria-hidden="true" /> Real interoperability</span></div>
		</div>
		<AllianceVisual />
	</section>
);

export default Hero;
