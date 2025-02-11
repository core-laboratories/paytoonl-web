import React from "react";
import Hero from "../../Components/Hero/Hero";
import Table from "../../Components/Table/Table";
import Carousel from "../../Components/Carousel/Carousel";
import Button from "../../Components/Button/Button";
import Navbar from "../../Components/Navbar/Navbar";
import GradientLink from "../../Components/GradientLink/GradientLink";
import bgIntro from "../../../public/static/img/bg-intro.jpg";
import shinyOverlay from "../../../public/static/img/shiny-overlay.svg";
import shinyOverlayDark from "../../../public/static/img/shiny-overlay-dark.svg";
import shinyOverlayRev from "../../../public/static/img/shiny-overlay-rev.svg";
import shinyOverlayDarkRev from "../../../public/static/img/shiny-overlay-dark-rev.svg";

import Accordion from "../../Components/FAQ/FAQ";

import tableData from "../../../static/data/tableData.json";

const Home = () => {
  const { columns, data } = tableData.home;

  return (
    <div className="font-display min-h-screen flex flex-col">
      <div
        className="bg-cover bg-center w-full"
        style={{ backgroundImage: `url(${bgIntro})` }}
      >
        <Navbar />
        <Hero />
      </div>
      <div className="w-full h-[1px] bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-700 dark:to-gray-900"></div>

      <div
        className="relative py-[120px] bg-cover bg-center dark:hidden"
        style={{ backgroundImage: `url(${shinyOverlay})` }}
      >
        <Table columns={columns} data={data} />
      </div>
      <div
        className="relative py-[120px]  bg-cover bg-center hidden dark:block "
        style={{ backgroundImage: `url(${shinyOverlayDark})` }}
      >
        <Table columns={columns} data={data} />
      </div>
      <div className="w-full h-[1px] bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-600 dark:to-gray-900"></div>
      <div
        className="relative py-[150px] bg-cover bg-center dark:hidden"
        style={{ backgroundImage: `url(${shinyOverlayRev})` }}
      >
        <div className="container mx-auto px-13">
          <h1 className="text-black-500 font-bold text-2xl text-left">
            PayTo: Consortium
          </h1>
          <div className="w-full h-[1px] bg-gray-300 mt-4"></div>
        </div>
        <Carousel carouselKey="homeCarousel" />
        <div className="mt-8 container mx-auto w-1/2">
          <Button text="Join us" />
        </div>
      </div>
      <div
        className="relative py-[150px] hidden dark:block bg-cover bg-center"
        style={{ backgroundImage: `url(${shinyOverlayDarkRev})` }}
      >
        <div className="container mx-auto px-13">
          <h1 className="text-white font-bold text-2xl text-left">
            PayTo: Consortium
          </h1>
          <div className="w-full h-[1px] bg-gray-300 mt-4"></div>
        </div>
        <Carousel carouselKey="homeCarousel" />
        <div className="mt-8 container mx-auto w-1/2">
          <Button text="Join us" />
        </div>
      </div>
      <div className="w-full h-[1px] bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-700 dark:to-gray-900"></div>

      <div
        className="bg-cover bg-center w-full py-[120px]"
        style={{ backgroundImage: `url(${bgIntro})` }}
      >
        <div className="container mx-auto px-13">
          <h1 className="text-white font-bold text-5xl text-center">
            Developers
          </h1>
          <p className="text-white text-xl text-center mt-4 italic">
            We develop Open-Source platforms.
          </p>
          <div className="flex flex-col items-center m-15 gap-8 w-full mx-auto lg:w-auto">
            <GradientLink
              url="https://github.com/core-laboratories"
              text="Open GitHub"
              className="text-xl uppercase font-bold w-full text-center lg:w-auto"
            />
            <GradientLink
              url="/solutions"
              text="Read more about Products"
              className="text-xl uppercase font-bold w-full text-center lg:w-auto"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-800 dark:to-gray-500"></div>

      <Accordion />
      <div className="w-full h-[1px] bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-700 dark:to-gray-900"></div>
    </div>
  );
};

export default Home;
