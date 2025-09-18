import React from "react";

export default function Products() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Solutions</h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">The solutions below are pioneering the neo-money World.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
          <div className="flex flex-col rounded-lg border border-gray-300 bg-indigo-50 p-4 md:p-6">
            <h3 className="mb-2 text-lg font-semibold md:text-xl">PayTo Protocol</h3>
            <p className="mb-4 text-gray-500">A protocol that enables direct payments without intermediaries.</p>
            <a href="https://payto.money" target="_blank" rel="noopener" className="mt-auto font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Visit Website</a>
          </div>

          <div className="flex flex-col rounded-lg border border-gray-300 bg-indigo-50 p-4 md:p-6">
            <h3 className="mb-2 text-lg font-semibold md:text-xl">CorePass</h3>
            <p className="mb-4 text-gray-500">Digital Identity management and KYC/KYB solution.</p>
            <a href="https://corepass.net" target="_blank" rel="noopener" className="mt-auto font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Visit Website</a>
          </div>

          <div className="flex flex-col rounded-lg border border-gray-300 bg-indigo-50 p-4 md:p-6">
            <h3 className="mb-2 text-lg font-semibold md:text-xl">ORIC</h3>
            <p className="mb-4 text-gray-500">A Digital Wallet Identifier for Financial Service Providers (FSP).</p>
            <a href="/solutions/oric" className="mt-auto font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">More Information</a>
          </div>

          <div className="flex flex-col rounded-lg border border-gray-300 bg-indigo-50 p-4 md:p-6">
            <h3 className="mb-2 text-lg font-semibold md:text-xl">PayPass</h3>
            <p className="mb-4 text-gray-500">Digital wallet and payment management system for Apple and Google Wallet.</p>
            <a href="https://payto.money?pass=1" target="_blank" rel="noopener" className="mt-auto font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Visit Website</a>
          </div>

          <div className="flex flex-col rounded-lg border border-gray-300 bg-indigo-50 p-4 md:p-6">
            <h3 className="mb-2 text-lg font-semibold md:text-xl">FinTag</h3>
            <p className="mb-4 text-gray-500">Financial meta/well-known system for secure implementation of multiple payment networks.</p>
            <a href="https://payto.money" target="_blank" rel="noopener" className="mt-auto font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Visit Website</a>
          </div>

          <div className="flex flex-col rounded-lg border border-gray-300 bg-indigo-50 p-4 md:p-6">
            <h3 className="mb-2 text-lg font-semibold md:text-xl">Offline transactions</h3>
            <p className="mb-4 text-gray-500">Transfer funds globally without an internet connection.</p>
            <a href="https://txms.info" target="_blank" rel="noopener" className="mt-auto font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Visit Website</a>
          </div>
        </div>
      </div>
    </div>
  );
}
