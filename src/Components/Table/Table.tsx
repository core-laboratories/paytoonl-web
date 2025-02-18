import React from "react";
import tableData from "../../data/tableData.json";

export default function TableSimple() {
  const { columns, data } = tableData.home;

  return (
    <div className="w-full overflow-x-auto container mx-auto bg-white dark:bg-gray-800">
      <table
        className="w-full text-left border border-collapse rounded sm:border-separate border-slate-200"
        cellSpacing="0"
      >
        <thead className="hidden sm:table-header-group">
          <tr>
            {columns.map((column, colIndex) => (
              <th
                key={colIndex}
                scope="col"
                className="h-12 px-6 text-md lg:text-lg font-medium border-l first:border-l-0 border-slate-300 text-gray-600 dark:text-gray-100 bg-slate-100 dark:bg-slate-400"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              <tr className="sm:hidden">
                <td className="h-12 px-6 text-md lg:text-lg font-medium border border-slate-300 text-gray-600 dark:text-gray-100 bg-transparent dark:bg-transparent">
                  {columns.map((column, colIndex) => (
                    <div key={colIndex} className="py-6 sm:py-2">
                      <span className="font-semibold">{column}:</span>{" "}
                      {row.content[colIndex]}
                      <br />
                      <a
                        href={row.links[colIndex].url}
                        className="font-semibold text-blue-600 hover:text-blue-400 dark:text-blue-400 pt-4 block dark:hover:text-blue-300"
                      >
                        {row.links[colIndex].text}
                      </a>
                    </div>
                  ))}
                </td>
              </tr>
              <tr className="hidden sm:table-row">
                {row.content.map((content, contentIndex) => (
                  <td
                    key={contentIndex}
                    className="h-12 p-8 text-md transition duration-300 border-t border-l first:border-l-0 border-slate-200 text-slate-500 dark:text-gray-300"
                  >
                    {content}
                    <br />
                    <a
                      href={row.links[contentIndex].url}
                      className="font-semibold text-blue-600 hover:text-blue-400 dark:text-blue-400 pt-4 block dark:hover:text-blue-300"
                    >
                      {row.links[contentIndex].text}
                    </a>
                  </td>
                ))}
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
