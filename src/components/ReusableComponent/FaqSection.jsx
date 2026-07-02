"use client";

import React from "react";
import FAQAccordion from "./FreightForwarding/FAQAccordion";
import TitleContent from "./All_Title/TitleContent";
import { titleContentConfig } from "@/config/titleContentConfig";

function FaqSection({
  sectionKey = "faq",
  faqs = [],
  className = "bg-[#FFF7E4] py-8 md:py-16 relative overflow-hidden",
}) {
  const tc = titleContentConfig[sectionKey] || titleContentConfig["faq"];

  return (
    <section className={className}>
      <div className="container">
        <div className="text-center">
          <TitleContent {...tc} />
        </div>

        <div className="mt-10 max-w-5xl mx-auto">
          <FAQAccordion faqs={faqs} />
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
