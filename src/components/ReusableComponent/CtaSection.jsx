"use client";
import React from "react";
import TitleContent from "./All_Title/TitleContent";
import Button from "./Button/Button";
import { titleContentConfig } from "@/config/titleContentConfig";

function CtaSection({ sectionKey = [], buttonText, buttonLink }) {
  const tc = titleContentConfig[sectionKey];
  return (
    <section className="py-8 md:py-16 bg-[#3C2C0B] relative overflow-hidden">
      <div className="container">
        <div className="text-center relative z-10">
          <TitleContent {...tc} />
          <Button
            children={buttonText}
            className="py-2 px-5 mt-10"
            href={buttonLink}
            variant="yellow"
          />
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
