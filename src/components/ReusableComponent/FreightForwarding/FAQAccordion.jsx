"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
            className="overflow-hidden rounded-[30px] border border-[#D2A847] bg-[#F3E0A8]"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex w-full cursor-pointer items-center justify-between px-6 py-5 text-left"
            >
              <h3 className="pr-4 text-xl font-semibold text-black">
                {faq.question}
              </h3>

              <motion.div
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex h-10 w-10 min-w-[40px] items-center justify-center rounded-full bg-[#D8B04D] text-xl font-bold"
              >
                +
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: { duration: 0.4, ease: "easeInOut" },
                    opacity: { duration: 0.25 },
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="leading-relaxed text-gray-800">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
