import React from "react";
import { ArrowRight, Binary, BotMessageSquare, CircleCheck, Landmark, MessageSquareCode, MessageSquareLock, RadioTower, Send, Server, ShieldCheck, Smartphone, UserRound, WalletCards } from "lucide-react";
import TxMSNumbers from "./TxMSNumbers.tsx";
import { TxMSVisual } from "../SolutionHeroVisuals.tsx";

const workflowSteps = [
	{ number: "01", icon: ShieldCheck, title: "Prepare and sign", text: "Your wallet prepares the transaction and signs it before any message is sent." },
	{ number: "02", icon: Binary, title: "Encode for text", text: "TxMS converts the signed data into characters that can travel through SMS." },
	{ number: "03", icon: Send, title: "Send by SMS", text: "The encoded message travels to an available TxMS number." },
	{ number: "04", icon: CircleCheck, title: "Check and forward", text: "A compatible receiver checks the message and can forward it. Network confirmation follows later." },
];

const useCases = [
	{ icon: Landmark, title: "Financial providers", text: "Receive signed transactions through a supported SMS channel." },
	{ icon: WalletCards, title: "Wallets", text: "Offer another delivery route when mobile data is unavailable." },
	{ icon: Server, title: "Service operators", text: "Run compatible receivers that check and forward messages." },
	{ icon: UserRound, title: "Individuals", text: "Submit transaction data where SMS service is available." },
];

const TxMS = () => {
  return (
    <>
      <section className="solution-detail container mx-auto flex flex-col px-4 gap-6 sm:gap-10 md:gap-16 lg:px-0">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
          <div className="flex flex-col justify-center sm:text-center lg:pb-12 lg:text-left xl:w-5/12 xl:pb-24">
            <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
              TxMS
            </h1>

            <p className="mb-6 leading-relaxed text-gray-500 md:mb-8 lg:w-4/5 xl:text-lg">
              TxMS carries encoded transaction data over SMS where mobile service is available. It gives compatible wallets and receivers a structured way to move a signed transaction when mobile data or Wi-Fi is unavailable.
            </p>
            <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
              The receiving service decodes and checks the message before forwarding a supported transaction. Sending a text message is a delivery step, not a payment confirmation.
            </p>

            <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="https://txms.info/"
                className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
              >
                Use TxMS
              </a>
            </div>
          </div>

          <TxMSVisual />
        </div>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-10 md:mb-16">
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                TxMS Features
              </h2>

              <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                TxMS helps transmit payment information when internet access is unavailable.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:border-indigo-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors duration-200">
                    <RadioTower className="w-6 h-6 text-indigo-500" />
                  </div>
                </div>

                <h3 className="mb-3 text-lg font-semibold text-gray-800">
                  Reliable Transaction Messaging
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Encoded transaction data can travel over SMS to a compatible receiver, extending access beyond mobile data coverage.
                </p>
              </div>

              <div className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:border-indigo-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors duration-200">
                    <MessageSquareLock className="w-6 h-6 text-indigo-500" />
                  </div>
                </div>

                <h3 className="mb-3 text-lg font-semibold text-gray-800">
                  Structured, checkable format
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  A consistent message format helps compatible receivers decode transaction data and detect damaged or incomplete messages.
                </p>
              </div>

              <div className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:border-indigo-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors duration-200">
                    <MessageSquareCode className="w-6 h-6 text-indigo-500" />
                  </div>
                </div>

                <h3 className="mb-3 text-lg font-semibold text-gray-800">
                  Built for Digital Payments
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  TxMS packages signed transaction data for text delivery, so a supported receiving service can process it.
                </p>
              </div>

              <div className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:border-indigo-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors duration-200">
                    <BotMessageSquare className="w-6 h-6 text-indigo-500" />
                  </div>
                </div>

                <h3 className="mb-3 text-lg font-semibold text-gray-800">
                  A clear delivery path
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  The sending device prepares the transaction; the receiving service checks the delivered data before forwarding. Users should still review the destination and amount before signing.
                </p>
              </div>
            </div>
          </div>
        </div>
        <section className="txms-workflow">
          <div className="txms-panel-heading"><span className="section-eyebrow">THE DELIVERY PATH</span><h2>From wallet to network</h2><p>Each step has a clear role. Sending an SMS delivers the signed data; it does not confirm the payment.</p></div>
          <div className="txms-workflow-grid">
            {workflowSteps.map(({ number, icon: Icon, title, text }) => (
              <article className="txms-workflow-step" key={number}>
                <span className="txms-workflow-number">{number}</span><span className="txms-workflow-icon"><Icon size={24} aria-hidden="true" /></span>
                <h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="txms-explainer">
          <div className="txms-encoding">
            <span className="section-eyebrow">WHY ENCODING MATTERS</span>
            <h2>Transaction data, ready for text.</h2>
            <p>SMS can carry text, but a signed transaction contains binary data. TxMS encodes that data into transport-safe characters so a compatible receiver can reconstruct it.</p>
            <div className="txms-encoding-flow"><span><Binary size={18} aria-hidden="true" /> Signed data</span><ArrowRight size={18} aria-hidden="true" /><span><MessageSquareCode size={18} aria-hidden="true" /> Text-safe message</span><ArrowRight size={18} aria-hidden="true" /><span><Smartphone size={18} aria-hidden="true" /> SMS delivery</span></div>
            <p className="txms-encoding-note">Encoding carries the data. The wallet signature authorizes the transaction, and the network confirms it after forwarding.</p>
            <a href="https://en.wikipedia.org/wiki/Binary-to-text_encoding#Examples" target="_blank" rel="noopener noreferrer">About binary-to-text encoding <ArrowRight size={16} aria-hidden="true" /></a>
          </div>
          <div className="txms-use-cases">
            <span className="section-eyebrow">WHERE TXMS FITS</span>
            <h2>Useful when data service is out of reach.</h2>
            <div className="txms-use-case-grid">
              {useCases.map(({ icon: Icon, title, text }) => (
                <article key={title}><span><Icon size={20} aria-hidden="true" /></span><div><h3>{title}</h3><p>{text}</p></div></article>
              ))}
            </div>
          </div>
        </section>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-xl px-4 md:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-full md:min-h-146">
                  <img
                    src="/static/images/splash-txms-usecases.jpg"
                    loading="lazy"
                    alt="Photo by Rastislav Vašička"
                    className="h-full w-full object-cover object-center"
                  />
              </div>

              <div>
                <div className="mb-6 space-y-4 text-gray-500 md:mb-8">
                  <TxMSNumbers />
                  <TxMSNumbers network="testnet" />
                  <p className="mt-6 text-sm leading-relaxed sm:text-base">
                    Some mobile network providers block outbound SMS messages to international or service numbers. We&apos;re expanding our local number coverage to improve availability. If neither the primary nor alternative number works in your country,{" "}
                    <a
                      href="mailto:contact@payto.onl?subject=TxMS%20Coverage%20Extension%20Request"
                      className="font-medium text-indigo-500 hover:text-indigo-600 hover:underline"
                    >
                      contact us
                    </a>{" "}
                    to request support for your location.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Offline Digital Payments
            </h2>

            <p className="mx-auto max-w-screen-md mb-8 text-center text-gray-500 md:text-lg">
              TxMS lets compatible devices deliver signed transaction data over SMS without mobile data. A receiving service still needs a way to forward supported transactions to the network.
            </p>
          </div>
          <div className="mt-16 flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-center">
            <a
              href="https://txms.info/"
              className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
            >
              TxMS website
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default TxMS;
