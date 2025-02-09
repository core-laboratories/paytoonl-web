import React from "react";

const Button = ({ text }) => {
  return (
    <button className="w-full py-4 px-4 cursor-pointer text-white uppercase bg-[rgba(0,23,23,255)] font-bold rounded transition duration-300 hover:bg-gradient-to-r hover:from-green-300 hover:to-green-700">
      {text}
    </button>
  );
};

export default Button;
