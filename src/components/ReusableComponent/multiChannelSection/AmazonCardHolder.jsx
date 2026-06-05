"use client";
import React, { useEffect } from "react";

export default function AmazonCardHolder({ industry }) {
  const isEven = industry.id % 2 === 0;
  const [isMobile, setIsMobile] = React.useState(false);

  // Check screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 769);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      className={`amazon-card flex flex-col items-center gap-4 h-40 p-10 text-start rounded-lg relative bg-amazon-${industry.rotate}`}
    >
      {isEven && !isMobile && (
        <div className="absolute w-[15px] h-[15px] bg-black rounded-full left-[12px] top-[45%] -translate-y-1/2" />
      )}

      {!isEven && !isMobile && (
        <div className="absolute w-[15px] h-[15px] bg-black rounded-full right-[12px] top-[45%] -translate-y-1/2" />
      )}
      <h4
        className={` ${industry.rotate === "rotate-6" ? "ms-20" : "me-20 text-end"} ${isMobile ? "mt-6" : "mt-7"}`}
      >
        {industry.title}
      </h4>
      <div
        className={` ${industry.rotate === "rotate-6" ? "icon-wrapper-left" : "icon-wrapper-right"}`}
      >
        <img src={industry.icons} alt="" className="w-12 h-12" />
      </div>
    </div>
  );
}
