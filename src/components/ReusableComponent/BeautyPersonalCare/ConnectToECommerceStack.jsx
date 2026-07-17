"use client";

import { titleContentConfig } from "@/config/titleContentConfig";
import TitleContent from "../All_Title/TitleContent";
import Button from "../Button/Button";
import PlatformCard from "@/components/PlatformCard";

const platformCards = [
    {
        title: "Ecommerce Platforms",
        items: [
            "/Shopify_new1.svg",
            "/Woo.svg",
            "/magentonew.svg",
            "/Sallanew.svg",
            "/opencartnew.svg",
            "/j.svg",
            "/wixnew.svg",
            // "/custom.svg",
        ],
        showFooter1: "true",
        isHover: "false",
    },
    {
        title: "Marketplaces",
        items: ["/amazon.svg", "/Noon.svg"],
        isHover: "false",
    },
    {
        title: "Shipping Platforms",
        items: ["/dhl.png", "/fedx.svg", "/aramex.svg", "/ups.svg"],
        showFooter2: "true",
        isHover: "false",
    },
];

export default function ConnectToECommerceStack({ sectionKey = [] }) {

    const tc =
        titleContentConfig[sectionKey] ||
        titleContentConfig["connecttoecommercestack"];

    return (
        <section className="lines-bg-cream py-16 md:py-16 overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <div className="flex justify-center mb-12 md: mt-15">
                    <div className="text-center">
                        <TitleContent {...tc} />
                    </div>
                </div>

                {/* Cards */}
                <div className="mt-16 grid gap-8 lg:grid-cols-3">
                    {platformCards.map((card, index) => (
                        <PlatformCard key={index} {...card} />
                    ))}
                </div>



                <div className="text-center mt-25">
                    <Button href="/company/contact-us" className="px-15 py-3" variant="black">
                        Connect Your Store
                    </Button>
                </div>
            </div>
        </section>
    );
}
