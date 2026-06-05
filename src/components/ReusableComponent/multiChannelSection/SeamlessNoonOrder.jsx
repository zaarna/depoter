"use client";
import React from "react";
import { titleContentConfig } from "@/config/titleContentConfig";
import { services } from "@/data/home";
import TitleContent from "../All_Title/TitleContent";
import AmazonFulfillment from "./AmazonFulfillment";
import SeamlessOrderCard from "./SeamlessOrderCard";
export default function SeamlessNoonOrder({ sectionKey = [] }) {
  const tc =
    titleContentConfig[sectionKey] || titleContentConfig["seamlessnoonorder"];
  return (
    <section className="py-8 md:py-25 bg-[#978050] relative overflow-hidden">
      <div className="container">
        <div className="grid text-center relative z-10">
          <TitleContent {...tc} />
        </div>
        <div className="mt-6 md:mt-12 relative">
          {/* <div className="lg:hidden flex flex-col gap-6">
            {industries.map((category, index) => (
              //   <>
              <div key={index}>
                <BetterChoiceMultiChannel industry={category} />
              </div>
              //   </>
            ))}
          </div> */}

          {/* Tablet and Desktop: Masonry Layout */}
          <div className="">
            {/* {industries.map((category, index) => (
              <div key={index}> */}
            <SeamlessOrderCard />
            {/* </div>
            ))} */}
          </div>
        </div>
      </div>
    </section>
  );
}
