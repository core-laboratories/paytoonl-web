import React from "react";
import GradientLink from "../GradientLink/GradientLink";

const Table = ({ columns, data }) => {
  return (
    <div className="container mx-auto py-8 font-display lg:h-auto h-auto">
      <div className="lg:overflow-x-visible">
        <table className="min-w-full bg-transparent hidden lg:table">
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="py-2 px-8 bg-gray-200 text-gray-600 font-bold uppercase text-lg text-left"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.content.map((cell, cellIndex) => (
                  <td key={cellIndex} className="py-8 px-4 ">
                    <div className="bg-gray-100 h-48  flex flex-col justify-around p-4 rounded-lg ">
                      <p className="text-gray-700 text-lg">{cell}</p>
                      {row.links && row.links[cellIndex] && (
                        <GradientLink
                          url={row.links[cellIndex].url}
                          text={row.links[cellIndex].text}
                        />
                      )}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="py-2 px-8 h-11 bg-gray-200 flex items-center justify-center lg:bg-transparent lg:hidden"></div>
        <div className="flex flex-col lg:hidden h-auto">
          {data.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="bg-transparent h-auto w-full flex flex-col justify-around px-13 lg:px-4 lg:bg-gray-100 p-4 rounded-lg mb-4 mt-14"
            >
              {row.content.map((cell, cellIndex) => (
                <div key={cellIndex} className="mb-10">
                  <p className="text-gray-700 text-lg mb-4 lg:mb-0">
                    <span className="font-bold">{columns[cellIndex]}: </span>
                    {cell}
                  </p>
                  {row.links && row.links[cellIndex] && (
                    <GradientLink
                      url={row.links[cellIndex].url}
                      text={row.links[cellIndex].text}
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="py-2 px-8 h-11 bg-gray-200 flex items-center justify-center"></div>
    </div>
  );
};

export default Table;
