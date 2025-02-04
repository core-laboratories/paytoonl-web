// filepath: /home/ingrid/work/paytoonl-web/src/Components/Carousel/Carousel.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "./Arrows";
import carouselsData from "../../../static/data/carousels.json";
import headerLogoDark from "../../../public/static/logo/header_logo_dark.png";
import "./Carousel.css"; // Import the custom CSS

// Map the keys to the imported images
const imageMap = {
  header_logo_dark: headerLogoDark,
};

const Carousel = ({ carouselKey }) => {
  const logos = carouselsData[carouselKey];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="container mx-auto pt-15 pb-15 overflow-visible relative">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div
            key={index}
            className="px-4 overflow-visible relative slick-slide-custom"
          >
            <a
              href={logo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 focus:z-10"
            >
              <img
                src={imageMap[logo.key]}
                alt={`Logo ${index + 1}`}
                className="w-full h-auto transition-transform duration-300 transform hover:scale-110  hover:z-20"
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
