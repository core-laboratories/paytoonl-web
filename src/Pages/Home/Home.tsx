import Hero from "../../Components/Hero/Hero";
import Table from "../../Components/Table/Table";
import React from "react";
import tableData from "../../static/data/table.json";

const Home = () => {
  const { columns, data } = tableData.home;

  return (
    <div className="font-display min-h-screen flex flex-col">
      <Hero />
      <section className="py-8  my-12 container mx-auto">
        <Table columns={columns} data={data} />
      </section>
      <section className="py-8  my-12 container mx-auto">
        <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
          PayTo: Consortium
        </h2>
      </section>
    </div>
  );
};

export default Home;
