import React from "react";
import { useNavigate } from "react-router-dom";
import data from "../../../data/paytoStandarts.json";

const PayTo = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/solutions");
  };
  return (
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

          <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
            PayTo
          </h1>

          <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
            The PayTo protocol is a universal payment initiation standard
            designed to streamline digital transactions by providing a
            consistent and interoperable way to represent payment targets. It
            simplifies how payments are directed between users, businesses, and
            financial institutions, ensuring a seamless experience across
            different payment systems. By defining a structured method for
            specifying payment details, the protocol enhances automation,
            reduces errors, and increases efficiency in financial transactions.
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
            src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e?auto=format&q=75&fit=crop&w=1000"
            loading="lazy"
            alt="Photo by Fakurian Design"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      {/* table */}
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Supported Standards
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col rounded-lg border p-4 md:p-6"
              >
                <h3 className="mb-2 text-lg font-semibold md:text-xl">
                  {item.title}
                </h3>
                <p className="mb-4 text-gray-500">{item.text}</p>
                <a
                  href={item.link.href}
                  className="mt-auto font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                >
                  {item.link.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col pb-12 lg-pb-0 items-center justify-center text-center">
        <p className="mb-2 text-center font-semibold text-indigo-500 md:mb-3 lg:text-lg">
          Introducing
        </p>

        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
          PayTo protocol
        </h2>

        <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
          Adopted by Google Chromium, the <b>PayTo</b> protocol is now natively
          supported across all mobile devices and tablets, making it widely
          accessible for everyday use. This allows users to initiate payments
          directly from web browsers and apps without relying on proprietary
          payment solutions. As an open standard, it ensures compatibility
          across different platforms and financial institutions, driving
          innovation and accessibility in digital payments.
        </p>

        <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-center">
          <a
            href="#"
            className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
          >
            Generate PayTo
          </a>
        </div>
      </div>
    </section>
  );
};

export default PayTo;
