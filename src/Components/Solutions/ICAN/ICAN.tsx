import React from "react";

import { BookOpenText, Bot, Globe, ShieldCheck, Wallet } from "lucide-react";

const ICAN = () => {
  return (
    <div>
      <section className="container mx-auto flex flex-col px-4 gap-6 sm:gap-10 md:gap-16 lg:px-0">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
          <div className="flex flex-col justify-center sm:text-center lg:pb-12 lg:text-left xl:w-5/12 xl:pb-24">
            <h1 className="mb-6 text-4xl font-bold text-black sm:text-5xl md:mb-4 md:text-6xl">
              ICAN
            </h1>
            <p className="mb-6 leading-relaxed text-gray-500 md:mb-8 lg:w-4/5 xl:text-lg">
              The International Crypto Account Number (ICAN) is a standardized identifier for cryptocurrency transactions, designed to function similarly to the International Bank Account Number (IBAN) in traditional banking. It provides a unique, verifiable, and structured format for digital asset addresses, making transactions safer, faster, and more efficient across different platforms. By introducing a global standard for crypto addresses, ICAN helps reduce errors, improve security, and enhance compatibility between wallets, exchanges, and financial services.
            </p>

            <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="https://payto.money"
                target="_blank"
                rel="noopener"
                className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
              >
                Use ICAN in PayTo
              </a>
            </div>
          </div>

          <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12 max-h-96">
            <img
              src="/static/images/splash-ican.jpg"
              loading="lazy"
              alt="Photo by Rastislav Vašička"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        <div className="px-4 lg:px-0 mt-16 lg:mt-24">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            How ICAN Works
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            ICAN follows a structured format to ensure accuracy and consistency
            in crypto transactions.
          </p>
        </div>

        <div className="mx-auto mt-8 lg:mt-0 w-full max-w-screen-lg overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="mx-auto flex max-w-screen-lg items-center gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8">
            <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <div className="group flex gap-3 sm:gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-12 md:w-12">
                  <BookOpenText className="w-6 h-6" />
                </div>

                <div>
                  <div className="mb-1 font-semibold">
                    Human-Readable Part (HRP)
                  </div>
                  <p className="text-sm text-gray-500">
                    Identifies the blockchain network or application (e.g., <code className="font-zephirum">cb</code> for Core Blockchain, <code className="font-zephirum">bc</code> for Bitcoin, etc.)
                  </p>
                </div>
              </div>

              <div className="group flex gap-3 sm:gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-12 md:w-12">
                  <Bot className="w-6 h-6" />
                </div>

                <div>
                  <div className="mb-1 font-semibold">Checksum</div>
                  <p className="text-sm text-gray-500">
                    Validates the integrity of the address, preventing errors in manual entry
                  </p>
                </div>
              </div>

              <div className="group flex gap-3 sm:gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-12 md:w-12">
                  <Wallet className="w-6 h-6" />
                </div>

                <div>
                  <div className="mb-1 font-semibold">Data Part</div>
                  <p className="text-sm text-gray-500">
                    Encodes the actual wallet address, ensuring seamless processing
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden sm:block w-1/3 overflow-hidden rounded-lg border border-gray-200">
              <div className="h-48 bg-gray-100">
                <img
                  src="/static/images/splash-ican-format.jpg"
                  loading="lazy"
                  alt="Photo by Lucas van Oort"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-2 sm:px-4 md:px-8">
            <div className="mb-10 md:mb-16">
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                ICAN Features
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:border-indigo-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors duration-200">
                    <Globe className="w-6 h-6 text-indigo-500" />
                  </div>
                </div>

                <h3 className="mb-3 text-lg font-semibold text-gray-800">
                  Standardized Asset Transactions
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  ICAN simplifies asset payments by using a uniform format, making transactions across different platforms and services seamless.
                </p>
              </div>

              <div className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:border-indigo-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors duration-200">
                    <ShieldCheck className="w-6 h-6 text-indigo-500" />
                  </div>
                </div>

                <h3 className="mb-3 text-lg font-semibold text-gray-800">
                  Error Prevention & Security
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  The built-in checksum automatically detects errors in address input, preventing transaction failures and loss of funds.
                </p>
              </div>

              <div className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:border-indigo-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors duration-200">
                    <Bot className="w-6 h-6 text-indigo-500" />
                  </div>
                </div>

                <h3 className="mb-3 text-lg font-semibold text-gray-800">
                  Universal Compatibility
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Designed for wallets, exchanges, and financial institutions, ICAN enhances interoperability, ensuring your transactions are recognized and processed everywhere.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-2 sm:px-4 md:px-8">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Digital Transactions with ICAN
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              As the world moves toward global digital finance, ICAN provides a secure and efficient way to manage asset transactions, just like IBAN revolutionized international banking.
            </p>
          </div>
          <div className="flex flex-col mt-8 lg:mt-12 gap-2.5 sm:flex-row sm:justify-center lg:justify-center">
            <a
              href="https://cip.coreblockchain.net/cip/cbc/cip-100"
              target="_blank"
              rel="noopener"
              className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
            >
              Read Standardization Document
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ICAN;
