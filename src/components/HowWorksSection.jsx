"use client";
import React from "react";
import { titleContentConfig } from "@/config/titleContentConfig";
import { brands } from "@/data/home";
import TitleContent from "./ReusableComponent/All_Title/TitleContent";
import HowITWorksDetail from "./ReusableComponent/HowITWorks/HowITWorksDetail";

function HowWorksSection({ sectionKey = [] }) {
  const tc = titleContentConfig[sectionKey] || titleContentConfig["Howtowork"];
  return (
    <section className="py-8 md:py-16 howworks-bg relative overflow-hidden">
      <div className="container ">
        <div className="max-w-3xl mx-auto">
          <div className="grid text-center relative z-10">
            <TitleContent {...tc} />
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-6 md:mt-12 relative z-10">
          <div className="grid">
            <HowITWorksDetail />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowWorksSection;
