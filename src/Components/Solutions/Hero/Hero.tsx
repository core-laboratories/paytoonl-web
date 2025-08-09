import React from "react";

export default function SolutionsHero() {
  return (
    <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
      <img src="/static/images/hero.jpg" loading="lazy" alt="PayTo 3D logo" className="absolute inset-0 h-full w-full object-cover object-center" />

      <div className="absolute inset-0 bg-[#77bb65]/80 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-[#77bb65]/80 mix-blend-multiply"></div>

      <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
        <h1 className="mb-8 text-center text-4xl text-white sm:text-5xl md:mb-12 md:text-6xl">Solutions</h1>
        <p className="mb-4 text-center text-lg text-green-200 sm:text-xl md:mb-8">The Alliance is supporting the payment tools, which will ease the payment instructions and extend the possibility of modern payments.</p>
      </div>
    </section>
  );
}
