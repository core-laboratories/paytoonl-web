import React from "react";
import { Globe, Landmark, SquareAsterisk, UsersRound } from "lucide-react";

const Features = () => {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Opportunities
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Join the future of financial technology.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-2">
          <div className="flex divide-x divide-gray-200 rounded-lg border border-gray-200 bg-gray-50">
            <div className="flex items-center p-2 text-indigo-500 md:p-4">
              <SquareAsterisk className="h-6 w-6 md:h-8 md:w-8" />
            </div>

            <div className="p-4 md:p-6">
              <h3 className="mb-2 text-lg font-semibold md:text-xl">
                Open & Decentralized Standards
              </h3>
              <p className="text-gray-500">
                Build without restrictions, leveraging interoperable financial protocols that work across different platforms and networks.
              </p>
            </div>
          </div>

          <div className="flex divide-x divide-gray-200 rounded-lg border border-gray-200 bg-gray-50">
            <div className="flex items-center p-2 text-indigo-500 md:p-4">
              <Globe className="h-6 w-6 md:h-8 md:w-8" />
            </div>

            <div className="p-4 md:p-6">
              <h3 className="mb-2 text-lg font-semibold md:text-xl">
                Global Payment Innovation
              </h3>
              <p className="text-gray-500">
                Create seamless cross-border payment solutions that eliminate intermediaries and reduce costs for users worldwide.
              </p>
            </div>
          </div>

          <div className="flex divide-x divide-gray-200 rounded-lg border border-gray-200 bg-gray-50">
            <div className="flex items-center p-2 text-indigo-500 md:p-4">
              <Landmark className="h-6 w-6 md:h-8 md:w-8" />
            </div>

            <div className="p-4 md:p-6">
              <h3 className="mb-2 text-lg font-semibold md:text-xl">
                Cross-Industry Adoption
              </h3>
              <p className="text-gray-500">
                Integrate your solutions with banks, fintech companies, DeFi protocols, and Web3 applications through standardized APIs.
              </p>
            </div>
          </div>

          <div className="flex divide-x divide-gray-200 rounded-lg border border-gray-200 bg-gray-50">
            <div className="flex items-center p-2 text-indigo-500 md:p-4">
              <UsersRound className="h-6 w-6 md:h-8 md:w-8" />
            </div>

            <div className="p-4 md:p-6">
              <h3 className="mb-2 text-lg font-semibold md:text-xl">
                Community & Collaboration
              </h3>
              <p className="text-gray-500">
                Connect with a global network of developers, financial institutions, and blockchain pioneers to accelerate your project's growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
