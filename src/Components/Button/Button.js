import React from "react";

const Button = ({ text }) => {
  return (
    <button className="w-full py-4 px-4 text-white uppercase bg-[rgba(9,14,52,0.70)] font-bold rounded transition duration-300 hover:bg-gradient-to-r hover:from-green-300 hover:to-green-700">
      {text}
    </button>
  );
};

export default Button;
