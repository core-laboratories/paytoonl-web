import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, FileInput } from "lucide-react";

const ORIC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/solutions");
  };

  return (
    <>
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
              ORIC
            </h1>
            <p className="mb-6 leading-relaxed text-gray-500 md:mb-8 lg:w-4/5 xl:text-lg">
              ORIC (Organization Identifier Code) - A Digital Wallet Identifier for VASP Providers
            </p>
            <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
              Any <b>VASP provider can apply</b> to issue their own <b>ORIC identifier,</b> provided they meet the following conditions:
              <br />
              <span className="inline-flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-indigo-500" aria-hidden="true" />
                <b>Know Your Business (KYB) verification</b>
              </span>
              <br />
              <span className="inline-flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-indigo-500" aria-hidden="true" />
                <b>Registered as a VASP provider</b>
              </span>
            </p>

            <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="mailto:apply@payto.onl?subject=ORIC%20Application"
                className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
              >
                Apply as a VASP provider
              </a>
            </div>
          </div>

          <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12 max-h-96">
            <img
              src="/static/images/splash-oric.jpg"
              loading="lazy"
              alt="Photo by Tim Evans"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border mt-8">
          <h2 className="mb-4 text-xl font-bold text-gray-800">
            ORIC Code Structure
          </h2>
          <p className="mb-6 leading-relaxed text-gray-500  lg:w-4/5 xl:text-lg">
            An <b>ORIC code consists of four components,</b> each providing
            essential details about the organization and its digital wallet
            services:
          </p>
          <ul className="list-decimal pl-5 space-y-2 text-gray-700">
            <li>
              <b>Organization Code (A-Z) – 4 Letters</b>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Identifies the VASP provider and is usually a shortened
                  version of its name.
                </li>
                <li>Example: PING for Ping Exchange.</li>
              </ul>
            </li>
            <li>
              <b>Country Code (A-Z) – 2 Letters</b>
              <ul className="list-disc pl-5 space-y-1">
                <li>Represents the country where the VASP is registered.</li>
                <li>Follows ISO 3166-1 alpha-2 country codes.</li>
                <li>Example: US for the United States, CH for Switzerland.</li>
              </ul>
            </li>
            <li>
              <b>Digital Address Identifier (0-9, A-Z) – 2 Characters</b>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Specifies the type of digital asset address and network
                  participation.
                </li>
                <li>
                  Format: XY where:
                  <ul className="list-disc pl-5 space-y-1">
                    <li>X (Letter or Number) – General location code.</li>
                    <li>
                      Y (Number) – Specifies the type of usage:
                      <ul className="list-disc pl-5 space-y-1">
                        <li>0 = Test environment address.</li>
                        <li>
                          1 = Passive network participant. (Not in custody of
                          wallet)
                        </li>
                        <li>
                          2 = Reverse billing (recipient pays for the
                          transaction - deducted transaction fees).
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  Example: A1 (Live address, passive participant), B0 (Test
                  network address).
                </li>
              </ul>
            </li>
            <li>
              <b>Asset Code (0-9, A-Z) – 3 Characters</b>
              <ul className="list-disc pl-5 space-y-1">
                <li>Represents the supported digital asset or currency.</li>
                <li>
                  Can be:
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Specific crypto assets (BTC, ETH, XCB).</li>
                    <li>Fiat currencies (CBDC, Stable, MiCA) (EUR, CHF).</li>
                    <li>Multi-currency support (XXX).</li>
                  </ul>
                </li>
                <li>
                  Example: BTC (Bitcoin asset), XXX (multi-currency VASP).
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-center">
          <a
            href="mailto:apply@payto.onl?subject=ORIC%20Application"
            className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
          >
            Apply as a VASP provider
          </a>
        </div>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-xl px-4 md:px-0">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              <div>
                <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                  <img
                    src="/static/images/splash-oric-reg.jpg"
                    loading="lazy"
                    alt="Photo by Maksym Kaharlytskyi"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>

              <div className="md:pt-8">
                <p className="text-center font-bold text-indigo-500 md:text-left">
                  ORIC Code
                </p>

                <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                  Example of an ORIC Code
                </h1>

                <div className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                  <p>
                    Let’s say a <b>VASP provider named "Ping Exchange"</b>, based in <b>Switzerland (CH)</b>, is issuing a digital wallet identifier for <b>Core (XCB)</b>. Their ORIC code might look like:
                  </p>
                  <br />
                  <div className="flex justify-center items-center gap-2">
                    <b>PINGCHB2XCB</b>
                    <a
                      href="https://oric-v1.payto.onl/PINGCHB2XCB"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-500 px-2 transition duration-100 hover:text-indigo-600 active:text-indigo-700 inline-flex items-center"
                    >
                      <FileInput className="w-4 h-4 mr-1" aria-hidden="true" />
                      <span>Open in new tab</span>
                    </a>
                  </div>
                </div>

                <div className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>PING → Organization (Ping Exchange)</li>
                    <li>CH → Country (Switzerland)</li>
                    <li>
                      B2 → Live digital address, fees deducted from the receiver
                    </li>
                    <li>XCB → Core wallet</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col pb-12 lg-pb-0 items-center justify-center text-center">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            A Digital Wallet Identifier for VASP Providers
          </h2>

          <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
            By adopting <b>ORIC, the digital asset industry</b> gains a <b>standardized, secure, and scalable</b> solution for <b>wallet identification and verification</b> in the growing world of crypto transactions.
          </p>

          <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-center">
            <a
              href="mailto:contact@payto.onl?subject=ORIC%20Application"
              className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
            >
              Apply as a VASP provider
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default ORIC;
