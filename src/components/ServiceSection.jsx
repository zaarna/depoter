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
          <ServiceCard services={services} />
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
