"use client";
import React from "react";
import { services } from "@/data/home";
import TitleContent from "@/components/ReusableComponent/All_Title/TitleContent";
import BuildToHandleCard from "@/components/ReusableComponent/BuildToHandleCard/BuildToHandleCard";
import { titleContentConfig } from "@/config/titleContentConfig";

function BuiltHandleService({ sectionKey = [] }) {
  const tc =
    titleContentConfig[sectionKey] ||
    titleContentConfig["buildtohandleservice"];
  return (
    <section className="py-8 md:py-16 buildtohandleser relative overflow-hidden">
      <div className="container">
        <div className="grid text-center relative z-10">
          <TitleContent {...tc} />
        </div>
        <div className="mt-6 md:mt-12 relative">
          <BuildToHandleCard variant="flex" />
        </div>
      </div>
    </section>
  );
}

export default BuiltHandleService;
