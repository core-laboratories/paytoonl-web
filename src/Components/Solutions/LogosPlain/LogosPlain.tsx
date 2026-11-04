import { AudioLines, Banknote, BookMarked, Tag, WalletCards, MessageSquareCode, ChevronsLeftRightEllipsis, ArrowRight, Landmark, QrCode } from "lucide-react";
import React from "react";

export default function LogosPlain() {
  const solutions = [
    {
      title: "BarcodeTx",
      description: "Transfer signed transactions across an air gap with animated QR codes, then scan and forward them from a connected device.",
      href: "/solutions/barcodetx",
      icon: QrCode
    },
    {
      title: "Core Banking",
      description: "Connect participating providers to coordinated transaction and settlement flows.",
      href: "/solutions/corebanking",
      icon: Landmark
    },
    {
      title: "FinTag",
      description: "Publish payment identifiers on your domain for compatible services to discover.",
      href: "/solutions/fintag",
      icon: Tag
    },
    {
      title: "ICAN",
      description: "A structured digital asset address with a checksum for catching entry errors.",
      href: "/solutions/ican",
      icon: ChevronsLeftRightEllipsis
    },
    {
      title: "ORIC",
      description: "A structured wallet identifier for participating financial service providers.",
      href: "/solutions/oric",
      icon: BookMarked
    },
    {
      title: "PayPass",
      description: "Present payment details in a pass for Apple Wallet and Google Wallet.",
      href: "/solutions/paypass",
      icon: WalletCards
    },
    {
      title: "PayTo",
      description: "Share payment destinations in a format compatible apps can recognize.",
      href: "/solutions/payto",
      icon: Banknote
    },
    {
      title: "TxMS",
      description: "Deliver signed transaction data over SMS without mobile data.",
      href: "/solutions/txms",
      icon: MessageSquareCode
    },
    {
      title: "VoiceTx",
      description: "Carry signed transaction data as audio between devices.",
      href: "/solutions/voicetx",
      icon: AudioLines
    }
  ];

  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Explore Solutions
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              Explore payment tools designed for modern financial infrastructure.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <a
                  key={index}
                  href={solution.href}
                  className={`group flex flex-col items-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 hover:border-indigo-200 cursor-pointer lg:col-span-2 ${solutions.length % 3 === 2 && index === solutions.length - 2 ? "lg:col-start-2" : ""}`}
                >
                  <div className="p-3 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors duration-200">
                    <IconComponent className="h-8 w-8 text-indigo-500" />
                  </div>

                  <h3 className="mt-4 mb-3 text-center text-lg font-semibold text-gray-800 md:text-xl">
                    {solution.title}
                  </h3>
                  <p className="mb-4 text-center text-gray-500 text-sm leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-500 transition duration-200 group-hover:text-indigo-600">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
