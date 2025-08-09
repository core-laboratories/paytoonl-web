import React, { useState } from "react";

export default function FAQSimple() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is PayTo protocol?",
      answer:
        "PayTo is an open-source payment protocol that enables direct, peer-to-peer financial transactions without intermediaries. It provides a standardized way to send and receive payments across different platforms and networks, making financial interactions more efficient, secure, and accessible. The protocol supports various payment methods and can be integrated into existing financial infrastructure.",
    },
    {
      question: "Can I integrate it in my payment infrastructure?",
      answer:
        "Yes, PayTo protocol is designed for easy integration into existing payment systems. It provides composition system and libraries that allow developers to add PayTo functionality to their applications. The protocol is compatible with various programming languages and frameworks, making it suitable for both small businesses and large enterprises looking to modernize their payment processing capabilities.",
    },
    {
      question: "Where are the solutions supported?",
      answer:
        "PayTo solutions are supported across multiple platforms and networks. The protocol works on major blockchain networks, traditional banking systems, and digital payment platforms. Alliance members provide infrastructure and services that ensure PayTo works seamlessly across different regions and regulatory environments, making it a truly global payment solution.",
    },
    {
      question: "How to start applying the solutions?",
      answer:
        "To get started with PayTo solutions, begin by exploring our documentation and developer resources. You can join our alliance to access technical support, implementation guides, and community forums. We offer developer teams for testing and provide step-by-step tutorials for integrating PayTo into your applications. Contact development teams for specialized implementation support.",
    },
  ];

  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-3xl font-bold text-gray-800 md:mb-6 lg:text-4xl">
              FAQs
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              Find answers to common questions about PayTo ecosystem.
            </p>
          </div>

          <div className="mx-auto flex max-w-screen-xl flex-col border-t border-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200">
                <div
                  className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600"
                  onClick={() => toggleAnswer(index)}
                >
                  <span className="font-semibold transition duration-100 text-xl">
                    {faq.question}
                  </span>

                  <span className="text-indigo-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-6 w-6 transition-transform duration-200 ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </div>

                <p
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
