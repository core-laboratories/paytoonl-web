import React from "react";
import { ArrowUpRight, Globe, Code, Mail } from "lucide-react";
import organizationsData from "../../../data/developmentOrg.json" with { type: "json" };

type Organization = {
  name: string;
  description: string;
  logo: string;
  website: string;
  code?: { org: string; name: string; provider: string };
  contact: { email: string };
};

const Organizations = () => {
  const organizations: Organization[] = [...(organizationsData as Organization[])]
    .sort((a, b) => a.name.localeCompare(b.name));

  const displayHost = (url: string): string => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <section className="org-section" id="organizations">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="org-heading">
          <span className="section-eyebrow">The people building it</span>
          <h2>
            Development Organizations
          </h2>

          <p>
            Meet the teams contributing to the PayTo ecosystem and helping turn open standards into working solutions.
          </p>
        </div>

        <div className="org-grid">
          {organizations.map((org) => (
            <article key={org.name} className="org-card">
              <div className="org-card-top">
                <div className="org-logo">
                  <img src={org.logo} alt="" loading="lazy" />
                </div>
                <ArrowUpRight size={20} aria-hidden="true" className="org-arrow" />
              </div>
              <div className="org-card-copy">
                <h3>{org.name}</h3>
                <p>{org.description}</p>
              </div>
              <div className="org-links">
                <a href={org.website} target="_blank" rel="noopener noreferrer"><Globe size={18} aria-hidden="true" /><span>Website</span><strong>{displayHost(org.website)}</strong></a>
                {org.code && (
                  <a href={org.code.org} target="_blank" rel="noopener noreferrer"><Code size={18} aria-hidden="true" /><span>{org.code.provider}</span><strong>{org.code.name}</strong></a>
                )}
                <a href={`mailto:${org.contact.email}`}><Mail size={18} aria-hidden="true" /><span>Email</span><strong>{org.contact.email}</strong></a>
                </div>
            </article>
          ))}
        </div>
        <p className="org-invite">
          Building with PayTo standards?{" "}
          <a
            href="mailto:contact@payto.onl?subject=Dev%20Application"
          >
            Get in touch <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </p>
      </div>
    </section>
  );
};

export default Organizations;
