import Hero from "../../Components/Hero/Hero";
import Table from "../../Components/Table/Table";
import CarouselLogos from "../../Components/Carousel/Carousel";
import FAQ from "../../Components/FAQ/FAQ.tsx";
import React from "react";
import tableData from "../../static/data/table.json";

const Home = () => {
  const { columns, data } = tableData.home;

  return (
    <div className="font-display min-h-screen flex flex-col">
      <Hero />
      <section className="py-[120px] bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <Table columns={columns} data={data} />
        </div>
      </section>
      <section className="p-[120px]  bg-gray-100  dark:bg-gray-900">
        <h2 className="mb-6 text-3xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
          PayTo: Consortium
        </h2>
        <CarouselLogos />
      </section>
      <section className="p-[120px] bg-white  dark:bg-gray-900">
        <h2 className="mb-4 text-center text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
          Developers
        </h2>
        <p className="mb-8 text-center text-lg italic leading-none tracking-tight text-gray-900 md:text-xl dark:text-white">
          We develop Open-Source platforms
        </p>
        <div className="text-center">
          <div className="mb-4">
            <a
              href="https://github.com/core-laboratories"
              className="text-blue-500 text-lg cursor-pointer hover:underline"
            >
              Open GitHub
            </a>
          </div>
          <div>
            <a
              href="/solutions"
              className="text-blue-500 text-lg cursor-pointer hover:underline"
            >
              Read more about Products
            </a>
          </div>
        </div>
      </section>
      <section className="">
        <FAQ />
      </section>
    </div>
  );
};

export default Home;
