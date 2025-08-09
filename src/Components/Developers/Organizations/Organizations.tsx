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

        <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 xl:grid-cols-3 xl:gap-16">
          {organizations.map((org) => (
            <div key={org.name} className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-20 h-20 bg-gray-100 rounded-lg border-2 border-gray-200 overflow-hidden">
                      <img src={org.logo} alt={org.name} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h2 className="text-xl font-bold text-gray-800">{org.name}</h2>
                    <p className="text-gray-500">{org.description}</p>
                  </div>
                </div>

                <div className="my-6 border-t border-gray-200"></div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-10 h-10 bg-indigo-50 rounded-full">
                      <Globe className="w-5 h-5 text-indigo-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-500">Website</p>
                      <a
                        href={org.website}
                        target="_blank"
                        rel="noopener"
                        className="text-gray-700 hover:text-indigo-600 transition-colors"
                      >
                        {displayHost(org.website)}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-10 h-10 bg-indigo-50 rounded-full">
                      <Code className="w-5 h-5 text-indigo-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-500">{org.code.provider}</p>
                      <a
                        href={org.code.org}
                        target="_blank"
                        rel="noopener"
                        className="text-gray-700 hover:text-indigo-600 transition-colors"
                      >
                        {org.code.name}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-10 h-10 bg-indigo-50 rounded-full">
                      <Mail className="w-5 h-5 text-indigo-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-500">Email</p>
                      <a
                        href={`mailto:${org.contact.email}`}
                        className="text-gray-700 hover:text-indigo-600 transition-colors"
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
          If your company is working with PayTo standards, reach out to get listed here.
        </p>
      </div>
    </div>
  );
};

export default Organizations;
