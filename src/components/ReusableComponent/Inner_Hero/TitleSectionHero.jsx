"use client";

import React from "react";
import Button from "../Button/Button";
import BannerHeading from "../All_Title/BannerHeading";
import { usePathname } from "next/navigation";
import { heroConfig } from "@/config/heroConfig";


function TitleSectionHero({ bottomSection }) {
    const pathname = usePathname();
    const cleanPath = pathname.replace(/\/$/, "").toLowerCase();
    const selectedHero = heroConfig[cleanPath.toLowerCase()] || heroConfig["/"];
    const heading = selectedHero.heading;
    const button = selectedHero.button;
    return (
        <section
            className="relative overflow-hidden h-[250px] flex items-center justify-center"
            style={{
                background:
                    "linear-gradient(128.11deg, #FFF7E4 14.29%, #D0BF9C 85.3%)",
            }}
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-center items-center text-center">
                    <BannerHeading
                        title={heading.title}
                        highlight={heading.highlight}
                        description={heading.description}
                        titlealignment={heading.titlealignment}
                        titleColor="#212121"
                        highlightColor="#978050"
                        descriptionColor="#212121"
                    />
                </div>
            </div>
        </section>
    );
}

export default TitleSectionHero;
