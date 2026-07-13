"use client";

import { titleContentConfig } from "@/config/titleContentConfig";
import TitleContent from "../All_Title/TitleContent";
import Button from "../Button/Button";

const invoiceFeatures = [
    {
        number: "01",
        title: "On-Demand Space Allocation",
        description:
            "Expand your warehouse footprint dynamically during peak seasons like Ramadan or Black Friday.",
        dark: false,
    },
    {
        number: "02",
        title: "Smooth Drop Operations",
        description:
            ` Efficiently handle high-volume order surges during new collection launches or influencer marketing campaigns.`,
        dark: true,
    },
    {
        number: "03",
        title: "Operational Adaptability",
        description:
            "Our system adapts to your growing order volume without causing dispatch delays or systemic issues.",
    },
];

export default function FlexibleFulfillmentGrowingBrands({ sectionKey = [] }) {
    const tc =
        titleContentConfig[sectionKey] ||
        titleContentConfig["flexiblefulfillmentgrowingbrands"];

    return (
        <section className="bg-[#fff7e4]">
            <div className="container mx-auto px-4 py-8 relative z-5">
                <div className="mb-5 flex justify-center md:mt-10">
                    <div className="text-center">
                        <TitleContent {...tc} />
                    </div>
                </div>

                <div
                    className="overflow-hidden rounded-lg px-8 py-14 lg:px-14"
                    style={{
                        backgroundImage: "url('/invoice-pattern.webp')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="grid items-stretch lg:grid-cols-2">
                        {/* Left Section */}
                        <div className="flex w-full items-center justify-center rounded-4xl border border-[#FFF7E4] bg-[#FFF7E4] p-10">
                            <img
                                src="/fulfillment-for-growing-brands.svg"
                                alt=""
                                className="max-w-full h-auto"
                            />
                        </div>

                        {/* Right Section */}
                        <div className="flex h-full flex-col">
                            <div className="flex flex-1 flex-col w-full justify-center gap-12 overflow-hidden">
                                {invoiceFeatures.map((item) => (
                                    <div key={item.number}>
                                        <InvoiceFeatureCard {...item} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function InvoiceFeatureCard({ number, title, description }) {
    return (
        <div className="flex flex-1 w-full items-center transition-all duration-300">
            {/* Number */}
            <div className="flex shrink-0 items-center">
                <div className="me-4">
                    <svg width="79" height="36" viewBox="0 0 79 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 18H59" stroke="black" stroke-width="2" stroke-linecap="round" stroke-dasharray="4 4" />
                        <circle cx="60.5" cy="18" r="8" fill="#3C2C0B" fill-opacity="0.3" />
                        <circle cx="60.5" cy="18" r="6" fill="#3C2C0B" />
                    </svg>
                </div>

                <div className="relative inline-block">
                    <span className="absolute bottom-0 left-0 w-5 h-5 bg-[#FFBE2E] rounded-full"></span>

                    <span className="relative z-10 text-[36px] font-extrabold leading-none text-[#212121]">
                        {number}
                    </span>
                </div>

                <div className="mx-4 h-18 w-[2px] bg-black/70" />
            </div>

            {/* Content */}
            <div className="flex-1">
                <h4 className="text-xl font-semibold">{title}</h4>

                <p className="mt-2 text-[18px] leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}