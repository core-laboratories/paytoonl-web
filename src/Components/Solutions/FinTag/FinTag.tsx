import React from "react";
import Title from "../../Title/Title.tsx";
import PageHeadersSimple from "../../PageHeaderSimple/PageHeader.tsx";
import Features from "../Features/Features.tsx";
import features from "../../../data/features.json";

const FinTag = () => {
  const featuresFintag = features.fintag.content;

  return (
    <>
      <div className="container mx-auto mb-24">
        <PageHeadersSimple
          title="FinTag - A Meta Tag Standard for Financial Payment Information"
          text1="FinTag"
          text2={`A <b>meta tag</b> is an HTML element that provides metadata about a webpage, typically used for SEO, 
                    social media previews, or site functionality. 
                    These tags reside in the <span style='color: green;'>&lt; head &gt;</span> 
                    section of a webpage and do not display content directly but provide essential information to browsers, search engines, and other automated systems.
                    <b>FinTag</b> is an innovative meta tag concept designed to store and display financial payment details such as
                     <b>IBAN, ICAN, ACH, PIX, UPI, BIC,</b> and other payment identifiers.`}
        />
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
        <Features title="Why is FinTag Important?" items={featuresFintag} />
        <div className="mx-3 my-8 p-7 text-lg font-medium text-gray-600 dark:text-gray-100">
          By adopting <b>FinTag</b>, institutions and businesses can create a
          safer financial environment for their clients, ensuring payment
          authenticity while streamlining digital transactions.
        </div>
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 leading-6 font-semibold text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-xs focus:ring-3 focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
          >
            <svg
              className="hi-mini hi-arrow-top-right-on-square inline-block size-5 opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                clipRule="evenodd"
              />
            </svg>
            <span>Generate FinTag</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default FinTag;
