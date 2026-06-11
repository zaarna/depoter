"use client";
import { titleContentConfig } from "@/config/titleContentConfig";
import React from "react";
import TitleContent from "../All_Title/TitleContent";
import Button from "../Button/Button";

function ScaleOperations({ sectionKey = [] }) {
  const tc =
    titleContentConfig[sectionKey] || titleContentConfig["scaleyourbusiness"];
  return (
    <section className="py-8 md:py-16 bg-[#3C2C0B] relative overflow-hidden">
      <div className="container">
        <div className="grid text-center relative z-10">
          <TitleContent {...tc} />
        </div>
        <div className="grid mt-6 md:mt-12">
          <Button
            href=""
            className="mx-auto block lg:w-[30%] sm:w-[100%] py-3 px-10 bg-[#FFBE2E]"
            variant=""
          >
            Start Your Fulfillment Journey Today
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ScaleOperations;
