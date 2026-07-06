"use client";

import { titleContentConfig } from "@/config/titleContentConfig";
import TitleContent from "../All_Title/TitleContent";
import FoodCategoryCard from "@/components/FoodCategoryCard";

const cards = [
    {
        icon: "/Food-Categories-1.svg",
        title: "Ensure your product meets UAE standards",
        description: "Fruits, vegetables, dairy, and fresh proteins.",
    },
    {
        icon: "/Food-Categories-2.svg",
        title: "Avoid customs delays or shipment holds",
        description: "Quick and reliable delivery services across the UAE with real-time tracking.",
    },
    {
        icon: "/Food-Categories-3.svg",
        title: "Prevent penalties or rejection",
        description: "Quick and reliable delivery services across the UAE with real-time tracking.",
    },
    {
        icon: "/Food-Categories-4.svg",
        title: "Allow legal sale in retail and online markets",
        description: "Quick and reliable delivery services across the UAE with real-time tracking.",
    },
];

const FoodCategories = ({ sectionKey = [] }) => {

    const tc =
        titleContentConfig[sectionKey] ||
        titleContentConfig["foodcategories"];

    return (
        <section className="py-20 lines-bg-cream">
            <div className="container">
                {/* Heading */}
                <div className="flex justify-center mb-12">
                    <div className="text-center">
                        <TitleContent {...tc} />
                    </div>
                </div>

                {/* Steps */}
                <div className="space-y-6">

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {cards.map((item, index) => (
                            <FoodCategoryCard
                                key={index}
                                icon={item.icon}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
};

export default FoodCategories;
