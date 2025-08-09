import React, { useState } from "react";
import { Menu, X } from "lucide-react";

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
            <img src="/static/icons/logo.svg" alt="logo" className="w-10 h-10" />
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
              Developers
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
                <X className="w-6 h-6" />
                Close
              </>
            ) : (
              <>
                <Menu className="w-6 h-6" />
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
              <X className="w-6 h-6" />
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
