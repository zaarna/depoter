"use client";

import React from "react";
import { titleContentConfig } from "@/config/titleContentConfig";
import TitleContent from "../All_Title/TitleContent";
import AddvalueToSupplyChainCard from "../FreightForwarding/AddvalueToSupplyChainCard";
import Button from "../Button/Button";

function ConnectYourEntireEcommerceSystem({ sectionKey = "" }) {
    const industries = [
        {
            title: "Ecommerce Platform Sync",
            icon: "/Ecommerce Platform Sync.svg",
            discription:
                "Direct integration with Shopify, WooCommerce, Magento, Salla, and Zid.",
        },
        {
            title: "Marketplace Integration",
            icon: "/Marketplace Integration.svg",
            discription:
                "Auto-sync orders from Amazon and Noon.",
        },
        {
            title: "Real-Time Inventory Updates",
            icon: "/Real-Time Inventory Updates.svg",
            discription:
                "Inventory updates instantly across all connected platforms to help prevent overselling.",
        },
    ];

    const tc =
        titleContentConfig[sectionKey] ||
        titleContentConfig["connectyourentireecommerce"];

    return (
        <section className="py-8 md:py-16 bg-[#978050] relative overflow-hidden">
            <div className="container">
                <div className="text-center relative z-10 md:mb-10">
                    <TitleContent {...tc} />
                </div>

                <div className="md:mt-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 justify-items-center justify-center">
                        {industries.map((industry, index) => (
                            <AddvalueToSupplyChainCard key={index} industry={industry} />
                        ))}
                    </div>
                </div>
                <div className="mt-5 text-center">
                    <Button
                        children="Connect Your Store"
                        className="py-2 px-10"
                        href="/company/contact-us"
                        variant="black"
                    />
                </div>
            </div>
        </section>
    );
}

export default ConnectYourEntireEcommerceSystem;
