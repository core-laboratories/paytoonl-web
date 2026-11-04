import React from "react";
import Hero from "../../Components/Alliance/Hero/Hero.tsx";
import Organizations from "../../Components/Alliance/Organizations/Organizations.tsx";
import Features from "../../Components/Alliance/Features/Features.tsx";
import Blocks from "../../Components/Alliance/Blocks/Blocks.tsx";
import { ArrowRight } from "lucide-react";

const Alliance = () => {
  return (
    <div className="alliance-page overflow-hidden">
      <Hero />
      <Organizations />
      <Features />
      <Blocks />
      <section className="alliance-join container mx-auto">
        <div><span className="section-eyebrow">BUILD WITH THE ALLIANCE</span><h2>Bring your ideas to the table.</h2><p>Tell us what your organization is working on and where you could contribute to more connected payments.</p></div>
        <a href="/joinus" className="alliance-primary-action">Explore membership <ArrowRight size={18} aria-hidden="true" /></a>
      </section>
    </div>
  );
};

export default Alliance;
