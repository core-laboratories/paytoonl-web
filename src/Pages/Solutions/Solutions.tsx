import React from "react";
import SolutionsHero from "../../Components/Solutions/Hero/Hero.tsx";
import LogosPlain from "../../Components/Solutions/LogosPlain/LogosPlain.tsx";

const Solutions = () => {
  return (
    <div>
      <SolutionsHero />

      <section className="bg-white dark:bg-gray-900">
        <LogosPlain />
      </section>
    </div>
  );
};

export default Solutions;
