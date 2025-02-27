import Hero from "../../Components/Hero/Hero";
import Products from "../../Components/Products/Products";
import LogoCloud from "../../Components/LogoCloud/LogoCloud";
import InfoBlock from "../../Components/InfoBlock/InfoBlock";
import FAQ from "../../Components/FAQ/FAQ";
import PassBlock from "../../Components/PassBlock/PassBlock";
import React from "react";

const Home = () => {
  return (
    <main>
      <Hero />
      <Products />
      <LogoCloud />
      <InfoBlock />
      <FAQ />
      <PassBlock />
    </main>
  );
};

export default Home;
