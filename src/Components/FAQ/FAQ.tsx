import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSimple() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the PayTo protocol?",
      answer:
        "PayTo provides a consistent way to express a payment destination and request. Compatible applications can recognize the details and hand the request to a supported payment flow. The payment provider and network still handle authorization and settlement.",
    },
    {
      question: "Can I integrate PayTo into my payment infrastructure?",
      answer:
        "Yes. Developers can use PayTo formats and available libraries to create payment links and connect them to supported wallet or provider flows. The integration details depend on the payment method and the services you use.",
    },
    {
      question: "Where can I use PayTo solutions?",
      answer:
        "Support depends on the wallet, provider, network, and location. The solutions cover payment identifiers, wallet passes, provider routing, and alternative ways to deliver signed transaction data. Check each solution page for its requirements and supported flow.",
    },
    {
      question: "How do I start using the solutions?",
      answer:
        "Start by exploring the available solutions and developer resources. You can contact a development organization for help with testing or integration. Joining the Alliance also lets you collaborate with teams working on PayTo standards.",
    },
  ];

  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-3xl font-bold text-gray-800 md:mb-6 lg:text-4xl">
              FAQ
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              Find answers to common questions about the PayTo ecosystem.
            </p>
          </div>

          <div className="mx-auto flex max-w-screen-xl flex-col border-t border-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  type="button"
                  className="flex w-full justify-between gap-2 py-4 text-left text-black hover:text-indigo-500 active:text-indigo-600"
                  onClick={() => toggleAnswer(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-semibold transition duration-100 md:text-xl">
                    {faq.question}
                  </span>

                  <span className="text-indigo-500">
                    <ChevronDown
                      className={`h-6 w-6 transition-transform duration-200 ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                      />
                  </span>
                </button>

                <p
                  id={`faq-answer-${index}`}
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndex === index
                      ? "grid-rows-[1fr] opacity-100 mb-4"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <span className="overflow-hidden">
                    {faq.answer}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
