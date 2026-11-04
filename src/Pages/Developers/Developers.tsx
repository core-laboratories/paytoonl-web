import React from "react";
import Organizations from "../../Components/Developers/Organizations/Organizations.tsx";
import Features from "../../Components/Developers/Features/Features.tsx";
import Title from "../../Components/Developers/Title/Title.tsx";

const Developers = () => {
  return (
    <div className="developers-page">
      <section className="developers-hero">
        <div className="developers-hero-copy">
          <span className="section-eyebrow">Build with PayTo</span>
          <h1>Open standards.<br /><span>Real possibilities.</span></h1>
          <p>Build financial experiences with the teams advancing PayTo, ICAN, ORIC, FinTag, and TxMS. Explore interoperable tools designed for modern digital finance.</p>
          <div className="developers-hero-actions">
            <a href="/solutions" className="primary-action">Explore solutions <span aria-hidden="true">↗</span></a>
            <a href="#organizations" className="secondary-action">Meet the organizations</a>
          </div>
        </div>
        <div className="developers-hero-image">
          <img
            src="/static/images/rubik.jpg"
            loading="lazy"
            alt="Colorful illuminated city at night"
          />
          <div className="hero-image-caption">Ideas become infrastructure.</div>
        </div>
      </section>
      <Organizations />
      <Features />
      <Title />
    </div>
  );
};

export default Developers;
