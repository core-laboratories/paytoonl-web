import React from "react";

const Organizations = () => {
  return (
    <div className="bg-white py-6 sm:py-16 lg:py-32">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Development Organizations Working with PayTo Standards
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            The following organizations are actively contributing to the
            development, integration, and adoption of PayTo protocols:
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 xl:grid-cols-3 xl:gap-16">
          <div className="flex flex-col items-start gap-4 md:flex-row lg:gap-6">
            <a
              href="#"
              className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
            >
              <img
                src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                loading="lazy"
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>
            <div className="flex flex-col gap-2 flex-1">
              <span className="text-sm text-gray-400">Organization</span>

              <h2 className="text-xl font-bold text-gray-800">
                <a
                  href="#"
                  className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Blockchain Hub
                </a>
              </h2>

              <p className="text-gray-500 flex-1">
                Blockchain Infrastructure and PayTo protocol
              </p>

              <div className="flex flex-col">
                <a
                  href="https://github.com/bchainhub"
                  className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                >
                  bchainhub
                </a>
                <a
                  href="mailto:contact@blockchainhub.com"
                  className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                >
                  contact@blockchainhub.com
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 md:flex-row lg:gap-6">
            <a
              href="#"
              className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
            >
              <img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                loading="lazy"
                alt="Photo by Lorenzo Herrera"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>
            <div className="flex flex-col gap-2 flex-1">
              <span className="text-sm text-gray-400">Organisation</span>

              <h2 className="text-xl font-bold text-gray-800">
                <a
                  href="#"
                  className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  CORE Labs
                </a>
              </h2>

              <p className="text-gray-500 flex-1">
                PayTo protocol and DePIN services
              </p>
              <div className="flex flex-col">
                <a
                  href="https://github.com/bchainhub"
                  className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                >
                  bchainhub
                </a>
                <a
                  href="mailto:contact@blockchainhub.com"
                  className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                >
                  contact@blockchainhub.com
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 md:flex-row lg:gap-6">
            <a
              href="#"
              className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
            >
              <img
                src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600"
                loading="lazy"
                alt="Photo by Magicle"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>
            <div className="flex flex-col gap-2 flex-1">
              <span className="text-sm text-gray-400">Organisation</span>

              <h2 className="text-xl font-bold text-gray-800">
                <a
                  href="#"
                  className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Data Layer
                </a>
              </h2>

              <p className="text-gray-500 flex-1 min-h-[48px]">
                DePIN services
              </p>
              <div className="flex flex-col">
                <a
                  href="https://github.com/bchainhub"
                  className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                >
                  bchainhub
                </a>
                <a
                  href="mailto:contact@blockchainhub.com"
                  className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                >
                  contact@blockchainhub.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-8 mb-12 lg:mt-16 mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
          (If your company is working with PayTo standards, reach out to get
          listed here!)
        </p>
      </div>
    </div>
  );
};

export default Organizations;
