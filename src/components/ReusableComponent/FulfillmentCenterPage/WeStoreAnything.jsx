"use client";

import React from "react";
import { titleContentConfig } from "@/config/titleContentConfig";
import TitleContent from "../All_Title/TitleContent";
import AddvalueToSupplyChainCard from "../FreightForwarding/AddvalueToSupplyChainCard";

function WeStoreAnything({ sectionKey = "" }) {
  const industries = [
    {
      title: "Flexible Storage Design:",
      icon: "/store-anything-1.svg",
      discription:
        "Whether it’s high-value electronics, fragile cosmetics, or bulky furniture, our warehouse is equipped to handle all SKUs.",
    },
    {
      title: "D2C, B2B, and Marketplace Support:",
      icon: "/store-anything-2.svg",
      discription:
        "We provide the infrastructure needed to support multiple business models simultaneously.",
    },
    {
      title: "Scalable Capacity:",
      icon: "/store-anything-3.svg",
      discription:
        "Don’t worry about seasonal spikes during Ramadan or Black Friday. Our scalable storage capacity grows according to your business needs.",
    },
  ];

  const tc =
    titleContentConfig[sectionKey] || titleContentConfig["westoreanything"];

  return (
    <section className="py-8 md:py-16 bg-[#978050] relative overflow-hidden">
      <div className="container">
        <div className="text-center relative z-10 mb-15">
          <TitleContent {...tc} />
        </div>

        <div className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 justify-items-center justify-center">
            {industries.map((industry, index) => (
              <AddvalueToSupplyChainCard key={index} industry={industry} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeStoreAnything;
