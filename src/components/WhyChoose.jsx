"use client";
import React from "react";
import { titleContentConfig } from "@/config/titleContentConfig";
import { cardsone } from "@/data/home";
import TitleContent from "./ReusableComponent/All_Title/TitleContent";
import WhyChooseCard from "./ReusableComponent/WhyChooseCard/WhyChooseCard";

function WhyChoose({ sectionKey = [] }) {
  const tc = titleContentConfig[sectionKey] || titleContentConfig["WhyChoose"];
  return (
    <section className="py-8 md:pt-16 relative overflow-hidden">
      <div className="container">
        <div className="grid text-center">
          <TitleContent {...tc} />
        </div>
        <div className="py-4 grid grid-cols-1 gap-4">
          <WhyChooseCard />
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
