"use client";
import TitleContent from "@/components/ReusableComponent/All_Title/TitleContent";
import { titleContentConfig } from "@/config/titleContentConfig";
import Image from "next/image";

export default function EfficientStorageArchitecture({ sectionKey = [] }) {
  const tc =
    titleContentConfig[sectionKey] || titleContentConfig["efficientstorage"];

  const features = [
    {
      title: "Optimized Storage Mix",
      text: "We use an intelligent mix of bin, shelf, and pallet storage to maximize every square inch.",
      roundcolor: "bg-[#978050]",
      bordercolor: "border-[#FFBE2E]",
      translatestyle: "translate-y-0 md:-translate-y-10",
    },
    {
      title: "SKU-Based Slotting",
      text: "Smart slotting improves picking speed, ensuring your order processing never slows down.",
      roundcolor: "bg-[#FFBE2E]",
      bordercolor: "border-[#3C2C0B]",
      translatestyle: "translate-y-0 md:translate-y-10",
    },
    {
      title: "Large Item Handling",
      text: "We have dedicated open storage areas specifically for large and heavy items like furniture or equipment.",
      roundcolor: "bg-[#939393]",
      bordercolor: "border-[#FFBE2E]",
      translatestyle: "translate-y-0 md:-translate-y-10",
    },
    {
      title: "Productivity-Led Layout",
      text: "Our warehouse layout is engineered to minimize the travel time for staff, leading to fast dispatch times.",
      roundcolor: "bg-[#3C2C0B]",
      bordercolor: "border-[#3C2C0B]",
      translatestyle: "translate-y-0 md:translate-y-10",
    },
  ];

  return (
    <section className="mt-15 relative overflow-hidden py-8 md:py-36">
      <div className="container mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* LEFT – CIRCLE + CARDS */}
          <div className="relative flex justify-center items-center order-2 md:order-1">
            {/* BACKGROUND IMAGE (instead of circle) */}
            <div className="absolute">
              <Image
                src="/whychoosebg.svg" // 🔁 your image path
                alt="Background"
                width={620}
                height={620}
                className="object-contain opacity-0 md:opacity-100"
                priority
              />
            </div>

            {/* FEATURE CARDS */}
            <div className="featurecard1 relative grid grid-cols-1 md:grid-cols-2 gap-6 ">
              {features.map((item, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden bg-white border-l-4 md:border-l-0 border-b-0 md:border-b-4 ${item.bordercolor} ${item.translatestyle} rounded-2xl md:rounded-4xl shadow-xl p-4 md:p-6 w-auto h-auto md:w-[260px] md:h-[260px] text-center md:text-left
                  carditem transition-all duration-500`}
                >
                  <span
                    className={`w-14 h-14 rounded-full opacity-0 md:opacity-100 absolute -right-3 -top-3 ${item.roundcolor}`}
                  ></span>
                  <h4 className="text-lg md:text-xl font-bold text-[#212121] w-full md:w-50 text-start">
                    {item.title}
                  </h4>
                  <span
                    className={`w-20 h-px opacity-0 md:opacity-100 rounded-full block my-0 md:my-3 ${item.roundcolor}`}
                  ></span>
                  <p className="text-base md:text-lg text-start text-[#212121] font-light leading-relaxe">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT – TEXT CONTENT */}
          <div className="order-1 md:order-2 text-center lg:text-right">
            <div className=" text-center lg:text-right relative z-10 ">
              <TitleContent {...tc} />
            </div>
            <div className="flex justify-center lg:justify-end mt-6 md:mt-10">
              <span className=" w-60 h-[1px] block bg-[#000000] opacity-0 md:opacity-100 " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
