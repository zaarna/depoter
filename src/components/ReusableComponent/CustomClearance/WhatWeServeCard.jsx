"use client";
import React from "react";

const industries = [
    {
        id: 1,
        title: "Ecommerce sellers",
        icons: "/who-we-serve-1.svg",
    },
    {
        id: 2,
        title: "Importers & exporters",
        icons: "/who-we-serve-2.svg",
    },
    {
        id: 3,
        title: "Expats & individuals",
        icons: "/who-we-serve-3.svg",
    },
    {
        id: 4,
        title: "SMEs & enterprises",
        icons: "/who-we-serve-4.svg",
    },
    {
        id: 5,
        title: "Freight forwarders",
        icons: "/who-we-serve-5.svg",
    },
];

export default function WhatWeServeCard() {
    return (
        <div className="merchant-section">
            <div className="merchant-wrapper">
                {industries.map((industry, index) => (
                    <div
                        key={industry.id}
                        className={`merchant-row ${index % 2 === 0 ? "left-card" : "right-card"
                            }`}
                    >
                        <div className="vendor-card-image-bg ">
                            <div
                                className={`${index % 2 === 0 ? "vendor-card-icon-left" : "vendor-card-icon-right"}`}
                            >
                                <div className="yellow-hexagon flex items-center justify-center">
                                    <img
                                        src={industry.icons}
                                        alt={industry.title}
                                        className="hexagon-icon"
                                    />
                                </div>
                            </div>
                            <div className="vendor-card-content">
                                {/* <span className="vendor-card-step">Step {industry.id}</span> */}
                                <p
                                    className={`vendor-card-title ${index % 2 === 0
                                        ? "vendor-card-title-right"
                                        : "vendor-card-title-left"
                                        }`}
                                    style={{ fontSize: "1.7rem" }}
                                >
                                    {industry.title}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
