"use client";

import { useState } from "react";

export default function FAQAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-5">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="overflow-hidden rounded-[30px] border border-[#D2A847] bg-[#F3E0A8] transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex w-full items-center justify-between px-6 py-5 text-left"
            >
              <h3 className="pr-4 text-xl font-semibold text-black">
                {faq.question}
              </h3>

              <div className="flex h-10 w-10 min-w-[40px] items-center justify-center rounded-full bg-[#D8B04D] text-xl font-bold">
                {isOpen ? "×" : "+"}
              </div>
            </button>

            {isOpen && (
              <div className="px-6 pb-6">
                <p className="leading-relaxed text-gray-800">{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
