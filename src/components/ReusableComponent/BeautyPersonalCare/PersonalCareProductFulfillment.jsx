"use client";

import TitleContent from "../All_Title/TitleContent";
import { titleContentConfig } from "@/config/titleContentConfig";

const advantages = [
    {
        number: "01",
        title: "Omnichannel Fulfillment",
        description:
            "Manage orders across your D2C website, retail stores, and marketplaces from a single inventory.",
    },
    {
        number: "02",
        title: "Fast Delivery Across UAE",
        description:
            "Optimized warehouse locations help enable quick and reliable delivery across Emirates.",
    },
    {
        number: "03",
        title: "Lower RTO & Shipping Costs",
        description:
            "Smart courier selection and structured processes help reduce returns and improve delivery success.",
    },
    {
        number: "04",
        title: "Scalable Operations",
        description:
            "Our infrastructure adapts to your growth, handling seasonal spikes and increasing order volumes with ease.",
    },
];

export default function PersonalCareProductFulfillment({ sectionKey = [] }) {
    const tc =
        titleContentConfig[sectionKey] ||
        titleContentConfig["personalcareproductfulfillment"];

    return (
        <section className="py-12 md:py-16 bg-[#3c2c0b]">
            <div className="container mx-auto px-4">
                {/* Title */}
                <div className="flex justify-center mb-12">
                    <div className="text-center">
                        <TitleContent {...tc} />
                    </div>
                </div>
                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-15 max-w-5xl mx-auto">
                    {advantages.map((item) => (
                        <div
                            key={item.number}
                            className="flex items-stretch gap-4 rounded-2xl border border-[#F2B233] bg-white p-5 transition-all duration-300 hover:shadow-md"
                        >
                            {/* Number */}
                            <div className="flex w-13 flex-shrink-0 items-center justify-center rounded-lg bg-[#FDBD2D] text-3xl font-bold text-[#222]">
                                {item.number}
                            </div>

                            {/* Divider */}
                            <div className="flex items-center">
                                <div className="w-[2px] me-4 h-[90%] bg-black/70" />
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <h3 className="text-2xl font-semibold text-[#222]">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-[18px] leading-6 text-[#555]">
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