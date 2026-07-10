"use client";

import React from "react";
import { titleContentConfig } from "@/config/titleContentConfig";
import TitleContent from "../All_Title/TitleContent";
import AddvalueToSupplyChainCard from "../FreightForwarding/AddvalueToSupplyChainCard";

function BenefitsForYourBeautyBrand({ sectionKey = "" }) {
    const industries = [
        {
            title: "Real-Time Inventory Visibility",
            icon: "/Real-Time Inventory Visibility.svg",
            discription:
                "Stop guessing your stock levels. Our system gives you a live view of your inventory across our UAE fulfillment network. Track stock movement, batch details, and expiry timelines in real time with complete transparency.",
        },
        {
            title: "Faster Delivery Across UAE",
            icon: "/Faster Delivery Across UAE.svg",
            discription:
                "Speed matters in the beauty industry. Our strategically located fulfillment centers enable fast and reliable delivery across the UAE, helping you meet customer expectations and improve delivery performance.",
        },
        {
            title: "Structured Returns & Loss Control",
            icon: "/Structured Returns Loss Control.svg",
            discription:
                "Returns in beauty products require careful handling. Our reverse logistics system includes quality checks and controlled workflows to manage returns efficiently and reduce losses caused by damaged or used products.",
        },
    ];

    const tc =
        titleContentConfig[sectionKey] ||
        titleContentConfig["benefitsforyourbeautybrand"];

    return (
        <section className="py-8 md:py-16 bg-[#978050] relative overflow-hidden">
            <div className="container">
                <div className="text-center relative z-10 md:mb-10">
                    <TitleContent {...tc} />
                </div>

                <div className="">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 justify-items-center justify-center">
                        {industries.map((industry, index) => (
                            <AddvalueToSupplyChainCard key={index} industry={industry} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BenefitsForYourBeautyBrand;
