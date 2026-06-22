"use client";
import React from "react";
import TitleContent from "../All_Title/TitleContent";

function SmartIntegration({ sectionKey = [] }) {
  const tc = {
    title: "Smart Integration for",
    highlight: "Modern Ecommerce Businesses",
    content: "",
  };
  const paragraphData = [
    "Our ecommerce integration services UAE are designed to support growing businesses that need reliable and scalable systems.",

    "By connecting your ecommerce store, warehouse, and shipping partners, you can achieve complete order fulfillment automation without managing multiple tools.",
  ];

  return (
    <section className="py-8 md:py-30 smart-integration-bg relative overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-8 relative z-10">
          <div className="w-full lg:w-[65%] text-center lg:text-left">
            <h2 className="text-[clamp(1.5rem,1rem+2vw,3rem)] text-[#FFFFFF]">
              Smart Integration for
              <br />
              <span className="text-[#F5B42B]">
                Modern Ecommerce
                <br />
                Businesses
              </span>
            </h2>
            {paragraphData.map((paragraph, index) => (
              <p
                key={index}
                className="mt-6 text-[20px] text-[#FFFFFF] leading-7 max-w-2xl mx-auto lg:mx-0"
              >
                {paragraph}
              </p>
            ))}
            <div className="hidden md:block w-75 h-[1.5px] bg-[#FFFFFF] mt-[90px] me-auto "></div>
          </div>
          <div className="w-full lg:w-[35%] flex justify-center lg:justify-end mt-10 md:mt-0">
            <div className="w-full ms-10 rounded-3xl">
              <img
                src="/Smart-Integration.svg"
                alt="Strategic Hub Illustration"
                className="w-[400px] h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SmartIntegration;
