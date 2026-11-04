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

            <div>
              <a id="mission" />
              <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">Mission</h1>

              <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                The PayTo Alliance brings together teams working to make payment details easier to share, understand, and use. Its projects include open formats, digital identity tools, and ways to deliver signed transaction data when a direct internet connection is unavailable.
              </p>

              <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
              By connecting builders and financial service providers, the Alliance supports practical integrations across wallets, payment methods, and settlement systems. Availability depends on each provider, network, and location.
              </p>

              <h2 className="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">About the Alliance</h2>

              <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                The Alliance brings together companies with a shared vision for better financial services. It connects businesses that want to make payments more efficient, inclusive, and borderless. By working together, members strengthen the ecosystem and expand the reach of modern financial solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
