"use client";
import React, { useState, useEffect } from "react";
import TitleContent from "../All_Title/TitleContent";
import { titleContentConfig } from "@/config/titleContentConfig";
import FeatureCard from "./FeatureCard";

function FasterExpansionSection({ sectionKey }) {
  const [isMobile, setisMobile] = useState(false);
  useEffect(() => {
    const checkScreen = () => {
      setisMobile(window.innerWidth <= 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);
  console.log("IsMobile?", isMobile);
  const features = [
    {
      id: 1,
      title: `Duty-Free ${isMobile ? "" : "\n"}   Advantage`,
      description:
        "Store bulk and high-volume inventory without import duties, reducing operational costs.",
      image: "/dutyfree.svg",
      alt: "Duty-Free Advantage",
    },
    {
      id: 2,
      title: `Accelerated Customs ${isMobile ? "" : "\n"}  Clearance`,
      description:
        "Expedite cross-border movement for smoother B2B supply chains.",
      image: "/customclearance.svg",
      alt: "Accelerated Customs Clearance",
    },
    {
      id: 3,
      title: `Centralized GCC ${isMobile ? "" : "\n"} Distribution`,
      description:
        "Efficiently reach all Gulf markets from a single, strategically located hub.",
      image: "/centralised.svg",
      alt: "Centralized GCC Distribution",
    },
    {
      id: 4,
      title: `Compliance-Ready ${isMobile ? "" : "\n"} Facilities`,
      description:
        "Fully equipped for international and regional regulatory standards, ensuring seamless operations.",
      image: "/compliance.svg",
      alt: "Compliance-Ready Facilities",
    },
  ];
  const tc =
    titleContentConfig[sectionKey] || titleContentConfig["fasterexpansion"];
  return (
    <section className="py-8 md:py-16 bg-[#FFFFFF]  relative overflow-hidden">
      <div className="container">
        <div className="grid text-center relative z-10">
          <TitleContent {...tc} />
        </div>
        <div className="mx-auto mt-12">
          <div className="flex flex-wrap justify-center gap-y-14 md:gap-y-18">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                image={feature.image}
                alt={feature.alt}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FasterExpansionSection;
