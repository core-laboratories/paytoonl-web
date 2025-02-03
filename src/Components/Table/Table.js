// filepath: /home/ingrid/work/paytoonl-web/src/Components/Table/Table.js
import React from "react";

const Table = ({ columns, data }) => {
  return (
    <div className="container mx-auto py-8 font-display">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
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
                        <a
                          href={row.links[cellIndex].url}
                          className="bg-gradient-to-r from-green-500 to-green-800 bg-clip-text text-transparent no-underline relative group w-fit"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {row.links[cellIndex].text}
                          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-green-500 to-green-800 transition-all duration-300 group-hover:w-full"></span>
                        </a>
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
