"use client";
import React from "react";
import { titleContentConfig } from "@/config/titleContentConfig";
import TitleContent from "../All_Title/TitleContent";
import Button from "../Button/Button";
function ManageEverything({ sectionKey = [] }) {
  const tc =
    titleContentConfig[sectionKey] || titleContentConfig["manageeverything"];
  return (
    <section className="py-8 md:py-16 bg-[#3C2C0B] relative overflow-hidden">
      <div className="container">
        <div className="grid text-center relative z-10">
          <TitleContent {...tc} />
        </div>
        <div className="grid mt-6 md:mt-12">
          <Button
            href=""
            className="
    group relative overflow-hidden
    mx-auto block sm:w-[80%] md:w-[60%] lg:w-[30%]
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
            <span className="relative z-10">Connect Your Store Today</span>

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

export default ManageEverything;
