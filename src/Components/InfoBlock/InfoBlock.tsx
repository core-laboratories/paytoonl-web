import React from "react";

export default function InfoBlock() {
  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div>
              <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                <img src="/static/images/mission.jpg" loading="lazy" alt="Photo by Rastislav Vašička" className="h-full w-full object-cover object-center" />
              </div>
            </div>

            <div className="md:pt-8">
              <a id="mission" />
              <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">Mission</h1>

              <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                The PayTo Alliance is dedicated to making financial transfers simpler, more accessible, and globally available - even enabling transactions offline. The goal is to bring seamless payment solutions and financial services to the entire community, ensuring everyone can participate in the digital economy without barriers.
              </p>

              <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
              By leveraging innovative technology and decentralized solutions, the Alliance aims to eliminate the complexities of traditional banking and empower individuals and businesses with frictionless transactions. Whether sending funds across borders, integrating new payment methods, or ensuring financial inclusion, the Alliance is committed to creating a financial ecosystem that works for everyone, everywhere.
              </p>

              <h2 className="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">About Alliance</h2>

              <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                The Alliance is a network of companies united by a shared vision of transforming financial services. The Alliance connects businesses that want to collaborate, innovate, and contribute to making payments more efficient, inclusive, and borderless. By working together, members strengthen the ecosystem and expand the reach of modern financial solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
