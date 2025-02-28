import React from "react";
import Title from "../../Title/Title.tsx";
import PageHeadersSimple from "../../PageHeaderSimple/PageHeader.tsx";
import Features from "../Features/Features.tsx";
import features from "../../../data/features.json";

const Pass = () => {
  const featuresPass = features.pass.content;

  return (
    <>
      <div className="container mx-auto mb-24">
        <PageHeadersSimple
          title="PayTo:Pass - Secure Payment Requests with PayTo: Protocol"
          text1="Pass"
          text2={`A <b>.pkpass</b> file is a digital pass format primarily used by <b>Apple Wallet</b> and 
                    <b>Google Wallet</b> to store tickets, boarding passes, coupons, and payment cards. In the context of 
                    <b>PayTo: protocol, PKPASS files serve as a secure and flexible method to request 
                    payments</b> while <b>protecting sensitive financial information.</b>
        Instead of manually sharing bank details, businesses and individuals can generate a 
        <b>.pkpass file</b> that contains the <b>PayTo: payment request.</b> This file can then be shared securely 
        with the recipient, who can import it into <b>Apple Wallet or Google Wallet</b> to process the
         transaction without exposing personal banking details.`}
        />
        <Features
          title="Why Use Pass for Payment Requests?"
          items={featuresPass}
        />
        <div className="mt-16">
          <Title text="PKPASS in Google Wallet & Apple Wallet" />
          <div className="leading-loose mx-3 p-4 text-lg font-medium text-gray-600 dark:text-gray-100">
            Both <b>Google Wallet</b> and <b>Apple Wallet</b> provide a{" "}
            <b>secure and user-friendly</b> environment for handling{" "}
            <b>PKPASS-based payment requests.</b> Once imported, the pass can
            contain:
            <ul className="list-disc list-inside my-4">
              <li>Payment instructions (PayTo: details)</li>
              <li>Expiration dates</li>
              <li>Dynamic QR codes or barcodes for quick scanning</li>
              <li>Company branding and customization</li>
            </ul>
            Google Wallet and Apple Wallet provide
            <b>
              built-in encryption and biometric authentication (Face ID, Touch
              ID, PIN){" "}
            </b>
            to <b>safeguard transactions.</b> Users can review the details{" "}
            <b>before approving the payment,</b> ensuring{" "}
            <b>secure and error-free transactions.</b>
          </div>
          <div className="relative container mx-auto px-4 py-6 lg:px-8 lg:pt-32 xl:max-w-7xl">
            <div className="text-center">
              <h1 className="mb-4 text-4xl font-black text-black dark:text-white">
                The Future of Digital Payments with&nbsp;
                <span className="text-emerald-600 dark:text-emerald-500">
                  PayTo:Pass
                </span>
              </h1>
              <h2 className="mx-auto text-xl leading-relaxed font-medium text-gray-700 lg:w-2/3 dark:text-gray-300">
                By integrating <b>PKPASS with the PayTo: protocol,</b>
                businesses and individuals can{" "}
                <b> send, receive, and manage payment requests effortlessly.</b>
                This method ensures{" "}
                <b> maximum security, easy adoption, and compatibility </b> with
                modern digital wallets, making payments faster, safer, and more
                efficient.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pass;
