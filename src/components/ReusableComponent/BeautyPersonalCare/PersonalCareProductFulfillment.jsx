"use client";

import AdvantageCard from "@/components/AdvantageCard";
import TitleContent from "../All_Title/TitleContent";
import { titleContentConfig } from "@/config/titleContentConfig";

const advantages = [
  {
    number: "01",
    title: "Omnichannel Fulfillment",
    description:
      "Manage orders across your D2C website, retail stores, and marketplaces from a single inventory.",
  },
  {
    number: "02",
    title: "Fast Delivery Across UAE",
    description:
      "Optimized warehouse locations help enable quick and reliable delivery across Emirates.",
  },
  {
    number: "03",
    title: "Lower RTO & Shipping Costs",
    description:
      "Smart courier selection and structured processes help reduce returns and improve delivery success.",
  },
  {
    number: "04",
    title: "Scalable Operations",
    description:
      "Our infrastructure adapts to your growth, handling seasonal spikes and increasing order volumes with ease.",
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
