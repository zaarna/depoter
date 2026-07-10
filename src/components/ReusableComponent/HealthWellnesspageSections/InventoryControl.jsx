"use client";

import React from "react";
import TitleContent from "../All_Title/TitleContent";
import { titleContentConfig } from "@/config/titleContentConfig";
import FreightProcessCard from "../FreightForwarding/ShipmentCard";
import Button from "../Button/Button";

function InventoryControl({ sectionKey = "" }) {
  const industries = [
    {
      id: 1,
      title: "FEFO (First-Expiry, First-Out) Handling",
      processImage: "/fifo.svg",
      description:
        "We prioritize FEFO over standard methods. Our system automatically directs pickers to the items with the nearest expiry date. This ensures that your customers always receive fresh products and you minimize waste.",
    },
    {
      id: 2,
      title: "Batch and Lot Tracking",
      processImage: "/batchtracking.svg",
      description:
        "For full visibility and product safety, we track every item by its batch and lot number. In the rare event of a product recall or quality check, we can identify and isolate specific batches in seconds.",
    },
    {
      id: 3,
      title: "Advanced Expiry Monitoring",
      processImage: "/advancedexpirymonitoring.svg",
      description:
        "Stop losing money on expired stock. Our dashboard provides proactive alerts for products nearing their expiry (3–6 months lead time), allowing you to run clearance sales or promotions effectively.",
    },
  ];

  const tc =
    titleContentConfig[sectionKey] || titleContentConfig["inventoryControl"];
  return (
    <section className="py-8 md:py-16 relative overflow-hidden">
      <div className="container">
        <div className="relative z-10 mb-16 mx-auto max-w-5xl text-center">
          <TitleContent {...tc} />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="absolute left-[34px] top-[40px] hidden lg:flex justify-center pointer-events-none">
            <svg
              width="625"
              height="652"
              viewBox="0 0 640 652"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 0V129C18 156.614 40.3858 179 68 179H563.5C585.315 179 603 196.685 603 218.5"
                stroke="#3C2C0B"
                stroke-width="1.5"
                stroke-dasharray="7 7"
              />
              <path
                d="M603 262V391C603 418.614 580.614 441 553 441H57.5C35.6848 441 18 458.685 18 480.5"
                stroke="#3C2C0B"
                stroke-width="1.5"
                stroke-dasharray="7 7"
              />
              <path
                d="M17.5 491.5V630.5"
                stroke="#3C2C0B"
                stroke-width="1.5"
                stroke-dasharray="7 7"
              />
              <circle
                cx="18"
                cy="627"
                r="9.61539"
                fill="white"
                stroke="#3C2C0B"
                stroke-width="0.769231"
              />
              <circle cx="18.0012" cy="627" r="6.92308" fill="#3C2C0B" />
              <circle
                cx="18"
                cy="627"
                r="11"
                fill="#844A1C"
                fill-opacity="0.3"
              />
              <circle
                cx="289.5"
                cy="178.5"
                r="9.61539"
                fill="white"
                stroke="#3C2C0B"
                stroke-width="0.769231"
              />
              <circle cx="289.501" cy="178.5" r="6.92308" fill="#3C2C0B" />
              <circle
                cx="289.5"
                cy="178.5"
                r="11"
                fill="#844A1C"
                fill-opacity="0.3"
              />
              <circle
                cx="426.5"
                cy="441.5"
                r="9.61539"
                fill="white"
                stroke="#3C2C0B"
                stroke-width="0.769231"
              />
              <circle cx="426.501" cy="441.5" r="6.92308" fill="#3C2C0B" />
              <circle
                cx="426.5"
                cy="441.5"
                r="11"
                fill="#844A1C"
                fill-opacity="0.3"
              />
            </svg>
          </div>
          <div className="relative z-10 flex flex-col gap-10 lg:gap-[50px]">
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
        </div>
        <div className="text-center mt-6 md:mt-12">
          <Button
            children={"Talk to a Fulfillment Expert"}
            className="py-2 px-5"
            href={"#"}
          />
        </div>
      </div>
    </section>
  );
}

export default InventoryControl;
