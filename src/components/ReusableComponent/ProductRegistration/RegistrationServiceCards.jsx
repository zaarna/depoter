"use client";
import React, { useEffect, useRef, useState } from "react";
import Dot from "../Dot";

function RegistrationServiceCards({ features }) {
    const containerRef = useRef(null);
    const cardRefs = useRef([]);
    const [svgData, setSvgData] = useState(null);
    const calculateConnectors = () => {
        if (!containerRef.current) return;

        const validRefs = cardRefs.current.filter((ref) => ref !== null);
        if (validRefs.length !== features.length) return;

        const containerRect = containerRef.current.getBoundingClientRect();

        const iconPositions = validRefs
            .map((card) => {
                const iconElement = card.querySelector("img");
                if (!iconElement) return null;

                const rect = iconElement.getBoundingClientRect();

                return {
                    centerX: rect.left + rect.width / 2 - containerRect.left,
                    centerY: rect.top + rect.height / 2 - containerRect.top,
                };
            })
            .filter(Boolean);

        if (iconPositions.length !== features.length) return;

        const svgWidth = containerRect.width;
        const svgHeight = containerRect.height;

        let paths = [];
        let dots = [];

        // ---------------- CONFIG ----------------
        const DOT_OFFSET_X = 200;
        const LAST_LINE_EXTRA = 340;
        const CURVE_RADIUS = 24;
        const DROP_OFFSET = 20;
        // ----------------------------------------

        // One dot per card (already correct)
        iconPositions.forEach((pos) => {
            dots.push({
                cx: pos.centerX + DOT_OFFSET_X,
                cy: pos.centerY,
            });
        });

        // -------- ROW 1 HORIZONTAL --------
        if (iconPositions[0] && iconPositions[1]) {
            const y = iconPositions[0].centerY;
            paths.push({
                line: `M${iconPositions[0].centerX} ${y} H${iconPositions[1].centerX}`,
            });
        }

        if (iconPositions[1] && iconPositions[2]) {
            const y = iconPositions[1].centerY;
            paths.push({
                line: `M${iconPositions[1].centerX} ${y} H${iconPositions[2].centerX + LAST_LINE_EXTRA}`,
            });
        }

        // -------- ROW 2 HORIZONTAL --------
        if (iconPositions[3] && iconPositions[4]) {
            const y = iconPositions[3].centerY;
            paths.push({
                line: `M${iconPositions[3].centerX} ${y} H${iconPositions[4].centerX}`,
            });
        }

        if (iconPositions[4] && iconPositions[5]) {
            const y = iconPositions[4].centerY;
            paths.push({
                line: `M${iconPositions[4].centerX} ${y} H${iconPositions[5].centerX + LAST_LINE_EXTRA}`,
            });
        }

        // -------- CURVED CONNECTOR (ROW 1 → ROW 2) --------
        if (iconPositions[2] && iconPositions[5]) {
            const start = iconPositions[2];
            const end = iconPositions[5];

            const startX = start.centerX + LAST_LINE_EXTRA;
            const startY = start.centerY;

            const curveX = startX + DROP_OFFSET;

            const verticalStartY = startY + CURVE_RADIUS;
            const verticalEndY = end.centerY - CURVE_RADIUS;

            // 🔥 ADD DOT IN MIDDLE OF VERTICAL LINE
            dots.push({
                cx: curveX,
                cy: (verticalStartY + verticalEndY + 80) / 2,
            });

            const curvedPath = `
      M ${startX} ${startY}
      Q ${curveX} ${startY} ${curveX} ${verticalStartY}
      V ${verticalEndY}
      Q ${curveX} ${end.centerY} ${curveX - DROP_OFFSET} ${end.centerY}
      H ${end.centerX + LAST_LINE_EXTRA}
    `;

            paths.push({ line: curvedPath });
        }

        setSvgData({
            paths,
            dots,
            width: svgWidth,
            height: svgHeight,
        });
    };

    useEffect(() => {
        const timer = setTimeout(calculateConnectors, 100);
        window.addEventListener("resize", calculateConnectors);

        return () => {
            clearTimeout(timer);
            window.removeEventListener("resize", calculateConnectors);
        };
    }, [features.length]);
    return (
        <div className="mt-8 relative" ref={containerRef}>
            {svgData && (
                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
                    viewBox={`0 0 ${svgData.width} ${svgData.height}`}
                    preserveAspectRatio="none"
                >
                    {/* 1️⃣ Render lines */}
                    {svgData.paths.map((pathData, index) => (
                        <path
                            key={`line-${index}`}
                            d={pathData.line}
                            stroke="#FDB913"
                            strokeWidth="1"
                            strokeDasharray="8 8"
                            fill="none"
                            className="animated-dash"
                        />
                    ))}

                    {/* 2️⃣ Render ONE dot per card */}
                    {svgData.dots.map((dot, index) => (
                        <g key={`dot-${index}`}>
                            {/* Pulsing Background */}
                            <circle
                                cx={dot.cx}
                                cy={dot.cy}
                                r="11"
                                fill="#FDB913"
                                fillOpacity="0.3"
                            >
                                <animate
                                    attributeName="r"
                                    values="11;18;11"
                                    dur="1.2s"
                                    // begin={`${index * 0.3}s`}
                                    repeatCount="indefinite"
                                />
                            </circle>

                            {/* White Ring */}
                            <circle
                                cx={dot.cx}
                                cy={dot.cy}
                                r="7"
                                fill="none"
                                stroke="#ffffff"
                                strokeWidth="3"
                            />

                            {/* Yellow Dot */}
                            <circle
                                cx={dot.cx}
                                cy={dot.cy}
                                r="6"
                                fill="#FDB913"
                            />
                        </g>
                    ))}
                </svg>
            )}

            <div className="container relative px-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-12 relative z-10">
                    {features.map((item, index) => (
                        <div className=" w-60 xl:w-90 mx-auto" key={index} ref={(el) => (cardRefs.current[index] = el)}>
                            <div className="mb-6 flex justify-center md:justify-start">
                                <img src={item.icon} alt={item.title} className="w-25 h-25" />
                            </div>

                            <h3 className="text-2xl font-bold text-[#ffffff] mb-4 text-center md:text-left">
                                {item.title}
                            </h3>

                            <p className="text-[#ffffff] font-light text-base text-center md:text-left">
                                {item.description}
                            </p>

                            <img
                                src="/bottomlinevector.svg"
                                className="md:hidden h-10 w-40 mx-auto mt-5"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RegistrationServiceCards;
