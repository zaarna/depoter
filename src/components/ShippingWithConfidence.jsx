"use client";
import React from "react";
import { titleContentConfig } from "@/config/titleContentConfig";
import TitleContent from "./ReusableComponent/All_Title/TitleContent";
import Button from "./ReusableComponent/Button/Button";

function ShippingWithConfidence({ sectionKey = [] }) {
  const tc =
    titleContentConfig[sectionKey] ||
    titleContentConfig["shippingwithconfidence"];
  return (
    <section className="py-8 md:py-16 bg-[#3C2C0B] relative overflow-hidden">
      <div className="container">
        <div className="grid text-center relative z-10">
          <TitleContent {...tc} />
        </div>
        <div className="grid mt-6 md:mt-12">
          <Button
            href=""
            className="mx-auto block w-[25%] py-3 px-10 bg-[#FFBE2E]"
            variant=""
          >
            Talk to a Freight Expert
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ShippingWithConfidence;
