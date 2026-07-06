"use client";

import React, { useEffect, useState } from "react";
import TitleContent from "../All_Title/TitleContent";
import { titleContentConfig } from "@/config/titleContentConfig";

const industries = [
    {
        id: 1,
        title: "Packaged food and FMCG products",
        icons: "/Food-Beverage-Icon-1.svg",
        desktopcolor: "black",
        mobilecolor: "black",
    },
    {
        id: 2,
        title: "Beverages and liquid-based items",
        icons: "/Food-Beverage-Icon-2.svg",
        desktopcolor: "black",
        mobilecolor: "white",
    },
    {
        id: 3,
        title: "Perishable goods and ready-to-eat items",
        icons: "/Food-Beverage-Icon-3.svg",
        desktopcolor: "white",
        mobilecolor: "black",
    },
    {
        id: 4,
        title: "Temperature-sensitive & cold chain products",
        icons: "/Food-Beverage-Icon-4.svg",
        desktopcolor: "white",
        mobilecolor: "white",
    },
    {
        id: 5,
        title: "Bulk supplies for B2B distribution",
        icons: "/Food-Beverage-Icon-5.svg",
        desktopcolor: "black",
        mobilecolor: "black",
    },

];

export default function ReliableFulfillmentForFood({ sectionKey = [] }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const tc =
        titleContentConfig[sectionKey] ||
        titleContentConfig["reliablefulfillmentforfood"];

    return (
        <section className="py-8 md:py-16 bg-[#ffffff] relative overflow-hidden">
            <div className="container">
                <div className="text-center relative z-10 md:mb-10">
                    <TitleContent {...tc} />
                </div>

                <div className="py-8">

                    <div className="merchant-section direct-ship-section direct-ship-section-1 min-h-[400px] ">
                        <div className="merchant-wrapper direct-ship-wrapper">
                            {industries.map((industry, index) => {
                                const isEven = index % 2 === 0;

                                return (
                                    <div
                                        key={industry.id}
                                        className={`direct-ship-card direct-ship-card1 ${isEven ? "left-card1" : "right-card1"}`}
                                    >
                                        <div className="direct-ship-card-bg border-1 ">
                                            <div
                                                className={`${isEven
                                                    ? "direct-ship-card-icon-left"
                                                    : "direct-ship-card-icon-right"
                                                    }`}
                                            >
                                                <div className="box flex items-center justify-center">
                                                    <img
                                                        src={industry.icons}
                                                        alt={industry.title}
                                                        className="hexagon-icon"
                                                    />
                                                </div>
                                            </div>

                                            <div className="direct-ship-card-content flex items-center justify-center relative">
                                                <p
                                                    className={`vendor-card-title1 ${isEven
                                                        ? "direct-ship-card-title-right"
                                                        : "direct-ship-card-title-left"
                                                        }`}
                                                >
                                                    {industry.title}
                                                </p>
                                                <div
                                                    className={`${isEven
                                                        ? "direct-ship-card-left-circle"
                                                        : "direct-ship-card-right-circle"
                                                        }`}
                                                    style={{
                                                        backgroundColor: isMobile
                                                            ? industry.mobilecolor
                                                            : industry.desktopcolor,
                                                    }}
                                                />
                                            </div>
                                            {isEven ? (
                                                <div className="direct-ship-right-image">
                                                    <img src="/direct-ship-right-image.svg" alt="" />
                                                </div>
                                            ) : (
                                                <div className="direct-ship-left-image">
                                                    <img src="/direct-ship-left-image.svg" alt="" />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
