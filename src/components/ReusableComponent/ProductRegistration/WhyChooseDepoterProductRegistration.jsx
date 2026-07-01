"use client";
import React from "react";
import Button from "../Button/Button";

const industries = [
  {
    id: 1,
    title: "Purchase order management and confirmations",
    icons: "/vcf-icon-1.svg",
  },
  {
    id: 2,
    title: "ASN creation with carton and pallet-level accuracy",
    icons: "/vcf-icon-2.svg",
  },
  {
    id: 3,
    title: "Delivery appointment scheduling at Amazon fulfillment centers",
    icons: "/vcf-icon-3.svg",
  },
  {
    id: 4,
    title: "SKU labeling and carton setup",
    icons: "/vcf-icon-4.svg",
  },
  {
    id: 5,
    title: "Transport arrangement and delivery execution",
    icons: "/vcf-icon-5.svg",
  },
  {
    id: 6,
    title: "POD collection and GRN follow-up",
    icons: "/vcf-icon-6.svg",
  },
  {
    id: 7,
    title: "Dispute handling for shortages and chargebacks",
    icons: "/vcf-icon-7.svg",
  },
];

export default function WhyChooseDepoterProductRegistration() {
  return (
    <section className="py-16 bg-[#3B2505]">
      <div className="container mx-auto px-4">
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
        <div className="grid mt-6 md:mt-12">
          <Button
            href=""
            className="
              group relative overflow-hidden
              mx-auto block
              w-full sm:w-[80%] md:w-[25%] lg:w-[25%]
              py-4 px-10
              rounded-full
              bg-[#FFBE2E]
              text-black
              font-semibold
              transition-all duration-500
              hover:scale-105
            "
            variant=""
          >
            <span className="relative z-10">
              Request a Free Consultation
            </span>

            <span
              className="
      absolute inset-0
      -translate-x-full
      skew-x-12
      bg-white/30
      transition-transform duration-700
      group-hover:translate-x-[200%]
    "
            />
          </Button>
        </div>
      </div>

    </section>

  );
}
