import React from "react";
import allianceMembers from "../../data/allianceMembers.json";

const LogoCloud = () => {
  // Get 5 random companies from the array
  const randomCompanies = [...allianceMembers]
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex flex-col items-center md:mb-8 lg:flex-row lg:justify-between">
          <h2 className="mb-2 text-center text-2xl font-bold text-gray-800 lg:mb-0 lg:text-3xl">
            Alliance members
          </h2>
          <p className="max-w-md text-center text-gray-400 lg:text-right">
            Here are some of the companies that have joined the PayTo Alliance
            to make payments easier for everyone.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 rounded-lg sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-6">
          {randomCompanies.map((company) => (
            <div key={company.name}>
              {company.link ? (
                <a
                  href={company.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 hover:text-gray-500 sm:h-24 md:h-32 no-underline transition-colors gap-3"
                >
                  {company.logo ? (
                    company.logoOnly ? (
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="h-12 w-auto sm:h-16 md:h-20 lg:h-16"
                      />
                    ) : (
                      <>
                        <img
                          src={company.logo}
                          alt={company.name}
                          className="h-12 w-auto sm:h-16 md:h-20 lg:h-16"
                        />
                        <span className="hidden sm:inline text-2xl font-semibold">
                          {company.name}
                        </span>
                      </>
                    )
                  ) : (
                    <span className="hidden sm:inline text-2xl font-semibold">
                      {company.name}
                    </span>
                  )}
                </a>
              ) : (
                <div className="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-24 md:h-32 gap-3">
                  {company.logo ? (
                    company.logoOnly ? (
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="h-12 w-auto sm:h-16 md:h-20 lg:h-16"
                      />
                    ) : (
                      <>
                        <img
                          src={company.logo}
                          alt={company.name}
                          className="h-12 w-auto sm:h-16 md:h-20 lg:h-16"
                        />
                        <span className="hidden sm:inline text-2xl font-semibold">
                          {company.name}
                        </span>
                      </>
                    )
                  ) : (
                    <span className="hidden sm:inline text-2xl font-semibold">
                      {company.name}
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}

          <a
            href="/members"
            className="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 hover:text-gray-500 sm:h-24 md:h-32 no-underline transition-colors"
          >
            <span className="text-sm sm:text-base">View all members</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
