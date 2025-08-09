import React from "react";
import { Banknote, Blend, Boxes, Handshake } from "lucide-react";

const Features = () => {
  return (
    <div className="container mx-auto bg-white py-8 sm:py-16 lg:py-24 px-4 lg:px-0">
      <div className="mx-auto max-w-screen-2xl ">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Opportunities
          </h2>
          <a id="opportunities" />
          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            A collaborative ecosystem revolutionizing global payments.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-2">
          <div className="flex divide-x divide-gray-200 rounded-lg border border-gray-200 bg-gray-50">
            <div className="flex items-center p-2 text-indigo-500 md:p-4">
              <Banknote className="h-6 w-6 md:h-8 md:w-8" />
            </div>

            <div className="p-4 md:p-6">
              <h3 className="mb-2 text-lg font-semibold md:text-xl">
                Drive Innovation in Payments
              </h3>
              <p className="text-gray-500">
                Design and implement next-generation payment solutions that enhance the way money moves across blockchain and traditional systems.
              </p>
            </div>
          </div>

          <div className="flex divide-x divide-gray-200 rounded-lg border border-gray-200 bg-gray-50">
            <div className="flex items-center p-2 text-indigo-500 md:p-4">
              <Blend className="h-6 w-6 md:h-8 md:w-8" />
            </div>

            <div className="p-4 md:p-6">
              <h3 className="mb-2 text-lg font-semibold md:text-xl">
                Industry Collaboration & Influence
              </h3>
              <p className="text-gray-500">
                Work alongside leading banks, fintech firms, and crypto platforms to establish trusted, standardized financial protocols for seamless transactions worldwide.
              </p>
            </div>
          </div>

          <div className="flex divide-x divide-gray-200 rounded-lg border border-gray-200 bg-gray-50">
            <div className="flex items-center p-2 text-indigo-500 md:p-4">
              <Boxes className="h-6 w-6 md:h-8 md:w-8" />
            </div>

            <div className="p-4 md:p-6">
              <h3 className="mb-2 text-lg font-semibold md:text-xl">
                Exclusive Access to New Standards
              </h3>
              <p className="text-gray-500">
                Be among the first to test, integrate, and benefit from emerging payment technologies such as PayTo, ICAN (International Crypto Account Number), ORIC (Organization Identifier Code), and FinTag (Financial Metadata Tags).
              </p>
            </div>
          </div>

          <div className="flex divide-x divide-gray-200 rounded-lg border border-gray-200 bg-gray-50">
            <div className="flex items-center p-2 text-indigo-500 md:p-4">
              <Handshake className="h-6 w-6 md:h-8 md:w-8" />
            </div>

            <div className="p-4 md:p-6">
              <h3 className="mb-2 text-lg font-semibold md:text-xl">
                Build Trust & Compliance
              </h3>
              <p className="text-gray-500">
                Build trust through global regulatory compliance while improving security, fraud prevention, and financial transparency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
