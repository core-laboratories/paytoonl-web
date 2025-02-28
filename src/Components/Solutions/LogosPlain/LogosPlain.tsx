import React from "react";

export default function LogosPlain() {
  return (
    <>
      {/* Logos Section: Plain */}
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Our competitive advantage
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>

          <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
            <div className="flex flex-col items-center px-24">
              <div className="mb-2 flex h-12 w-12 items-center justify-center text-indigo-500 sm:mb-4 md:h-14 md:w-14">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-full w-full"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>

              <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
                PayTo:
              </h3>
              <p className="mb-2 text-center text-gray-500">
                Filler text is dummy text which has no meaning however looks
                very similar to real text.
              </p>
              <a
                href="/solutions/payto"
                className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
              >
                More
              </a>
            </div>

            <div className="flex flex-col items-center px-24">
              <div className="mb-2 flex h-12 w-12 items-center justify-center text-indigo-500 sm:mb-4 md:h-14 md:w-14">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-full w-full"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>

              <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
                FinTag
              </h3>
              <p className="mb-2 text-center text-gray-500">
                Filler text is dummy text which has no meaning however looks
                very similar to real text.
              </p>
              <a
                href="#"
                className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
              >
                More
              </a>
            </div>

            <div className="flex flex-col items-center px-24">
              <div className="mb-2 flex h-12 w-12 items-center justify-center text-indigo-500 sm:mb-4 md:h-14 md:w-14">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-full w-full"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>

              <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
                ORIC
              </h3>
              <p className="mb-2 text-center text-gray-500">
                Filler text is dummy text which has no meaning however looks
                very similar to real text.
              </p>
              <a
                href="#"
                className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
              >
                More
              </a>
            </div>

            <div className="flex flex-col items-center px-24">
              <div className="mb-2 flex h-12 w-12 items-center justify-center text-indigo-500 sm:mb-4 md:h-14 md:w-14">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-full w-full"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>

              <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
                ICAN
              </h3>
              <p className="mb-2 text-center text-gray-500">
                Filler text is dummy text which has no meaning however looks
                very similar to real text.
              </p>
              <a
                href="#"
                className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
              >
                More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
