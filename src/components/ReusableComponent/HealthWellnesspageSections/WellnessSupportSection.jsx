"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import TitleContent from "../All_Title/TitleContent";
import { titleContentConfig } from "@/config/titleContentConfig";

export default function WellnessSupportSection({ sectionKey = [], image }) {
  const tc =
    titleContentConfig[sectionKey] || titleContentConfig["wellnessSupport"];

  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "Secure and Organized Warehousing",
      description:
        "A sanitized, dust-free environment specifically designed for health products.",
    },
    {
      title: "Temperature-Aware Storage Conditions",
      description:
        "We provide temperature control zones to ensure that vitamins and supplements do not lose their potency due to heat exposure.",
    },
    {
      title: "Real-Time Inventory Tracking",
      description:
        "Know exactly what is in stock at any given second with 99.9% inventory accuracy.",
    },
    {
      title: "Accurate Picking and Packing",
      description:
        "Barcode scanning and quality checks help reduce fulfillment errors.",
    },
    {
      title: "Scalable Operations",
      description:
        "Our infrastructure scales with your business during seasonal peaks and growth.",
    },
    {
      title: "Hyper-Local Last-Mile Delivery",
      description:
        "Fast delivery across the UAE using trusted courier partners.",
    },
    {
      title: "COD (Cash on Delivery) Management",
      description:
        "Complete COD reconciliation and payment tracking for your orders.",
    },
  ];

  return (
    <section className="py-8 md:py-16 bg-[#978050] relative overflow-hidden">
      <div className="container">
        {/* Heading */}
        <div className="mx-auto max-w-5xl text-center">
          <TitleContent {...tc} />
        </div>

        {/* Content */}
        <div className="mt-12 grid items-stretch gap-10 lg:grid-cols-12">
          {/* Left */}
          <div className="lg:col-span-5">
            <div className="space-y-5">
              {items.map((item, index) => {
                const isActive = activeIndex === index;

                return (
                  <div key={index}>
                    {isActive ? (
                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.35 }}
                        className="rounded-2xl border-2 border-[#3B2B09] bg-[#FFBE2E] p-4 cursor-pointer"
                        onClick={() => setActiveIndex(null)}
                      >
                        <h3 className="text-xl font-semibold text-[#212121]">
                          {item.title}
                        </h3>

                        <AnimatePresence>
                          <motion.p
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                            }}
                            transition={{ duration: 0.35 }}
                            className="overflow-hidden mt-1 text-[#212121] leading-7"
                          >
                            {item.description}
                          </motion.p>
                        </AnimatePresence>
                      </motion.div>
                    ) : (
                      <div
                        onClick={() => setActiveIndex(index)}
                        className="cursor-pointer border-l-[3px] border-[#FFBE2E] pl-2 py-0.5 transition-all duration-300"
                      >
                        <h3 className="text-xl font-semibold text-white">
                          {item.title}
                        </h3>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right */}
          <div className="flex items-end justify-center lg:col-span-7">
            <div className="relative h-full min-h-[350px] w-full">
              <Image
                src={image || "/WellnessSupport.svg"}
                alt="Warehouse"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
