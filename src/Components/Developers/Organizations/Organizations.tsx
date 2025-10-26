import React from "react";
import { Globe, Code, Mail } from "lucide-react";
import organizationsData from "../../../data/developmentOrg.json" with { type: "json" };

type Organization = {
  name: string;
  description: string;
  logo: string;
  website: string;
  code: { org: string; name: string; provider: string };
  contact: { email: string };
};

const Organizations = () => {
  const organizations: Organization[] = [...(organizationsData as Organization[])]
    .sort((a, b) => a.name.localeCompare(b.name));

  const displayHost = (url: string): string => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <div className="bg-white py-6 sm:py-16 lg:py-32">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Development Organizations
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            The following organizations are actively contributing and can assist you with applying solutions.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {organizations.map((org) => (
            <div key={org.name} className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <div className="flex-shrink-0 mb-4 sm:mb-0">
                    <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-lg border-2 border-gray-200 overflow-hidden mx-auto sm:mx-0">
                      <img src={org.logo} alt={org.name} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="sm:ml-4 text-center sm:text-left">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-800">{org.name}</h2>
                    <p className="text-sm sm:text-base text-gray-500 mt-1">{org.description}</p>
                  </div>
                </div>

                <div className="my-4 sm:my-6 border-t border-gray-200"></div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-indigo-50 rounded-full flex-shrink-0">
                      <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-500" />
                    </div>
                    <div className="ml-3 min-w-0 flex-1">
                      <p className="text-xs sm:text-sm font-medium text-gray-500">Website</p>
                      <a
                        href={org.website}
                        target="_blank"
                        rel="noopener"
                        className="text-sm sm:text-base text-gray-700 hover:text-indigo-600 transition-colors break-all"
                      >
                        {displayHost(org.website)}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-indigo-50 rounded-full flex-shrink-0">
                      <Code className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-500" />
                    </div>
                    <div className="ml-3 min-w-0 flex-1">
                      <p className="text-xs sm:text-sm font-medium text-gray-500">{org.code.provider}</p>
                      <a
                        href={org.code.org}
                        target="_blank"
                        rel="noopener"
                        className="text-sm sm:text-base text-gray-700 hover:text-indigo-600 transition-colors break-all"
                      >
                        {org.code.name}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-indigo-50 rounded-full flex-shrink-0">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-500" />
                    </div>
                    <div className="ml-3 min-w-0 flex-1">
                      <p className="text-xs sm:text-sm font-medium text-gray-500">Email</p>
                      <a
                        href={`mailto:${org.contact.email}`}
                        className="text-sm sm:text-base text-gray-700 hover:text-indigo-600 transition-colors break-all"
                      >
                        {org.contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 mb-12 lg:mt-16 mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
          If your organization is contributing to PayTo standards,{" "}
          <a
            href="mailto:contact@payto.onl?subject=Dev%20Application"
            className="text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            reach out
          </a>{" "}
          to get listed here.
        </p>
      </div>
    </div>
  );
};

export default Organizations;
