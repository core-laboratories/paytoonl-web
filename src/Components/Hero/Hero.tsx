import React from "react";
import useTypedText from "../../hooks/useTypedText";
import heroImage from "../../../public/static/images/hero.jpg";

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
      <img src={heroImage} loading="lazy" alt="PayTo 3D logo" className="absolute inset-0 h-full w-full object-cover object-center" />

      <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply"></div>

      <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
        <p className="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8">Visionaries Beyond Financial Flow</p>
        <h1 className="mb-8 text-center text-4xl text-white sm:text-5xl md:mb-12 md:text-6xl">PayTo:{currentText}</h1>

        <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
          <a href="https://payto.money" target="_blank" rel="noopener noreferrer" className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Start using</a>

          <a href="/alliance" className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Join Alliance</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
