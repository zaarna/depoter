import { titleContentConfig } from "@/config/titleContentConfig";
import React from "react";
import TitleContent from "../All_Title/TitleContent";
import FulfillmentProcessCard from "../FulfillmentCenterPage/FulfillmentProcessCard";

function FastDeliveryFashionECommerce({ sectionKey }) {
    const tc =
        titleContentConfig[sectionKey] ||
        titleContentConfig["fastdeliverysafereturnsmanagement"];
    const cards = [
        {
            iconsImage: "/Fast-Delivery-apparel-1.svg",
            title: "Reliable Timelines",
            description:
                " Our delivery network supports fast distribution across the UAE with reliable, guaranteed timelines.",
        },
        {
            iconsImage: "/Fast-Delivery-apparel-2.svg",
            title: "Flexible Shipping Options",
            description:
                " We support same-day and next-day delivery based on location and order demand to meet customer expectations.",
        },
        {
            iconsImage: "/Fast-Delivery-apparel-3.svg",
            title: "Real-Time Courier Sync",
            description:
                "Automated dispatch through optimal courier routes for timely order fulfillment.",
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

export default FastDeliveryFashionECommerce;
