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
        <section className="bg-[#3C2C0B]">
            <div className="container mx-auto px-4">
                <div className="flex justify-center mb-12 md: mt-15">
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
                    <div className="grid items-start gap-12 lg:grid-cols-2">
                        {/* Left Content */}
                        <div className="max-w-xl text-center lg:text-left rounded-4xl border-1-[#FFF7E4] p-20 bg-[#FFF7E4]">
                            <img src="/inventory-control-image.svg" alt="" />
                        </div>

                        <div className="">
                            {/* Right Cards */}
                            <div className="flex flex-col items-start rounded-2xl border-3 border-[#ffbe2e] bg-[#FFF7E4]">
                                {invoiceFeatures.map((item) => (
                                    <InvoiceFeatureCard key={item.number} {...item} />
                                ))}
                            </div>
                            <div className="text-center mt-15">
                                <Button
                                    href=""
                                    className="
    group relative overflow-hidden
    mx-auto block
    w-full sm:w-[80%] md:w-[60%] lg:w-[60%]
    py-4 px-10
    rounded-full
    bg-[#FFBE2E]
    text-black
    font-semibold
    transition-all duration-500
    hover:scale-105
  "
                                    variant=""
                                >
                                    <span className="relative z-10">
                                        Secure Your Inventory
                                    </span>

                                    <span
                                        className="
      absolute inset-0
      -translate-x-full
      skew-x-12
      bg-white/30
      transition-transform duration-700
      group-hover:translate-x-[200%]
    "
                                    />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function InvoiceFeatureCard({ number, title, description, dark }) {
    return (
        <div
            className={`flex items-center rounded-2xl h-[150px] px-5 py-5 transition-all duration-300 `}
        >
            {/* Number */}
            <div className="flex items-center">
                <span className="text-4xl font-bold">{number}</span>

                <div
                    className={`mx-4 h-14 w-[2px] bg-black/70`}
                />
            </div>

            {/* Content */}
            <div>
                <h4 className="text-xl font-semibold">{title}</h4>

                <p
                    className={`mt-2 text-[18px] leading-relaxed `}
                >
                    {description}
                </p>
            </div>
        </div>
    );
}
