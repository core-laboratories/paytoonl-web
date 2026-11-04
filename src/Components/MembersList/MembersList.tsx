import React from "react";
import { ArrowUpRight } from "lucide-react";
import { MemberCard, members } from "../AllianceMembers/AllianceMembers.tsx";

const MembersList = () => (
	<section className="members-preview">
		<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
			<div className="members-preview-heading">
				<div>
					<span className="section-eyebrow">Built together</span>
					<h2>Alliance members</h2>
				</div>
				<p>Organizations working together to make payments easier for everyone.</p>
			</div>
			<div className="members-preview-grid">
				{members.slice(0, 5).map((member) => <MemberCard key={member.name} member={member} compact />)}
				<a className="member-card member-card-more" href="/members">
					<span>Explore the network</span>
					<strong>View all members</strong>
					<ArrowUpRight size={24} aria-hidden="true" />
				</a>
			</div>
		</div>
	</section>
);

export default MembersList;
