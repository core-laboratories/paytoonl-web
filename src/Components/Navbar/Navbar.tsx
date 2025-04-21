import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../public/static/icons/logo.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className=" container mx-auto bg-white pb-6 sm:pb-8 lg:pb-12 px-4 sm:px-6 lg:px-0">
      <div className=" max-w-screen-2xl ">
        <header className="mb-4 flex items-center justify-between py-4 md:py-8">
          <a
            href="/"
            className="inline-flex items-center gap-2.5 text-2xl text-black font-semibold"
            aria-label="logo"
          >
            <img src={logo} alt="logo" className="w-10 h-10" />
            PayTo Alliance
          </a>

          <nav className="hidden gap-12 lg:flex">
            <a
              href="/solutions"
              className="text-lg text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              Solutions
            </a>
            <a
              href="/developers"
              className="text-lg text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              Developer
            </a>
            <a
              href="/alliance"
              className="text-lg text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              Alliance
            </a>
          </nav>

          <a
            href="/joinus"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block"
          >
            Join Alliance
          </a>

          <button
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
          >
            {isMobileMenuOpen ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 18L18 6M6 6l12 12"
                    clipRule="evenodd"
                  />
                </svg>
                Close
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Menu
              </>
            )}
          </button>
        </header>

        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white p-4 lg:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="absolute top-4 right-4 inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="5"
                  y1="5"
                  x2="19"
                  y2="19"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="19"
                  y1="5"
                  x2="5"
                  y2="19"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              Close
            </button>
            <nav className="flex flex-col items-center gap-4">
              <a
                href="/solutions"
                className="text-lg text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
              >
                Solutions
              </a>
              <a
                href="/developers"
                className="text-lg text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
              >
                Developer
              </a>
              <a
                href="/alliance"
                className="text-lg text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
              >
                Alliance
              </a>
              <a
                href="/joinus"
                className="rounded-lg bg-gray-200 px-8 py-3 text-center text-sm text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
              >
                Join Alliance
              </a>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
