import React from "react";
import Hero from "../../Components/Alliance/Hero/Hero.tsx";
import Organizations from "../../Components/Alliance/Organizations/Organizations.tsx";
import Features from "../../Components/Alliance/Features/Features.tsx";
import Blocks from "../../Components/Alliance/Blocks/Blocks.tsx";

const Alliance = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Organizations />
      <Features />
      <Blocks />
      <div className="container mt-12 mx-auto bg-white py-8 sm:py-12 lg:py-24 px-4 lg:px-0 ">
        <div className="mx-auto max-w-screen-2xl">
          <p className="mb-2 text-center font-semibold text-indigo-500 md:mb-3 lg:text-lg">
            Join Us
          </p>

          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Shape the Future of Payments – Join Us Today!
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Be a part of the movement that is redefining financial transactions
            for the digital age. Together, we can build a global ecosystem where
            payments are frictionless, standardized, and secure.
          </p>
          <div className="flex w-full flex-col sm:flex-row mt-12 sm:justify-center">
            <a
              href="#"
              className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
            >
              Apply
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alliance;
