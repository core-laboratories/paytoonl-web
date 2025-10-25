import React from "react";

export default function InfoBlock() {
  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex flex-col overflow-hidden rounded-lg bg-gray-200 sm:flex-row md:h-80">
            <div className="order-first h-48 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
              <img src="/static/images/wallet.jpg" loading="lazy" alt="Photo by Martin Sanchez" className="h-full w-full object-cover object-center" />
            </div>

            <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
              <h2 className="mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">PayPass</h2>

              <p className="mb-8 max-w-md text-gray-600">Generate passes effortlessly and for free for your Apple and Google Wallet. With the Pro version, you will get even more functionality.</p>

              <div className="mt-auto">
                <a href="https://payto.money?pass=1" target="_blank" rel="noopener" className="w-full sm:w-auto inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">Generate PayPass</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
