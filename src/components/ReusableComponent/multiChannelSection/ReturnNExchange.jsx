"use client";
import React from "react";
import { services } from "@/data/home";
import TitleContent from "@/components/ReusableComponent/All_Title/TitleContent";
import { titleContentConfig } from "@/config/titleContentConfig";
import EasyReturnsCard from "../EasyReturnsCard/EasyReturnsCard";
import ReturnNExchangeCard from "./ReturnNExchangeCard";

function ReturnNExchange({ sectionKey = [] }) {
  const tc =
    titleContentConfig[sectionKey] || titleContentConfig["returnandexchange"];
  return (
    <section className="py-8 md:py-16 relative bg-[#3C2C0B] overflow-hidden">
      <div className="container">
        <div className="max-w-[800px] mx-auto">
          <div className="grid text-center relative z-10">
            <TitleContent {...tc} />
          </div>
        </div>
        <div className="mt-6 md:mt-12 relative">
          <ReturnNExchangeCard />
        </div>
      </div>
    </section>
  );
}

export default ReturnNExchange;
