import React from "react";
import boxItemsData from "../../data/boxItems.json";

interface BoxItem {
  title: string;
  text: string;
  icon: string;
}

interface FeaturesBoxeswithIconsProps {
  items?: BoxItem[];
}

const iconPaths: { [key: string]: string } = {
  "hi-rectangle-stack":
    "M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122",
  "hi-cube":
    "M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9",
  "hi-cog":
    "M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495",
  "hi-switch-horizontal":
    "M8.25 15l-3-3m0 0l3-3m-3 3h12.75M15.75 9l3 3m0 0l-3 3m3-3H6",
};

export default function FeaturesBoxeswithIcons({
  items = boxItemsData.ORIC.content,
}: FeaturesBoxeswithIconsProps) {
  return (
    <>
      {/* Features Section: Boxes with Icons */}
      <div className="bg-linear-to-tr from-indigo-100 via-purple-50 to-teal-100 dark:from-indigo-900 dark:via-purple-900 dark:to-teal-900 dark:text-gray-100">
        <div className="container mx-auto px-4 pt-12 lg:px-8 lg:pt-32 xl:max-w-7xl">
          <h1 className="mb-12 text-xl font-bold">
            ORIC: A Global Standard for Digital Asset Providers
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="rounded-lg border border-white bg-white p-5 shadow-xs transition hover:border-blue-600 md:p-7 xl:p-10 dark:border-gray-800 dark:bg-gray-800 dark:shadow-none dark:hover:border-blue-400"
              >
                <svg
                  className={`hi-outline ${item.icon} mb-5 inline-block size-12 text-blue-600 dark:text-blue-500`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={iconPaths[item.icon]}
                  />
                </svg>
                <h4 className="mb-2 text-lg font-bold">{item.title}</h4>
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div className="leading-loose mt-12 text-lg font-medium text-gray-600 dark:text-gray-100">
            By adopting <b>ORIC,</b> the <b>digital asset industry</b> gains a
            <b>standardized, secure, and scalable</b> solution for{" "}
            <b>wallet identification and verification</b> in the growing world
            of crypto transactions. 🚀
          </div>
        </div>
        <div className="flex items-center justify-center py-8">
          <div className="text-center my-12 px-12">
            <a
              href="oric-v1.payto.onl/PINGCHB2XCB"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 leading-6 font-semibold text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-xs focus:ring-3 focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
            >
              <svg
                className="hi-mini hi-arrow-top-right-on-square inline-block size-5 opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Generate ORIC </span>
            </a>
          </div>
          <div className="text-center my-12 px-12">
            <a
              href="oric-v1.payto.onl/PINGCHB2XCB"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 leading-6 font-semibold text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-xs focus:ring-3 focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
            >
              <svg
                className="hi-mini hi-arrow-top-right-on-square inline-block size-5 opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Verify ORIC</span>
            </a>
          </div>
        </div>
      </div>
      {/* END Features Section: Boxes with Icons */}
    </>
  );
}
