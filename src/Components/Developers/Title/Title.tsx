import React from "react";

const Title = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="flex max-w-xl flex-col items-center pb-0 pt-8 text-center sm:pb-16 lg:pb-32 lg:pt-32">
        <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
          Get Involved – Start Building Today!
        </h1>

        <p className="mb-2 leading-relaxed text-gray-500  xl:text-lg">
          🚀 Explore our APIs, SDKs, and open-source resources to integrate
          ICAN, ORIC, and PayTo protocols into your solutions.
        </p>
        <div className="mb-8 leading-relaxed text-gray-500 md:mb-12 xl:text-lg">
          💡 Want to list your company as a PayTo development partner?
          <p>
            <a
              href="#"
              className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              Apply Here
            </a>
          </p>
        </div>

        <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
          <a
            href="#"
            className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
          >
            Join Us
          </a>

          <a
            href="#"
            className="inline-block rounded-lg border bg-white px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
          >
            Take tour
          </a>
        </div>
      </div>
    </section>
  );
};

export default Title;
