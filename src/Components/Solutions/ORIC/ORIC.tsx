import React from "react";
import PageHeadersSimple from "../../PageHeaderSimple/PageHeader.tsx";
import Features from "../Features/Features.tsx";
import features from "../../../data/features.json";
import Title from "../../Title/Title.tsx";
import Boxes from "../../Boxes/Boxes.tsx";
import boxItemsData from "../../../data/boxItems.json";

const ORIC = () => {
  const featureORIC = features.ORIC.content;

  return (
    <>
      <div className="container mx-auto">
        <PageHeadersSimple
          title="ORIC (Organization Identifier Code): A Digital Wallet Identifier for VASP Providers"
          text1="ORIC"
          text2={`The <b>Organization Identifier Code (ORIC)</b> is a <b>unique identification code</b> designed for <b>Virtual Asset Service Providers (VASPs)</b> to facilitate digital wallet transactions. Similar to the <b>BIC (Bank Identifier Code)</b> used in traditional banking, ORIC serves as an <b>international standard</b> for identifying <b>VASPs and their digital wallet services</b> across different jurisdictions.
                            </br>Any <b>VASP provider can apply</b> to issue their own <b>ORIC identifier</b>, provided they meet the following conditions:
                        <br />✅ <b>Know Your Business (KYB) verification</b>
                                    ✅ <b>Registered as a VASP provider</b>`}
        />
        <Title text="ORIC Code Structure" />
        <Features
          title="An ORIC code consists of four components, each providing essential details about the organization and its digital wallet services:"
          items={featureORIC}
        />
        <div className="text-center my-12">
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
            <span>Apply as VASP provider</span>
          </a>
        </div>
        <Title text="Example of an ORIC Code" />
        <div className="leading-loose mx-3 p-7 text-lg font-medium text-gray-600 dark:text-gray-100">
          Let’s say a <b>VASP provider named "Ping Exchange",</b> based in{" "}
          <b>Switzerland (CH),</b> is issuing a digital wallet identifier for{" "}
          <b>Ethereum (ETH).</b> Their ORIC code might look like:
        </div>
        <div className="leading-loose flex items-center justify-center  mx-3 px-7 text-lg font-medium text-gray-600 dark:text-gray-100">
          <span style={{ color: "green" }}>PINGCHB2XCB</span>
          <div className="text-center my-12 px-16">
            <a
              href="oric-v1.payto.onl/PINGCHB2XCB"
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
              <span>Open in new tab </span>
            </a>
          </div>
        </div>
        <div className="leading-loose mb-24 mx-3 px-7 text-lg font-medium text-gray-600 dark:text-gray-100">
          <ul className="list-disc  list-inside space-y-2 text-lg">
            <li>
              <span style={{ color: "green" }}>PING</span> → Organization (Ping
              Exchange)
            </li>
            <li>
              <span style={{ color: "green" }}>CH</span> → Country (Switzerland)
            </li>
            <li>
              <span style={{ color: "green" }}>B2</span> → Live digital address,
              fees deducted from receiver
            </li>
            <li>
              <span style={{ color: "green" }}>XCB</span> → Core wallet
            </li>
          </ul>
        </div>
      </div>
      <Boxes items={boxItemsData.ORIC.content} />
    </>
  );
};

export default ORIC;
