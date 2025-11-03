import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSimple() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is PayTo protocol?",
      answer:
        "PayTo is an open-source payment protocol that enables direct, peer-to-peer financial transactions without intermediaries. The protocol provides a standardized way to send and receive payments across different platforms and networks, making financial interactions more efficient, secure, and accessible. PayTo supports various payment methods and can be integrated into existing financial infrastructure.",
    },
    {
      question: "Can I integrate into my payment infrastructure?",
      answer:
        "Yes, PayTo protocol is designed for easy integration into existing payment systems. The protocol includes a composition system and libraries that enable developers to add PayTo functionality to applications. Compatibility with various programming languages and frameworks makes PayTo suitable for both small businesses and large enterprises looking to modernize payment processing capabilities.",
    },
    {
      question: "Where are the solutions supported?",
      answer:
        "PayTo solutions are supported across multiple platforms and networks. The protocol operates on major blockchain networks, traditional banking systems, and digital payment platforms. Alliance members provide infrastructure and services that ensure seamless operation across different regions and regulatory environments, enabling global payment solutions.",
    },
    {
      question: "How to start applying the solutions?",
      answer:
        "To get started with PayTo solutions, begin by exploring available documentation and developer resources. Joining the Alliance provides access to technical support, implementation guides, and community forums. Developer teams are available for testing, along with step-by-step tutorials for integrating PayTo into applications. Contact development teams for specialized implementation support.",
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
