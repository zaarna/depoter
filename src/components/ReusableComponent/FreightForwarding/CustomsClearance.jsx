"use client";

import React from "react";
import { titleContentConfig } from "@/config/titleContentConfig";
import TitleContent from "../All_Title/TitleContent";
import CustomsClearanceCard from "./CustomsClearanceCard";

function CustomsClearance({ sectionKey = "" }) {
  const industries = [
    {
      title: "HS Code classification",
      icon: "/custom-clearance-icon-1.svg",
    },
    {
      title: "Commercial invoices",
      icon: "/custom-clearance-icon-2.svg",
    },
    {
      title: "Bills of Lading",
      icon: "/custom-clearance-icon-3.svg",
    },
    {
      title: "Import/export declarations",
      icon: "/custom-clearance-icon-4.svg",
    },
  ];

  const tc =
    titleContentConfig[sectionKey] || titleContentConfig["customclearance"];

  return (
    <section className="py-8 md:py-16 bg-[#FFFFFF] relative overflow-hidden">
      <div className="container">
        <div className="text-center relative z-10 mb-25">
          <TitleContent {...tc} />
        </div>

        <div className="mt-6 md:mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <CustomsClearanceCard key={index} industry={industry} />
            ))}
          </div>
          <div className="mt-20 text-center text-[23px]">
            <p className="w-[70%] mx-auto">
              By simplifying the customs clearance process, we reduce the risk
              of delays, penalties, or shipment rejections while ensuring
              compliance with international trade regulations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomsClearance;
