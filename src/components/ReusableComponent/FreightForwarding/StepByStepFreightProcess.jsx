"use client";

import React from "react";
import { titleContentConfig } from "@/config/titleContentConfig";
import TitleContent from "../All_Title/TitleContent";
import CustomsClearanceCard from "./CustomsClearanceCard";
import AddvalueToSupplyChainCard from "./AddvalueToSupplyChainCard";
import FreightProcessCard from "./ShipmentCard";

function StepByStepFreightProcess({ sectionKey = "" }) {
  const industries = [
    {
      id: 1,
      title: "Simplifying Complex Documentation",
      icon: "/add-value-icon-1.svg",
      processImage: "/freight-process-image-1.svg",
      description:
        "We begin by understanding the shipment details, cargo type, destination, and transportation requirements.",
    },
    {
      id: 2,
      title: "Optimizing Transportation Routes",
      icon: "/add-value-icon-2.svg",
      processImage: "/freight-process-image-1.svg",
      description:
        "Our logistics specialists evaluate the best transportation method—sea, air, or land—and secure carrier bookings based on cost efficiency and delivery timelines.",
    },
    {
      id: 3,
      title: "Door-to-Door Logistics Support",
      processImage: "/freight-process-image-1.svg",
      icon: "/add-value-icon-3.svg",
      description:
        "We prepare essential shipping documents, including Bills of Lading, customs declarations, and product classification using the appropriate HS codes.",
    },
    {
      id: 4,
      title: "Real-Time Shipment Visibility",
      processImage: "/freight-process-image-1.svg",
      icon: "/add-value-icon-4.svg",
      description:
        "Shipments move through secure freight networks via sea, air, or land transportation channels.",
    },
    {
      id: 5,
      title: "Simplifying Complex Documentation",
      processImage: "/freight-process-image-1.svg",
      icon: "/add-value-icon-1.svg",
      description:
        "Our customs specialists manage the clearance process to ensure compliance with import and export regulations.",
    },
    {
      id: 6,
      title: "Optimizing Transportation Routes",
      processImage: "/freight-process-image-1.svg",
      icon: "/add-value-icon-2.svg",
      description:
        "Cargo is transported from the port or airport to the final delivery location through our inland transportation network.",
    },
  ];

  const tc =
    titleContentConfig[sectionKey] ||
    titleContentConfig["stepbystepfreightprocess"];
  return (
    <section className="py-8 md:py-16 bg-[#FFF7E4] relative overflow-hidden">
      <div className="container">
        <div className="text-center relative z-10 mb-16">
          <TitleContent {...tc} />
        </div>

        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6">
          {/* SVG Path */}
          <div className="absolute left-92 top-11 -translate-x-1/2 hidden xl:block pointer-events-none">
            <svg
              width="605"
              height="1410"
              viewBox="0 0 605 1436"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.75 0V129C0.75 156.614 23.1358 179 50.75 179H546.25C568.065 179 585.75 196.685 585.75 218.5"
                stroke="#3C2C0B"
                stroke-width="1.5"
                stroke-dasharray="7 7"
              />

              <path
                d="M585.75 262V391C585.75 418.614 563.364 441 535.75 441H40.25C18.4348 441 0.75 458.685 0.75 480.5"
                stroke="#3C2C0B"
                stroke-width="1.5"
                stroke-dasharray="7 7"
              />
              <path
                d="M585.75 786V915C585.75 942.614 563.364 965 535.75 965H40.25C18.4348 965 0.75 982.685 0.75 1004.5"
                stroke="#3C2C0B"
                stroke-width="1.5"
                stroke-dasharray="7 7"
              />
              <path
                d="M0.75 523.5V652.5C0.75 680.114 23.1358 702.5 50.75 702.5H546.25C568.065 702.5 585.75 720.185 585.75 742"
                stroke="#3C2C0B"
                stroke-width="1.5"
                stroke-dasharray="7 7"
              />
              <path
                d="M0.75 1047.5V1176.5C0.75 1204.11 23.1358 1226.5 50.75 1226.5H546.25C568.065 1226.5 585.75 1244.18 585.75 1266"
                stroke="#3C2C0B"
                stroke-width="1.5"
                stroke-dasharray="7 7"
              />
              <circle
                cx="272.25"
                cy="178.5"
                r="11"
                fill="#844A1C"
                fillOpacity="0.3"
              >
                <animate
                  attributeName="r"
                  values="11;18;11"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>

              <circle
                cx="272.25"
                cy="178.5"
                r="9.61539"
                fill="white"
                stroke="#3C2C0B"
                strokeWidth="0.769231"
              />

              <circle cx="272.249" cy="178.5" r="6.92308" fill="#3C2C0B" />
              <circle
                cx="272.25"
                cy="178.5"
                r="11"
                fill="#844A1C"
                fill-opacity="0.3"
              />
              <circle
                cx="409.25"
                cy="441.5"
                r="9.61539"
                fill="white"
                stroke="#3C2C0B"
                stroke-width="0.769231"
              />
              <circle cx="409.249" cy="441.5" r="6.92308" fill="#3C2C0B" />
              <circle
                cx="409.25"
                cy="441.5"
                r="11"
                fill="#844A1C"
                fill-opacity="0.3"
              />
              <circle
                cx="409.25"
                cy="964.5"
                r="9.61539"
                fill="white"
                stroke="#3C2C0B"
                stroke-width="0.769231"
              />
              <circle cx="409.249" cy="964.5" r="6.92308" fill="#3C2C0B" />
              <circle
                cx="409.25"
                cy="964.5"
                r="11"
                fill="#844A1C"
                fill-opacity="0.3"
              />
              <circle
                cx="308.25"
                cy="702.5"
                r="9.61539"
                fill="white"
                stroke="#3C2C0B"
                stroke-width="0.769231"
              />
              <circle cx="308.249" cy="702.5" r="6.92308" fill="#3C2C0B" />
              <circle
                cx="308.25"
                cy="702.5"
                r="11"
                fill="#844A1C"
                fill-opacity="0.3"
              />
              <circle
                cx="308.25"
                cy="1225.5"
                r="9.61539"
                fill="white"
                stroke="#3C2C0B"
                stroke-width="0.769231"
              />
              <circle cx="308.249" cy="1225.5" r="6.92308" fill="#3C2C0B" />
              <circle
                cx="308.25"
                cy="1225.5"
                r="11"
                fill="#844A1C"
                fill-opacity="0.3"
              />
              <circle
                cx="586.25"
                cy="1417.5"
                r="9.61539"
                fill="white"
                stroke="#3C2C0B"
                stroke-width="0.769231"
              />
              <circle cx="586.249" cy="1417.5" r="6.92308" fill="#3C2C0B" />
              <circle
                cx="586.25"
                cy="1417.5"
                r="11"
                fill="#844A1C"
                fill-opacity="0.3"
              />
              <circle
                cx="409.25"
                cy="441.5"
                r="11"
                fill="#844A1C"
                fillOpacity="0.3"
              >
                <animate
                  attributeName="r"
                  values="11;18;11"
                  dur="2s"
                  // begin="0.4s"
                  repeatCount="indefinite"
                />
              </circle>

              <circle
                cx="308.25"
                cy="702.5"
                r="11"
                fill="#844A1C"
                fillOpacity="0.3"
              >
                <animate
                  attributeName="r"
                  values="11;18;11"
                  dur="2s"
                  // begin="0.8s"
                  repeatCount="indefinite"
                />
              </circle>

              <circle
                cx="409.25"
                cy="964.5"
                r="11"
                fill="#844A1C"
                fillOpacity="0.3"
              >
                <animate
                  attributeName="r"
                  values="11;18;11"
                  dur="2s"
                  // begin="1.2s"
                  repeatCount="indefinite"
                />
              </circle>

              <circle
                cx="308.25"
                cy="1225.5"
                r="11"
                fill="#844A1C"
                fillOpacity="0.3"
              >
                <animate
                  attributeName="r"
                  values="11;18;11"
                  dur="2s"
                  // begin="1.6s"
                  repeatCount="indefinite"
                />
              </circle>

              <circle
                cx="586.25"
                cy="1417.5"
                r="11"
                fill="#844A1C"
                fillOpacity="0.3"
              >
                <animate
                  attributeName="r"
                  values="11;18;11"
                  dur="2s"
                  // begin="2s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </div>

          <div className="relative z-10 flex flex-col gap-10 lg:gap-[82px]">
            {industries.map((item, index) => (
              <FreightProcessCard
                key={index}
                number={index + 1}
                title={item.title}
                description={item.description}
                processImage={item.processImage}
                isEven={index % 2 !== 0}
              />
            ))}
          </div>

          <div className="absolute bottom-0 left-161">
            <svg
              width="2"
              height="139"
              viewBox="0 0 2 139"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.75 0V139"
                stroke="#3C2C0B"
                stroke-width="1.5"
                stroke-dasharray="7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StepByStepFreightProcess;
