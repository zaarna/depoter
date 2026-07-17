"use client";

import React, { useRef, useState, useLayoutEffect } from "react";
import { titleContentConfig } from "@/config/titleContentConfig";
import TitleContent from "../All_Title/TitleContent";
import HandleEveryOrderCard from "../multiChannelSection/HandleEveryOrderCard";
import Button from "../Button/Button";

function CustomsClearanceProcessWorks({ sectionKey = [] }) {
    const [svgData, setSvgData] = useState(null);

    const containerRef = useRef(null);
    const leftRefs = useRef([]);
    const rightRefs = useRef([]);

    const industries = [
        {
            id: 1,
            title: "Consultation & Document Review",
            icons: "/our-custom-clearance-icon-1.svg",
            list: [
                "We review your shipment details, check the required documents, and identify any potential issues before filing.",
            ],
        },
        {
            id: 2,
            title: "Documentation & Filing",
            icons: "/our-custom-clearance-icon-2.svg",
            list: [
                "Our team prepares the customs documents, assigns the correct HS code, and submits the declaration through the relevant customs system.",
            ],
        },
        {
            id: 3,
            title: "Duty & VAT Calculation",
            icons: "/our-custom-clearance-icon-3.svg",
            list: [
                "We calculate applicable duties and VAT and coordinate the payment process.",
            ],
        },
        {
            id: 4,
            title: "Inspection & Approval",
            icons: "/our-custom-clearance-icon-4.svg",
            list: [
                "If customs inspection is required, we coordinate with the authorities and manage the approval process.",
            ],
        },
        {
            id: 5,
            title: "Final Clearance & Delivery Coordination",
            icons: "/our-custom-clearance-icon-5.svg",
            list: [
                "Once the shipment is released, we coordinate the next steps for delivery to the final destination.",
            ],
        },
    ];
    const calculate = () => {
        if (!containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const centerX = containerRect.width / 2;

        const nodes = [];
        const paths = [];
        const dots = [];

        const offset = 40;

        const collect = (refs, side) => {
            refs.current.forEach((card) => {
                if (!card) return;

                const rect = card.getBoundingClientRect();

                nodes.push({
                    side,
                    x: side === "left" ? centerX - offset : centerX + offset,
                    y: rect.top + rect.height / 2 - containerRect.top,
                });
            });
        };

        collect(leftRefs, "left");
        collect(rightRefs, "right");

        if (!nodes.length) return;

        const minY = Math.min(...nodes.map((n) => n.y));
        const maxY = Math.max(...nodes.map((n) => n.y));

        // Different extensions
        const topExtra = 60;
        const bottomExtra = 180;

        const topY = minY - topExtra;
        const bottomY = maxY + bottomExtra;

        // Main vertical line
        paths.push({
            d: `M ${centerX} ${topY} V ${bottomY}`,
        });

        // Top dot
        dots.push({
            cx: centerX,
            cy: topY,
        });

        // Bottom dot
        dots.push({
            cx: centerX,
            cy: bottomY,
        });

        // Side connectors
        nodes.forEach((node) => {
            dots.push({
                cx: node.x,
                cy: node.y,
            });

            paths.push({
                d:
                    node.side === "left"
                        ? `M ${node.x} ${node.y} H ${centerX}`
                        : `M ${centerX} ${node.y} H ${node.x}`,
            });
        });

        setSvgData({
            width: containerRect.width,
            height: containerRect.height,
            paths,
            dots,
        });
    };
    useLayoutEffect(() => {
        const timer = setTimeout(() => {
            calculate();
        }, 200);

        window.addEventListener("resize", calculate);

        return () => {
            clearTimeout(timer);
            window.removeEventListener("resize", calculate);
        };
    }, []);

    const tc =
        titleContentConfig[sectionKey] ||
        titleContentConfig["customclearanceprocesswork"];

    const leftItems = industries.filter((_, index) => index % 2 === 0);
    const rightItems = industries.filter((_, index) => index % 2 !== 0);

    return (
        <section className="py-8 md:py-16 bg-white relative overflow-hidden">
            <div className="container">
                <div className="text-center">
                    <TitleContent {...tc} />
                </div>

                {/* Mobile */}
                <div className="lg:hidden flex flex-col gap-6 mt-8">
                    {industries.map((industry) => (
                        <HandleEveryOrderCard key={industry.id} industry={industry} />
                    ))}
                </div>

                {/* Desktop */}
                <div ref={containerRef} className="hidden lg:flex gap-0 mt-20 relative">
                    {/* SVG */}
                    {svgData && (
                        <svg
                            className="absolute inset-0 pointer-events-none z-0"
                            width={svgData.width}
                            height={svgData.height}
                            viewBox={`0 0 ${svgData.width} ${svgData.height}`}
                        >
                            {svgData.paths.map((path, index) => (
                                <path
                                    key={index}
                                    d={path.d}
                                    stroke="#3C2C0B"
                                    strokeWidth="1"
                                    strokeDasharray="4 6"
                                    fill="none"
                                />
                            ))}

                            {svgData.dots.map((dot, index) => (
                                <g key={index}>
                                    {/* <circle
                    cx={dot.cx}
                    cy={dot.cy}
                    r="12"
                    fill="#3C2C0B"
                    opacity="0.2"
                  >
                    <animate
                      attributeName="r"
                      values="8;12;8"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle> */}

                                    <circle cx={dot.cx} cy={dot.cy} r="3" fill="#3C2C0B" />
                                </g>
                            ))}
                        </svg>
                    )}

                    {/* Left Column */}
                    <div className="flex-1 flex flex-col gap-y-32 relative z-10">
                        {leftItems.map((industry, index) => (
                            <div
                                key={industry.id}
                                ref={(el) => (leftRefs.current[index] = el)}
                            >
                                <HandleEveryOrderCard industry={industry} />
                            </div>
                        ))}
                    </div>

                    {/* Center Space */}
                    <div className="w-[5px] shrink-0" />

                    {/* Right Column */}
                    <div className="flex-1 flex flex-col gap-y-32 mt-40 relative z-10">
                        {rightItems.map((industry, index) => (
                            <div
                                key={industry.id}
                                ref={(el) => (rightRefs.current[index] = el)}
                            >
                                <HandleEveryOrderCard industry={industry} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="text-center mt-20 ">
                    <Button href="/company/contact-us" className="px-10 py-2" variant="black">
                        Start Your Customs Clearance
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default CustomsClearanceProcessWorks;
