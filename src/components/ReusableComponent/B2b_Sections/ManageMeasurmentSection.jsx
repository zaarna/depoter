"use client";
import React, { useState } from "react";
import TitleContent from "../All_Title/TitleContent";
import { titleContentConfig } from "@/config/titleContentConfig";
import ManageButton from "./ManageButton";

function ManageMeasurmentSection({ sectionKey = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tc =
    titleContentConfig[sectionKey] || titleContentConfig["managemesaurment"];
  const items = [
    {
      icon: "/multilevel.svg",
      title: "Multi-Level UOM Hierarchy",
      content: [
        {
          description:
            "Easily define, manage, and track products across multiple unit levels such as pieces, cartons, boxes, and pallets.",
        },
        {
          description:
            "The system ensures complete data synchronization across every UOM level, minimizing stock mismatches and <b class='font-bold'> enhancing warehouse accuracy.</b>",
        },
      ],
    },
    {
      icon: "/smart.svg",
      title: "Smart Inventory Control",
      content: [
        {
          description:
            "Every product unit is intelligently linked to its base unit, allowing accurate pricing, quantity adjustments, and live stock updates.",
        },
        {
          description:
            "This enables flawless warehouse coordination across both <b class='font-bold'> B2B fulfillment </b> and <b class='font-bold'> e-Commerce fulfillment </b> operations, improving order precision and reducing manual errors.",
        },
      ],
    },
    {
      icon: "/batch.svg",
      title: "Batch and Expiry Tracking",
      content: [
        {
          description:
            "Track batch numbers, expiry dates, and serial details for every product level with complete transparency.",
        },
        {
          description:
            "This ensures compliance with quality standards, allows easy recall management, and guarantees product traceability throughout the <b class='font-bold'> warehousing and fulfillment </b> process.",
        },
      ],
    },
    {
      icon: "/automated.svg",
      title: "Automated Order Processing",
      content: [
        {
          description:
            "The system automatically maps order quantities to their correct unit of measurement, eliminating manual conversions.",
        },
        {
          description:
            "This leads to faster order execution, optimized packaging, and error-free dispatch for large-volume <b class='font-bold'> order fulfillment solutions. </b>",
        },
      ],
    },
    {
      icon: "/simplified.svg",
      title: "Simplified Reporting",
      content: [
        {
          description:
            "Generate instant and detailed inventory reports that display stock levels, UOM conversion ratios, and replenishment timelines.",
        },
        {
          description:
            "These insights support better demand forecasting, purchase planning, and end-to-end <b class='font-bold'> inventory  management </b> efficiency.",
        },
      ],
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <section className="py-8 md:py-16  relative overflow-hidden bg-[#FFF7E4]">
      <div
        className="absolute inset-0
             bg-[url('/managebg.png')]
               bg-repeat
               bg-top
               bg-cover
               opacity-10
               pointer-events-none"
      />
      <div className="container">
        <div className="grid text-center relative">
          <TitleContent {...tc} />
          <div className="mt-10 ">
            <h6 className="font-bold sm:-ml-8  text-[#000000] text-center sm:text-left text-[20px]">
              Our Multi-UOM Capabilities Include
            </h6>
            <div className="hidden md:flex gap-8 mt-10 relative  ">
              <div className="w-2/5 relative">
                <div
                  className=" absolute left-10 top-3 z-11 bg-[url('/Line.svg')]
               bg-no-repeat
               bg-contain
               bg-top h-[95%] w-2.5"
                ></div>
                {items.map((item, index) => (
                  <ManageButton
                    key={index}
                    isActive={index === activeIndex}
                    icon={item.icon}
                    title={item.title}
                    handleClick={() => {
                      handleClick(index);
                    }}
                  />
                ))}
              </div>

              {/* Right Side - Content */}
              <div className="w-3/5 px-8">
                {items[activeIndex].content.map((section, idx) => (
                  <div key={idx} className="mb-8 text-left last:mb-0">
                    <p
                      className="text-[#212121] leading-relaxed text-[22px] font-light"
                      dangerouslySetInnerHTML={{ __html: section.description }}
                    ></p>
                  </div>
                ))}
              </div>
            </div>
            {/* MOBILE VIEW - Accordion */}
            <div className="md:hidden relative mt-5">
              {items.map((item, index) => (
                <div key={index} className="relative mb-4 last:mb-0">
                  {/* Accordion Item */}
                  <div className="relative">
                    <ManageButton
                      key={index}
                      isActive={index === activeIndex}
                      icon={item.icon}
                      title={item.title}
                      handleClick={() => {
                        handleClick(index);
                      }}
                    />

                    {/* Accordion Content */}
                    {activeIndex === index && (
                      <div className="bg-[#FFF8F0] rounded-2xl  border-b-4 border-x-2 border-t-2 border-[#978050] p-6">
                        {items[activeIndex].content.map((section, idx) => (
                          <div key={idx} className="mb-4 last:mb-0">
                            <p
                              className="text-[#212121] leading-relaxed text-left text-[18px]"
                              dangerouslySetInnerHTML={{
                                __html: section.description,
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ManageMeasurmentSection;
