import { Banknote, BookMarked, Tag, WalletCards, MessageSquareCode, HeartHandshake, TrendingUpDown, SquareAsterisk } from "lucide-react";
import React from "react";

export default function LogosPlain() {
  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Competitive Advantage
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              Explore the comprehensive suite of payment solutions designed to modernize financial infrastructure.
            </p>
          </div>

          <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
            <div className="flex flex-col items-center px-24 max-w-sm lg:max-w-md xl:max-w-lg mx-auto">
              <a
                href="/solutions/payto"
                className="transition duration-100 hover:text-indigo-600 active:text-indigo-700"
              >
                <Banknote className="h-12 w-12 text-indigo-500 mb-2" />
              </a>

              <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
                PayTo
              </h3>
              <p className="mb-2 text-center text-gray-500">
                Direct peer-to-peer payment protocol enabling instant transfers across networks without intermediaries.
              </p>
              <a
                href="/solutions/payto"
                className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
              >
                More
              </a>
            </div>

            <div className="flex flex-col items-center px-24 max-w-sm lg:max-w-md xl:max-w-lg mx-auto">
              <a
                href="/solutions/fintag"
                className="transition duration-100 hover:text-indigo-600 active:text-indigo-700"
              >
                <Tag className="h-12 w-12 text-indigo-500 mb-2" />
              </a>

              <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
                FinTag
              </h3>
              <p className="mb-2 text-center text-gray-500">
                Financial meta system for secure implementation of multiple payment networks.
              </p>
              <a
                href="/solutions/fintag"
                className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
              >
                More
              </a>
            </div>

            <div className="flex flex-col items-center px-24 max-w-sm lg:max-w-md xl:max-w-lg mx-auto">
              <a
                href="/solutions/oric"
                className="transition duration-100 hover:text-indigo-600 active:text-indigo-700"
              >
                <BookMarked className="h-12 w-12 text-indigo-500 mb-2" />
              </a>

              <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
                ORIC
              </h3>
              <p className="mb-2 text-center text-gray-500">
                FinTech organization registry for secure digital identification.
              </p>
              <a
                href="/solutions/oric"
                className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
              >
                More
              </a>
            </div>

            <div className="flex flex-col items-center px-24 max-w-sm lg:max-w-md xl:max-w-lg mx-auto">
              <a
                href="/solutions/ican"
                className="transition duration-100 hover:text-indigo-600 active:text-indigo-700"
              >
                <TrendingUpDown className="h-12 w-12 text-indigo-500 mb-2" />
              </a>

              <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
                ICAN
              </h3>
              <p className="mb-2 text-center text-gray-500">
                International Crypto Account Number for transfer of digital assets.
              </p>
              <a
                href="/solutions/ican"
                className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
              >
                More
              </a>
            </div>
            <div className="flex flex-col items-center px-24 max-w-sm lg:max-w-md xl:max-w-lg mx-auto">
              <a
                href="/solutions/paypass"
                className="transition duration-100 hover:text-indigo-600 active:text-indigo-700"
              >
                <WalletCards className="h-12 w-12 text-indigo-500 mb-2" />
              </a>

              <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
                PayPass
              </h3>
              <p className="mb-2 text-center text-gray-500">
                Digital wallet and payment management system for Apple and Google Wallet.
              </p>
              <a
                href="/solutions/paypass"
                className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
              >
                More
              </a>
            </div>
            <div className="flex flex-col items-center px-24 max-w-sm lg:max-w-md xl:max-w-lg mx-auto">
              <a
                href="/solutions/txms"
                className="transition duration-100 hover:text-indigo-600 active:text-indigo-700"
              >
                <MessageSquareCode className="h-12 w-12 text-indigo-500 mb-2" />
              </a>

              <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
                TxMS
              </h3>
              <p className="mb-2 text-center text-gray-500">
                Transaction messaging system for offline payments.
              </p>
              <a
                href="/solutions/txms"
                className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
              >
                More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
