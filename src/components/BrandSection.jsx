"use client";
import React from "react";
import { titleContentConfig } from "@/config/titleContentConfig";
import { brands } from "@/data/home";
import TitleContent from "./ReusableComponent/All_Title/TitleContent";
import BrandMarquee from "./ReusableComponent/BrandMarquee/BrandMarquee";

function BrandSection({ sectionKey = [] }) {
  const tc = titleContentConfig[sectionKey] || titleContentConfig["brand"];
  return (
    <section className="py-8 md:py-16 brand-bg relative overflow-hidden">
      <div className="grid text-center relative z-10">
        <TitleContent {...tc} />
      </div>
      <div className="grid z-1">
        <BrandMarquee brands={brands} />
      </div>
    </section>
  );
}

export default BrandSection;
