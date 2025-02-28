import React from "react";
import PageHeadersSimple from "../../PageHeaderSimple/PageHeader.tsx";
import Title from "../../Title/Title.tsx";
import Features from "../Features/Features.tsx";
import features from "../../../data/features.json";

const ICAN = () => {
  const featuresIcan = features.ICAN.content;

  return (
    <div className="container mx-auto">
      <PageHeadersSimple
        title="ICAN – The International Crypto Account Number"
        text1="ICAN"
        text2={`<b>What is ICAN?</b> </br>
The <b>International Crypto Account Number (ICAN)</b> is a <b>standardized identifier for cryptocurrency transactions,</b> designed to function similarly to the <b>International Bank Account Number (IBAN)</b> in traditional banking. It provides a <b>unique, verifiable, and structured format</b> for digital asset addresses, making transactions <b>safer, faster, and more efficient</b> across different platforms.
By introducing a <b>global standard for crypto addresses,</b> ICAN helps <b>reduce errors, improve security, and enhance compatibility</b> between wallets, exchanges, and financial services.
`}
      />
      <Title text="How ICAN Works" />
      <div className="leading-loose mx-3 mb-8 p-4 text-lg font-medium text-gray-600 dark:text-gray-100">
        ICAN follows a structured format to ensure{" "}
        <b>accuracy and consistency</b> in crypto transactions:
        <ul className="list-disc list-inside my-4">
          <li>
            {" "}
            <b>Human-Readable Part (HRP)</b> – Identifies the blockchain network
            or application (<b>e.g., ‘cb’ for Core Blockchain Mainnet</b>).
          </li>
          <li>
            <b>Checksum</b> – Validates the integrity of the address, preventing
            errors in manual entry.
          </li>
          <li>
            {" "}
            <b>Data Part</b> – Encodes the actual wallet address, ensuring
            seamless processing.
          </li>
        </ul>
        With{" "}
        <b>
          ICAN, sending and receiving digital assets becomes as easy and
          reliable as traditional banking transactions.
        </b>
      </div>
      <Features title="Why Use ICAN?" items={featuresIcan} />
      <div className="relative container mx-auto px-4 py-6 lg:px-8 lg:py-32 xl:max-w-7xl">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-black text-black dark:text-white">
            ICAN – The Future of Digital Transactions
          </h1>
          <h2 className="mx-auto text-xl leading-relaxed font-medium text-gray-700 lg:w-2/3 dark:text-gray-300">
            As the world moves toward <b>global digital finance</b>, ICAN
            provides a<b>secure and efficient</b> way to manage cryptocurrency
            transactions, just like{" "}
            <b>IBAN revolutionized international banking.</b> Ready to
            experience
            <b>simplified and secure crypto payments?</b>
          </h2>
        </div>
        <div className="text-center mt-24">
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
            <span>Generate Your ICAN Addres</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ICAN;
