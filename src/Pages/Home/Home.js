import React from "react";
import Hero from "../../Components/Hero/Hero";
import Table from "../../Components/Table/Table";
import Carousel from "../../Components/Carousel/Carousel";
import Button from "../../Components/Button/Button";

import tableData from "../../../static/data/tableData.json";

const Home = () => {
  const { columns, data } = tableData.home;
  return (
    <div className="font-display">
      <Hero />
      <div className="py-[80px]">
        <Table columns={columns} data={data} />
      </div>
      <div className="bg-gray-100 py-[80px]">
        <div className="container mx-auto px-13">
          <h1 className="text-black-500 font-bold text-2xl text-left">
            PayTo: Consortium
          </h1>
          <div className="w-full h-[1px] bg-gray-300 mt-4"></div>
        </div>
        <Carousel carouselKey="homeCarousel" />
        <div className="mt-8 container mx-auto w-1/2 ">
          <Button text="Join us" />
        </div>
      </div>
    </div>
  );
};

export default Home;
