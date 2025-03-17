import React from "react";

const Features = () => {
  return (
    <div className="container mx-auto bg-white py-8 sm:py-16 lg:py-24 px-4 lg:px-0">
      <div className="mx-auto max-w-screen-2xl ">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Why Join the PayTo:Consortium?
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
                Drive Innovation in Payments
              </h3>
              <p className="text-gray-500">
                Help design and implement next-generation financial
                infrastructure that enhances the way money moves across
                blockchain and traditional systems.
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
                Industry Collaboration & Influence
              </h3>
              <p className="text-gray-500">
                Work alongside leading banks, fintech firms, and crypto
                platforms to establish trusted, standardized financial protocols
                for seamless transactions worldwide.
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
                Exclusive Access to New Standards
              </h3>
              <p className="text-gray-500">
                Be among the first to test, integrate, and benefit from emerging
                payment technologies such as ICAN (International Crypto Account
                Number), ORIC (Organization Identifier Code), and FinTag
                (Financial Metadata Tags).
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
                Build Trust & Compliance
              </h3>
              <p className="text-gray-500">
                Ensure your organization meets global regulatory requirements
                while improving security, fraud prevention, and financial
                transparency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
