import React from "react";

export default function Products() {
  return (
    <div className="solutions-cards bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Solutions</h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Explore tools and standards shaping the future of digital payments.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
          <a href="/solutions/payto" className="group flex flex-col rounded-lg border border-gray-300 bg-indigo-50 p-4 md:p-6 hover:shadow-md hover:border-indigo-200 transition-all duration-200 cursor-pointer">
            <h3 className="mb-2 text-lg font-semibold md:text-xl">PayTo Protocol</h3>
            <p className="mb-4 text-gray-500">Share payment details in a consistent format that compatible apps can recognize.</p>
            <div className="mt-auto font-bold text-indigo-500 transition duration-200 group-hover:text-indigo-600">Explore PayTo</div>
          </a>

          <a href="https://corepass.net" target="_blank" rel="noopener" className="group flex flex-col rounded-lg border border-gray-300 bg-indigo-50 p-4 md:p-6 hover:shadow-md hover:border-indigo-200 transition-all duration-200 cursor-pointer">
            <h3 className="mb-2 text-lg font-semibold md:text-xl">CorePass</h3>
            <p className="mb-4 text-gray-500">Digital identity tools for verification and access to connected services.</p>
            <div className="mt-auto font-bold text-indigo-500 transition duration-200 group-hover:text-indigo-600">Visit Website</div>
          </a>

          <a href="/solutions/oric" className="group flex flex-col rounded-lg border border-gray-300 bg-indigo-50 p-4 md:p-6 hover:shadow-md hover:border-indigo-200 transition-all duration-200 cursor-pointer">
            <h3 className="mb-2 text-lg font-semibold md:text-xl">ORIC</h3>
            <p className="mb-4 text-gray-500">A structured wallet identifier for participating financial service providers.</p>
            <div className="mt-auto font-bold text-indigo-500 transition duration-200 group-hover:text-indigo-600">More Information</div>
          </a>

          <a href="/solutions/paypass" className="group flex flex-col rounded-lg border border-gray-300 bg-indigo-50 p-4 md:p-6 hover:shadow-md hover:border-indigo-200 transition-all duration-200 cursor-pointer">
            <h3 className="mb-2 text-lg font-semibold md:text-xl">PayPass</h3>
            <p className="mb-4 text-gray-500">Present payment details in a familiar pass for Apple Wallet and Google Wallet.</p>
            <div className="mt-auto font-bold text-indigo-500 transition duration-200 group-hover:text-indigo-600">Explore PayPass</div>
          </a>

          <a href="/solutions/fintag" className="group flex flex-col rounded-lg border border-gray-300 bg-indigo-50 p-4 md:p-6 hover:shadow-md hover:border-indigo-200 transition-all duration-200 cursor-pointer">
            <h3 className="mb-2 text-lg font-semibold md:text-xl">FinTag</h3>
            <p className="mb-4 text-gray-500">Publish payment identifiers on your own domain for compatible services to discover.</p>
            <div className="mt-auto font-bold text-indigo-500 transition duration-200 group-hover:text-indigo-600">Explore FinTag</div>
          </a>

          <a href="/solutions/txms" className="group flex flex-col rounded-lg border border-gray-300 bg-indigo-50 p-4 md:p-6 hover:shadow-md hover:border-indigo-200 transition-all duration-200 cursor-pointer">
            <h3 className="mb-2 text-lg font-semibold md:text-xl">TxMS</h3>
            <p className="mb-4 text-gray-500">Deliver signed transaction data over SMS where mobile service is available.</p>
            <div className="mt-auto font-bold text-indigo-500 transition duration-200 group-hover:text-indigo-600">Explore TxMS</div>
          </a>
        </div>
      </div>
    </div>
  );
}
