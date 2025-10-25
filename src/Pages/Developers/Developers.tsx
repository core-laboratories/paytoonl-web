import React from "react";
import Organizations from "../../Components/Developers/Organizations/Organizations.tsx";
import Features from "../../Components/Developers/Features/Features.tsx";
import Title from "../../Components/Developers/Title/Title.tsx";

const Developers = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-0">
      <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
        <div className="flex flex-col items-start sm:text-left lg:items-start lg:text-left xl:w-5/12">
          <p className="mb-4 font-semibold text-black md:mb-6 md:text-md xl:text-md">
            Build the Future of Finance
          </p>
          <h1 className="mb-8 text-4xl font-bold text-left text-black sm:text-5xl md:mb-12 md:text-6xl">
            Developers
          </h1>
          <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
            The PayTo ecosystem is powered by top development organizations and fintech innovators who are actively building, integrating, and expanding global financial standards such as ICAN (International Crypto Account Number), ORIC (Organization Identifier Code), FinTag (Financial Metadata Tags), and TxMS (Transaction Message Service).
          </p>
          <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
            These technologies are open, interoperable, and designed for modern digital finance.
          </p>

          <div className="w-full sm:w-auto">
            <a
              href="/solutions"
              className="w-full sm:w-auto block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
            >
              View Solutions
            </a>
          </div>
        </div>

        <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
          <img
            src="/static/images/rubik.jpg"
            loading="lazy"
            alt="Photo by Rastislav Vašička"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </section>
      <Organizations />
      <Features />
      <Title />
    </div>
  );
};

export default Developers;
