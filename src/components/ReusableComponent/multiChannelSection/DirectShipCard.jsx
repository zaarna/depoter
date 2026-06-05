"use client";

import React, { useEffect, useState } from "react";

const industries = [
  {
    id: 1,
    title: "Purchase order management and confirmations",
    icons: "/direct-ship-icon-1.svg",
    desktopcolor: "black",
    mobilecolor: "black",
  },
  {
    id: 2,
    title: "ASN creation with carton and pallet-level accuracy",
    icons: "/direct-ship-icon-2.svg",
    desktopcolor: "black",
    mobilecolor: "white",
  },
  {
    id: 3,
    title: "Delivery appointment scheduling at Amazon fulfillment centers",
    icons: "/direct-ship-icon-3.svg",
    desktopcolor: "white",
    mobilecolor: "black",
  },
  {
    id: 4,
    title: "SKU labeling and carton setup",
    icons: "/direct-ship-icon-4.svg",
    desktopcolor: "white",
    mobilecolor: "white",
  },
  {
    id: 5,
    title: "Transport arrangement and delivery execution",
    icons: "/direct-ship-icon-5.svg",
    desktopcolor: "black",
    mobilecolor: "black",
  },
  {
    id: 6,
    title: "POD collection and GRN follow-up",
    icons: "/direct-ship-icon-6.svg",
    desktopcolor: "black",
    mobilecolor: "white",
  },
  {
    id: 7,
    title: "Dispute handling for shortages and chargebacks",
    icons: "/direct-ship-icon-7.svg",
    desktopcolor: "white",
    mobilecolor: "black",
  },
];

export default function DirectShipCard() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="merchant-section direct-ship-section">
      <div className="merchant-wrapper direct-ship-wrapper">
        {industries.map((industry, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={industry.id}
              className={`direct-ship-card ${isEven ? "left-card1" : "right-card1"}`}
            >
              <div className="direct-ship-card-bg">
                <div
                  className={`${
                    isEven
                      ? "direct-ship-card-icon-left"
                      : "direct-ship-card-icon-right"
                  }`}
                >
                  <div className="box flex items-center justify-center">
                    <img
                      src={industry.icons}
                      alt={industry.title}
                      className="hexagon-icon"
                    />
                  </div>
                </div>

                <div className="direct-ship-card-content flex items-center justify-center relative">
                  <p
                    className={`vendor-card-title1 ${
                      isEven
                        ? "direct-ship-card-title-right"
                        : "direct-ship-card-title-left"
                    }`}
                  >
                    {industry.title}
                  </p>
                  <div
                    className={`${
                      isEven
                        ? "direct-ship-card-left-circle"
                        : "direct-ship-card-right-circle"
                    }`}
                    style={{
                      backgroundColor: isMobile
                        ? industry.mobilecolor
                        : industry.desktopcolor,
                    }}
                  />
                </div>
                {isEven ? (
                  <div className="direct-ship-right-image">
                    <img src="/direct-ship-right-image.svg" alt="" />
                  </div>
                ) : (
                  <div className="direct-ship-left-image">
                    <img src="/direct-ship-left-image.svg" alt="" />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
