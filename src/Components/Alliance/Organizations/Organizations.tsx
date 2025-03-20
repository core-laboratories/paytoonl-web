import React from "react";
import Slider from "react-slick";
import allianceMembers from "../../../data/allianceMembers.json";
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
          Trusted by the best
        </h2>

        <Slider {...settings}>
          {allianceMembers.map((member, index) => (
            <div key={index} className="flex justify-center text-indigo-500">
              <a href={member.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={member.logo}
                  alt={member.name}
                  className="h-24 w-auto sm:h-32 lg:h-40 mx-auto"
                />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Organizations;
