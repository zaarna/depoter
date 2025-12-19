"use client";
import React from "react";
import { titleContentConfig } from "@/config/titleContentConfig";
import { insights } from "@/data/home";
import TitleContent from "./ReusableComponent/All_Title/TitleContent";
import HowITWorksDetail from "./ReusableComponent/HowITWorks/HowITWorksDetail";
import InsightsGrid from "./ReusableComponent/InsightsCard/InsightsCard";

function InsightsSection({ sectionKey = [] }) {
  const tc = titleContentConfig[sectionKey] || titleContentConfig["insights"];
  return (
    <section className="py-8 md:py-16 insights-bg relative overflow-hidden">
      <div className="container ">
        <div className="grid text-center relative z-10">
          <TitleContent {...tc} />
        </div>

        <div className="grid mt-6 md:mt-12 relative z-10">
          <InsightsGrid insights={insights} />
        </div>
      </div>
    </section>
  );
}

export default InsightsSection;
