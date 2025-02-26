import React from "react";

export default function FAQSimple() {
  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-3xl font-bold text-gray-800 md:mb-6 lg:text-4xl">FAQs</h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
          </div>

          <div className="mx-auto flex max-w-screen-xl flex-col border-t">
            <div className="border-b">
              <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                <span className="font-semibold transition duration-100 text-xl">What is PayTo: protocol?</span>

                <span className="text-indigo-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </div>

              <p className="mb-4 hidden text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.</p>
            </div>

            <div className="border-b">
              <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                <span className="font-semibold transition duration-100 text-xl">Can I integrate it in my payment infrastructure?</span>

                <span className="text-indigo-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </div>

              <p className="mb-4 hidden text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.</p>
            </div>

            <div className="border-b">
              <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                <span className="font-semibold transition duration-100 text-xl">Where are the solutions supported?</span>

                <span className="text-indigo-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </div>

              <p className="mb-4 hidden text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.</p>
            </div>

            <div className="border-b">
              <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                <span className="font-semibold transition duration-100 text-xl">How to start applying the solutions?</span>

                <span className="rotate-180 text-indigo-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </div>

              <p className="mb-4 text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
