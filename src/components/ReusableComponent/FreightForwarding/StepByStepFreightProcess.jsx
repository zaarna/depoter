"use client";

import React from "react";
import { titleContentConfig } from "@/config/titleContentConfig";
import TitleContent from "../All_Title/TitleContent";
import CustomsClearanceCard from "./CustomsClearanceCard";
import AddvalueToSupplyChainCard from "./AddvalueToSupplyChainCard";

function StepByStepFreightProcess({ sectionKey = "" }) {
  const industries = [
    {
      title: "Simplifying Complex Documentation",
      icon: "/add-value-icon-1.svg",
      discription:
        "International shipping requires multiple regulatory documents and compliance checks. Our logistics specialists manage paperwork requirements, helping businesses avoid errors and customs delays.",
    },
    {
      title: "Optimizing Transportation Routes",
      icon: "/add-value-icon-2.svg",
      discription:
        "We analyze shipping routes and transportation methods to identify the most efficient logistics options. This helps reduce shipping costs while maintaining reliable delivery timelines.",
    },
    {
      title: "Door-to-Door Logistics Support",
      icon: "/add-value-icon-3.svg",
      discription:
        "From supplier pickup to final delivery, our team manages the complete logistics process. This includes transportation coordination, customs clearance, and last-mile delivery support.",
    },
    {
      title: "Real-Time Shipment Visibility",
      icon: "/add-value-icon-4.svg",
      discription:
        "Through structured logistics management, businesses gain improved visibility into their cargo movement across global supply chains.",
    },
  ];

  const tc =
    titleContentConfig[sectionKey] ||
    titleContentConfig["addvaluetosupplychain"];

  return (
    <section className="py-8 md:py-16 bg-[#978050] relative overflow-hidden">
      <div className="container">
        <div className="text-center relative z-10 mb-15">
          <TitleContent {...tc} />
        </div>

        <div className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 justify-items-center justify-center">
            {industries.map((industry, index) => (
              <AddvalueToSupplyChainCard key={index} industry={industry} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StepByStepFreightProcess;
