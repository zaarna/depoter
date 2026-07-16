"use client";

import { titleContentConfig } from "@/config/titleContentConfig";
import TitleContent from "../All_Title/TitleContent";
import Button from "../Button/Button";

const invoiceFeatures = [
  {
    number: "01",
    title: "On-Demand Space Allocation",
    description:
      "Expand your warehouse footprint dynamically during peak seasons like Ramadan or Black Friday.",
    dark: false,
  },
  {
    number: "02",
    title: "Smooth Drop Operations",
    description: ` Efficiently handle high-volume order surges during new collection launches or influencer marketing campaigns.`,
    dark: true,
  },
  {
    number: "03",
    title: "Operational Adaptability",
    description:
      "Our system adapts to your growing order volume without causing dispatch delays or systemic issues.",
  },
];

export default function FlexibleFulfillmentGrowingBrands({ sectionKey = [] }) {
  const tc =
    titleContentConfig[sectionKey] ||
    titleContentConfig["flexiblefulfillmentgrowingbrands"];

  return (
    <section className="bg-[#fff7e4] py-8 md:py-16">
      <div className="container mx-auto relative z-5">
        <div className="mb-5 md:mb-10 flex justify-center ">
          <div className="text-center">
            <TitleContent {...tc} />
          </div>
        </div>

        <div
          className="overflow-hidden"
        >
          <div className="grid items-stretch lg:grid-cols-2">
            {/* Left Section */}
            <div className="flex w-full items-center justify-center rounded-4xl border border-[#FFF7E4] bg-[#FFF7E4] ">
              <img
                src="/fulfillment-for-growing-brands.svg"
                alt=""
                className="max-w-full h-auto"
              />
            </div>

            {/* Right Section */}
            <div className="flex h-full flex-col">
              <div className="flex flex-1 flex-col w-full justify-center gap-12 overflow-hidden">
                {invoiceFeatures.map((item) => (
                  <div key={item.number}>
                    <InvoiceFeatureCard {...item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function InvoiceFeatureCard({ number, title, description }) {
  return (
    <div className="flex flex-col md:flex-row w-full transition-all duration-300">
      {/* Top (Mobile) / Left (Desktop) */}
      <div className="flex shrink-0 flex-col md:flex-row">
        {/* SVG + Number */}
        <div className="flex items-center">
          <div className="me-4">
            <svg
              width="79"
              height="36"
              viewBox="0 0 79 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 18H59"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="4 4"
              />

              {/* Animated Outer Circle */}
              <circle cx="60.5" cy="18" r="8" fill="#3C2C0B" fillOpacity="0.7">
                <animate
                  attributeName="r"
                  values="8;12;8"
                  dur="1.8s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  values="0.3;0;0.3"
                  dur="1.8s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Inner Circle */}
              <circle cx="60.5" cy="18" r="6" fill="#3C2C0B" />
            </svg>
          </div>

          <div className="relative inline-block">
            <span className="absolute bottom-0 left-0 h-5 w-5 rounded-full bg-[#FFBE2E]"></span>

            <span className="relative z-10 text-[36px] font-extrabold leading-none text-[#212121]">
              {number}
            </span>
          </div>

          {/* Desktop Divider */}
          <div className="mx-4 hidden h-18 w-[2px] bg-black/70 md:block" />
        </div>

        {/* Mobile Divider */}
        <div className="mt-5 mb-5 h-[2px] w-full bg-black/70 md:hidden" />
      </div>

      {/* Content */}
      <div className="mt-5 flex-1 md:mt-0">
        <h4 className="text-xl font-semibold">{title}</h4>

        <p className="mt-2 text-[18px] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
