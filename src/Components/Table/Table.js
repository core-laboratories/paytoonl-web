import React from "react";

const Table = ({ data, columns }) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-md text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {columns.map((column, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
            >
              {row.content.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-8 py-8">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
            >
              {row.links.map((link, linkIndex) => (
                <td key={linkIndex} className="px-8 py-8">
                  <a href={link.url} className="text-blue-500 hover:underline">
                    {link.text}
                  </a>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
