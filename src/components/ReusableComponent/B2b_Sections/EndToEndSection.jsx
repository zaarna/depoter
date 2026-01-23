import React from "react";
import TitleContent from "../All_Title/TitleContent";
import { titleContentConfig } from "@/config/titleContentConfig";
import ReturnsProcessSection from "./ReturnsProcessSection";

function EndToEndSection({ sectionKey }) {
  const tc = titleContentConfig[sectionKey] || titleContentConfig["endtoend"];
  return (
    <section className="py-8 md:py-16 bg-[#FFF7E4] relative overflow-hidden">
      <div className="container">
        <div className="grid text-center relative z-10">
          <TitleContent {...tc} />
        </div>
        <ReturnsProcessSection />
      </div>
    </section>
  );
}

export default EndToEndSection;
