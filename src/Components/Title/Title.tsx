import React from "react";

export default function Title({ text }: { text: string }) {
  return (
    <>
      {/* Divider: With Heading */}
      <h3 className="py-8 flex items-center">
        <span
          aria-hidden="true"
          className="h-0.5 grow rounded-sm bg-gray-200 dark:bg-gray-700/75"
        />
        <span className="mx-3 text-lg font-medium text-dark dark:text-white">
          {text}
        </span>
        <span
          aria-hidden="true"
          className="h-0.5 grow rounded-sm bg-gray-200 dark:bg-gray-700/75"
        />
      </h3>
      {/* END Divider: With Heading */}
    </>
  );
}
