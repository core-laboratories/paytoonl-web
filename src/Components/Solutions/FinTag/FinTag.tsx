import React from "react";

import { Code, GalleryVerticalEnd, Globe, HandCoins, ShieldCheck } from "lucide-react";

const FinTag = () => {
  return (
    <>
      <section className="container mx-auto flex flex-col px-4 gap-6 sm:gap-10 md:gap-16 lg:px-0">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
          <div className="flex flex-col justify-center sm:text-center lg:pb-12 lg:text-left xl:w-5/12 xl:pb-24">
            <h1 className="mb-6 text-4xl font-bold text-black sm:text-5xl md:mb-4 md:text-6xl">
              FinTag
            </h1>
            <p className="mb-6 leading-relaxed text-gray-500 md:mb-8 lg:w-4/5 xl:text-lg">
              FinTag is an innovative meta tag and a well-known JSON concept designed to store and display financial payment details such as ICAN, IBAN, ACH, PIX, UPI, BIC, and other payment identifiers.
            </p>

            <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="https://payto.money"
                target="_blank"
                rel="noopener"
                className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
              >
                Generate FinTag
              </a>
            </div>
          </div>

          <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12 max-h-96">
            <img
              src="/static/images/splash-fintag.jpg"
              loading="lazy"
              alt="Photo by Chris Stein"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
          Showcase
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="mb-3 text-lg font-semibold text-gray-800">Meta Tags</h3>
            <p className="mb-2 text-xs text-gray-500 font-mono">index.html</p>
          <pre className="text-sm text-gray-700 whitespace-pre-wrap break-words">
            {`<meta property="ican:xcb" content="cb00…" />`}
            <br />
            {`<meta property="iban" content="BE68539007547034" />`}
            <br />
            {`<meta property="void:plus" content="8FWR5XCG+VM" />`}
          </pre>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="mb-3 text-lg font-semibold text-gray-800">Well-Known</h3>
            <p className="mb-2 text-xs text-gray-500 font-mono">/.well-known/fintag.json</p>
            <pre className="text-sm text-gray-700 whitespace-pre-wrap break-words">
{`[
  { "ican:xcb": "cb00…" },
  { "void:plus": "8FWR5XCG+VM" }
]`}
            </pre>
          </div>
        </div>
      </section>

      <section className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Key functionality
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              FinTag is a meta tag standard for financial payment information.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:border-indigo-200">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors duration-200">
                  <ShieldCheck className="w-6 h-6 text-indigo-500" />
                </div>
              </div>

              <h3 className="mb-3 text-lg font-semibold text-gray-800">
                  Authenticity & Trust
                </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                FinTag is attached to the website and can be used to verify the authenticity of the payment details.
                </p>
            </div>

            <div className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:border-indigo-200">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors duration-200">
                  <GalleryVerticalEnd className="w-6 h-6 text-indigo-500" />
                </div>
              </div>

              <h3 className="mb-3 text-lg font-semibold text-gray-800">
                  Automation & Integration
                </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Browser extensions, payment apps, and digital services can automatically detect FinTags on a webpage, enabling seamless transactions without manual input errors.
                </p>
            </div>

            <div className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:border-indigo-200">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors duration-200">
                  <Globe className="w-6 h-6 text-indigo-500" />
                </div>
              </div>

              <h3 className="mb-3 text-lg font-semibold text-gray-800">
                  Decentralized & Open-Source
                </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                  The FinTag standard is flexible and open-source, allowing businesses, nonprofits, and individuals to integrate it into any website. Each subpage can include different payment details, making it a robust solution for large organizations with multiple departments or divisions.
                </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 mt-8">
            <div className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:border-indigo-200">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors duration-200">
                  <HandCoins className="w-6 h-6 text-indigo-500" />
                </div>
              </div>

              <h3 className="mb-3 text-lg font-semibold text-gray-800">
                  Improved Payment Experience
                </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                  Clients and customers can instantly verify payment details before initiating a transfer, reducing the chances of incorrect payments or fraudulent transactions.
                </p>
            </div>

            <div className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:border-indigo-200">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors duration-200">
                  <Code className="w-6 h-6 text-indigo-500" />
                </div>
              </div>

              <h3 className="mb-3 text-lg font-semibold text-gray-800">
                  Universal Standardization
                </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                  FinTag can serve as a universal financial metadata standard, making online transactions more transparent, efficient, and secure.
                </p>
            </div>
          </div>

          <div className="flex flex-col mt-12 lg:mt-24 pb-12 lg:pb-0 items-center justify-center text-center">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              FinTag
            </h2>

            <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
              By adopting FinTag, institutions and businesses can create a safer financial environment for their clients, ensuring payment authenticity while streamlining digital transactions.
            </p>

            <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-center">
              <a
                href="https://payto.money"
                target="_blank"
                rel="noopener"
                className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
              >
                Generate FinTag
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FinTag;
