import Hero from "../../Components/Hero/Hero.tsx";
import Products from "../../Components/Products/Products.tsx";
import MembersList from "../../Components/MembersList/MembersList.tsx";
import InfoBlock from "../../Components/InfoBlock/InfoBlock.tsx";
import FAQ from "../../Components/FAQ/FAQ.tsx";
import PassBlock from "../../Components/PassBlock/PassBlock.tsx";
import React from "react";

const Home = () => {
  return (
    <main>
      <Hero />
      <Products />
      <MembersList />
      <InfoBlock />
      <FAQ />
      <PassBlock />
    </main>
  );
};

export default Home;
