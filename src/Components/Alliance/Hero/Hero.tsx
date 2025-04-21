import React from "react";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 mb-8 flex flex-col justify-between gap-6 sm:gap-10 md:mb-16 md:gap-16 lg:flex-row lg:px-0">
      <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-6/12">
        <p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">
          Be Part of the Next Generation of Financial Standards
        </p>

        <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
          Join the PayTo Alliance – Shaping the Future of Digital Finance
        </h1>
        <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
          The PayTo Alliance is an open initiative bringing together
          innovative companies, financial institutions, VASP providers, and
          blockchain pioneers to create global financial standards that make
          digital transactions faster, safer, and more interoperable.
        </p>
        <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
          By joining the consortium, your organization will have the opportunity
          to help shape the future of digital payments, contribute to new
          technologies, and collaborate on industry-wide adoption of PayTo
          standards such as ICAN, ORIC, FinTag, and TxMS.
        </p>

        <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
          <a
            href="/joinus"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
          >
            Start now
          </a>

          <a
            href="#"
            className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
          >
            Take tour
          </a>
        </div>
      </div>

      <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-196 xl:w-5/12">
        <img
          src="https://images.unsplash.com/photo-1618556450991-2f1af64e8191?auto=format&q=75&fit=crop&w=1000"
          loading="lazy"
          alt="Photo by Fakurian Design"
          className="h-full w-full object-cover object-center"
        />
      </div>
    </section>
  );
};

export default Hero;
