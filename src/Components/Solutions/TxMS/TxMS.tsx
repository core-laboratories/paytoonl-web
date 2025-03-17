import React from "react";
import PageHeadersSimple from "../../PageHeaderSimple/PageHeader.tsx";
import Features from "../Features/Features.tsx";
import features from "../../../data/features.json";

const TxMS = () => {
  const featuresTxMS = features.TxMS.content;

  return (
    <div className="mb-24">
      <div className="container mx-auto">
        <PageHeadersSimple
          title="TxMS – Transaction Message Service"
          text1="TxMS"
          text2="<b>What is TxMS?</b> </br>
<b>TxMS (Transaction Message Service)</b> is a <b>secure and standardized messaging protocol</b> designed to make <b>financial transactions and blockchain communications more efficient and reliable.</b> It ensures that <b>transaction-related messages</b> can be sent, received, and understood <b>across different platforms without errors.</b>
Whether it’s a <b>payment request, digital invoice, or blockchain transaction message, TxMS makes sure that the information is formatted correctly and securely delivered.</b>"
        />
        <Features title="Why is TxMS Important?" items={featuresTxMS} />
        <div className="leading-loose mx-3 p-4 mt-14 text-lg font-medium text-gray-600 dark:text-gray-100">
          <b>How Does TxMS Work?</b>

          <ol className="list-decimal list-inside my-4">
            <li>
              <b>Encodes Transaction Information</b> – TxMS{" "}
              <b>formats payment requests or transaction details</b> in a secure
              and easy-to-read way.
            </li>
            <li>
              <b>Sends Messages Efficiently</b> – The{" "}
              <b>
                structured format ensures the message can be understood across
                different platforms
              </b>{" "}
              (banks, crypto wallets, payment providers).
            </li>
            <li>
              <b>Ensures Accuracy</b> – The system <b>prevents errors</b> in
              transaction details, making digital payments smoother and more
              secure.
            </li>
          </ol>
          <b>Who Can Use TxMS? </b>

          <ul className="list-desc list-inside my-4">
            <li>
              <b>Banks & Financial Institutions</b> – To send secure and
              structured payment requests.
            </li>
            <li>
              <b>Crypto Wallets & Exchanges</b> – To facilitate digital asset
              transactions.
            </li>
            <li>
              <b>Businesses & Merchants</b> – To send invoices and payment
              confirmations in a standardized way.
            </li>
            <li>
              <b>Consumers & Individuals</b> – To receive <b>trusted</b>{" "}
              transaction messages when making payments.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TxMS;
