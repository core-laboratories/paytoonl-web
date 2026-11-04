import React, { useState } from "react";
import { isValid } from "@blockchainhub/ican";
import { ArrowRight, Building2, Check, Code2, Globe2, Handshake, Lightbulb, Mail, Network, ShieldCheck, UsersRound } from "lucide-react";

type Application = {
	organization: string;
	type: string;
	website: string;
	industry: string;
	code: string;
	contact: string;
	core: string;
	interests: string;
};

type Field = {
	label: string;
	name: keyof Application;
	type: React.HTMLInputTypeAttribute;
	placeholder?: string;
	optional?: boolean;
	wide?: boolean;
};

const fields: Field[] = [
	{ label: "Organization name", name: "organization", type: "text", placeholder: "Your organization" },
	{ label: "Organization type", name: "type", type: "text", placeholder: "Company, nonprofit, institution…" },
	{ label: "Industry", name: "industry", type: "text", placeholder: "Finance, technology, research…" },
	{ label: "Website URL", name: "website", type: "url", placeholder: "https://example.com", optional: true },
	{ label: "Contact email", name: "contact", type: "email", placeholder: "you@example.com" },
	{ label: "Code repository URL", name: "code", type: "url", placeholder: "https://github.com/…", optional: true },
	{ label: "Core ID", name: "core", type: "text", placeholder: "CB…", wide: true },
];

const reasons = [
	{ icon: Lightbulb, title: "Help shape useful standards", description: "Bring practical feedback from your work with payments, wallets, identity, or infrastructure into the conversation." },
	{ icon: Handshake, title: "Build with peers", description: "Connect with organizations working across traditional finance, digital assets, and payment technology." },
	{ icon: Code2, title: "Turn ideas into implementations", description: "Explore how shared formats and open interfaces can make services easier to connect and adopt." },
];

const JoinVisual = () => (
	<div className="join-visual" role="img" aria-label="Illustration of different organizations connecting around the PayTo Alliance">
		<div className="join-visual-top"><span>A NETWORK OF BUILDERS</span><span>ALLIANCE / 01</span></div>
		<div className="join-visual-stage">
			<div className="join-visual-ring join-visual-ring-one" />
			<div className="join-visual-ring join-visual-ring-two" />
			<div className="join-visual-center"><span className="join-visual-mark">P</span><strong>PayTo</strong><small>ALLIANCE</small></div>
			<div className="join-visual-node join-visual-node-one"><Building2 size={23} aria-hidden="true" /><span>FINANCE</span></div>
			<div className="join-visual-node join-visual-node-two"><Code2 size={23} aria-hidden="true" /><span>BUILDERS</span></div>
			<div className="join-visual-node join-visual-node-three"><Globe2 size={23} aria-hidden="true" /><span>NETWORKS</span></div>
			<div className="join-visual-node join-visual-node-four"><ShieldCheck size={23} aria-hidden="true" /><span>TRUST</span></div>
		</div>
		<div className="join-visual-bottom"><span>SHARED STANDARDS</span><span>REAL-WORLD APPLICATIONS</span></div>
	</div>
);

const JoinUs = () => {
	const [form, setForm] = useState<Application>({ organization: "", type: "", website: "", industry: "", code: "", contact: "", core: "", interests: "" });
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const urlRegex = /^https?:\/\/.+/;
	const coreIdValid = form.core.trim().length > 0 ? isValid(form.core.trim(), true) : true;
	const emailValid = form.contact.trim().length > 0 ? emailRegex.test(form.contact.trim()) : true;
	const websiteValid = form.website.trim().length > 0 ? urlRegex.test(form.website.trim()) : true;
	const codeValid = form.code.trim().length > 0 ? urlRegex.test(form.code.trim()) : true;
	const requiredValid = Boolean(form.organization.trim() && form.type.trim() && form.industry.trim() && form.contact.trim() && form.core.trim()) && emailValid && coreIdValid && websiteValid && codeValid;

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setForm((previous) => ({ ...previous, [name]: value }));
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!requiredValid) return;
		const lines = [
			`Organization Name: ${form.organization.trim()}`,
			`Organization Type: ${form.type.trim()}`,
			`Website URL: ${form.website.trim()}`,
			`Industry: ${form.industry.trim()}`,
			`Code Repository URL: ${form.code.trim()}`,
			`Contact Email: ${form.contact.trim()}`,
			`Core ID: ${form.core.trim()}`,
			`Areas of Interest: ${form.interests.trim()}`,
		];
		window.location.href = `mailto:application@payto.onl?subject=${encodeURIComponent("Alliance Application")}&body=${encodeURIComponent(lines.join("\n"))}`;
	};

	return (
		<div className="join-page">
			<div className="join-inner">
				<section className="join-hero">
					<div className="join-hero-copy"><span className="section-eyebrow">BUILD THE NEXT PAYMENT STANDARD TOGETHER</span><h1>Join the PayTo Alliance</h1><p className="join-hero-lead">Bring your perspective to a network building more connected payment experiences.</p><p>Financial institutions, technology teams, service providers, and researchers can contribute ideas and implementation experience to open payment standards.</p><a href="#application" className="join-action">Apply to join <ArrowRight size={18} aria-hidden="true" /></a></div>
					<JoinVisual />
				</section>

				<section className="join-reasons"><div className="join-section-heading"><span className="section-eyebrow">WHY PARTICIPATE</span><h2>Shape what people can build next.</h2><p>Better standards come from organizations that know the real constraints of payment products and services.</p></div><div className="join-reasons-grid">{reasons.map(({ icon: Icon, title, description }) => <article className="join-reason" key={title}><span className="join-reason-icon"><Icon size={25} aria-hidden="true" /></span><h3>{title}</h3><p>{description}</p></article>)}</div></section>

				<section className="join-possibilities"><div><span className="section-eyebrow">A PLACE FOR YOUR EXPERTISE</span><h2>From discussion to practical connection.</h2><p>Alliance work spans payment requests, account identifiers, provider identity, metadata, and delivery methods. Your organization can help make these pieces clearer and more useful for real products.</p><a href="/solutions" className="join-text-link">Explore the solutions <ArrowRight size={18} aria-hidden="true" /></a></div><div className="join-possibilities-visual" aria-hidden="true"><div className="join-possibilities-track"><span><Network size={21} /> Standards</span><i /><span><UsersRound size={21} /> Collaboration</span><i /><span><Check size={21} /> Adoption</span></div></div></section>

				<section className="join-application" id="application"><div className="join-section-heading"><span className="section-eyebrow">START THE CONVERSATION</span><h2>Tell us about your organization.</h2><p>Share a few details about your work and how you would like to contribute. Your application opens in your email app, addressed to <a href="mailto:application@payto.onl?subject=Alliance%20Application">application@payto.onl</a>.</p></div><form onSubmit={handleSubmit} className="join-form"><div className="join-form-grid">{fields.map((field) => {
					const invalid = field.name === "core" ? !coreIdValid : field.name === "contact" ? !emailValid : field.name === "website" ? !websiteValid : field.name === "code" ? !codeValid : false;
					return <div className={`join-field${field.wide ? " join-field-wide" : ""}`} key={field.name}><label htmlFor={field.name}>{field.label}{!field.optional && <span aria-hidden="true"> *</span>}{field.optional && <small> Optional</small>}</label><input id={field.name} name={field.name} type={field.type} value={form[field.name]} onChange={handleChange} placeholder={field.placeholder} required={!field.optional} aria-invalid={invalid} aria-describedby={field.name === "core" ? "join-core-help" : undefined} className={invalid ? "is-invalid" : undefined} />{invalid && <p className="join-field-error">{field.name === "core" ? "Enter a valid Core ID." : field.name === "contact" ? "Enter a valid email address." : "Enter a full URL beginning with https:// or http://."}</p>}{field.name === "core" && <p className="join-field-help" id="join-core-help">You can get a Core ID from <a href="https://corepass.net" target="_blank" rel="noopener noreferrer">CorePass</a>.</p>}</div>;
				})}</div><div className="join-field join-field-interests"><label htmlFor="interests">What would you like to work on?<small> Optional</small></label><textarea id="interests" name="interests" rows={4} value={form.interests} onChange={(event) => setForm((previous) => ({ ...previous, interests: event.target.value }))} placeholder="Tell us about the standards, integrations, or ideas you are interested in." /></div><div className="join-form-bottom"><p><Mail size={17} aria-hidden="true" /> The form prepares an email for you to review and send.</p><button type="submit" disabled={!requiredValid}>Prepare application email <ArrowRight size={18} aria-hidden="true" /></button></div></form></section>
			</div>
		</div>
	);
};

export default JoinUs;
