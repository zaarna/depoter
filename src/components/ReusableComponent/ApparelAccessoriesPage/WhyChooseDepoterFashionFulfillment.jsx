"use client";
import { titleContentConfig } from "@/config/titleContentConfig";
import React from "react";
import TitleContent from "../All_Title/TitleContent";

const industries = [
    {
        id: 1,
        title: "Strong and error-free SKU management system.",
        icons: "/fashion-fulfillment-icon-1.svg",
    },
    {
        id: 2,
        title: "99.9% accuracy in high-speed picking and packing.",
        icons: "/fashion-fulfillment-icon-2.svg",
    },
    {
        id: 3,
        title: "Efficient, structured returns and exchange handling loops.",
        icons: "/fashion-fulfillment-icon-3.svg",
    },
    {
        id: 4,
        title: "24/7 real-time inventory visibility via a smart dashboard.",
        icons: "/fashion-fulfillment-icon-4.svg",
    },
    {
        id: 5,
        title: "Scalable warehouse infrastructure tailored for growing brands.",
        icons: "/fashion-fulfillment-icon-5.svg",
    },
    {
        id: 6,
        title: "Drastic reduction in shipping errors, customer returns, and operational costs.",
        icons: "/fashion-fulfillment-icon-6.svg",
    },
];

export default function WhyChooseDepoterFashionFulfillment() {
    const tc = titleContentConfig["whychoosedepoterfashionfulfillment"];
    return (
        <section className="relative overflow-hidden py-8 md:py-16">
            <div className="container">
                {/* TITLE */}
                <div className="grid text-center relative z-10">
                    <TitleContent {...tc} />
                </div>
                <div className="merchant-section">
                    <div className="merchant-wrapper">
                        {industries.map((industry, index) => (
                            <div
                                key={industry.id}
                                className={`merchant-row ${index % 2 === 0 ? "left-card" : "right-card"
                                    }`}
                            >
                                <div className={`${index % 2 === 0 ? "vendor-card-image-white-bg" : "vendor-card-image-bg"}`}>
                                    <div
                                        className={`${index % 2 === 0 ? "vendor-card-icon-left" : "vendor-card-icon-right"}`}
                                    >
                                        <div className={`${index % 2 !== 0 ? "yellow-hexagon bg-[ffbe2e]" : "white-hexagon"} flex items-center justify-center`}>
                                            <img
                                                src={industry.icons}
                                                alt={industry.title}
                                                className="hexagon-icon"
                                            />
                                        </div>
                                    </div>
                                    <div className="vendor-card-content">
                                        {/* <span className="vendor-card-step">Step {industry.id}</span> */}
                                        <p
                                            className={`vendor-card-title ${index % 2 === 0
                                                ? "vendor-card-title-right"
                                                : "vendor-card-title-left"
                                                }`}
                                        >
                                            {industry.title}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
