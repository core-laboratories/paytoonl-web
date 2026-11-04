import React from "react";

import { BookOpenText, Bot, Globe, ShieldCheck, Wallet } from "lucide-react";
import { ICANVisual } from "../SolutionHeroVisuals.tsx";

const ICAN = () => {
  return (
    <div>
      <section className="solution-detail container mx-auto flex flex-col px-4 gap-6 sm:gap-10 md:gap-16 lg:px-0">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
          <div className="flex flex-col justify-center sm:text-center lg:pb-12 lg:text-left xl:w-5/12 xl:pb-24">
            <h1 className="mb-6 text-4xl font-bold text-black sm:text-5xl md:mb-4 md:text-6xl">
              ICAN
            </h1>
            <p className="mb-6 leading-relaxed text-gray-500 md:mb-8 lg:w-4/5 xl:text-lg">
              The International Crypto Account Number (ICAN) gives digital asset addresses a structured, checkable format. Its network prefix and checksum help compatible wallets recognize the address and catch common typing mistakes before a transfer is sent.
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

          <ICANVisual />
        </div>

        <section className="ican-format">
          <div className="ican-format-heading">
            <span className="section-eyebrow">A CHECKABLE ADDRESS</span>
            <h2>One address. Three useful parts.</h2>
            <p>ICAN combines a network prefix, check digits, and wallet data in a format compatible services can validate before a transfer.</p>
          </div>
          <div className="ican-format-example">
            <div className="ican-format-example-top"><span>EXAMPLE ICAN</span><span>CORE BLOCKCHAIN</span></div>
            <code>CB7147879011EA207DF5B35A24CA6F0859DCFB145999</code>
            <p>The check digits help catch accidental entry errors. Always verify the full destination before sending assets.</p>
          </div>
          <div className="ican-format-parts">
            <article>
              <div className="ican-format-icon"><BookOpenText size={22} aria-hidden="true" /></div>
              <div><span className="ican-format-segment">CB <small>01 / NETWORK</small></span><h3>Recognize the network</h3><p>The human-readable prefix tells a compatible service which network the address belongs to.</p></div>
            </article>
            <article>
              <div className="ican-format-icon"><ShieldCheck size={22} aria-hidden="true" /></div>
              <div><span className="ican-format-segment">71 <small>02 / CHECK DIGITS</small></span><h3>Catch common mistakes</h3><p>A checksum can reveal many typing or transcription errors before submission.</p></div>
            </article>
            <article>
              <div className="ican-format-icon"><Wallet size={22} aria-hidden="true" /></div>
              <div><span className="ican-format-segment">4787…5999 <small>03 / WALLET DATA</small></span><h3>Carry the destination</h3><p>The remaining characters encode the wallet address for consistent handling.</p></div>
            </article>
          </div>
        </section>

        <section className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Showcase
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="mb-3 text-lg font-semibold text-gray-800">Native format</h3>
              <pre className="text-sm text-gray-700 whitespace-pre-wrap break-words font-zephirum">
cb7147879011ea207df5b35a24ca6f0859dcfb145999
              </pre>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="mb-3 text-lg font-semibold text-gray-800">Electronic format</h3>
              <pre className="text-sm text-gray-700 whitespace-pre-wrap break-words font-zephirum">
CB7147879011EA207DF5B35A24CA6F0859DCFB145999
              </pre>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="mb-3 text-lg font-semibold text-gray-800">Print format</h3>
              <pre className="text-sm text-gray-700 whitespace-pre-wrap break-words font-zephirum">
CB71 4787 9011 EA20 7DF5 B35A 24CA 6F08 59DC FB14 5999
              </pre>
            </div>
          </div>

          <div className="mt-8 lg:mt-12">
            <h3 className="mb-4 text-center text-xl font-semibold text-gray-800 md:mb-6">
              ID format
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h4 className="mb-3 text-base font-semibold text-gray-800">Strength 1</h4>
                <pre className="text-sm text-gray-700 whitespace-pre-wrap break-words font-zephirum">
…5999
                </pre>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h4 className="mb-3 text-base font-semibold text-gray-800">Strength 2</h4>
                <pre className="text-sm text-gray-700 whitespace-pre-wrap break-words font-zephirum">
CB71…5999
                </pre>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h4 className="mb-3 text-base font-semibold text-gray-800">Strength 3</h4>
                <pre className="text-sm text-gray-700 whitespace-pre-wrap break-words font-zephirum">
CB71…B35A…5999
                </pre>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h4 className="mb-3 text-base font-semibold text-gray-800">Strength 4</h4>
                <pre className="text-sm text-gray-700 whitespace-pre-wrap break-words font-zephirum">
CB714787…B35A…5999
                </pre>
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-gray-600 max-w-2xl mx-auto">
              The delimiter can be customized, but the default is three dots <code className="font-zephirum">…</code> (Unicode U+2026).
            </p>
          </div>
        </section>

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
                  A structured address is easier for compatible services to display, validate, and exchange.
                </p>
              </div>

              <div className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:border-indigo-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors duration-200">
                    <ShieldCheck className="w-6 h-6 text-indigo-500" />
                  </div>
                </div>

                <h3 className="mb-3 text-lg font-semibold text-gray-800">
                  Catch address mistakes
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  The checksum can catch many accidental entry errors. Users should still verify the full destination before sending assets.
                </p>
              </div>

              <div className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:border-indigo-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors duration-200">
                    <Bot className="w-6 h-6 text-indigo-500" />
                  </div>
                </div>

                <h3 className="mb-3 text-lg font-semibold text-gray-800">
                  Built for integrations
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Wallets, exchanges, and financial services can support the same address format where they integrate the relevant network.
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
              ICAN gives compatible services a predictable address format and a checksum they can validate before a transfer. It does not replace recipient verification or network confirmation.
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
