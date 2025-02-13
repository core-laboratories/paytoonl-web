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
    <section
      className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply"
      style={{
        backgroundImage:
          "url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')",
      }}
    >
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="container mx-auto text-7xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold flex items-center justify-center">
          <span
            className="italic leading-tight pb-1"
            style={{
              background:
                "linear-gradient(to right,rgb(142, 219, 135),rgb(78, 195, 60),rgb(61, 145, 42))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            {staticText}
          </span>
          <span
            className="italic font-medium pl-2"
            style={{ color: "var(--color-orange-50)" }}
          >
            {currentText}
          </span>
        </h1>
        <h1
          className="container mx-auto text-xl font-bold flex items-center justify-center"
          style={{ color: "rgb(142, 219, 135)" }}
        >
          Direct Assets Transfer
        </h1>
      </div>
    </section>
  );
};

export default Hero;
