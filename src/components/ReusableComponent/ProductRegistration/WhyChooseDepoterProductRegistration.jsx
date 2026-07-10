"use client";
import React from "react";
import Button from "../Button/Button";
import { titleContentConfig } from "@/config/titleContentConfig";
import TitleContent from "../All_Title/TitleContent";

const industries = [
  {
    id: 1,
    title: "Experienced compliance team",
    icons: "/wcdpr-icon-1.svg",
  },
  {
    id: 2,
    title: "Strong understanding of UAE regulatory authorities (MoIAT, MOHAP, Dubai Municipality)",
    icons: "/wcdpr-icon-2.svg",
  },
  {
    id: 3,
    title: "Deep knowledge of ECAS, ESMA standards, and G-Mark certification requirements",
    icons: "/wcdpr-icon-3.svg",
  },
  {
    id: 4,
    title: "Expertise in HS Code Classification and Compliance Certification",
    icons: "/wcdpr-icon-4.svg",
  },
  {
    id: 5,
    title: "Fast and accurate processing",
    icons: "/wcdpr-icon-5.svg",
  },
  {
    id: 6,
    title: "End-to-end service",
    icons: "/wcdpr-icon-6.svg",
  },
  {
    id: 7,
    title: "Clear communication at every step",
    icons: "/wcdpr-icon-7.svg",
  },
];

export default function WhyChooseDepoterProductRegistration({ sectionKey = [] }) {
  const tc =
    titleContentConfig[sectionKey] ||
    titleContentConfig["whychooseproductregistration"];
  return (
    <section className="py-16 bg-[#3B2505]">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-12">
          <div className="text-center">
            <TitleContent {...tc} />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          {/* Left Side (1 column) */}
          <div className="flex items-center justify-center">
            <img
              src="/Why-Choose-Depoter-for-Product-1.svg"
              alt="Illustration"
              className="w-85 h-auto object-contain"
            />
          </div>

          {/* Right Side (2 columns) */}
          <div className="lg:col-span-2">

            <div className="merchant-section">
              <div className="merchant-wrapper">
                {industries.map((industry, index) => (
                  <div
                    key={industry.id}
                    className={`merchant-row ${index % 2 === 0 ? "left-card left-card-1" : "right-card right-card-1"
                      }`}
                  >
                    <div className="vendor-card-image-bg vendor-card-image-bg1 ">
                      <div
                        className={`${index % 2 === 0 ? "vendor-card-icon-left vendor-card-icon-left-1" : "vendor-card-icon-right vendor-card-icon-right-1"}`}
                      >
                        <div className="yellow-hexagon yellow-hexagon-1 flex items-center justify-center">
                          <img
                            src={industry.icons}
                            alt={industry.title}
                            className="hexagon-icon object-cover"
                          />
                        </div>
                      </div>
                      <div className="vendor-card-content vendor-card-content-1">
                        {/* <span className="vendor-card-step">Step {industry.id}</span> */}
                        <p
                          className={`vendor-card-title vendor-card-title-1 ${index % 2 === 0
                            ? "vendor-card-title-right vendor-card-title-right-1"
                            : "vendor-card-title-left vendor-card-title-left-1"
                            }`}
                        >
                          {industry.title}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
        <div className="mt-10 flex justify-center">
          <Button
            children="Request a Free Consultation"
            className="px-5 py-2"
            // href={buttonLink}
            variant="yellow"
          />
        </div>
      </div>

    </section>

  );
}
