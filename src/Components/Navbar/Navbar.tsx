import React, { useState } from "react";
import logo from "../../../public/static/icons/logo.svg";

const Navbar = () => {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <header className="mb-4 flex items-center justify-between py-4 md:py-8">
          <a href="/" className="inline-flex items-center gap-2.5 text-2xl text-black font-semibold" aria-label="logo">
            <img src={logo} alt="logo" className="w-10 h-10" />
            PayTo:Alliance
          </a>

          <nav className="hidden gap-12 lg:flex">
            <a href="/solutions" className="text-lg text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Solutions</a>
            <a href="/developer" className="text-lg text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Developer</a>
            <a href="/alliance" className="text-lg text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Alliance</a>
          </nav>

          <a href="/join" className="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block">Join Alliance</a>

          <button type="button" className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
            </svg>
            Menu
          </button>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
