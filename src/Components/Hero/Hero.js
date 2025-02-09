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
    "$€¥₽",
  ];
  const currentText = useTypedText(animatedTexts);

  return (
    <div className="w-full bg-transparent font-display flex flex-col items-center justify-center h-110 sm:h-145 space-y-2.5">
      {" "}
      <h1 className="container mx-auto text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold flex items-center justify-center">
        <span className="italic bg-gradient-to-r from-green-300 to-green-700 bg-clip-text text-transparent leading-tight pb-1">
          {staticText}
        </span>
        <span className="italic text-[#f5f5dc] font-medium pl-2">
          {currentText}
        </span>
      </h1>
      <h1 className="container mx-auto text-xl text-emerald-300 font-bold flex items-center justify-center">
        Direct Assets Transfer
      </h1>
    </div>
  );
};

export default Hero;
