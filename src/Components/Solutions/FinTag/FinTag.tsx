import React from "react";
import { useNavigate } from "react-router-dom";

const FinTag = () => {
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

            <p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">
              Very proud to introduce
            </p>
            <h1 className="mb-6 text-4xl font-bold text-black sm:text-5xl md:mb-4 md:text-6xl">
              FinTag
            </h1>
            <p className="mb-6 leading-relaxed text-gray-500 md:mb-8 lg:w-4/5 xl:text-lg">
              <i>
                FinTag - A Meta Tag Standard for Financial Payment Information
              </i>
            </p>
            <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
              A <b>meta tag</b> is an HTML element that provides metadata about
              a webpage, typically used for SEO, social media previews, or site
              functionality. These tags reside in the &lt;head&gt; section of a
              webpage and do not display content directly but provide essential
              information to browsers, search engines, and other automated
              systems. <br />
              <b>FinTag</b> is an innovative meta tag concept designed to store
              and display financial payment details such as{" "}
              <b>IBAN, ICAN, ACH, PIX, UPI, BIC,</b> and other payment
              identifiers.
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
              src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&q=75&fit=crop&w=1000"
              loading="lazy"
              alt="Photo by Fakurian Design"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
          Showcase
        </h2>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <pre className="text-sm text-gray-700 whitespace-pre-wrap break-words">
            {`<meta property="iban" content="BE68539007547034" />`}
            <br />
            {`<meta property="upi" content="example@upi" />`}
            <br />
            {`<meta property="bic" content="DEUTDEFF" />`}
          </pre>
        </div>
      </section>

      <section className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Why is FinTag Important?
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
            <div className="flex divide-x rounded-lg border bg-gray-50 h-auto">
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
                  Authenticity & Trust
                </h3>
                <p className="text-gray-500">
                  FinTag helps businesses and financial institutions provide
                  verified payment details directly in their website’s metadata.
                  This <b>can prevent fraud and scams</b> by ensuring that
                  visitors and automated services retrieve official payment
                  details instead of falling prey to phishing attacks.
                </p>
              </div>
            </div>

            <div className="flex divide-x rounded-lg border bg-gray-50 h-auto">
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
                  Automation & Integration
                </h3>
                <p className="text-gray-500">
                  Browser extensions, payment apps, and digital services can
                  <b>auto-detect FinTags</b> on a webpage, enabling{" "}
                  <b>seamless transactions</b> without manual input errors. For
                  instance, a banking extension could automatically recognize
                  and pre-fill a payment form using the information in FinTags.
                </p>
              </div>
            </div>

            <div className="flex divide-x rounded-lg border bg-gray-50 h-auto">
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
                  Decentralized & Open-Source
                </h3>
                <p className="text-gray-500">
                  The FinTag standard is <b>flexible and open-source</b>,
                  allowing businesses, nonprofits, and individuals to{" "}
                  <b>integrate it into any website.</b> Each subpage can include
                  different payment details, making it a robust solution for
                  large organizations with multiple departments or divisions.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 lg:mt-8">
            <div className="flex divide-x rounded-lg border bg-gray-50 w-full sm:w-1/3 h-auto">
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
                  Improved Payment Experience
                </h3>
                <p className="text-gray-500">
                  Clients and customers can instantly{" "}
                  <b>verify payment details</b> before initiating a transfer,
                  reducing the chances of incorrect payments or fraudulent
                  transactions.
                </p>
              </div>
            </div>

            <div className="flex divide-x rounded-lg border bg-gray-50 w-full sm:w-1/3 h-auto">
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
                  Universal Standardization
                </h3>
                <p className="text-gray-500">
                  FinTag can serve as a{" "}
                  <b>universal financial metadata standard,</b>
                  making online transactions more{" "}
                  <b>transparent, efficient, and secure.</b>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-12 lg:mt-24 pb-12 lg-pb-0 items-center justify-center text-center">
            <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
              By adopting <b>FinTag,</b> institutions and businesses can create
              a safer financial environment for their clients, ensuring payment
              authenticity while streamlining digital transactions.
            </p>

            <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-center">
              <a
                href="#"
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
