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

export default function InventoryControlBuiltFreshness({ sectionKey = [] }) {
    const tc =
        titleContentConfig[sectionKey] ||
        titleContentConfig["inventorycontrolbuiltfreshness"];

    return (
        <section className="brand-bg">
            <div className="container mx-auto px-4 relative z-5">
                <div className="mb-12 flex justify-center md:mt-15">
                    <div className="text-center">
                        <TitleContent {...tc} />
                    </div>
                </div>

                <div
                    className="overflow-hidden rounded-lg px-8 py-14 lg:px-16"
                    style={{
                        backgroundImage: "url('/invoice-pattern.webp')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="grid items-stretch gap-12 lg:grid-cols-2">
                        {/* Left Section */}
                        <div className="flex h-full items-center justify-center rounded-4xl border border-[#FFF7E4] bg-[#FFF7E4] p-10">
                            <img
                                src="/inventory-control-image.svg"
                                alt=""
                                className="max-w-full h-auto"
                            />
                        </div>

                        {/* Right Section */}
                        <div className="flex h-full flex-col">
                            <div className="flex flex-1 flex-col overflow-hidden rounded-2xl border-2 border-[#ffbe2e] bg-[#FFF7E4]">
                                {invoiceFeatures.map((item, index) => (
                                    <div
                                        key={item.number}
                                        className={
                                            index !== invoiceFeatures.length - 1
                                                ? "flex-1 border-b border-[#00000020]"
                                                : "flex-1"
                                        }
                                    >
                                        <InvoiceFeatureCard {...item} />
                                    </div>
                                ))}
                            </div>

                            <div className="mt-15 text-center">
                                <Button
                                    children="Secure Your Inventory"
                                    className="py-2 px-10"
                                    href=""
                                    variant="yellow"
                                />
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
        <div className="flex flex-1 items-center px-5 py-6 transition-all duration-300">
            {/* Number */}
            <div className="flex shrink-0 items-center">
                <span className="text-4xl font-bold">{number}</span>

                <div className="mx-4 h-25 w-[2px] bg-black/70" />
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