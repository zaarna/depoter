"use client";
import React from "react";
import TitleContent from "@/components/ReusableComponent/All_Title/TitleContent";
import { titleContentConfig } from "@/config/titleContentConfig";
import HowToConnect from "../ReusableComponent/HowToConnect/HowToConnect";
import IntegrationAdvantage from "../ReusableComponent/IntegrationAdvantage/IntegrationAdvantage";
import LogosWithMarquee from "../ReusableComponent/LogosWithMarquee/LogosWithMarquee";

function BusinessInSync({ sectionKey = [] }) {
  const tc =
    titleContentConfig[sectionKey] || titleContentConfig["Businessinsync"];
  return (
    <section className=" relative overflow-hidden">
      <div className="bg-[#3C2C0B] py-8 md:py-16">
        <div className="container">
          <div className="max-w-[800px] mx-auto">
            <div className="grid text-center relative z-10">
              <TitleContent {...tc} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFF7E4] py-8 md:py-16">
        <div className="container">
          <HowToConnect />
        </div>
      </div>
      <IntegrationAdvantage />
      <LogosWithMarquee />
    </section>
  );
}

export default BusinessInSync;
