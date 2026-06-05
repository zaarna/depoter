"use client";

import React from "react";
import { titleContentConfig } from "@/config/titleContentConfig";
import TitleContent from "../All_Title/TitleContent";
import BetterChoiceMultiChannel from "../BetterChoiceCardMultiChannel/BetterChoicecardMultiChannel";
import FreightForwardingServicesCard from "./FreightForwardingServicesCard";

function FreightForwardingServices({ sectionKey = "" }) {
  const industries = [
    {
      title: "Ocean Freight",
      boxes: ["FCL Shipping", "LCL Shipping", "Port Handling"],
      items: [
        "End-to-end ocean freight management",
        "Container consolidation services",
        "Customs documentation support",
        "Global carrier network access",
      ],
    },
    {
      title: "Air Freight",
      boxes: ["Express", "Standard", "Charter"],
      items: [
        "Priority cargo handling",
        "Airport-to-airport shipping",
        "Temperature-controlled logistics",
        "Real-time shipment tracking",
      ],
    },
  ];

  const tc =
    titleContentConfig[sectionKey] ||
    titleContentConfig["freightforwardingservices"];

  return (
    <section className="py-8 md:py-16 bg-[#FFF7E4] relative overflow-hidden">
      <div className="container">
        <div className="text-center relative z-10">
          <TitleContent {...tc} />
        </div>

        <div className="mt-6 md:mt-12">
          {/* <div className="grid grid-cols-1 lg:grid-cols-1 gap-6"> */}
          {/* {industries.map((industry, index) => ( */}
          <FreightForwardingServicesCard />
          {/* ))} */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}

export default FreightForwardingServices;
