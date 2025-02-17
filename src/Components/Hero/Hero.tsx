import React from "react";
import useTypedText from "../../hooks/useTypedText";

const Hero = () => {
  const staticText = "PayTo:";
  const animatedTexts = [
    "ICAN",
    "IBAN",
    "ACH",
    "UPI",
    "PIX",
    "BIC",
    "CASH",
    "$€¥₹₽",
  ];
  const currentText = useTypedText(animatedTexts);
  return (
    <div className="dark:bg-gray-900 dark:text-gray-100">
      <div className="relative container mx-auto px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
        <div className="text-center">
          {/* <div className="mb-2 inline-flex rounded-sm border border-gray-200 bg-gray-100 px-2 py-1 text-sm leading-4 font-medium text-gray-800 dark:border-gray-600/50 dark:bg-gray-700/50 dark:text-gray-200">
            v6.0 Latest Version
          </div> */}
          <h1 className="container mx-auto text-2xl sm:text-5xl md:text-3xl lg:text-4xl xl:text-6xl font-bold flex items-center justify-center">
            <span className="italic bg-gradient-to-r from-green-300 to-green-700 bg-clip-text text-transparent leading-tight pb-1">
              {staticText}
            </span>
            <span className="italic text-gray-700 font-medium pl-2 dark:text-white">
              {currentText}
            </span>
          </h1>
          <h1 className="container mx-auto text-xl text-emerald-500 mt-2 font-bold flex items-center justify-center">
            Direct Assets Transfer
          </h1>
        </div>
        <div className="flex flex-col gap-2 pt-10 pb-20 sm:flex-row sm:items-center sm:justify-center">
          {/* <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-700 bg-emerald-700 px-7 py-3.5 leading-6 font-semibold text-white hover:border-emerald-600 hover:bg-emerald-600 hover:text-white focus:ring-3 focus:ring-emerald-400/50 active:border-emerald-700 active:bg-emerald-700 dark:focus:ring-emerald-400/90"
          >
            <svg
              className="hi-mini hi-arrow-down-tray inline-block size-5 opacity-75"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
              <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
            </svg>
            <span>Download for free</span>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-7 py-3.5 leading-6 font-semibold text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-xs focus:ring-3 focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
          >
            <span>Learn more</span>
          </a> */}
        </div>
        <div className="relative mx-5 lg:mx-32">
          <div className="bg-tranparent absolute top-0 left-0 -mt-16 -ml-20 size-40 rounded-full border border-emerald-200 lg:size-72 dark:border-emerald-900" />
          <div className="bg-tranparent absolute top-0 left-0 -mt-20 -ml-14 size-40 rounded-full border border-emerald-100 lg:size-72 dark:border-emerald-950" />
          <div className="bg-tranparent absolute right-0 bottom-0 -mr-20 -mb-16 size-40 rounded-full border border-emerald-200 lg:size-72 dark:border-emerald-900" />
          <div className="bg-tranparent absolute right-0 bottom-0 -mr-14 -mb-20 size-40 rounded-full border border-emerald-100 lg:size-72 dark:border-emerald-950" />
          <div className="absolute inset-0 -m-6 -rotate-2 rounded-xl bg-emerald-100 lg:-m-8 dark:bg-gray-800" />
          <div className="absolute inset-0 -m-6 rotate-1 rounded-xl bg-emerald-800/75 shadow-inner lg:-m-8 dark:bg-emerald-900/75" />
          <img
            src="https://cdn.tailkit.com/media/placeholders/photo-1SAnrIxw5OY-1280x800.jpg"
            className="relative mx-auto rounded-lg shadow-lg"
            alt="Hero Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
