import React from "react";

const GradientLink = ({ url, text, className }) => {
  return (
    <a
      href={url}
      className={`bg-gradient-to-r from-green-500 to-green-800 bg-clip-text text-transparent no-underline relative group w-fit ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-green-500 to-green-800 transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
};

export default GradientLink;
