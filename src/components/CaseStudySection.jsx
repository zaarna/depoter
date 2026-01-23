"use client";
import React from "react";
import { titleContentConfig } from "@/config/titleContentConfig";
import { brands } from "@/data/home";
import TitleContent from "./ReusableComponent/All_Title/TitleContent";
import BrandMarquee from "./ReusableComponent/BrandMarquee/BrandMarquee";
import CaseStudyCard from "./ReusableComponent/CaseStudyCard/CaseStudyCard";
import Button from "./ReusableComponent/Button/Button";

function CaseStudySection({ sectionKey = [] }) {
  const tc = titleContentConfig[sectionKey] || titleContentConfig["case"];
  return (
    <section className="py-8 md:py-16 case-bg relative overflow-hidden">
      <div className="container">
        <div className="grid text-center relative z-10">
          <TitleContent {...tc} />
        </div>
        <div className="grid mt-6 md:mt-12">
          <CaseStudyCard />
          <Button
            children="View More"
            className="mt-15 w-[300px] px-5 py-3 mx-auto cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}

export default CaseStudySection;
