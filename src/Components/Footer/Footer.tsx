import React from "react";
import logo from "../../../public/static/icons/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <a
            href="https://payto.onl/"
            className="flex items-center justify-center sm:justify-between mb-8 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-8" alt="PayTo:Alliance Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              PayTo:Alliance
            </span>
          </a>
          <ul className="flex flex-col sm:flex-row flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 gap-y-8 sm:gap-y-0">
            <li>
              <a href="#" className="hover:underline md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline md:me-6">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 text-center sm:text-left">
          © 2025{" "}
          <a href="https://payto.onl/" className="hover:underline">
            PayTo:Alliance
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
