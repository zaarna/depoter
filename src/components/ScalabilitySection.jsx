"use client";
import React from "react";
import { titleContentConfig } from "@/config/titleContentConfig";
import { brands } from "@/data/home";
import TitleContent from "./ReusableComponent/All_Title/TitleContent";
import ScalabilityCard from "./ReusableComponent/ScalabilityCard/ScalabilityCard";

function ScalabilitySection({ sectionKey = [] }) {
  const tc =
    titleContentConfig[sectionKey] || titleContentConfig["Scalability"];
  return (
    <section className="py-8 md:py-16 bg-[#FFF7E4] relative overflow-hidden">
      <div className="container">
        <div className="grid text-center relative z-10">
          <TitleContent {...tc} />
        </div>
        <div className="grid mt-6 md:mt-12">
          <ScalabilityCard />
        </div>
      </div>
    </section>
  );
}

export default ScalabilitySection;
