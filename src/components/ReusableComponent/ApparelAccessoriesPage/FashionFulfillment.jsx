"use client";

import Image from "next/image";
import React from "react";
import TitleContent from "../All_Title/TitleContent";
import { titleContentConfig } from "@/config/titleContentConfig";

export default function FashionFulfillment({ sectionKey = [], image }) {
  const tc =
    titleContentConfig[sectionKey] || titleContentConfig["Fashionfulfillment"];

  return (
    <section className="py-8 md:py-16 bg-[#978050] ">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* Left Content */}
          <div className="order-2 lg:order-1 lg:col-span-6">
            <div className="relative z-10">
              <TitleContent {...tc} />
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 flex justify-center lg:order-2 lg:col-span-6">
            <div className="relative aspect-square w-full max-w-[520px] overflow-hidden rounded-2xl bg-[#FFE9B4] ">
              <Image
                src={image || "/FashionFulfillment.svg"}
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
