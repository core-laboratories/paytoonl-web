import React from "react";

import { Code, FileCode2, FileJson2, GalleryVerticalEnd, Globe, HandCoins, ShieldCheck } from "lucide-react";
import { FinTagVisual } from "../SolutionHeroVisuals.tsx";

const FinTag = () => {
  return (
    <div className="fintag-page">
      <section className="solution-detail container mx-auto flex flex-col px-4 gap-6 sm:gap-10 md:gap-16 lg:px-0">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
          <div className="flex flex-col justify-center sm:text-center lg:pb-12 lg:text-left xl:w-5/12 xl:pb-24">
            <h1 className="mb-6 text-4xl font-bold text-black sm:text-5xl md:mb-4 md:text-6xl">
              FinTag
            </h1>
            <p className="mb-6 leading-relaxed text-gray-500 md:mb-8 lg:w-4/5 xl:text-lg">
              FinTag lets a website publish payment identifiers in page metadata or a well-known JSON file. Compatible services can discover those details from the publisher’s own domain, reducing the need to copy an address by hand.
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

          <FinTagVisual />
        </div>
      </section>

      <section className="fintag-showcase container mx-auto">
        <div className="fintag-showcase-heading">
          <span className="section-eyebrow">PUBLISH ON YOUR OWN DOMAIN</span>
          <h2>Your domain. Two ways to publish.</h2>
          <p>Add payment identifiers to your page or publish a small JSON file. Compatible services can discover the details where your customers already find you.</p>
        </div>
        <div className="fintag-showcase-grid">
          <article className="fintag-method">
            <div className="fintag-method-heading">
              <div className="fintag-method-icon"><FileCode2 size={24} aria-hidden="true" /></div>
              <div><span className="fintag-method-number">01 / PAGE METADATA</span><h3>Meta tags</h3></div>
            </div>
            <p>Place identifiers in the HTML of the page they belong to.</p>
            <div className="fintag-code-window">
              <div className="fintag-code-toolbar"><span className="fintag-code-dots" aria-hidden="true"><i /><i /><i /></span><span>index.html</span><span>HTML</span></div>
              <pre><code>{`<meta
  property="ican:xcb"
  content="CB7147879011EA207DF5B35A24CA6F0859DCFB145999"
/>

<meta property="iban" content="BE68539007547034" />
<meta property="void:plus" content="8FWR5XCG+VM" />`}</code></pre>
            </div>
          </article>
          <article className="fintag-method">
            <div className="fintag-method-heading">
              <div className="fintag-method-icon"><FileJson2 size={24} aria-hidden="true" /></div>
              <div><span className="fintag-method-number">02 / DOMAIN FILE</span><h3>Well-known JSON</h3></div>
            </div>
            <p>Make identifiers available from a predictable location on your domain.</p>
            <div className="fintag-code-window">
              <div className="fintag-code-toolbar"><span className="fintag-code-dots" aria-hidden="true"><i /><i /><i /></span><span>/.well-known/fintag.json</span><span>JSON</span></div>
              <pre><code>{`[
  {
    "ican:xcb":
      "CB7147879011EA207DF5B35A24CA6F0859DCFB145999"
  },
  { "void:plus": "8FWR5XCG+VM" }
]`}</code></pre>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Key Features
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
                  Publisher-linked discovery
                </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Payment details are published on the same website a customer is visiting. Clients can associate a discovered identifier with that publisher and still verify the recipient before paying.
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
                Compatible wallets and services can read published metadata and prefill supported payment details, reducing manual entry.
                </p>
            </div>

            <div className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:border-indigo-200">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors duration-200">
                  <Globe className="w-6 h-6 text-indigo-500" />
                </div>
              </div>

              <h3 className="mb-3 text-lg font-semibold text-gray-800">
                  Works across websites
                </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                  Organizations can publish payment details on their own domains, including different identifiers for specific pages, projects, or departments.
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
                  Customers can see the discovered payment destination in a compatible app and review it before authorizing a transfer.
                </p>
            </div>

            <div className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:border-indigo-200">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors duration-200">
                  <Code className="w-6 h-6 text-indigo-500" />
                </div>
              </div>

              <h3 className="mb-3 text-lg font-semibold text-gray-800">
                  Multiple payment identifiers
                </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                  A single publication format can describe supported identifiers such as ICAN and IBAN, while each receiving application decides which methods it understands.
                </p>
            </div>
          </div>

          <div className="flex flex-col mt-12 lg:mt-24 pb-12 lg:pb-0 items-center justify-center text-center">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              FinTag
            </h2>

            <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
              Publish a clear payment destination on your own website so compatible apps can discover it and customers can review it before paying. The site’s identity and the payment details should still be verified independently.
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
    </div>
  );
};

export default FinTag;
