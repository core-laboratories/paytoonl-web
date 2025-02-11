import React from "react";

const Button = ({ text }) => {
  return (
    <>
      <button className="w-full py-4 px-4 cursor-pointer text-white uppercase bg-[rgba(0,23,23,255)] font-bold rounded transition duration-300 hover:bg-gradient-to-r hover:from-green-300 hover:to-green-700 dark:hidden">
        {text}
      </button>
      <button className="relative w-full py-4 px-4 cursor-pointer bg-white uppercase text-md font-bold cursor-pointer rounded-md hidden dark:inline-flex items-center justify-center py-4 px-12 text-center text-lg font-large hover:bg-gray-200 disabled:bg-gray-300 disabled:text-gray-500">
        <span className="relative z-10 uppercase font-bold bg-gradient-to-r from-green-500 to-green-800 bg-clip-text text-transparent">
          {text}
        </span>
      </button>
    </>
  );
};

export default Button;
