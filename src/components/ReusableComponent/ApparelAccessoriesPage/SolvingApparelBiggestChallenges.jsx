"use client";

import TitleContent from "../All_Title/TitleContent";
import { titleContentConfig } from "@/config/titleContentConfig";
import Button from "../Button/Button";
import ChallengeCard from "@/components/ChallengeCard";

const challenges = [
    {
        leftTitle: "Size & Color Mismatches",
        rightTitle: "Barcode-based Picking",
        description:
            "Every variant (Small-Red, Medium-Blue) has a unique barcode. Our system ensures the right item is picked 99.9% of the time.",
    },
    {
        leftTitle: "High Return Rates",
        rightTitle: "QC-led Restocking",
        description:
            "We inspect every return for stains or damage. If it’s perfect, we re-steam and restock it within 24 hours to maximize your margins.",
    },
    {
        leftTitle: "Stock Discrepancies",
        rightTitle: "Inventory Accuracy",
        description:
            "Real-time tracking at the SKU level means you never face overselling or stock-out issues on your store.",
    },
    {
        leftTitle: "Marketplace Compliance",
        rightTitle: "Retail-Ready Prep",
        description:
            " We handle poly-bagging, custom tagging, and marketplace barcoding according to Amazon, Noon, Zid, and Salla requirements.",
    },
];

export default function SolvingApparelBiggestChallenges({ sectionKey = [] }) {
    const tc =
        titleContentConfig[sectionKey] ||
        titleContentConfig["solvingapparelbiggestchallenges"];

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
                <div className="text-center mt-15">
                    <Button href="/company/contact-us" className="px-10 py-3" variant="black">
                        Talk to a Fashion Fulfillment Expert
                    </Button>
                </div>
            </div>
        </section>
    );
}