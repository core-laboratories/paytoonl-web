import { Banknote, BookMarked, Tag, WalletCards, MessageSquareCode, ChevronsLeftRightEllipsis, ArrowRight } from "lucide-react";
import React from "react";

export default function LogosPlain() {
  const solutions = [
    {
      title: "PayTo",
      description: "Direct peer-to-peer payment protocol enabling instant transfers across networks without intermediaries",
      href: "/solutions/payto",
      icon: Banknote
    },
    {
      title: "FinTag",
      description: "Financial meta system for secure implementation of multiple payment networks",
      href: "/solutions/fintag",
      icon: Tag
    },
    {
      title: "ORIC",
      description: "FinTech organization registry for secure digital identification",
      href: "/solutions/oric",
      icon: BookMarked
    },
    {
      title: "ICAN",
      description: "International Crypto Account Number for transfer of digital assets",
      href: "/solutions/ican",
      icon: ChevronsLeftRightEllipsis
    },
    {
      title: "PayPass",
      description: "Digital wallet and payment management system for Apple and Google Wallet",
      href: "/solutions/paypass",
      icon: WalletCards
    },
    {
      title: "TxMS",
      description: "Transaction messaging system for offline payments",
      href: "/solutions/txms",
      icon: MessageSquareCode
    }
  ];

  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Competitive Advantage
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              Explore the comprehensive suite of payment solutions designed to modernize financial infrastructure.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <a
                  key={index}
                  href={solution.href}
                  className="group flex flex-col items-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 hover:border-indigo-200 cursor-pointer"
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
