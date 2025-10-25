import React from "react";

export default function Products() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Solutions</h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">The solutions below are pioneering the neo-money world.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
          <a href="https://payto.money" target="_blank" rel="noopener" className="group flex flex-col rounded-lg border border-gray-300 bg-indigo-50 p-4 md:p-6 hover:shadow-md hover:border-indigo-200 transition-all duration-200 cursor-pointer">
            <h3 className="mb-2 text-lg font-semibold md:text-xl">PayTo Protocol</h3>
            <p className="mb-4 text-gray-500">A protocol that enables direct payments without intermediaries.</p>
            <div className="mt-auto font-bold text-indigo-500 transition duration-200 group-hover:text-indigo-600">Visit Website</div>
          </a>

          <a href="https://corepass.net" target="_blank" rel="noopener" className="group flex flex-col rounded-lg border border-gray-300 bg-indigo-50 p-4 md:p-6 hover:shadow-md hover:border-indigo-200 transition-all duration-200 cursor-pointer">
            <h3 className="mb-2 text-lg font-semibold md:text-xl">CorePass</h3>
            <p className="mb-4 text-gray-500">Digital identity management and KYC/KYB solution.</p>
            <div className="mt-auto font-bold text-indigo-500 transition duration-200 group-hover:text-indigo-600">Visit Website</div>
          </a>

          <a href="/solutions/oric" className="group flex flex-col rounded-lg border border-gray-300 bg-indigo-50 p-4 md:p-6 hover:shadow-md hover:border-indigo-200 transition-all duration-200 cursor-pointer">
            <h3 className="mb-2 text-lg font-semibold md:text-xl">ORIC</h3>
            <p className="mb-4 text-gray-500">A digital wallet identifier for Financial Service Providers (FSP).</p>
            <div className="mt-auto font-bold text-indigo-500 transition duration-200 group-hover:text-indigo-600">More Information</div>
          </a>

          <a href="https://payto.money?pass=1" target="_blank" rel="noopener" className="group flex flex-col rounded-lg border border-gray-300 bg-indigo-50 p-4 md:p-6 hover:shadow-md hover:border-indigo-200 transition-all duration-200 cursor-pointer">
            <h3 className="mb-2 text-lg font-semibold md:text-xl">PayPass</h3>
            <p className="mb-4 text-gray-500">Digital wallet and payment management system for Apple and Google Wallet.</p>
            <div className="mt-auto font-bold text-indigo-500 transition duration-200 group-hover:text-indigo-600">Visit Website</div>
          </a>

          <a href="https://payto.money" target="_blank" rel="noopener" className="group flex flex-col rounded-lg border border-gray-300 bg-indigo-50 p-4 md:p-6 hover:shadow-md hover:border-indigo-200 transition-all duration-200 cursor-pointer">
            <h3 className="mb-2 text-lg font-semibold md:text-xl">FinTag</h3>
            <p className="mb-4 text-gray-500">Financial meta/well-known system for secure implementation of multiple payment networks.</p>
            <div className="mt-auto font-bold text-indigo-500 transition duration-200 group-hover:text-indigo-600">Visit Website</div>
          </a>

          <a href="https://txms.info" target="_blank" rel="noopener" className="group flex flex-col rounded-lg border border-gray-300 bg-indigo-50 p-4 md:p-6 hover:shadow-md hover:border-indigo-200 transition-all duration-200 cursor-pointer">
            <h3 className="mb-2 text-lg font-semibold md:text-xl">Offline Transactions</h3>
            <p className="mb-4 text-gray-500">Transfer funds globally without an internet connection.</p>
            <div className="mt-auto font-bold text-indigo-500 transition duration-200 group-hover:text-indigo-600">Visit Website</div>
          </a>
        </div>
      </div>
    </div>
  );
}
