import React from "react";
import allianceMembers from "../../data/allianceMembers.json" with { type: "json" };
import { ExternalLink, Globe } from "lucide-react";

type AllianceMember = {
  name: string;
  link?: string;
  logo?: string;
  joined?: string;
  logoOnly?: boolean;
};

const displayHost = (url: string): string => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

const MemberCard: React.FC<{ member: AllianceMember }> = ({ member }) => {
  const [visible, setVisible] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const divRef = React.useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="relative w-full h-80 rounded-xl p-0.5 bg-white backdrop-blur-md text-gray-800 overflow-hidden shadow-lg"
    >
      {visible && (
        <div
          className="pointer-events-none blur-xl bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 w-60 h-60 absolute z-0 transition-opacity duration-300 rounded-full"
          style={{ top: position.y - 120, left: position.x - 120 }}
        />
      )}

      <div className="relative z-10 bg-white p-6 h-full w-full rounded-[10px] flex flex-col items-center justify-center text-center">
        {member.logo ? (
          <img
            src={member.logo}
            alt={member.name}
            className="w-16 h-16 my-2 object-contain"
          />
        ) : (
          <div className="w-16 h-16 my-2 bg-gray-100 flex items-center justify-center text-gray-400 text-lg font-bold">
            {member.name?.charAt(0) || "?"}
          </div>
        )}
        {!member.logoOnly && (
          <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
        )}

        <div className="mt-2 space-y-2 text-sm">
          {member.link && (
            <div className="flex items-center justify-center gap-2">
              <Globe className="w-4 h-4 text-indigo-500" />
              <span className="text-gray-500">Website:</span>
              <a
                href={member.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-700"
              >
                {displayHost(member.link)}
              </a>
              <ExternalLink className="w-4 h-4 text-indigo-500" aria-hidden="true" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const AllianceMembers = () => {
  const allCompanies: AllianceMember[] = [...(allianceMembers as AllianceMember[])]
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex flex-col items-center md:mb-8 lg:flex-row lg:justify-between">
          <h2 className="mb-2 text-center text-2xl font-bold text-gray-800 lg:mb-0 lg:text-3xl">
            Alliance members
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {allCompanies.map((company) => (
            <MemberCard key={company.name} member={company} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllianceMembers;
