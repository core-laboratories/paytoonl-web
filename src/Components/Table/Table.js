import React from "react";
import GradientLink from "../GradientLink/GradientLink";

const Table = ({ columns, data }) => {
  return (
    <div className="container mx-auto py-8 font-display">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-transparent">
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
                    <div className="bg-gray-100 h-48 w-95 flex flex-col justify-around p-4 rounded-lg">
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
      </div>
      <div className="py-2 px-8 h-11 bg-gray-200 flex items-center justify-center"></div>
    </div>
  );
};

export default Table;
