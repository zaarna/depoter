"use client";
import React from "react";
import TitleContent from "../All_Title/TitleContent";
import { titleContentConfig } from "@/config/titleContentConfig";
import ChallengesCard from "./ChallengesCard";

function ChallengesFulfillment({ sectionKey = [] }) {
  const tc =
    titleContentConfig[sectionKey] ||
    titleContentConfig["ChallengesFulfillment"];

  return (
    <section className="py-8 md:py-16 buildtohandleser relative overflow-hidden">
      <div className="container">
        <div className="grid text-center relative z-10">
          <TitleContent {...tc} />
        </div>
        <div className="mt-6 md:mt-12 relative">
          <ChallengesCard />
        </div>
      </div>
    </section>
  );
}

export default ChallengesFulfillment;
