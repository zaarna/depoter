"use client";

import TitleContent from "../All_Title/TitleContent";
import { titleContentConfig } from "@/config/titleContentConfig";
import Button from "../Button/Button";

const challenges = [
    {
        leftTitle: "Short Shelf Life & Expiry",
        rightTitle: "FEFO (First Expiry, First Out)",
        description:
            "Automated batch tracking and expiry alerts to prevent outdated stock from reaching customers.",
    },
    {
        leftTitle: "Fragile & Premium Products",
        rightTitle: "Secure Packaging",
        description:
            "Specialized packing stations with protective fillers and QC checks to ensure products arrive in pristine condition.",
    },
    {
        leftTitle: "Complex Beauty Bundles",
        rightTitle: "Streamlined Kitting",
        description:
            "Automated kitting workflows with real-time inventory sync for curated beauty and wellness bundles.",
    },
    {
        leftTitle: "UAE Heat & Humidity",
        rightTitle: "Climate Control",
        description:
            "Specialized temperature control zones to preserve the potency of active ingredients like Vitamin C and Retinol.",
    },
    {
        leftTitle: "RTO & Returns Fraud",
        rightTitle: "Secure Reverse Logistics",
        description:
            "Fraud detection mechanisms and QC-led restocking to minimize loss on returns.",
    },
];

export default function ChallengesFoodNBeverage({ sectionKey = [] }) {
    const tc =
        titleContentConfig[sectionKey] ||
        titleContentConfig["beautylogisticschallenges"];

    return (
        <section className="py-16 bg-[#FFF7E4]">
            <div className="container mx-auto px-4">
                <div className="flex justify-center mb-12">
                    <div className="text-center">
                        <TitleContent {...tc} />
                    </div>
                </div>
                <div className="space-y-7">
                    {challenges.map((item, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10 items-center"
                        >
                            {/* Left Card */}
                            <div className="relative inline-flex items-center">
                                {/* Back Layer */}
                                <div className="absolute left-0 top-0 h-31 w-55 rounded-[18px] bg-[#FDBD2D] -translate-x-[10px] -translate-y-[8px]" />

                                {/* Front Card */}
                                <div className="relative flex items-center justify-center min-h-[90px] w-full rounded-[18px] border border-[#8E6B28] bg-[#F8F8F8] px-6 py-6">
                                    <h3 className="text-center text-[22px] font-semibold leading-[1.35] text-[#2B2B2B]">
                                        {item.leftTitle}
                                    </h3>

                                    {/* Arrow */}
                                    <div className="absolute -right-[16px] top-1/2 -translate-y-1/2">
                                        <svg
                                            width="30"
                                            height="43"
                                            viewBox="0 0 30 43"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M29.7437 21.0498L17.6221 42.0923H0V0H17.6221L29.7437 21.0498Z"
                                                fill="#FFBE2E"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Right Card */}
                            <div className="rounded-[18px] border border-[#FDBD2D] bg-white px-8 py-6">
                                <h3 className="text-[22px] font-semibold text-[#2B2B2B]">
                                    {item.rightTitle}
                                </h3>

                                <p className="mt-2 text-[18px] leading-8 text-[#4F4F4F]">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-25">
                    <Button href="" className="px-5 py-3" variant="black">
                        Talk to a Beauty Fulfillment Expert
                    </Button>
                </div>
            </div>
        </section>
    );
}