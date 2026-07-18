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
    <section className="py-8 md:py-16 case-bg overflow-hidden">
      <div className="container">
        <div className="grid text-center relative z-10">
          <TitleContent {...tc} />
        </div>
        <div className="grid">
          <CaseStudyCard />
          <div className="text-center mt-10">
            <Button href="" className="px-10 py-3" variant="black">
              View More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudySection;
