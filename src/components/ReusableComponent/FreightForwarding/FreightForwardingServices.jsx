"use client";

import React from "react";
import { titleContentConfig } from "@/config/titleContentConfig";
import TitleContent from "../All_Title/TitleContent";
import BetterChoiceMultiChannel from "../BetterChoiceCardMultiChannel/BetterChoicecardMultiChannel";
import FreightForwardingServicesCard from "./FreightForwardingServicesCard";

function FreightForwardingServices({ sectionKey = "" }) {
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
          <FreightForwardingServicesCard />
        </div>
      </div>
    </section>
  );
}

export default FreightForwardingServices;
