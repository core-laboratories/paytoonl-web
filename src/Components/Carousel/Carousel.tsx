"use client";
import React from "react";
import icon from "../../../public/static/icons/logo.svg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./Carousel.css";

export default function CarouselLogos() {
  return (
    <div className="h-64 w-full my-11 sm:h-48 xl:h-64 2xl:h-80">
      <Carousel
        autoPlay
        interval={2000}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        stopOnHover
        className="carousel-container"
      >
        <div className="flex justify-center items-center h-full mb-[50px]">
          <img
            src={icon}
            alt="..."
            className="w-32 h-48 mb-[50px] object-contain"
          />
        </div>
        <div className="flex justify-center items-center h-full mb-[50px]">
          <img
            src={icon}
            alt="..."
            className="w-32 h-48  mb-[50px] object-contain"
          />
        </div>
        <div className="flex justify-center items-center h-full mb-[50px]">
          <img
            src={icon}
            alt="..."
            className="w-32 h-48 mb-[80px] object-contain"
          />
        </div>
        <div className="flex justify-center items-center h-full mb-[80px]">
          <img
            src={icon}
            alt="..."
            className="w-32 h-48 mb-[80px] object-contain"
          />
        </div>
        <div className="flex justify-center items-center h-full mb-[80px]">
          <img
            src={icon}
            alt="..."
            className="w-32 h-48 mb-[80px] object-contain"
          />
        </div>
      </Carousel>
    </div>
  );
}
