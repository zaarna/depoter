"use client";

import { titleContentConfig } from "@/config/titleContentConfig";
import TitleContent from "../All_Title/TitleContent";
import Button from "../Button/Button";
import InvoiceFeatureCard from "@/components/InvoiceFeatureCard";

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
                    className="overflow-hidden rounded-lg  lg:px-8 py-5 lg:px-16"
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
                    <div className="text-center my-10 md:my-20 ">
                        <Button href="/company/contact-us" className="px-5 py-3" variant="black">
                            Talk to a Fulfillment Expert
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
