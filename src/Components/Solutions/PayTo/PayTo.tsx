import React from "react";
import data from "../../../data/paytoStandarts.json" with { type: "json" };
import { ArrowRight } from "lucide-react";

const PayTo = () => {
  return (
    <section className="container mx-auto flex flex-col px-4 gap-6 sm:gap-10 md:gap-16 lg:px-0">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
        <div className="flex flex-col justify-center sm:text-center lg:pb-12 lg:text-left xl:w-5/12 xl:pb-24">
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
              href="https://payto.money"
              target="_blank"
              rel="noopener"
              className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
            >
              Generate PayTo
            </a>
          </div>
        </div>

        <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12 max-h-96">
          <img
            src="/static/images/splash-payto.jpg"
            loading="lazy"
            alt="Photo by Clay Banks"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      {/* table */}
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-2 sm:px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Supported Standards
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              The PayTo protocol supports the following standards:
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
            {data.map((item, index) => (
              <a
                key={index}
                href={item.link.href}
                className="group flex flex-col rounded-lg border border-gray-200 p-4 md:p-6 hover:shadow-md hover:border-indigo-200 transition-all duration-200 cursor-pointer"
              >
                <h3 className="mb-2 text-lg font-semibold md:text-xl">
                  {item.title}
                </h3>
                <p className="mb-4 text-gray-500">{item.text}</p>
                <div className="mt-auto inline-flex items-center gap-1 text-indigo-500 transition duration-200 group-hover:text-indigo-600">
                  {item.link.text}
                  <ArrowRight className="h-4 w-4" />
                </div>
                </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col pb-12 lg-pb-0 items-center justify-center text-center">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
          PayTo Protocol
        </h2>

        <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
          PayTo is natively supported in Google Chromium across mobile and tablet devices, enabling direct payments from browsers and apps. As an open standard, it ensures broad compatibility across platforms and financial institutions.
        </p>

        <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-center">
          <a
            href="https://payto.money"
            target="_blank"
            rel="noopener"
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
