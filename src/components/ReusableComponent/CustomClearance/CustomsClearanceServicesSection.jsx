"use client";

import { useRef, useState, useEffect } from "react";
import ProcessCard from "../B2b_Sections/ProcessCard";

function CustomsClearanceServicesSection() {
    const [svgData, setSvgData] = useState(null);
    const containerRef = useRef(null);
    const leftRefs = useRef([]);
    const rightRefs = useRef([]);
    const leftItems = [
        {
            id: 1,
            index: "01",
            icon: "/import-export-customs-clearance.svg",
            title: "Import & Export Customs Clearance",
            description:
                "Whether you are importing goods into the UAE or exporting them to other countries, Depoter manages the complete customs clearance process on your behalf. We take care of HS code classification, duty and VAT calculation, document preparation, customs submission, approval coordination, and inspection handling to ensure your shipment is cleared smoothly, accurately, and without unnecessary delays or penalties.",
        },
        {
            id: 2,
            index: "03",
            icon: "/personal-effects-household-goods.svg",
            title: "Personal Effects & Household Goods",
            description:
                "We help expats and individuals clear personal effects and household goods with ease. Our team provides guidance on allowed and restricted items, supports duty exemption where applicable, handles all required documentation, and ensures a fast customs clearance process to make your relocation smooth and stress-free.",
        },
        {
            id: 3,
            index: "05",
            icon: "/vehicle-customs-clearance.svg",
            title: "Vehicle Customs Clearance",
            description:
                "We handle customs clearance for cars, bikes, and commercial vehicles, including vehicle inspection, VIN verification, duty calculation, UAE compliance checks, and clearance approvals. Our team ensures your vehicle is cleared quickly and becomes road-ready without unnecessary delays.",
        },
    ];

    const rightItems = [
        {
            id: 5,
            index: "02",
            icon: "/air-sea-freight-clearance.svg",
            title: "Air & Sea Freight Clearance",
            description:
                "We handle customs clearance for both air and sea shipments across all major ports and airports in the UAE, including air cargo, FCL and LCL containers, delivery order processing, and port coordination. Whether your shipment is small or bulk, we ensure a smooth and efficient clearance process.",
        },
        {
            id: 6,
            index: "04",
            icon: "/commercial-cargo-clearance.svg",
            title: "Commercial Cargo Clearance",
            description:
                "We provide customs clearance support for commercial cargo by ensuring accurate HS code classification, proper value declaration, trade license verification, and efficient handling of bulk shipments. This helps businesses maintain compliance and avoid unnecessary delays or penalties.",
        },
        {
            id: 7,
            index: "06",
            icon: "/temporary-import-exhibition-cargo.svg",
            title: "Temporary Import & Exhibition Cargo",
            description:
                "We handle temporary import customs clearance for exhibitions, trade shows, and events, including duty-free temporary clearance, bond handling, and re-export documentation. This ensures your exhibition cargo is cleared smoothly and returned without complications.",
        },
    ];

    const mobileItems = [
        ...leftItems.slice(0, 1),
        ...rightItems.slice(0, 1),
        ...leftItems.slice(1, 2),
        ...rightItems.slice(1, 2),
        ...leftItems.slice(2, 3),
        ...rightItems.slice(2, 3),
    ];

    const calculate = () => {
        if (!containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const centerX = containerRect.width / 2;

        const nodes = [];

        const collect = (refs, side) => {
            refs.current.forEach((card) => {
                if (!card) return;

                const title = card.querySelector("h3");
                if (!title) return;

                const titleRect = title.getBoundingClientRect();
                const cardRect = card.getBoundingClientRect();

                nodes.push({
                    side,
                    y: titleRect.top + titleRect.height / 2 - containerRect.top,
                    x:
                        side === "left"
                            ? cardRect.right - containerRect.left
                            : cardRect.left - containerRect.left - 20,
                });
            });
        };

        collect(leftRefs, "left");
        collect(rightRefs, "right");

        if (nodes.length === 0) return;

        const minY = Math.min(...nodes.map((n) => n.y));
        const maxY = Math.max(...nodes.map((n) => n.y));

        const paths = [];
        const dots = [];

        // 🔴 MAIN VERTICAL LINE — FIXED START & END
        paths.push({
            d: `M ${centerX} ${minY} V ${maxY}`,
        });

        nodes.forEach((node) => {
            // Dot exactly at title center
            dots.push({
                cx: node.x,
                cy: node.y,
            });

            // Horizontal line ends EXACTLY at dot
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

    useEffect(() => {
        calculate();
        window.addEventListener("resize", calculate);
        return () => window.removeEventListener("resize", calculate);
    }, []);

    return (
        <section className="py-0 md:py-24">
            <div className="hidden md:block relative " ref={containerRef}>
                {svgData && (
                    <svg
                        className="absolute inset-0 pointer-events-none"
                        width={svgData.width}
                        height={svgData.height}
                        viewBox={`0 0 ${svgData.width} ${svgData.height}`}
                        preserveAspectRatio="none"
                    >
                        {/* Lines */}
                        {svgData.paths.map((p, i) => (
                            <path
                                key={i}
                                d={p.d}
                                stroke="#3C2C0B"
                                strokeDasharray="6 6"
                                strokeWidth="1"
                                fill="none"
                            />
                        ))}

                        {/* Dots */}
                        {svgData.dots.map((d, i) => (
                            <g key={i}>
                                <circle cx={d.cx} cy={d.cy} r="13" fill="#3C2C0B" opacity="0.2">
                                    <animate
                                        attributeName="r"
                                        from="8"
                                        to="12"
                                        dur="2s"
                                        repeatCount="indefinite"
                                        keyTimes="0;0.5;1"
                                        values="8;13;8"
                                        calcMode="spline"
                                        keySplines="0.4 0 0.6 1;0.4 0 0.6 1"
                                    />

                                    {/* Opacity soft blink */}
                                </circle>
                                <circle cx={d.cx} cy={d.cy} r="6" fill="#3C2C0B" />
                            </g>
                        ))}
                    </svg>
                )}

                <div className="flex justify-between">
                    {/* LEFT COLUMN (4 items) */}
                    <div className="flex flex-col gap-20 w-[40%]">
                        {leftItems.map((item, index) => (
                            <div key={item.id} ref={(el) => (leftRefs.current[index] = el)}>
                                <ProcessCard
                                    index={item.index}
                                    icon={item.icon}
                                    title={item.title}
                                    description={item.description}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-20 mt-50 w-[40%] relative">
                        {rightItems.map((item, index) => (
                            <div key={item.id} ref={(el) => (rightRefs.current[index] = el)}>
                                <ProcessCard
                                    key={item.id}
                                    index={item.index}
                                    icon={item.icon}
                                    title={item.title}
                                    description={item.description}
                                />
                            </div>
                        ))}
                        <hr
                            className="
    absolute
    -bottom-10
    -right-5
    w-60
    lg:w-60 
    h-[3px]
    bg-[#FFBE2E]
    border-0
  "
                        />
                    </div>
                </div>
            </div>

            <div className="block md:hidden px-4 py-16 space-y-10 md:space-y-20">
                {mobileItems.map((item, index) => (
                    <ProcessCard
                        key={item.id}
                        index={item.index}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </section>
    );
}

export default CustomsClearanceServicesSection;
