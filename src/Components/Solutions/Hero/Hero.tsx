import React from "react";

export default function SolutionsHero() {
  return (
    <>
      {/* About Section: Company with Stats */}
      <div className="dark:bg-gray-900 dark:text-gray-100">
        {/* Heading */}
        <div
          className="bg-cover"
          style={{
            backgroundImage:
              'url("https://cdn.tailkit.com/media/placeholders/photo-Oalh2MojUuk-1280x800.jpg")',
          }}
        >
          <div className="bg-blue-900/95">
            <div className="container mx-auto space-y-16 px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
              <div className="text-center">
                <svg
                  className="hi-solid hi-code-bracket-square mb-5 inline-block size-16 text-blue-300/50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z"
                    clipRule="evenodd"
                  />
                </svg>
                <h2 className="mb-4 text-4xl font-black text-white">
                  Solutions
                </h2>
                <h3 className="mx-auto text-xl leading-relaxed font-medium text-gray-200 lg:w-2/3">
                  The consortium is supporting the payment tools, which will
                  ease the payment instructions and extend the possibility of
                  modern payments. All solutions are free to integrate without
                  any application or approval. Anyone can grab and use it in
                  software.
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/* END Heading */}
      </div>
      {/* END About Section: Company with Stats */}
    </>
  );
}
