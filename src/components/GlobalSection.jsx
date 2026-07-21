"use client";
import React from "react";
import { titleContentConfig } from "@/config/titleContentConfig";
import TitleContent from "./ReusableComponent/All_Title/TitleContent";
import MapSection from "./ReusableComponent/MapSection/MapSection";

function GlobalSection({ sectionKey = [] }) {
  const tc = titleContentConfig[sectionKey] || titleContentConfig["global"];
  return (
    <section className="py-8 md:py-16 global-bg relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid text-center relative z-10">
          <TitleContent {...tc} />
        </div>

        <div className="mt-5 md:mt-10 relative grid">
          <MapSection />
        </div>
      </div>
    </section>
  );
}

export default GlobalSection;
