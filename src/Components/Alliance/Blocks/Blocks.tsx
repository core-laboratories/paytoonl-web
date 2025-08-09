import { Coins, Currency, Landmark, ShieldUser, Store, WalletCards } from "lucide-react";
import React from "react";

const Blocks = () => {
  return (
    <>
      <h2 className="mb-4 mt-12  text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl lg:mt-0">
        We Welcome
      </h2>
      <div className="w-full container mx-auto overflow-hidden rounded-lg border border-gray-300 bg-gray-50 shadow-sm lg:block">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-8 p-4 sm:p-8">
          <div className="grid w-full lg:w-2/3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            <div className="group flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg transition duration-100 md:h-14 md:w-14">
                <Landmark className="h-6 w-6" />
              </div>

              <div>
                <div className="mb-1 font-semibold">
                  Financial Institutions & FinTech
                </div>
              </div>
            </div>

            <div className="group flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg transition duration-100 md:h-14 md:w-14">
                <Currency className="h-6 w-6" />
              </div>

              <div>
                <div className="mb-1 font-semibold">
                  Exchanges & Blockchain Processors
                </div>
              </div>
            </div>

            <div className="group flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg transition duration-100 md:h-14 md:w-14">
                <Coins className="h-6 w-6" />
              </div>

              <div>
                <div className="mb-1 font-semibold">
                  VASPs
                </div>
              </div>
            </div>

            <div className="group flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg transition duration-100 md:h-14 md:w-14">
                <WalletCards className="h-6 w-6" />
              </div>

              <div>
                <div className="mb-1 font-semibold">
                   Payment Processors & DePIN
                </div>
              </div>
            </div>

            <div className="group flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg transition duration-100 md:h-14 md:w-14">
                <ShieldUser className="h-6 w-6" />
              </div>

              <div>
                <div className="mb-1 font-semibold">
                  Regulatory & Compliance Bodies
                </div>
              </div>
            </div>

            <div className="group flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg transition duration-100 md:h-14 md:w-14">
                <Store className="h-6 w-6" />
              </div>

              <div>
                <div className="mb-1 font-semibold">
                  E-commerce & Digital Platforms
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 overflow-hidden rounded-lg border border-gray-300">
            <div className="h-96 bg-gray-100">
              <img
                src="/static/images/tosky.jpg"
                loading="lazy"
                alt="Photo by Rastislav Vašička"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blocks;
