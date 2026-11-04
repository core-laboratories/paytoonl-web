import React from "react";
import { ArrowUpRight } from "lucide-react";
import PaymentNetwork from "./PaymentNetwork.tsx";

const Hero = () => (
	<section className="payment-hero">
		<div className="payment-hero-inner">
			<div className="payment-hero-copy">
				<span className="payment-hero-eyebrow">The PayTo Alliance</span>
				<h1>Payments that move <em>with you.</em></h1>
				<p>Open standards connecting people, providers, and payment systems across the world.</p>
				<div className="payment-hero-actions">
					<a className="payment-hero-primary" href="/solutions">Explore solutions <ArrowUpRight size={18} aria-hidden="true" /></a>
					<a className="payment-hero-secondary" href="/alliance">Meet the Alliance</a>
				</div>
			</div>
			<PaymentNetwork variant="home" />
		</div>
	</section>
);

export default Hero;
