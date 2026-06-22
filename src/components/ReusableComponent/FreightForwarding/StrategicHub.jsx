"use client";
import React from "react";
import { titleContentConfig } from "@/config/titleContentConfig";
import TitleContent from "../All_Title/TitleContent";

function StrategicHub({ sectionKey = [] }) {
  const tc =
    titleContentConfig[sectionKey] ||
    titleContentConfig["strategichubforglobal"];

  const paragraphData = [
    <>
      Dubai has established itself as one of the most important logistics and
      trade gateways connecting global markets. Located between Asia, Europe,
      and the Middle East, the region offers direct access to major
      international shipping routes and air cargo networks.
    </>,
    <>
      Depoter leverages Dubai’s strategic position to help businesses connect
      with international markets across the{" "}
      <span className="text-[#978050] font-semibold">
        Middle East, Asia, Europe, and North America
      </span>
      .
    </>,
    <>
      Through established partnerships with global carriers and logistics
      providers, we enable companies to move cargo seamlessly across
      international supply chains. Whether shipments are heading to regional
      markets in the GCC or long-distance destinations across continents, our
      freight specialists ensure reliable and efficient cargo movement.
    </>,
  ];

  return (
    <section className="py-8 md:py-16 bg-[#FFFFFF] relative overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-8 relative z-10">
          <div className="flex-1 text-left">
            <TitleContent {...tc} />

            {paragraphData.map((paragraph, index) => (
              <p
                key={index}
                className="mt-6 text-[20px] text-slate-700 leading-7 max-w-2xl mx-auto lg:mx-0"
              >
                {paragraph}
              </p>
            ))}

            <div className="lg:w-75 h-[1.5px] bg-black mt-[90px] me-auto"></div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="w-full lg:ms-10 rounded-3xl">
              <img
                src="/StrategicHubImage.svg"
                alt="Strategic Hub Illustration"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StrategicHub;
