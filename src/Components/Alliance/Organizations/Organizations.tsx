import React from "react";
import Slider from "react-slick";
const SliderComponent = Slider as any;
import allianceMembers from "../../../data/allianceMembers.json" with { type: "json" };
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Organizations = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: false,
    centerMode: false,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
          Alliance Members
        </h2>

        <div className="px-2 sm:px-4">
          <SliderComponent {...settings}>
            {allianceMembers.map((member, index) => (
              <div key={index} className="flex justify-center text-indigo-500 px-2 sm:px-4">
                <a href={member.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={member.logo}
                    alt={member.name}
                    className="h-12 sm:h-14 lg:h-16 w-auto mx-auto"
                  />
                </a>
              </div>
            ))}
          </SliderComponent>
        </div>

        <div className="flex justify-center mt-8">
          <a href="/members" className="w-full sm:w-auto block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">
            View All Members
          </a>
        </div>
      </div>
    </div>
  );
};

export default Organizations;
