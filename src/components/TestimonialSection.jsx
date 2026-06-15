"use client";
import React from "react";
import { titleContentConfig } from "@/config/titleContentConfig";
import TitleContent from "./ReusableComponent/All_Title/TitleContent";
import TestimonialCard from "./ReusableComponent/TestimonialCard/TestimonialCard";

function TestimonialSection({ testimonials }) {
  const tc = titleContentConfig["testimonials"];
  return (
    <section className="py-8 md:py-16 relative overflow-hidden">
      <div className="container">
        <div className="grid text-center relative z-10">
          <TitleContent {...tc} />
        </div>
      </div>

      <div className=" mt-6 md:mt-12 relative z-10 px-4 md:px-0">
        <TestimonialCard testimonials={testimonials} />
      </div>
    </section>
  );
}

export default TestimonialSection;
