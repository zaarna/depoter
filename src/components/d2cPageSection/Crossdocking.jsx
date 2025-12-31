"use client";
import React from "react";
import TitleContent from "@/components/ReusableComponent/All_Title/TitleContent";
import { titleContentConfig } from "@/config/titleContentConfig";
import Image from "next/image";

function Crossdocking({ sectionKey = [] }) {
  const benefits = [
    {
      id: 1,
      title: "Fast-Moving Products",
      image: "/Crossdocking1.svg",
    },
    {
      id: 2,
      title: "Perishable Goods",
      image: "/Crossdocking2.svg",
    },
    {
      id: 3,
      title: "Just-in-Time Orders",
      image: "/Crossdocking3.svg",
    },
  ];
  const tc =
    titleContentConfig[sectionKey] || titleContentConfig["Crossdocking"];
  return (
    <section className=" relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12">
        {/* Left Content Section */}
        <div className="md:col-span-5 pl-4 pr-4 md:pl-28 md:pr-16  py-8 md:py-16">
          {/* Title */}
          <div className=" text-center md:text-left relative z-10">
            <TitleContent {...tc} />
          </div>
          {/* Description Paragraphs */}
          <div className="text-center md:text-left space-y-6 text-black text-base leading-relaxed">
            <p>
              Our cross-docking service helps D2C brands move products from
              suppliers directly to customers without unnecessary storage
              delays.
            </p>

            <p>
              This approach reduces handling time, speeds up delivery, and
              ensures high-demand or time-sensitive products reach customers
              when they expect them.
            </p>

            <p>
              By streamlining the supply chain, cross-docking also improves
              inventory efficiency and supports brands in meeting fast-changing
              consumer demand.
            </p>
          </div>

          {/* Decorative Line */}
          <div className="mt-0 md:mt-8 w-32 h-px bg-black opacity-0 md:opacity-100" />
        </div>
        <div className="md:col-span-1 " />
        {/* Right Yellow Section with Icons */}
        <div className="md:col-span-6 yellow-strip relative z-10  py-0 md:py-16">
          {/* Benefits List */}
          <div className="grid md:col-span-6 relative">
            <div className="">
              {benefits.map((benefit) => (
                <div
                  key={benefit.id}
                  className="flex items-center my-4 md:my-6 gap-8 md:gap-20 px-4 md:px-8 pr-2 pl-[30px] bg-[#FFF7E4] border-y border-y-black"
                >
                  {/* Icon Circle */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-14 h-14 md:w-24 md:h-24  bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Image
                        src={benefit.image}
                        alt={benefit.title}
                        width={70}
                        height={70}
                        className="w-8 h-8 md:w-16 md:h-16"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <div className="flex-1">
                    <h3 className="text-lg md:text-2xl font-bold text-gray-900">
                      {benefit.title}
                    </h3>
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

export default Crossdocking;
