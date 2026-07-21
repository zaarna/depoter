"use client";

import { titleContentConfig } from "@/config/titleContentConfig";
import TitleContent from "../All_Title/TitleContent";
import Button from "../Button/Button";
import InvoiceFeatureCard from "@/components/InvoiceFeatureCard";

const invoiceFeatures = [
    {
        number: "01",
        title: "Chilled & Deep-Freeze Storage",
        description:
            "Tailored chilled and deep-freeze zones to protect sensitive goods like dairy, meats, and organic juices.",
        dark: false,
    },
    {
        number: "02",
        title: "Refrigerated Transit",
        description:
            `Temperature-controlled fleet management for safe last-mile delivery.`,
        dark: true,
    },
    {
        number: "03",
        title: "Continuous Monitoring",
        description:
            "24/7 data tracking to guarantee zero spoilage from storage to destination.",
        dark: false,
    },
];

export default function ColdChainLogisticsBuiltFoodSafety({ sectionKey = [] }) {
    const tc =
        titleContentConfig[sectionKey] ||
        titleContentConfig["coldchainlogisticsbuiltfoodsafety"];

    return (
        <section className="bg-[#ffffff]">
            <div className="container mx-auto px-4">
                <div className="flex justify-center mb-12 md: mt-15">
                    <div className="text-center">
                        <TitleContent {...tc} />
                    </div>
                </div>
                <div
                    className="overflow-hidden rounded-lg  lg:px-8  lg:px-16 mb-20"
                >
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        {/* Left Content */}
                        <div className="max-w-xl text-center lg:text-left">
                            <img src="/Cold-Chain-Logistics-image.svg" alt="" />
                        </div>

                        {/* Right Cards */}
                        <div className="flex flex-col gap-5">
                            {invoiceFeatures.map((item) => (
                                <InvoiceFeatureCard key={item.number} {...item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
