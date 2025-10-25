import React from "react";
import { BotMessageSquare, MessageSquareCode, MessageSquareLock, RadioTower } from "lucide-react";

const TxMS = () => {
  return (
    <>
      <section className="container mx-auto flex flex-col px-4 gap-6 sm:gap-10 md:gap-16 lg:px-0">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
          <div className="flex flex-col justify-center sm:text-center lg:pb-12 lg:text-left xl:w-5/12 xl:pb-24">
            <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
              TxMS
            </h1>

            <p className="mb-6 leading-relaxed text-gray-500 md:mb-8 lg:w-4/5 xl:text-lg">
              Transaction Message Service (TxMS) is a secure and standardized messaging protocol designed to make financial transactions and blockchain communications more efficient and reliable. It ensures that transaction-related messages can be sent, received, and understood across different platforms without errors.
            </p>
            <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
              Whether it's a payment request, digital invoice, or blockchain transaction message, TxMS ensures that the information is formatted correctly and securely delivered.
            </p>

            <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="https://txms.info/"
                className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
              >
                Use TxMS
              </a>
            </div>
          </div>

          <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12 max-h-96">
            <img
              src="/static/images/splash-txms.jpg"
              loading="lazy"
              alt="Photo by Rastislav Vašička"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-10 md:mb-16">
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                TxMS Features
              </h2>

              <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                TxMS offers offline digital payments and transactions.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:border-indigo-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors duration-200">
                    <RadioTower className="w-6 h-6 text-indigo-500" />
                  </div>
                </div>

                <h3 className="mb-3 text-lg font-semibold text-gray-800">
                  Reliable Transaction Messaging
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  TxMS ensures that important transaction details are correctly transmitted, preventing errors and miscommunication. This is especially useful for banks, digital wallets, and blockchain applications.
                </p>
              </div>

              <div className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:border-indigo-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors duration-200">
                    <MessageSquareLock className="w-6 h-6 text-indigo-500" />
                  </div>
                </div>

                <h3 className="mb-3 text-lg font-semibold text-gray-800">
                  Secure and Standardized Format
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  TxMS follows a universal standard for financial messaging, ensuring that messages are always readable and compatible across different platforms.
                </p>
              </div>

              <div className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:border-indigo-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors duration-200">
                    <MessageSquareCode className="w-6 h-6 text-indigo-500" />
                  </div>
                </div>

                <h3 className="mb-3 text-lg font-semibold text-gray-800">
                  Perfect for Digital Payments
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  With TxMS, payment instructions, confirmations, and invoices can be sent in a way that's easy to process and verify — even over traditional communication channels like SMS or MMS.
                </p>
              </div>

              <div className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:border-indigo-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors duration-200">
                    <BotMessageSquare className="w-6 h-6 text-indigo-500" />
                  </div>
                </div>

                <h3 className="mb-3 text-lg font-semibold text-gray-800">
                  Reduces Errors & Fraud
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  By using TxMS, businesses and users can be confident that the payment details they receive are accurate, reducing the risk of fraud or sending money to the wrong account.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-10 md:mb-16">
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                Workflow
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-1 md:gap-8 xl:grid-cols-1">
              <div className="flex divide-x divide-gray-200 rounded-lg border border-gray-200 bg-gray-50 max-w-screen-md mx-auto">
                <div className="p-4 md:p-6">
                  <ol className="list-decimal text-lg text-gray-500 pl-5">
                    <li>
                      Your wallet composes a message with the transaction details
                    </li>
                    <li>
                      Message is encoded with TxMS library for better efficiency
                    </li>
                    <li>
                      Message is sent to TxMS number
                    </li>
                    <li>
                      Transaction is streamed and confirmed
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-xl px-4 md:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              <div>
                <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-146">
                  <img
                    src="/static/images/splash-txms-usecases.jpg"
                    loading="lazy"
                    alt="Photo by Rastislav Vašička"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>

              <div className="md:pt-8">
                <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                  Use Cases
                </h1>

                <ul className="px-6 list-disc mb-6 text-gray-500 sm:text-lg md:mb-8">
                  <li>
                    Banks & Financial Institutions – To send secure and structured payment requests
                  </li>
                  <li>
                    Crypto Wallets & Exchanges – To facilitate digital asset transactions
                  </li>
                  <li>
                    Businesses & Merchants – To send invoices and payment confirmations in a standardized way
                  </li>
                  <li>
                    Consumers & Individuals – To receive trusted transaction messages when making payments
                  </li>
                </ul>

                <h2 className="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">
                  Numbers
                </h2>

                <div className="px-6 mb-6 text-gray-500 sm:text-lg md:mb-8 text-center sm:text-left">
                  <div className="mb-3">
                    <div className="font-semibold text-gray-800">Core Mainnet Number</div>
                    <a href="tel:+12019715152" className="text-indigo-500">
                      +1 (201) 971-5152
                    </a>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Core Testnet Number</div>
                    <a href="tel:+12014835939" className="text-indigo-500">
                      +1 (201) 483-5939
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Offline Digital Payments
            </h2>

            <p className="mx-auto max-w-screen-md mb-8 text-center text-gray-500 md:text-lg">
              TxMS is a secure and standardized messaging protocol designed to make digital and blockchain transactions available offline and without internet connection.
            </p>
          </div>
          <div className="mt-16 flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-center">
            <a
              href="https://txms.info/"
              className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
            >
              TxMS website
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default TxMS;
