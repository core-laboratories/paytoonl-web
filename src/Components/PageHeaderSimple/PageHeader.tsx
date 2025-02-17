import React from "react";

export default function PageHeadersSimple() {
  return (
    <>
      {/* Page Header Section: Simple */}
      <div className="bg-white dark:bg-gray-900 dark:text-gray-100">
        <div className="container mx-auto space-y-16 px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
          <div className="text-center">
            <div className="mb-4 text-sm font-bold tracking-wider text-emerald-600 uppercase dark:text-emerald-500">
              Developers
            </div>
            <h2 className="mb-10 text-4xl font-black text-black dark:text-white">
              We develop Open-Source platforms.
            </h2>
            <div className="mx-auto text-xl leading-relaxed font-medium text-gray-700 lg:w-2/3 dark:text-gray-300">
              <a
                href="https://github.com/core-laboratories"
                className="mr-4  hover:underline"
              >
                Open GitHub
              </a>
              <a href="/solutions" className="ml-4 hover:underline">
                Read more about Products
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* END Page Header Section: Simple */}
    </>
  );
}
