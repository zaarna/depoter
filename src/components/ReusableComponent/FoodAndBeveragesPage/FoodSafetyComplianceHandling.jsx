"use client";

import { titleContentConfig } from "@/config/titleContentConfig";
import TitleContent from "../All_Title/TitleContent";
import ComplianceFeatureCard from "../ComplianceFeatureCard";

const features = [
    {
        title: "Support for shipment documentation",
        icon: "/ShipmentDocuments.svg",
        hoverIcon: "/ShipmentDocumentshover.svg",
    },
    {
        title: "Proper handling of sensitive products",
        icon: "/Properhandling.svg",
        hoverIcon: "/Properhandlinghover.svg",
    },
    {
        title: "Batch-level traceability for better control",
        icon: "/Batchlevaltraceability.svg",
        hoverIcon: "/Batchlevaltraceabilityhover.svg",
    },
    {
        title: "Processes designed to reduce risk and maintain quality",
        icon: "/Processesdesigned.svg",
        hoverIcon: "/Processesdesignedhover.svg",
    },
];

export default function FoodSafetyComplianceHandling({ sectionKey = [] }) {

    const tc =
        titleContentConfig[sectionKey] ||
        titleContentConfig["foodsafetycompliancehandling"];

    return (
        <section className="lines-bg-cream py-16 md:py-24 relative overflow-hidden">

            <div className="container mx-auto px-4 relative z-10">
                {/* Heading */}
                <div className="flex justify-center mb-12">
                    <div className="text-center">
                        <TitleContent {...tc} />
                    </div>
                </div>

                {/* Cards */}
                <div className="mx-auto mt-20 flex flex-wrap justify-center gap-10">
                    {features.map((item, index) => (
                        <ComplianceFeatureCard key={index} {...item} />
                    ))}
                </div>

                {/* Bottom Text */}
                <p className="text-center mt-20 font-semibold text-[18px] md:text-[22px] mx-auto leading-[1.7] w-[70%] border-3 rounded-4xl border-amber-400 p-4 text-[#212121]">
                    This helps businesses operate with confidence and avoid compliance issues.
                </p>
            </div>
        </section>
    );
}
