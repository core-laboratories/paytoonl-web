import React from "react";

interface ListItem {
  text: string;
}

interface Features {
  title: string;
  items: ListItem[];
}

export default function Features({ title, items }: Features) {
  return (
    <>
      {/* Form Actions: With Link */}
      {/* Card */}
      <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-xs dark:bg-gray-800 dark:text-gray-100">
        {/* Card Body */}
        <div className="w-full grow space-y-4 border-l-4 border-blue-500 px-5 py-8 sm:flex sm:items-center sm:justify-between sm:gap-2 sm:space-y-0">
          <div className="w-full">
            <h3 className="mb-4 text-xl font-semibold">{title}</h3>

            <ol className="list-decimal list-inside space-y-2 text-lg text-gray-500 dark:text-gray-300">
              {items.map((item, index) => (
                <li
                  key={index}
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              ))}
            </ol>
          </div>
        </div>
        {/* END Card Body */}
      </div>
      {/* END Card */}

      {/* END Form Actions: With Link */}
    </>
  );
}
