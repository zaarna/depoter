"use client";

import TitleContent from "../All_Title/TitleContent";
import { titleContentConfig } from "@/config/titleContentConfig";
import Button from "../Button/Button";
import ChallengeCard from "@/components/ChallengeCard";

const challenges = [
    {
        leftTitle: "Expiry & Wastage",
        rightTitle: "FEFO (First Expiry, First Out)",
        description:
            "Our system automatically prioritizes products with the shortest shelf-life to minimize dead stock.",
    },
    {
        leftTitle: "Temperature Stability",
        rightTitle: "Multi-Zone Storage",
        description:
            "Dedicated Ambient, Chilled, and Frozen zones to preserve the potency and taste of your products.",
    },
    {
        leftTitle: "Compliance Risks",
        rightTitle: "HACCP & Municipality Alignment",
        description:
            "Every warehouse process matches local Dubai Municipality and federal food safety standards.",
    },
    {
        leftTitle: "Visibility Gaps",
        rightTitle: "Batch-Level Tracking",
        description:
            "Real-time visibility into batch numbers and lot tracking for 100% audit readiness.",
    },
];

export default function ChallengesFoodNBeverage({ sectionKey = [] }) {
    const tc =
        titleContentConfig[sectionKey] ||
        titleContentConfig["challengesfoodnbeverage"];

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
                        <div className="grid  grid-cols-1 md:grid-cols-5">
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