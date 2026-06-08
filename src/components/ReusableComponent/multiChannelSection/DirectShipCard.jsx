"use client";

import React, { useEffect, useState } from "react";

const industries = [
  {
    id: 1,
    title: "Daily order sync and processing",
    icons: "/direct-ship-icon-1.svg",
    desktopcolor: "black",
    mobilecolor: "black",
  },
  {
    id: 2,
    title: "Accurate picking and packing",
    icons: "/direct-ship-icon-2.svg",
    desktopcolor: "black",
    mobilecolor: "white",
  },
  {
    id: 3,
    title: "Non-compliant label printing",
    icons: "/direct-ship-icon-3.svg",
    desktopcolor: "white",
    mobilecolor: "black",
  },
  {
    id: 4,
    title: "Handover readiness for Noon logistics teams",
    icons: "/direct-ship-icon-4.svg",
    desktopcolor: "white",
    mobilecolor: "white",
  },
  {
    id: 5,
    title: "Real-time order status updates and tracking",
    icons: "/direct-ship-icon-5.svg",
    desktopcolor: "black",
    mobilecolor: "black",
  },
  {
    id: 6,
    title: "Handling Non-Delivery Reports (NDRs)",
    icons: "/direct-ship-icon-6.svg",
    desktopcolor: "black",
    mobilecolor: "white",
  },
  {
    id: 7,
    title: "Packaging compliance checks",
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
    <div className="merchant-section direct-ship-section ">
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
