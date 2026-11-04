import React from "react";
import { ArrowUpRight, Globe2 } from "lucide-react";
import allianceMembers from "../../data/allianceMembers.json" with { type: "json" };

export type AllianceMember = {
	name: string;
	link?: string;
	logo?: string;
	joined?: string;
	logoOnly?: boolean;
};

export const members: AllianceMember[] = [...(allianceMembers as AllianceMember[])]
	.sort((a, b) => a.name.localeCompare(b.name));

const displayHost = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

export const MemberCard = ({ member, compact = false }: { member: AllianceMember; compact?: boolean }) => (
	<article className={`member-card${compact ? " member-card-compact" : ""}`}>
		<div className="member-card-top">
			<div className="member-logo">
				{member.logo ? <img src={member.logo} alt="" loading="lazy" /> : <span aria-hidden="true">{member.name.charAt(0)}</span>}
			</div>
			{member.link ? (
				<a className="member-card-icon" href={member.link} target="_blank" rel="noopener noreferrer"
					aria-label={`Visit ${member.name} website`}><ArrowUpRight size={18} aria-hidden="true" /></a>
			) : <span className="member-card-icon" aria-hidden="true"><ArrowUpRight size={18} /></span>}
		</div>
		<div className="member-card-copy">
			<span className="member-card-eyebrow">Alliance member</span>
			<h3>{member.name}</h3>
		</div>
		{member.link && (
			<a className="member-card-link" href={member.link} target="_blank" rel="noopener noreferrer"
				aria-label={`Visit ${member.name} website`}>
				<Globe2 size={17} aria-hidden="true" /><span>{displayHost(member.link)}</span><ArrowUpRight size={16} aria-hidden="true" />
			</a>
		)}
	</article>
);

const AllianceMembers = () => (
	<section className="members-directory">
		<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
			<div className="members-directory-heading">
				<div>
					<span className="section-eyebrow">The network behind PayTo</span>
					<h1>Alliance members</h1>
					<p>Meet the organizations helping develop and support open payment standards.</p>
				</div>
				<span className="members-count">{members.length} organizations</span>
			</div>
			<div className="members-grid">
				{members.map((member) => <MemberCard key={member.name} member={member} />)}
			</div>
		</div>
	</section>
);

export default AllianceMembers;
