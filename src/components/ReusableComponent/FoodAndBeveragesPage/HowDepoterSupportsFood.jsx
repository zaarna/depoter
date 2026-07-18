"use client";

import InvoiceFeatureCard from "@/components/InvoiceFeatureCard";
import TitleContent from "../All_Title/TitleContent";
import { titleContentConfig } from "@/config/titleContentConfig";

const advantages = [
    {
        number: "01",
        title: "Smart Warehousing",
        dark: false,
        description:
            "Sanitized facilities mapped for fast-moving consumer goods (FMCG).",
    },
    {
        number: "02",
        title: "Accurate Order Routing",
        dark: true,
        description:
            "Advanced barcode scanning ensures zero wrong-item dispatches.",
    },
    {
        number: "04",
        title: "Live Dashboards",
        dark: true,
        description:
            "Complete data logging of stock levels, incoming shipments, and batch statuses.",
    },
    {
        number: "03",
        title: "Scalable Storage",
        dark: false,
        description:
            "Expand your pallet count dynamically during peak demand periods like Ramadan.",
    },
];

export default function HowDepoterSupportsFood({ sectionKey = [] }) {
    const tc =
        titleContentConfig[sectionKey] ||
        titleContentConfig["howdepotersupportsfood"];

    const mobileAdvantages = [...advantages].sort(
        (a, b) => Number(a.number) - Number(b.number)
    );
    return (
        <section className="py-12 md:py-16 bg-[#978050]">
            <div className="container mx-auto px-4">
                {/* Title */}
                <div className="flex justify-center mb-12">
                    <div className="text-center">
                        <TitleContent {...tc} />
                    </div>
                </div>
                {/* Cards */}
                {/* Mobile */}
                <div className="grid grid-cols-1 gap-10 w-[90%] mx-auto md:hidden">
                    {mobileAdvantages.map((item) => (
                        <InvoiceFeatureCard key={item.number} {...item} />
                    ))}
                </div>

                {/* Desktop */}
                <div className="hidden md:grid md:grid-cols-2 gap-10 w-[90%] mx-auto">
                    {advantages.map((item) => (
                        <InvoiceFeatureCard key={item.number} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}