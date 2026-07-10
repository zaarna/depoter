"use client";

import TitleContent from "../All_Title/TitleContent";
import { titleContentConfig } from "@/config/titleContentConfig";
import Button from "../Button/Button";
import ChallengeCard from "@/components/ChallengeCard";

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

export default function BeautyLogisticsChallenges({ sectionKey = [] }) {
    const tc =
        titleContentConfig[sectionKey] ||
        titleContentConfig["beautylogisticschallenges"];

    return (
        <section className="py-16 lines-bg-cream">
            <div className="container mx-auto px-4">
                <div className="flex justify-center mb-12">
                    <div className="text-center">
                        <TitleContent {...tc} />
                    </div>
                </div>
                <div className="space-y-7">
                    <div className="w-full rounded-xl border border-[#F2B233] bg-white overflow-hidden mb-10">
                        <div className="grid grid-cols-5">
                            <div className="py-4 px-6 text-center text-[1.4rem] font-semibold text-[#2A2A2A]">
                                The Challenge
                            </div>

                            <div className="py-4 px-6 text-center col-span-4 text-[1.4rem] font-semibold text-[#2A2A2A]">
                                The Depoter Solution
                            </div>
                        </div>
                    </div>
                    {challenges.map((item, index) => (
                        <ChallengeCard
                            key={index}
                            item={item}
                        />
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