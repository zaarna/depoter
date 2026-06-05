"use client";
import React from "react";

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

export default function VendorFulfillmentCard() {
  return (
    <div className="merchant-section">
      <div className="merchant-wrapper">
        {industries.map((industry, index) => (
          <div
            key={industry.id}
            className={`merchant-row ${
              index % 2 === 0 ? "left-card" : "right-card"
            }`}
          >
            <div className="vendor-card-image-bg ">
              <div
                className={`${index % 2 === 0 ? "vendor-card-icon-left" : "vendor-card-icon-right"}`}
              >
                <div className="yellow-hexagon flex items-center justify-center">
                  <img
                    src={industry.icons}
                    alt={industry.title}
                    className="hexagon-icon"
                  />
                </div>
              </div>
              <div className="vendor-card-content">
                {/* <span className="vendor-card-step">Step {industry.id}</span> */}
                <p
                  className={`vendor-card-title ${
                    index % 2 === 0
                      ? "vendor-card-title-right"
                      : "vendor-card-title-left"
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
  );
}
