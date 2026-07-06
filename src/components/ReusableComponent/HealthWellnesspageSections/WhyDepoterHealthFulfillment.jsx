"use client";
import React from "react";
import TitleContent from "../All_Title/TitleContent";
import { titleContentConfig } from "@/config/titleContentConfig";

function WhyDepoterHealthFulfillment({ sectionKey = [] }) {
  const tc =
    titleContentConfig[sectionKey] ||
    titleContentConfig["WhyDepoterHealthFulfillment"];

  const advantages = [
    {
      number: "01",
      title: "High Accuracy",
      description:
        "Specialized order processing reduces human error to near zero.",
    },
    {
      number: "02",
      title: "Reliable Handling",
      description:
        "Our team is trained in compliant handling for sensitive and hygiene-related products.",
    },
    {
      number: "03",
      title: "Market-Specific Expertise",
      description:
        "Built specifically for the unique logistics landscape of the UAE.",
    },
    {
      number: "04",
      title: "Complete Visibility",
      description:
        "From the moment a product enters our warehouse to the moment it reaches the customer's doorstep, you have full data logging.",
    },
  ];
  return (
    <section className="py-8 md:py-16 brand-bg relative overflow-hidden">
      <div className="container">
        <div className=" text-center relative z-10">
          <TitleContent {...tc} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 max-w-5xl mx-auto mt-8">
            {advantages.map((item) => (
              <div
                key={item.number}
                className="flex items-stretch gap-4 rounded-2xl border border-[#F2B233] bg-white p-5 transition-all duration-300 hover:shadow-md"
              >
                {/* Number */}
                <div className="flex w-13 flex-shrink-0 items-center justify-center rounded-lg bg-[#FDBD2D] text-3xl font-bold text-[#222]">
                  {item.number}
                </div>

                {/* Divider */}
                <div className="flex items-center">
                  <div className="w-[2px]  h-[90%] bg-black/70" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#212121] text-left">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-base font-light leading-6 text-[#212121] text-left">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyDepoterHealthFulfillment;
