"use client";

import TitleContent from "../All_Title/TitleContent";
import { titleContentConfig } from "@/config/titleContentConfig";

const advantages = [
    {
        number: "01",
        title: "Smart Warehousing",
        bgColor: "#FFBE2E",
        textColor: "#000000",
        description:
            "Sanitized facilities mapped for fast-moving consumer goods (FMCG).",
    },
    {
        number: "02",
        title: "Accurate Order Routing",
        bgColor: "#3C2C0B",
        textColor: "#ffffff",
        description:
            "Advanced barcode scanning ensures zero wrong-item dispatches.",
    },
    {
        number: "04",
        title: "Live Dashboards",
        bgColor: "#3C2C0B",
        textColor: "#ffffff",
        description:
            "Complete data logging of stock levels, incoming shipments, and batch statuses.",
    },
    {
        number: "03",
        title: "Scalable Storage",
        bgColor: "#FFBE2E",
        textColor: "#000000",
        description:
            "Expand your pallet count dynamically during peak demand periods like Ramadan.",
    },
];

export default function HowDepoterSupportsFood({ sectionKey = [] }) {
    const tc =
        titleContentConfig[sectionKey] ||
        titleContentConfig["howdepotersupportsfood"];

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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-15 w-[90%] mx-auto">
                    {advantages.map((item) => (
                        <div
                            key={item.number}
                            className={`flex items-stretch gap-4 rounded-2xl border border-[#F2B233] bg-[${item.bgColor}] p-5 transition-all duration-300 hover:shadow-md`}
                        >
                            {/* Number */}
                            <div className={`flex w-13 flex-shrink-0 items-center justify-center rounded-lg text-3xl font-bold text-[${item.textColor}]`}>
                                {item.number}
                            </div>

                            {/* Divider */}
                            <div className="flex items-center">
                                <div className={`w-[2px] me-4 h-[70%] bg-[${item.textColor}]`} />
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <h3 className={`text-2xl font-semibold text-[${item.textColor}]`}>
                                    {item.title}
                                </h3>

                                <p className={`mt-2 text-[18px] leading-6 text-[${item.textColor}]`}>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}