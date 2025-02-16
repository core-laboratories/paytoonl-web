import Hero from "../../Components/Hero/Hero";
import Table from "../../Components/Table/Table";
import React from "react";

const Home = () => {
  return (
    <div className="font-display min-h-screen flex flex-col">
      <Hero />
      <section className="bg-white dark:bg-gray-900 py-[100px]">
        <Table />
      </section>
    </div>
  );
};

export default Home;
