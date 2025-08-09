import { ArrowLeft, Shapes, SmartphoneNfc, ShieldCheck, Wallet } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const PayPass = () => {
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

            <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
              PayPass
            </h1>

            <p className="mb-6 leading-relaxed text-gray-500 md:mb-8 lg:w-4/5 xl:text-lg">
              A <b>PKPASS</b> file is a digital pass format primarily used by <b>Apple Wallet</b> and <b>Google Wallet</b> to store tickets, boarding passes, coupons, and payment cards. In the context of <b>PayTo protocol, PKPASS files serve as a secure and flexible method to request payments</b> while <b>protecting sensitive financial information.</b>
            </p>
            <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
              Instead of manually sharing bank details, businesses and individuals can generate a <b>.pkpass file</b> that contains the <b>PayTo payment request.</b> This file can then be shared securely with the recipient, who can import it into <b>Apple Wallet or Google Wallet</b> to process the transaction without exposing personal banking details.
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
            <div className="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-2">
              <div className="flex divide-x divide-gray-200 rounded-lg border border-gray-200 bg-gray-50">
                <div className="flex items-center p-2 text-indigo-500 md:p-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>

                <div className="p-4 md:p-6">
                  <h3 className="mb-2 text-lg font-semibold md:text-xl">
                    Enhanced Security & Privacy
                  </h3>
                  <ul className="list-disc text-gray-500 pl-5">
                    <li>
                      Instead of exposing sensitive payment details like IBAN, UPI, or BIC, the PKPASS file encapsulates payment instructions securely.
                    </li>
                    <li>
                      Reduces the risk of fraud, phishing, and unauthorized access.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex divide-x divide-gray-200 rounded-lg border border-gray-200 bg-gray-50">
                <div className="flex items-center p-2 text-indigo-500 md:p-4">
                  <Wallet className="w-6 h-6" />
                </div>

                <div className="p-4 md:p-6">
                  <h3 className="mb-2 text-lg font-semibold md:text-xl">
                    Seamless Wallet Integration
                  </h3>
                  <ul className="list-disc text-gray-500 pl-5">
                    <li>
                      PKPASS files are natively supported by Apple Wallet and Google Wallet, making it easy to import and initiate payments directly from a mobile device.
                    </li>
                    <li>
                      Transactions become contactless and digital, eliminating the need for paper invoices or manual bank transfers.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex divide-x divide-gray-200 rounded-lg border border-gray-200 bg-gray-50">
                <div className="flex items-center p-2 text-indigo-500 md:p-4">
                  <Shapes className="w-6 h-6" />
                </div>

                <div className="p-4 md:p-6">
                  <h3 className="mb-2 text-lg font-semibold md:text-xl">
                    Flexibility and Interoperability
                  </h3>
                  <ul className="list-disc text-gray-500 pl-5">
                    <li>
                      PKPASS files support multiple payment methods such as ICAN, IBAN, ACH, PIX, UPI, BIC, and more.
                    </li>
                    <li>
                      They can be customized with QR codes, barcodes, or NFC triggers for easier processing.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex divide-x divide-gray-200 rounded-lg border border-gray-200 bg-gray-50">
                <div className="flex items-center p-2 text-indigo-500 md:p-4">
                  <SmartphoneNfc className="w-6 h-6" />
                </div>

                <div className="p-4 md:p-6">
                  <h3 className="mb-2 text-lg font-semibold md:text-xl">
                    Effortless Payment Requests
                  </h3>
                  <ul className=" list-disc text-gray-500 pl-5">
                    <li>
                      Businesses can generate and send a PKPASS payment request to customers who simply import it into their wallets and approve the payment.
                    </li>
                    <li>
                      Ideal for invoices, online orders, or peer-to-peer transfers.
                    </li>
                  </ul>
                </div>
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
                    Both <b>Apple Wallet</b> and <b>Google Wallet</b> provide a <b>secure and user-friendly</b> environment for handling <b>PKPASS-based payment requests.</b> Once imported, the pass can contain:
                  </p>
                  <ul className="list-disc text-gray-500 pl-5">
                    <li>Payment instructions (PayTo details)</li>
                    <li>Expiration dates</li>
                    <li>Dynamic QR codes or barcodes for quick scanning</li>
                    <li>Company branding and customization</li>
                  </ul>
                  <p className="text-gray-500 mt-4">
                    Apple Wallet and Google Wallet provide <b>built-in encryption and biometric authentication (Face ID, Touch ID, PIN) to safeguard transactions.</b> Users can review the details <b>before approving the payment,</b> ensuring <b>secure and error-free transactions.</b>
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
              By integrating <b>PKPASS with the PayTo protocol,</b> businesses and individuals can <b>send, receive, and manage payment requests effortlessly.</b> This method ensures maximum security, easy adoption, and compatibility.
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
