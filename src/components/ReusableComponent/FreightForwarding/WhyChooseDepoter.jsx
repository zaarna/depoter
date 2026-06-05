"use client";

import React from "react";
import { titleContentConfig } from "@/config/titleContentConfig";
import TitleContent from "../All_Title/TitleContent";
import WhyChooseDepoterCard from "./WhyChooseDepoterCard";

function WhyChooseDepoter({ sectionKey = "" }) {
  const industries = [
    {
      title: "Experienced Logistics Professionals",
      icon: "/businesses-choose-depoter-1.svg",
      discription:
        "Our team brings deep knowledge of international freight operations, ensuring shipments are handled efficiently and in compliance with trade regulations.",
    },
    {
      title: "Global Freight Network",
      icon: "/businesses-choose-depoter-2.svg",
      discription:
        "Depoter works with established shipping carriers, airlines, and transport partners to ensure reliable cargo movement across international markets.",
    },
    {
      title: "Strategic Location Advantage",
      icon: "/businesses-choose-depoter-3.svg",
      discription:
        "Operating from Dubai allows us to support businesses trading between Asia, Europe, the Middle East, and other major global markets.",
    },
    {
      title: "End-to-End Logistics Support",
      icon: "/businesses-choose-depoter-4.svg",
      discription:
        "From shipment planning to final delivery, we manage the entire freight process to simplify logistics for our clients.",
    },
  ];

  const tc =
    titleContentConfig[sectionKey] ||
    titleContentConfig["whybusinesschoosedepoter"];

  return (
    <section className="py-8 md:py-16 bg-[#FFFFFF] relative overflow-hidden">
      <div className="container">
        <div className="text-center relative z-10 mb-25">
          <TitleContent {...tc} />
        </div>

        <div className="mt-6 md:mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 justify-items-center justify-center">
            {industries.map((industry, index) => (
              <WhyChooseDepoterCard key={index} industry={industry} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseDepoter;
