"use client";

import Image from "next/image";

const features = [
  {
    title: "Global Fulfillment Network",
    desc: "Reach customers faster with multi-location warehouses that cut delivery times and optimize logistics costs.",
    image: "/Flexible1.svg",
    variant: "dark",
  },
  {
    title: "Seamless System Integrations",
    desc: "Connect your online stores, marketplaces, and ERPs through quick, plug-and-play integrations for smooth operations.",
    image: "/Flexible2.svg",
    variant: "light",
  },
  {
    title: "Flexible Fulfillment Operations",
    desc: "Adapt to changing order volumes with systems that scale automatically for consistent performance year-round.",
    image: "/Flexible3.svg",
    variant: "dark",
  },
  {
    title: "AI-powered Support",
    desc: "Enhance customer experience with instant responses, smart tracking, and proactive communication powered by AI.",
    image: "/Flexible4.svg",
    variant: "light",
  },
];

export default function FlexibleCard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 rounded-none md:rounded-2xl gap-15 lg:gap-0 overflow-hidden shadow-none lg:shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
      {features.map((item, i) => {
        const isDark = item.variant === "dark";

        return (
          <div
            key={i}
            className={`flex flex-col items-center text-center px-14 py-5 lg:rounded-none rounded-2xl lg:shadow-none shadow-[0_0px_5px_rgba(0,0,0,0.15)] border lg:border-0 
                ${
                  isDark
                    ? "bg-[#3C2C0B] text-white border-[#3C2C0B]"
                    : "bg-[#FFF7E4] text-[#212121] border-[#978050]"
                }
              `}
          >
            {/* ICON */}
            <div className="mb-6 flex items-center justify-center">
              <Image
                src={item.image}
                alt={item.title}
                width={96}
                height={96}
                className="object-contain"
              />
            </div>

            {/* TITLE */}
            <h3 className="text-2xl font-semibold mb-3 leading-snug">
              {item.title}
            </h3>

            {/* DIVIDER */}
            <div
              className={`w-32 h-[2px] mb-4
                  ${isDark ? "bg-[#FFBE2E] md:bg-white" : "bg-[#3C2C0B]"}
                `}
            />

            {/* DESCRIPTION */}
            <p
              className={`text-lg leading-relaxed font-normal
                  ${isDark ? "text-white" : "text-[#212121]"}
                `}
            >
              {item.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
}
