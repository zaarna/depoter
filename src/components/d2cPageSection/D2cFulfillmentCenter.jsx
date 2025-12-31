"use client";
import React from "react";
import { services } from "@/data/home";
import TitleContent from "@/components/ReusableComponent/All_Title/TitleContent";
import { titleContentConfig } from "@/config/titleContentConfig";
import FulfillmentCenter from "../ReusableComponent/FulfillmentCenter/FulfillmentCenter";

function D2cFulfillmentCenter({ sectionKey = [] }) {
  const tc =
    titleContentConfig[sectionKey] || titleContentConfig["Fulfillmentcenter"];
  return (
    <section className="py-8 md:py-16 relative overflow-hidden">
      <div className="container">
        <div className="max-w-[800px] mx-auto">
          <div className="grid text-center relative z-10">
            <TitleContent {...tc} />
          </div>
        </div>
        <div className="mt-6 md:mt-12 relative">
          <FulfillmentCenter />
        </div>
      </div>
    </section>
  );
}

export default D2cFulfillmentCenter;
