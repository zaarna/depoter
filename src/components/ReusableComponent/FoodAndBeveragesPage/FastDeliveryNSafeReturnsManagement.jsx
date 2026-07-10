import { titleContentConfig } from "@/config/titleContentConfig";
import React from "react";
import TitleContent from "../All_Title/TitleContent";
import FulfillmentProcessCard from "../FulfillmentCenterPage/FulfillmentProcessCard";

function FastDeliveryNSafeReturnsManagement({ sectionKey }) {
    const tc =
        titleContentConfig[sectionKey] ||
        titleContentConfig["fastdeliverysafereturnsmanagement"];
    const cards = [
        {
            iconsImage: "/Fast-Delivery-1.svg",
            title: "Fast Local Delivery",
            description:
                "Optimized routes for time-sensitive and perishable product shipments.",
        },
        {
            iconsImage: "/Fast-Delivery-2.svg",
            title: "Bulk & B2B Distribution",
            description:
                "Reliable domestic and cross-border shipping optimized for retail supply networks.",
        },
        {
            iconsImage: "/Fast-Delivery-3.svg",
            title: "Hygienic Reverse Logistics",
            description:
                "Structured returns management with strict quality checks before restocking to minimize inventory loss.",
        },
    ];
    return (
        <section className="py-8 md:py-16 relative overflow-hidden">
            <div className="container">
                <div className="grid text-center relative z-10">
                    <TitleContent {...tc} />

                    <div className="flex flex-wrap justify-center gap-15 mt-15">
                        {cards.map((card, index) => (
                            <FulfillmentProcessCard
                                key={index}
                                iconsImage={card.iconsImage}
                                title={card.title}
                                description={card.description}
                                background="bg-[#fff7e4]"
                                Margin="-mt-6.5"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FastDeliveryNSafeReturnsManagement;
