"use client";
import React from "react";
import { titleContentConfig } from "@/config/titleContentConfig";
import { services } from "@/data/home";
import TitleContent from "./ReusableComponent/All_Title/TitleContent";
import ServiceCard from "./ReusableComponent/Service_Card/ServiceCard";

function ServiceSection({ sectionKey = [] }) {
  const tc = titleContentConfig[sectionKey] || titleContentConfig["services"];
  return (
    <section className="py-8 md:py-16">
      <div className="container">
        <div className="grid text-center">
          <TitleContent {...tc} />
        </div>
        <div className="mt-6 md:mt-12 relative">
          <div className="hidden lg:block absolute inset-[-2%] pointer-events-none z-1">
            <svg
              className="w-full h-full [shape-rendering:geometricPrecision]
               [image-rendering:optimizeQuality]"
              viewBox="0 0 1435 1435"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <image
                href="/puzzle3.svg"
                width="1435"
                height="1435"
                preserveAspectRatio="none"
              />
            </svg>
          </div>
          <ServiceCard services={services} />
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
