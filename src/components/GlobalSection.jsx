"use client";
import React from "react";
import { titleContentConfig } from "@/config/titleContentConfig";
import TitleContent from "./ReusableComponent/All_Title/TitleContent";
import MapSection from "./ReusableComponent/MapSection/MapSection";

function GlobalSection({ sectionKey = [] }) {
  const tc = titleContentConfig[sectionKey] || titleContentConfig["global"];
  return (
    <section className="py-8 md:py-16 global-bg relative overflow-hidden">
      <div className="max-w-[500px] mx-auto">
        <div className="grid text-center relative z-10">
          <TitleContent {...tc} />
        </div>
      </div>
      <div className="mt-6 md:mt-12 relative grid">
        <MapSection />
      </div>
    </section>
  );
}

export default GlobalSection;
