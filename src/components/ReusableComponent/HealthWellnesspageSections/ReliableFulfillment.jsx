"use client";

import TitleContent from "../All_Title/TitleContent";
import { titleContentConfig } from "@/config/titleContentConfig";
const advantages = [
  {
    number: "01",
    title: "Health Supplements",
    description: "Capsules, powders, and herbal formulas.",
  },
  {
    number: "02",
    title: "Vitamins & Nutraceuticals",
    description: "Daily essentials that require precise expiry management.",
  },
  {
    number: "03",
    title: "Hygiene & Wellness Kits",
    description: "Curated bundles for personal care and health routines.",
  },
  {
    number: "04",
    title: "Personal Care Products",
    description: "Skin health and therapeutic items.",
  },
  {
    number: "05",
    title: "Medical Wellness Items",
    description: "Non-prescription health support products.",
  },
  {
    number: "06",
    title: "Regulatory Approved Goods",
    description:
      "Compliant handling of Dubai Municipality & MoHAP registered products.",
  },
];

export default function ReliableFulfillment({ sectionKey = [] }) {
  const tc =
    titleContentConfig[sectionKey] || titleContentConfig["reliablefulfillment"];

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="flex justify-center">
          <div className="text-center">
            <TitleContent {...tc} />
          </div>
        </div>
        <div className="text-center my-10">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#222]">
            What We Handle:
          </h3>

          <div className="w-68 h-[2px] bg-[#8D8D8D] mx-auto mt-2.5"></div>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {advantages.map((item) => (
            <div
              key={item.number}
              className="rounded-2xl border border-[#F2B233] bg-[#FFBE2E59] p-5 transition-all duration-300 hover:shadow-md"
            >
              {/* Top Row: Number + Title */}
              <div className="flex items-center gap-4">
                {/* Number */}
                <div className="flex h-13 w-13 flex-shrink-0 items-center justify-center rounded-lg bg-[#FDBD2D] text-2xl font-bold text-[#222]">
                  {item.number}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-[#222]">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="mt-4 text-[18px] leading-6 text-[#555]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
