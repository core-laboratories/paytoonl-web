import React from "react";
import { ArrowUpRight, BookOpenText, Building2, Coins, Globe2, WalletCards } from "lucide-react";
import { ORICVisual } from "../SolutionHeroVisuals.tsx";

const ORIC = () => {

  return (
    <>
      <section className="solution-detail container mx-auto flex flex-col px-4 gap-6 sm:gap-10 md:gap-16 lg:px-0">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
          <div className="flex flex-col justify-center sm:text-center lg:pb-12 lg:text-left xl:w-5/12 xl:pb-24">
            <h1 className="mb-6 text-4xl font-bold text-black sm:text-5xl md:mb-4 md:text-6xl">
              ORIC
            </h1>
            <p className="mb-6 leading-relaxed text-gray-500 md:mb-8 lg:w-4/5 xl:text-lg">
              ORIC gives participating financial service providers a structured identifier for their digital wallet services. Its components make the provider, country, address type, and optional asset clear.
            </p>
            <p className="leading-relaxed text-gray-500 lg:w-4/5 xl:text-lg mb-2">
              Financial service providers can apply for an ORIC identifier if they meet these requirements:
            </p>
            <ul className="mb-8 md:mb-12 list-disc pl-5 space-y-1 text-gray-500 xl:text-lg">
              <li>Verify a Core ID through CorePass</li>
              <li>Complete Know Your Business (KYB) verification</li>
              <li>Be registered as a financial service provider</li>
            </ul>

            <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="/joinus"
                className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
              >
                Join the Alliance
              </a>
            </div>
          </div>

          <ORICVisual />
        </div>

        <div className="oric-structure">
          <div className="oric-structure-heading">
            <span className="section-eyebrow">EASY TO RECOGNIZE</span>
            <h2>Four parts. One clear identifier.</h2>
            <p>Each part of an ORIC code tells a useful part of the wallet’s story: the provider, its country, how the address is used, and the optional asset.</p>
          </div>

          <div className="oric-code-preview" role="group" aria-label="Example ORIC code: PING, CH, B2, XCB">
            <div><strong>PING</strong><span>Provider</span></div>
            <div><strong>CH</strong><span>Country</span></div>
            <div><strong>B2</strong><span>Address</span></div>
            <div><strong>XCB</strong><span>Asset · optional</span></div>
          </div>

          <div className="oric-structure-grid">
            <article className="oric-structure-card">
              <div className="oric-structure-icon"><Building2 size={23} aria-hidden="true" /></div>
              <span className="oric-structure-index">01 / PROVIDER</span>
              <h3>Who operates it</h3>
              <p>Four letters identify the participating financial service provider. The PayTo Alliance issues this code.</p>
              <span className="oric-structure-example"><b>PING</b> for Ping Exchange</span>
            </article>
            <article className="oric-structure-card">
              <div className="oric-structure-icon"><Globe2 size={23} aria-hidden="true" /></div>
              <span className="oric-structure-index">02 / COUNTRY</span>
              <h3>Where it is registered</h3>
              <p>Two letters show the provider’s registration country, using ISO 3166-1 alpha-2 codes.</p>
              <span className="oric-structure-example"><b>CH</b> for Switzerland</span>
            </article>
            <article className="oric-structure-card">
              <div className="oric-structure-icon"><WalletCards size={23} aria-hidden="true" /></div>
              <span className="oric-structure-index">03 / ADDRESS</span>
              <h3>How the wallet is used</h3>
              <p>Two characters describe location and participation. The first defaults to B; the second identifies the address type.</p>
              <span className="oric-structure-example"><b>B2</b> for a custodial address</span>
            </article>
            <article className="oric-structure-card">
              <div className="oric-structure-icon"><Coins size={23} aria-hidden="true" /></div>
              <span className="oric-structure-index">04 / OPTIONAL ASSET</span>
              <h3>What it supports</h3>
              <p>Three characters can specify a crypto asset, currency, commodity, or multi-currency support. Omit this part to reference a Core ID.</p>
              <span className="oric-structure-example"><b>XCB</b> for Core · <b>XXX</b> for multiple currencies</span>
            </article>
          </div>

          <div className="oric-address-modes">
            <strong>Address types</strong>
            <span><b>0</b> Test environment</span>
            <span><b>1</b> Passive participant</span>
            <span><b>2</b> Custodial wallet</span>
          </div>
        </div>
        <section className="oric-example">
          <div className="oric-example-copy">
            <span className="section-eyebrow">IN PRACTICE</span>
            <h2>See an ORIC code in context.</h2>
            <p>Imagine Ping Exchange identifying a custodial Core wallet in Switzerland. Its provider, location, address type, and asset fit into one code that compatible services can read.</p>
            <div className="oric-example-facts">
              <div><span>Provider</span><strong>Ping Exchange</strong></div>
              <div><span>Registered in</span><strong>Switzerland</strong></div>
              <div><span>Wallet</span><strong>Custodial · Core</strong></div>
            </div>
            <a className="oric-example-docs" href="https://www.postman.com/core-labs/workspace/oric/collection/13185637-5e66eeab-546b-4928-9a7f-b4f9f006c191" target="_blank" rel="noopener noreferrer">
              <BookOpenText size={18} aria-hidden="true" /> API documentation <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="oric-example-display">
            <div className="oric-example-display-top"><span>ILLUSTRATIVE IDENTIFIER</span><span>ORIC / 01</span></div>
            <div className="oric-example-display-body">
              <span className="oric-example-kicker">PING EXCHANGE · SWITZERLAND</span>
              <code aria-label="PINGCHB2XCB"><span>PING</span><span>CH</span><span>B2</span><span>XCB</span></code>
              <p>One identifier for a participating provider’s custodial Core wallet.</p>
              <a href="https://oric.payto.onl/PINGCHB2XCB" target="_blank" rel="noopener noreferrer">
                Explore this example <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
            <div className="oric-example-display-bottom"><span>PROVIDER</span><span>COUNTRY</span><span>ADDRESS</span><span>ASSET</span></div>
          </div>
        </section>
        <div className="flex flex-col pb-12 lg:pb-0 items-center justify-center text-center">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            A clearer identifier for provider wallets
          </h2>

          <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
            A structured ORIC code helps applications recognize provider wallet details consistently. Users and integrators should still verify the provider and destination before sending funds.
          </p>

          <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-center">
            <a
              href="/joinus"
              className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
            >
              Join the Alliance
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default ORIC;
