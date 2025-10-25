import { Shapes, SmartphoneNfc, ShieldCheck, Wallet } from "lucide-react";
import React from "react";

const PayPass = () => {

  return (
    <>
      <section className="container mx-auto flex flex-col px-4 gap-6 sm:gap-10 md:gap-16 lg:px-0">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
          <div className="flex flex-col justify-center sm:text-center lg:pb-12 lg:text-left xl:w-5/12 xl:pb-24">
            <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
              PayPass
            </h1>

            <p className="mb-6 leading-relaxed text-gray-500 md:mb-8 lg:w-4/5 xl:text-lg">
              A PKPASS file is a digital pass format primarily used by Apple Wallet and Google Wallet to store tickets, boarding passes, coupons, and payment cards. In the context of the PayTo protocol, PKPASS files serve as a secure and flexible method to request payments while protecting sensitive financial information.
            </p>
            <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
              Instead of manually sharing bank details, businesses and individuals can generate a .pkpass file that contains the PayTo payment request. This file can then be shared securely with the recipient, who can import it into Apple Wallet or Google Wallet to process the transaction without exposing personal banking details.
            </p>

            <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="https://payto.money?pass=1"
                target="_blank"
                rel="noopener"
                className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
              >
                Generate PayPass
              </a>
            </div>
          </div>

          <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12 max-h-96">
            <img
              src="/static/images/splash-pass.jpg"
              loading="lazy"
              alt="Photo by yadunandlal"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-10 md:mb-16">
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                PayPass Features
              </h2>

              <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                PayPass offers a secure and flexible way to request payments, while protecting sensitive financial information.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:border-indigo-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors duration-200">
                    <ShieldCheck className="w-6 h-6 text-indigo-500" />
                  </div>
                </div>

                <h3 className="mb-3 text-lg font-semibold text-gray-800">
                  Enhanced Security & Privacy
                </h3>
                <ul className="text-gray-500 text-sm leading-relaxed space-y-2">
                  <li>
                    Instead of exposing sensitive payment details like IBAN, UPI, or BIC, the PKPASS file encapsulates payment instructions securely
                  </li>
                  <li>
                    Reduces the risk of fraud, phishing, and unauthorized access
                  </li>
                </ul>
              </div>

              <div className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:border-indigo-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors duration-200">
                    <Wallet className="w-6 h-6 text-indigo-500" />
                  </div>
                </div>

                <h3 className="mb-3 text-lg font-semibold text-gray-800">
                  Seamless Wallet Integration
                </h3>
                <ul className="text-gray-500 text-sm leading-relaxed space-y-2">
                  <li>
                    PKPASS files are natively supported by Apple Wallet and Google Wallet, making it easy to import and initiate payments directly from a mobile device
                  </li>
                  <li>
                    Transactions become contactless and digital, eliminating the need for paper invoices or manual bank transfers
                  </li>
                </ul>
              </div>

              <div className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:border-indigo-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors duration-200">
                    <Shapes className="w-6 h-6 text-indigo-500" />
                  </div>
                </div>

                <h3 className="mb-3 text-lg font-semibold text-gray-800">
                  Flexibility and Interoperability
                </h3>
                <ul className="text-gray-500 text-sm leading-relaxed space-y-2">
                  <li>
                    PKPASS files support multiple payment methods such as ICAN, IBAN, ACH, PIX, UPI, BIC, and more
                  </li>
                  <li>
                    They can be customized with QR codes, barcodes, or NFC triggers for easier processing
                  </li>
                </ul>
              </div>

              <div className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:border-indigo-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors duration-200">
                    <SmartphoneNfc className="w-6 h-6 text-indigo-500" />
                  </div>
                </div>

                <h3 className="mb-3 text-lg font-semibold text-gray-800">
                  Effortless Payment Requests
                </h3>
                <ul className="text-gray-500 text-sm leading-relaxed space-y-2">
                  <li>
                    Businesses can generate and send a PKPASS payment request to customers who simply import it into their wallets and approve the payment
                  </li>
                  <li>
                    Ideal for invoices, online orders, or peer-to-peer transfers
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-xl px-4 md:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              <div>
                <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                  <img
                    src="/static/images/wallet.jpg"
                    loading="lazy"
                    alt="Photo by Martin Sanchez"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>

              <div>
                <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                  Apple Wallet & Google Wallet
                </h1>

                <div>
                  <p className="text-gray-500">
                    Both Apple Wallet and Google Wallet provide a secure and user-friendly environment for handling PKPASS-based payment requests. Once imported, the pass can contain:
                  </p>
                  <ul className="list-disc text-gray-500 pl-5">
                    <li>Payment instructions (PayTo details)</li>
                    <li>Expiration dates</li>
                    <li>Dynamic QR codes or barcodes for quick scanning</li>
                    <li>Company branding and customization</li>
                  </ul>
                  <p className="text-gray-500 mt-4">
                    Apple Wallet and Google Wallet provide built-in encryption and biometric authentication (Face ID, Touch ID, PIN) to safeguard transactions. Users can review the details before approving the payment, ensuring secure and error-free transactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Digital Payments with PayPass
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              By integrating PKPASS with the PayTo protocol, businesses and individuals can send, receive, and manage payment requests effortlessly. This method ensures maximum security, easy adoption, and compatibility.
            </p>
          </div>
          <div className="flex flex-col mt-8 lg:mt-12 gap-2.5 sm:flex-row sm:justify-center lg:justify-center">
            <a
              href="https://payto.money?pass=1"
              target="_blank"
              rel="noopener"
              className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
            >
              Generate PayPass
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default PayPass;
