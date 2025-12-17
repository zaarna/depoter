"use client";
import React from "react";
import { titleContentConfig } from "@/config/titleContentConfig";
import { services } from "@/data/home";
import TitleContent from "./ReusableComponent/All_Title/TitleContent";
import BuildToHandleCard from "./ReusableComponent/BuildToHandleCard/BuildToHandleCard";

function BuildToHandlesection({ sectionKey = [] }) {
  const tc =
    titleContentConfig[sectionKey] || titleContentConfig["buildtohandle"];
  return (
    <section className="py-8 md:py-16 buildtohandle relative overflow-hidden">
      <div className="container">
        <div className="grid text-center relative z-10">
          <TitleContent {...tc} />
        </div>
        <div className="mt-6 md:mt-12 relative">
          <BuildToHandleCard />
        </div>
      </div>
    </section>
  );
}

export default BuildToHandlesection;
