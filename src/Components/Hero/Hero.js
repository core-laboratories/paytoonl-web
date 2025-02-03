import React, { useState, useEffect } from "react";

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
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === animatedTexts[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prevIndex) => (prevIndex + 1) % animatedTexts.length);
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prevSubIndex) => prevSubIndex + (isDeleting ? -1 : 1));
      },
      isDeleting ? 50 : 150
    );

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index, animatedTexts]);

  useEffect(() => {
    setCurrentText(animatedTexts[index].substring(0, subIndex));
  }, [subIndex, index, animatedTexts]);

  return (
    <div className="w-full bg-[rgba(9,14,52,0.85)] font-display  flex flex-col items-center justify-center h-70 space-y-2.5">
      <h1 className="container mx-auto text-6xl font-bold flex items-center justify-center">
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
