"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/+971569902345";
const AUTO_CLOSE_MS = 3000;

export default function WhatsAppWidget() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show on every page load, auto-close after 5s unless the user closes it first
    const timer = setTimeout(() => setShowPopup(true), AUTO_CLOSE_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* "Connect with us instantly" popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.9 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-23 right-4 z-50 w-[220px] rounded-2xl border-2 border-[#FFBE2E] bg-[#1B1712] px-2 py-2 shadow-2xl sm:right-6"
          >
            <button
              onClick={() => setShowPopup(false)}
              aria-label="Close"
              className="absolute -left-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#FFBE2E] bg-[#1B1712]"
            >
              <X className="h-4 w-4 text-[#FFBE2E]" strokeWidth={2.5} />
            </button>

            <p className="text-center text-[15px] font-medium text-white">
              Connect with us instantly
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Persistent WhatsApp floating icon */}
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed h-15 w-15 bottom-6 right-6 z-50 flex items-center justify-center rounded-full"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.75"
            y="0.75"
            width="58.5"
            height="58.5"
            rx="29.25"
            fill="#212121"
            stroke="#212121"
            stroke-width="1.5"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30.5188 16C22.8008 16 16.5228 22.2797 16.5228 29.9999C16.5228 33.0616 17.5102 35.901 19.1887 38.2057L17.4443 43.4072L22.8254 41.6874C25.0387 43.1524 27.6799 44 30.5269 44C38.2448 44 44.5228 37.72 44.5228 30.0001C44.5228 22.28 38.2448 16.0002 30.5269 16.0002L30.5188 16ZM26.6103 23.1113C26.3389 22.4612 26.1331 22.4365 25.7219 22.4198C25.5818 22.4117 25.4258 22.4036 25.2528 22.4036C24.7178 22.4036 24.1583 22.5599 23.8209 22.9055C23.4097 23.3253 22.3893 24.3046 22.3893 26.3129C22.3893 28.3212 23.8539 30.2635 24.0513 30.5353C24.257 30.8066 26.9066 34.9877 31.0206 36.6917C34.2377 38.025 35.1924 37.9014 35.9245 37.7451C36.9941 37.5147 38.3354 36.7242 38.6728 35.7698C39.0102 34.8149 39.0102 34 38.9113 33.8272C38.8126 33.6544 38.5409 33.5559 38.1297 33.3499C37.7184 33.1441 35.7188 32.1564 35.3403 32.0247C34.9699 31.8848 34.6162 31.9343 34.3366 32.3294C33.9416 32.8809 33.555 33.4407 33.2422 33.778C32.9954 34.0414 32.592 34.0743 32.2548 33.9343C31.8022 33.7452 30.5353 33.3004 28.9717 31.9095C27.7621 30.8314 26.9394 29.49 26.7009 29.0868C26.4622 28.6754 26.6763 28.4364 26.8653 28.2143C27.071 27.959 27.2684 27.7781 27.4742 27.5393C27.6799 27.3008 27.7951 27.1772 27.9268 26.8973C28.0668 26.6257 27.9679 26.3458 27.8692 26.14C27.7705 25.9342 26.9477 23.9259 26.6103 23.1113Z"
            fill="#67C15E"
          />
        </svg>
      </motion.a>
    </>
  );
}
