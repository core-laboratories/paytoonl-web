import React from "react";
import { ArrowUpRight } from "lucide-react";
import SolutionsVisual from "./SolutionsVisual.tsx";

const SolutionsHero = () => (
	<section className="payment-hero payment-hero-solutions">
		<div className="payment-hero-inner">
			<div className="payment-hero-copy">
				<span className="payment-hero-eyebrow">Solutions / Open standards</span>
				<h1>Connected tools for <em>better payments.</em></h1>
				<p>Explore the protocols and services that make digital payments easier to identify, route, and complete.</p>
				<div className="payment-hero-actions">
					<a className="payment-hero-primary" href="#solutions-list">Browse solutions <ArrowUpRight size={18} aria-hidden="true" /></a>
				</div>
			</div>
			<SolutionsVisual />
		</div>
	</section>
);

export default SolutionsHero;
