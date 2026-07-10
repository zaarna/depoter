"use client";

import AdvantageCard from "@/components/AdvantageCard";
import TitleContent from "../All_Title/TitleContent";
import { titleContentConfig } from "@/config/titleContentConfig";

const advantages = [
  {
    number: "01",
    title: "Inventory Transparency",
    description:
      "100% visibility into your operations from a single login.",
  },
  {
    number: "02",
    title: "One-Stop-Shop",
    description:
      "We handle D2C, B2B, and Retail fulfillment under one roof.",
  },
  {
    number: "03",
    title: "Unified Finance Management",
    description:
      "Auto-reconciliation and payout visibility so you can track your profits accurately.",
  },
  {
    number: "04",
    title: "Premium Unboxing",
    description:
      "Build brand loyalty with packaging that looks and feels high-end.",
  },
];

export default function PersonalCareProductFulfillment({ sectionKey = [] }) {
  const tc =
    titleContentConfig[sectionKey] ||
    titleContentConfig["personalcareproductfulfillment"];

  return (
    <section className="py-12 md:py-16  relative overflow-hidden brand-bg">
      <div className="container relative z-10 mx-auto px-4">
        {/* Title */}
        <div className="flex justify-center mb-12">
          <div className="text-center">
            <TitleContent {...tc} />
          </div>
        </div>
        {/* Cards */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-15 md:grid-cols-2">
          {advantages.map((item) => (
            <AdvantageCard
              key={item.number}
              number={item.number}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
