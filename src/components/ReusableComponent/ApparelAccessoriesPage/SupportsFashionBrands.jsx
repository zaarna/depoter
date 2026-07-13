"use client";

import Image from "next/image";
import React from "react";
import TitleContent from "../All_Title/TitleContent";
import { titleContentConfig } from "@/config/titleContentConfig";

export default function SupportsFashionBrands({ sectionKey = [], image }) {
    const tc =
        titleContentConfig[sectionKey] || titleContentConfig["supportsfashionbrands"];

    return (
        <section className="py-8 md:py-16 bg-[#978050] ">
            <div className="container">
                <div className="grid items-center gap-10 lg:grid-cols-12">
                    {/* Left Content */}
                    <div className="order-2 lg:order-1 lg:col-span-6">
                        <div className="relative z-10">
                            <TitleContent {...tc} />
                            <div className="mt-4 text-[1.15rem] text-white font-light space-y-3">
                                <p>
                                    Depoter provides a complete e-commerce apparel fulfillment solution designed for modern fashion businesses. Our warehouses are organized for efficient SKU management, ensuring products are stored and tracked properly. Structured workflows for order processing ensure fast and accurate fulfillment.
                                </p>
                                <p>
                                    With real-time tracking, you always know what is in stock and what is moving. Our system also integrates with e-commerce platforms and marketplaces, allowing smooth order and inventory sync without manual work.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="order-1 flex justify-center lg:order-2 lg:col-span-6">
                        <div className="relative aspect-square w-full max-w-[520px] overflow-hidden rounded-2xl bg-[#FFF7E8] ">
                            <Image
                                src={image || "/supports-fashion-brands.svg"}
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
