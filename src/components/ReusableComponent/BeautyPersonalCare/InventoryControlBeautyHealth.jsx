"use client";

import { titleContentConfig } from "@/config/titleContentConfig";
import TitleContent from "../All_Title/TitleContent";
import Button from "../Button/Button";

const invoiceFeatures = [
    {
        number: "01",
        title: "Automated Batch Tracking",
        description:
            "Every SKU is tracked by its batch and lot number.",
        dark: false,
    },
    {
        number: "02",
        title: "Expiry-Based Inventory",
        description:
            `Our system proactively alerts you 3-6 months before a product expires, allowing you to run "Flash Sales" and reduce waste.`,
        dark: true,
    },
    {
        number: "03",
        title: "SKU-Wise Sales Insights",
        description:
            "Detailed reports on which shades or products are selling the most, helping you forecast seasonal demand for Ramadan or Black Friday.",
        dark: false,
    },
];

export default function InventoryControlBeautyHealth({ sectionKey = [] }) {
    const tc =
        titleContentConfig[sectionKey] ||
        titleContentConfig["inventorycontrolbeautyhealth"];

    return (
        <section className="bg-[#ffffff]">
            <div className="container mx-auto px-4">
                <div className="flex justify-center mb-12 md: mt-15">
                    <div className="text-center">
                        <TitleContent {...tc} />
                    </div>
                </div>
                <div
                    className="overflow-hidden rounded-lg  px-8 py-14 lg:px-16"
                >
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        {/* Left Content */}
                        <div className="max-w-xl text-center lg:text-left">
                            <img src="/InventoryControlBeautyHealth-bg.svg" alt="" />
                        </div>

                        {/* Right Cards */}
                        <div className="flex flex-col gap-6">
                            {invoiceFeatures.map((item) => (
                                <InvoiceFeatureCard key={item.number} {...item} />
                            ))}
                        </div>
                    </div>
                    <div className="text-center mt-20">
                        <Button href="" className="px-5 py-3" variant="black">
                            Talk to a Fulfillment Expert
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

function InvoiceFeatureCard({ number, title, description, dark }) {
    return (
        <div
            className={`flex items-center rounded-2xl h-[150px] px-5 py-5 transition-all duration-300 ${dark ? "bg-[#3F2C07] text-white" : "bg-[#F7BA2C] text-[#1A1A1A]"
                }`}
        >
            {/* Number */}
            <div className="flex items-center">
                <span className="text-4xl font-bold">{number}</span>

                <div
                    className={`mx-4 h-25 w-[2px] ${dark ? "bg-white/70" : "bg-black/70"
                        }`}
                />
            </div>

            {/* Content */}
            <div>
                <h4 className="text-xl font-semibold">{title}</h4>

                <p
                    className={`mt-2 text-[18px] leading-relaxed ${dark ? "text-white/90" : "text-black/80"
                        }`}
                >
                    {description}
                </p>
            </div>
        </div>
    );
}
