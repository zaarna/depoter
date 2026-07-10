"use client";

import Image from "next/image";
import React from "react";
import TitleContent from "../All_Title/TitleContent";
import { titleContentConfig } from "@/config/titleContentConfig";

export default function FlexibleFulfillment({ sectionKey = [], image }) {
  const tc =
    titleContentConfig[sectionKey] || titleContentConfig["productType"];

  return (
    <section className="py-8 md:py-16 bg-[#978050] ">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* Left Content */}
          <div className="order-2 lg:order-1 lg:col-span-6">
            <div className="relative z-10">
              <TitleContent {...tc} />
              <div className="mt-4 text-base text-white space-y-3">
                <p>
                  Our fulfillment system is flexible enough to handle different
                  types of health and wellness products.
                </p>
                <p>
                  From small supplement bottles to bulk hygiene kits, our
                  process ensures proper handling, safe packaging, and timely
                  delivery. Every product is managed with the right approach to
                  maintain safety and consistency across the supply chain.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 flex justify-center lg:order-2 lg:col-span-6">
            <div className="relative aspect-square w-full max-w-[520px] overflow-hidden rounded-2xl bg-[#FFF7E8] ">
              <Image
                src={image || "/flexiblefulfillment.svg"}
                alt={tc.title}
                fill
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
