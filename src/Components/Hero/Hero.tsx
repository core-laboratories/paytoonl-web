import React from "react";
import useTypedText from "../../hooks/useTypedText.js";

const Hero = () => {
  const animatedTexts = [
    "ICAN",
    "IBAN",
    "ACH",
    "UPI",
    "PIX",
    "BIC",
    "CASH",
    "$€¥₹₽",
    "Money"
  ];
  const currentText = useTypedText(animatedTexts);
  return (
    <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
      <img src="/static/images/hero.jpg" loading="lazy" alt="PayTo 3D logo" className="absolute inset-0 h-full w-full object-cover object-center" />

      <div className="absolute inset-0 bg-[#77bb65]/80 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-[#77bb65]/80 mix-blend-multiply"></div>

      <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
        <p className="mb-4 text-center text-lg text-green-200 sm:text-xl md:mb-8">Visionaries Beyond Financial Flow</p>
        <h1 className="mb-8 text-center text-4xl text-white sm:text-5xl md:mb-12 md:text-6xl">PayTo:{currentText}</h1>

        <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
          <a href="/solutions" className="inline-block rounded-lg bg-[#77bb65]/80 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-green-300 transition duration-100 hover:bg-[#77bb65] focus-visible:ring active:bg-green-700 md:text-base">Solutions</a>

          <a href="/alliance" className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-green-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Alliance</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
