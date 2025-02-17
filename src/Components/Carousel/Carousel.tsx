import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carouselsData from "../../data/carousels.json";
import headerLogoDark from "../../../public/static/icons/logo.svg";

// Map the keys to the imported images
const imageMap = {
  header_logo_dark: headerLogoDark,
};

const Carousel = ({ carouselKey }) => {
  const logos = carouselsData[carouselKey];

  const SliderComponent = !!Slider.default ? Slider.default : Slider;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className=" pt-15 pb-15 overflow-visible relative">
      <SliderComponent {...settings}>
        {logos.map((logo, index) => (
          <div
            key={index}
            className="px-4 overflow-visible relative slick-slide-custom w-fit "
          >
            <a
              href={logo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 focus:z-10 inline-flex items-center gap-2 text-2xl font-semibold text-dark dark:text-white"
            >
              <img
                src={imageMap[logo.key]}
                alt={`Logo ${index + 1}`}
                className="w-auto h-auto max-w-full max-h-20   l h-auto transition-transform duration-300 transform hover:scale-110 hover:z-20"
              />
              <span>PayTo:Alliance</span>
            </a>
          </div>
        ))}
      </SliderComponent>
    </div>
  );
};

export default Carousel;
