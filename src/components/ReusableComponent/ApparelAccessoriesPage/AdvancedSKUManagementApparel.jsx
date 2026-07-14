"use client";
import TitleContent from "@/components/ReusableComponent/All_Title/TitleContent";
import { titleContentConfig } from "@/config/titleContentConfig";
import Image from "next/image";
import Button from "../Button/Button";

export default function AdvancedSKUManagementApparel({ sectionKey = [] }) {
  const tc =
    titleContentConfig[sectionKey] || titleContentConfig["advancedskumanagementapparel"];

  const features = [
    {
      title: "Zero VAT & Customs Duty",
      text: " Track complex sizes, colors, and design variants easily",
      roundcolor: "bg-[#978050]",
      bordercolor: "border-[#FFBE2E]",
      translatestyle: "translate-y-0 md:-translate-y-10",
      hoverIcon: "/advancesku-icon-1.svg"
    },
    {
      title: "Flexible Storage Options",
      text: "Organized product placement across zones for faster picking cycles",
      roundcolor: "bg-[#FFBE2E]",
      bordercolor: "border-[#3C2C0B]",
      translatestyle: "translate-y-0 md:translate-y-10",
      hoverIcon: "/advancesku-icon-2.svg"
    },
    {
      title: "Instant Free Zone Documentation",
      text: "Smart bin locations designated for high-demand seasonal items",
      roundcolor: "bg-[#939393]",
      bordercolor: "border-[#FFBE2E]",
      translatestyle: "translate-y-0 md:-translate-y-10",
      hoverIcon: "/advancesku-icon-3.svg"
    },
    {
      title: "Real-Time Reconciliation Reports",
      text: "Bundle and kit management for promotional offers and combos",
      roundcolor: "bg-[#3C2C0B]",
      bordercolor: "border-[#3C2C0B]",
      translatestyle: "translate-y-0 md:translate-y-10",
      hoverIcon: "/advancesku-icon-4.svg"
    },
  ];

  return (
    <section className="relative overflow-hidden py-8 md:py-16">
      <div className="container">
        {/* TITLE */}
        <div className="grid text-center relative z-10">
          <TitleContent {...tc} />
        </div>

        <div className="grid grid-cols-1 gap-8 md:gap-16 items-center my-10 md:my-30">
          <div className="relative flex justify-center items-center order-1">
            {/* BACKGROUND IMAGE (instead of circle) */}
            <div className="absolute">
              <Image
                src="/advanced-management-for-apparel.svg" // 🔁 your image path
                alt="Background"
                width={570}
                height={570}
                className="object-contain opacity-100"
                priority
              />
            </div>

            {/* FEATURE CARDS */}
            <div className="featurecard2 relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
              {features.map((item, i) => (
                <div
                  key={i}
                  className={`group carditem relative ${item.translatestyle} w-full md:w-[450px] rounded-[32px] border border-[#1D1D1D] bg-[#FFBE2E] px-3 py-3 transition-all duration-300 hover:shadow-[4px_4px_0px_#1D1D1D]`}
                >
                  <div className="flex items-center gap-5">
                    {/* Number / Image */}
                    <div className="flex-shrink-0">
                      <div className="relative w-[90px] h-[90px] md:w-[70px] md:h-[90px] rounded-[28px] border border-black bg-[#4B3510] flex items-center justify-center overflow-hidden">

                        {/* Number */}
                        <span
                          className="
                            absolute
                            text-white text-xl md:text-4xl font-extrabold
                            transition-all duration-1000 ease-in-out
                            opacity-100 scale-100
                            group-hover:opacity-0 group-hover:scale-75
                          "
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        {/* Hover Image */}
                        <img
                          src={item.hoverIcon}
                          alt="Hover"
                          className=" absolute w-12 h-12 object-contain transition-all duration-500 ease-in-out opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100"
                        />
                      </div>
                    </div>

                    {/* Divider */}
                    <div
                      className="hidden md:block w-[2px] h-24"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(60, 44, 11, 0) 0%, #3C2C0B 36.54%, #3C2C0B 64.9%, rgba(60, 44, 11, 0) 100%)",
                      }}
                    />

                    {/* Content */}
                    <div className="flex-1">
                      <p className="mt-2 text-[#212121] text-base md:text-[20px] leading-7">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center">
          <Button href="" className="px-10 py-3" variant="black">
            Get expert support today
          </Button>
        </div>
      </div>
    </section>
  );
}
