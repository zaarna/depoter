"use client";

import { titleContentConfig } from "@/config/titleContentConfig";
import TitleContent from "../All_Title/TitleContent";
import Button from "../Button/Button";

const invoiceFeatures = [
    {
        number: "01",
        title: " Immediate Quality Inspection",
        description:
            "We check for signs of wear, odor, or damage the moment a return package arrives at the warehouse.",
        dark: false,
    },
    {
        number: "02",
        title: "Premium Repackaging",
        description:
            `We replace damaged poly-bags, re-tag if necessary, and ensure the item looks brand new.`,
        dark: true,
    },
    {
        number: "03",
        title: "Fast Restocking Loop",
        description:
            "We push sellable items back into your active online inventory within 24 hours.",
        dark: false,
    },
    {
        number: "04",
        title: "Clear Liquidation Reporting",
        description:
            "Detailed logs on damaged items to help you make fast decisions on liquidation or discount sales.",
        dark: false,
    },
];

export default function ReverseLogisticsManagement({ sectionKey = [] }) {
    const tc =
        titleContentConfig[sectionKey] ||
        titleContentConfig["reverselogisticsmanagement"];

    return (
        <section className="brand-bg">
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
                    <div className="grid items-stretch gap-12 lg:grid-cols-2">
                        {/* Left Section */}
                        <div className="flex h-full items-center justify-center rounded-4xl border border-[#FFF7E4] bg-[#FFF7E4] p-10">
                            <img
                                src="/reverse-logistics-management.svg"
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
                                    >
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
        <div className="flex flex-1 items-center px-5 py-3 transition-all duration-300">
            {/* Number */}
            <div className="flex shrink-0 items-center">
                <span className="text-4xl font-bold">{number}</span>

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