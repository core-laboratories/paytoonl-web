import React from "react";
import Title from "../../Title/Title.tsx";
import Features from "../Features/Features.tsx";
import features from "../../../data/features.json";

const FinTag = () => {
  const featuresFintag = features.fintag.content;

  return (
    <>
      <div className="container mx-auto mb-24">
        <div className="mb-24">
          <Title text="Showcase:" />
          <pre className="bg-gray-100 dark:bg-gray-800 mt-8 p-4 rounded-lg overflow-auto">
            <code className="language-html text-gray-800 dark:text-gray-100">
              {`<meta property="iban" content="BE68539007547034" />\n`}
              {`<meta property="upi" content="example@upi" />\n`}
              {`<meta property="bic" content="DEUTDEFF" />`}
            </code>
          </pre>
        </div>
      </div>
    </>
  );
};

export default FinTag;
