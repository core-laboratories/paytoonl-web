import React from "react";

const Features = () => {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Why Develop with PayTo:?
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-2">
          <div className="flex divide-x rounded-lg border bg-gray-50">
            <div className="flex items-center p-2 text-indigo-500 md:p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:h-8 md:w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <div className="p-4 md:p-6">
              <h3 className="mb-2 text-lg font-semibold md:text-xl">
                Open & Decentralized Standards
              </h3>
              <p className="text-gray-500">
                Build without restrictions, leveraging interoperable financial
                protocols.
              </p>
            </div>
          </div>

          <div className="flex divide-x rounded-lg border bg-gray-50">
            <div className="flex items-center p-2 text-indigo-500 md:p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:h-8 md:w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <div className="p-4 md:p-6">
              <h3 className="mb-2 text-lg font-semibold md:text-xl">
                Global Payment Innovation
              </h3>
              <p className="text-gray-500">
                Be at the forefront of crypto & digital payment technologies.
              </p>
            </div>
          </div>

          <div className="flex divide-x rounded-lg border bg-gray-50">
            <div className="flex items-center p-2 text-indigo-500 md:p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:h-8 md:w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <div className="p-4 md:p-6">
              <h3 className="mb-2 text-lg font-semibold md:text-xl">
                Cross-Industry Adoption{" "}
              </h3>
              <p className="text-gray-500">
                Integrate your solutions with banks, fintech, DeFi, and Web3
                applications.
              </p>
            </div>
          </div>

          <div className="flex divide-x rounded-lg border bg-gray-50">
            <div className="flex items-center p-2 text-indigo-500 md:p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:h-8 md:w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <div className="p-4 md:p-6">
              <h3 className="mb-2 text-lg font-semibold md:text-xl">
                Community & Collaboration
              </h3>
              <p className="text-gray-500">
                Join a network of developers, financial institutions, and
                blockchain pioneers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
