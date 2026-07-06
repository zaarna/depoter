"use client";

import React from "react";
import TitleContent from "../All_Title/TitleContent";
import { titleContentConfig } from "@/config/titleContentConfig";
export default function EcommerceStack({ sectionKey = [] }) {
  const cards = [
    {
      number: "01",
      title: "Seamless Integration",
      description:
        "Connect directly with Shopify, Amazon, and Noon in just a few clicks.",
    },
    {
      number: "02",
      title: "Centralized Dashboard",
      description: "Manage your multi-channel orders from a single screen.",
    },
    {
      number: "03",
      title: "Real-time Synchronization",
      description:
        "When an order is placed on Amazon, your inventory level updates instantly across all other platforms.",
    },
    {
      number: "04",
      title: "API Connectivity",
      description:
        "Custom-built websites can integrate via our secure API for smooth data exchange.",
    },
  ];

  const tc =
    titleContentConfig[sectionKey] || titleContentConfig["EcommerceStack"];

  return (
    <section className="py-8 md:py-16 bg-[#FFFBF2]">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* Left Content */}
          <div className="lg:col-span-6 text-left">
            <TitleContent {...tc} />
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6">
            <div className="space-y-5">
              {cards.map((card, index) => (
                <div
                  key={card.number}
                  className={`flex rounded-2xl overflow-hidden ${
                    index % 2 === 0
                      ? "bg-[#FFBE2E] text-[#212121]"
                      : "bg-[#4B3507] text-white"
                  }`}
                >
                  {/* Number */}
                  <div className="flex min-w-[90px] items-center justify-center  px-4 py-6">
                    <span className="text-4xl font-bold">{card.number}</span>
                  </div>

                  {/* Divider */}
                  <div className="flex items-center">
                    <div
                      className={`w-[2px] h-[80%] ${
                        index % 2 === 0 ? " bg-black" : "bg-white"
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-5">
                    <h3 className="text-xl font-semibold">{card.title}</h3>

                    <p
                      className={`mt-2 leading-7 ${
                        index % 2 === 0 ? "text-[#3A3A3A]" : "text-white/80"
                      }`}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
