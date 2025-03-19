import React from "react";
import { useNavigate } from "react-router-dom";

const ICAN = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/solutions");
  };
  return (
    <div>
      <section className="container mx-auto flex flex-col px-4 gap-6 sm:gap-10 md:gap-16 lg:px-0">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
          <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
            <p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">
              Very proud to introduce
            </p>

            <h1 className="mb-6 text-4xl font-bold text-black sm:text-5xl md:mb-4 md:text-6xl">
              ICAN – The International Crypto Account Number
            </h1>
            <p className="mb-6 leading-relaxed text-gray-500 md:mb-8 lg:w-4/5 xl:text-lg">
              <i>What is ICAN?</i>
            </p>
            <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
              The <b>International Crypto Account Number (ICAN)</b> is a{" "}
              <b>standardized identifier for cryptocurrency transactions,</b>{" "}
              designed to function similarly to the{" "}
              <b>International Bank Account Number (IBAN)</b> in traditional
              banking. It provides a{" "}
              <b>unique, verifiable, and structured format</b> for digital asset
              addresses, making transactions
              <b>safer, faster, and more efficient</b> across different
              platforms. By introducing a{" "}
              <b>global standard for crypto addresses,</b> ICAN helps
              <b>
                reduce errors, improve security, and enhance compatibility
              </b>{" "}
              between wallets, exchanges, and financial services.
            </p>

            <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#"
                className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
              >
                Start now
              </a>

              <a
                href="#"
                className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
              >
                Take tour
              </a>
            </div>
          </div>

          <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              loading="lazy"
              alt="Photo by Fakurian Design"
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
            in crypto transactions:
          </p>
        </div>

        <div className="mx-auto mt-8 lg:mt-0 w-full max-w-screen-lg overflow-hidden rounded-lg border bg-white shadow-sm">
          <div className="w-full overflow-hidden rounded-lg border bg-gray-50 shadow-sm">
            <div className="mx-auto flex max-w-screen-lg items-center gap-8 p-8">
              <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <a href="#" className="group flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg transition duration-100 group-hover:bg-indigo-600 group-active:bg-indigo-700 md:h-12 md:w-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>

                  <div>
                    <div className="mb-1 font-semibold">
                      {" "}
                      Human-Readable Part (HRP){" "}
                    </div>
                    <p className="text-sm text-gray-500">
                      Identifies the blockchain network or application{" "}
                      <b>(e.g., ‘cb’ for Core Blockchain Mainnet).</b>
                    </p>
                  </div>
                </a>

                <a href="#" className="group flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg transition duration-100 group-hover:bg-indigo-600 group-active:bg-indigo-700 md:h-12 md:w-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                      />
                    </svg>
                  </div>

                  <div>
                    <div className="mb-1 font-semibold">Checksum</div>
                    <p className="text-sm text-gray-500">
                      Validates the integrity of the address, preventing errors
                      in manual entry.
                    </p>
                  </div>
                </a>

                <a href="#" className="group flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg transition duration-100 group-hover:bg-indigo-600 group-active:bg-indigo-700 md:h-12 md:w-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>

                  <div>
                    <div className="mb-1 font-semibold">Data Part</div>
                    <p className="text-sm text-gray-500">
                      Encodes the actual wallet address, ensuring seamless
                      processing.
                    </p>
                  </div>
                </a>
              </div>

              <div className="hidden sm:block w-1/3 overflow-hidden rounded-lg border">
                <div className="h-48 bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1619118884592-11b151f1ae11?auto=format&q=75&fit=crop&w=320"
                    loading="lazy"
                    alt="Photo by Fakurian Design"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
            <div className="block bg-gray-50 p-4 transition duration-100 hover:bg-gray-100 active:bg-gray-200">
              <div className="mb-1 flex items-center gap-1.5">
                <span className="font-semibold leading-none">
                  With ICAN, sending and receiving digital assets becomes as
                  easy and reliable as traditional banking transactions.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-10 md:mb-16">
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                Why Use ICAN?
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
              <div className="flex divide-x rounded-lg border bg-gray-50">
                <div className="flex items-center p-2 text-indigo-500 md:p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 md:h-8 md:w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <div className="p-4 md:p-6">
                  <h3 className="mb-2 text-lg font-semibold md:text-xl">
                    Standardized Crypto Transactions
                  </h3>
                  <p className="text-gray-500">
                    ICAN <b>simplifies cryptocurrency payments</b> by using a
                    uniform format, making transactions across different
                    platforms and services <b>seamless.</b>
                  </p>
                </div>
              </div>

              <div className="flex divide-x rounded-lg border bg-gray-50">
                <div className="flex items-center p-2 text-indigo-500 md:p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 md:h-8 md:w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <div className="p-4 md:p-6">
                  <h3 className="mb-2 text-lg font-semibold md:text-xl">
                    Error Prevention & Security
                  </h3>
                  <p className="text-gray-500">
                    The <b>built-in checksum</b> automatically detects errors in
                    address input,{" "}
                    <b>preventing transaction failures and loss of funds.</b>
                  </p>
                </div>
              </div>

              <div className="flex divide-x rounded-lg border bg-gray-50">
                <div className="flex items-center p-2 text-indigo-500 md:p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 md:h-8 md:w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <div className="p-4 md:p-6">
                  <h3 className="mb-2 text-lg font-semibold md:text-xl">
                    Universal Compatibility
                  </h3>
                  <p className="text-gray-500">
                    Designed for{" "}
                    <b>wallets, exchanges, and financial institutions,</b>
                    ICAN <b>enhances interoperability,</b> ensuring your crypto
                    transactions are recognized and processed everywhere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <p className="mb-2 text-center font-semibold text-indigo-500 md:mb-3 lg:text-lg">
              Introducing
            </p>

            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              ICAN – The Future of Digital Transactions
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              As the world moves toward <b>global digital finance,</b> ICAN
              provides a<b>secure and efficient</b> way to manage cryptocurrency
              transactions, just like{" "}
              <b>IBAN revolutionized international banking.</b> <br /> Ready to
              experience <b>simplified and secure crypto payments?</b>
            </p>
          </div>
          <div className="flex flex-col mt-8 lg:mt-12 gap-2.5 sm:flex-row sm:justify-center lg:justify-center">
            <a
              href="#"
              className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
            >
              Generate Your ICAN Address
            </a>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={handleBackClick}
            className="inline-flex items-center rounded-lg bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            Back to Solutions
          </button>
        </div>
      </section>
    </div>
  );
};

export default ICAN;
