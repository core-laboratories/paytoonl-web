import React from "react";

import { useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpenText, Bot, Globe, ShieldCheck, Wallet } from "lucide-react";

const ICAN = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/solutions");
  };
  return (
    <div>
      <section className="container mx-auto flex flex-col px-4 gap-6 sm:gap-10 md:gap-16 lg:px-0">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
          <div className="flex flex-col justify-center sm:text-center lg:pb-12 lg:text-left xl:w-5/12 xl:pb-24">
            <button
              onClick={handleBackClick}
              className="inline-flex items-center rounded-lg bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 lg:w-1/3 mb-16"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Solutions
            </button>

            <h1 className="mb-6 text-4xl font-bold text-black sm:text-5xl md:mb-4 md:text-6xl">
              International Crypto Account Number
            </h1>
            <p className="mb-6 leading-relaxed text-gray-500 md:mb-8 lg:w-4/5 xl:text-lg">
              The <b>International Crypto Account Number (ICAN)</b> is a <b>standardized identifier for cryptocurrency transactions,</b> designed to function similarly to the <b>International Bank Account Number (IBAN)</b> in traditional banking. It provides a <b>unique, verifiable, and structured format</b> for digital asset addresses, making transactions
              <b>safer, faster, and more efficient</b> across different platforms. By introducing a <b>global standard for crypto addresses,</b> ICAN helps <b>reduce errors, improve security, and enhance compatibility</b> between wallets, exchanges, and financial services.
            </p>

            <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="https://payto.money"
                target="_blank"
                rel="noopener"
                className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
              >
                Generate ICAN address
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
          <div className="mx-auto flex max-w-screen-lg items-center gap-8 p-8">
            <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-12 md:w-12">
                  <BookOpenText className="w-6 h-6" />
                </div>

                <div>
                  <div className="mb-1 font-semibold">
                    Human-Readable Part (HRP)
                  </div>
                  <p className="text-sm text-gray-500">
                    Identifies the blockchain network or application <b>(e.g., ‘cb’ for Core Blockchain Mainnet).</b>
                  </p>
                </div>
              </div>

              <div className="group flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-12 md:w-12">
                  <Bot className="w-6 h-6" />
                </div>

                <div>
                  <div className="mb-1 font-semibold">Checksum</div>
                  <p className="text-sm text-gray-500">
                    Validates the integrity of the address, preventing errors in manual entry.
                  </p>
                </div>
              </div>

              <div className="group flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-12 md:w-12">
                  <Wallet className="w-6 h-6" />
                </div>

                <div>
                  <div className="mb-1 font-semibold">Data Part</div>
                  <p className="text-sm text-gray-500">
                    Encodes the actual wallet address, ensuring seamless processing.
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
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-10 md:mb-16">
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                ICAN Features
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
              <div className="flex divide-x divide-gray-200 rounded-lg border border-gray-200 bg-gray-50">
                <div className="flex items-center p-2 text-indigo-500 md:p-4">
                  <Globe className="w-6 h-6" />
                </div>

                <div className="p-4 md:p-6">
                  <h3 className="mb-2 text-lg font-semibold md:text-xl">
                    Standardized Asset Transactions
                  </h3>
                  <p className="text-gray-500">
                    ICAN <b>simplifies asset payments</b> by using a uniform format, making transactions across different platforms and services <b>seamless.</b>
                  </p>
                </div>
              </div>

              <div className="flex divide-x divide-gray-200 rounded-lg border border-gray-200 bg-gray-50">
                <div className="flex items-center p-2 text-indigo-500 md:p-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>

                <div className="p-4 md:p-6">
                  <h3 className="mb-2 text-lg font-semibold md:text-xl">
                    Error Prevention & Security
                  </h3>
                  <p className="text-gray-500">
                    The <b>built-in checksum</b> automatically detects errors in address input, <b>preventing transaction failures and loss of funds.</b>
                  </p>
                </div>
              </div>

              <div className="flex divide-x divide-gray-200 rounded-lg border border-gray-200 bg-gray-50">
                <div className="flex items-center p-2 text-indigo-500 md:p-4">
                  <Bot className="w-6 h-6" />
                </div>

                <div className="p-4 md:p-6">
                  <h3 className="mb-2 text-lg font-semibold md:text-xl">
                    Universal Compatibility
                  </h3>
                  <p className="text-gray-500">
                    Designed for <b>wallets, exchanges, and financial institutions,</b> ICAN <b>enhances interoperability,</b> ensuring your transactions are recognized and processed everywhere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Digital Transactions with ICAN
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              As the world moves toward <b>global digital finance,</b> ICAN provides a <b>secure and efficient</b> way to manage asset transactions, just like <b>IBAN revolutionized international banking.</b>
            </p>
          </div>
          <div className="flex flex-col mt-8 lg:mt-12 gap-2.5 sm:flex-row sm:justify-center lg:justify-center">
            <a
              href="https://payto.money"
              target="_blank"
              rel="noopener"
              className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
            >
              Generate ICAN address
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ICAN;
