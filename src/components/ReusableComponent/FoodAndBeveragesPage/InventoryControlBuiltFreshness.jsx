"use client";

import { titleContentConfig } from "@/config/titleContentConfig";
import TitleContent from "../All_Title/TitleContent";
import Button from "../Button/Button";

const invoiceFeatures = [
    {
        number: "01",
        title: "Automated Expiry Alerts",
        description:
            "Our system proactively alerts you when stock is approaching its expiry(30/ 60 / 90 days), allowing you to run flash sales.",
        dark: false,
    },
    {
        number: "02",
        title: "SKU-Wise Variant Insights",
        description:
            ` Identify your top-performing product flavors or packaging volumes to plan next procurement cycles with data accuracy.`,
        dark: true,
    },
    {
        number: "03",
        title: "High-Priority Picking",
        description:
            "Perishable items bypass general queues for immediate dispatch, minimizing transit time.",
        dark: false,
    },
];

export default function InventoryControlBuiltFreshness({ sectionKey = [] }) {
    const tc =
        titleContentConfig[sectionKey] ||
        titleContentConfig["inventorycontrolbuiltfreshness"];

    return (
        <section className="brand-bg">
            <div className="container mx-auto px-4 relative z-5 py-8 md:py-16 ">
                <div className="mb-12 flex justify-center">
                    <div className="text-center">
                        <TitleContent {...tc} />
                    </div>
                </div>

                <div
                    className="overflow-hidden rounded-lg px-8 py-14 lg:px-16"
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
                                    >
                                        <InvoiceFeatureCard {...item} />
                                    </div>
                                ))}
                            </div>

                            <div className="mt-15 text-center">
                                <Button
                                    children="Secure Your Inventory"
                                    className="py-2 px-10"
                                    href="/company/contact-us"
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
        <div className="flex flex-col md:flex-row flex-1 px-5 py-6 transition-all duration-300">
            {/* Top Row (Mobile) / Left Side (Desktop) */}
            <div className="flex items-center">
                {/* Number */}
                <div className="flex shrink-0 items-center">
                    <span className="text-4xl font-bold">{number}</span>

                    <div className="mx-4 h-12 md:h-24 w-[2px] bg-[#212121]" />
                </div>

                {/* Title (Mobile only) */}
                <h4 className="text-xl font-semibold md:hidden">
                    {title}
                </h4>
            </div>

            {/* Mobile Underline */}
            <div className="my-4 h-[2px] w-full bg-[#212121] md:hidden" />

            {/* Content */}
            <div className="flex-1">
                {/* Title (Desktop only) */}
                <h4 className="hidden md:block text-lg md:text-xl font-semibold">
                    {title}
                </h4>

                <p className="mt-2 text-clip md:text-[18px] leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}