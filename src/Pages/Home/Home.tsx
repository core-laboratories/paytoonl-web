import Hero from "../../Components/Hero/Hero";
import Table from "../../Components/Table/Table";
import Carousel from "../../Components/Carousel/Carousel";
import PageHeadersSimple from "../../Components/PageHeaderSimple/PageHeader";
import FAQSimple from "../../Components/FAQ/FAQ";
import React from "react";

const Home = () => {
  return (
    <div className="font-display min-h-screen overflow-hidden">
      <Hero />
      <section className="bg-white dark:bg-gray-900 pt-[80px] sm:pt-8 pb-[100px]">
        <Table />
      </section>
      <section className="bg-linear-to-tr from-indigo-100 via-purple-50 to-cyan-100 dark:from-indigo-950 dark:via-purple-950 dark:to-teal-950 dark:text-gray-100 py-[100px]">
        <div className="container mx-auto text-center xl:max-w-7xl">
          <h1 className="mb-4 text-4xl font-black text-black dark:text-white">
            PayTo:
            <span className="text-emerald-600 dark:text-emerald-500">
              Consortium
            </span>
          </h1>
          <Carousel carouselKey="homeCarousel" />
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-700 bg-emerald-700 px-7 py-3.5 leading-6 font-semibold text-white hover:border-emerald-600 hover:bg-emerald-600 hover:text-white focus:ring-3 focus:ring-emerald-400/50 active:border-emerald-700 active:bg-emerald-700 dark:focus:ring-emerald-400/90"
          >
            <span>Join Us</span>
          </a>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900 pb-[80px]">
        <PageHeadersSimple />
      </section>
      <section className="border-t border-gray-200 dark:border-gray-700">
        <FAQSimple />
      </section>
    </div>
  );
};

export default Home;
