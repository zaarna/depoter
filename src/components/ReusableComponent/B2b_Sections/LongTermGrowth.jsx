"use client";
import React, { useRef, useState, useEffect } from "react";
import TitleContent from "../All_Title/TitleContent";
import { titleContentConfig } from "@/config/titleContentConfig";
import LongTermCard from "./LongTermCard";

function LongTermGrowth({ sectionKey = [] }) {
  const tc =
    titleContentConfig[sectionKey] || titleContentConfig["scalabilitygrowth"];
  const features = [
    {
      title: "Expandable Storage & Infrastructure",
      description:
        "Increase pallet positions, racking zones, and temperature-controlled areas as your product range and distributor demand grow.",
      icon: "/expandable.svg",
      variant: "none",
    },
    {
      title: "Configurable B2B Workflows",
      description:
        "Align fulfillment with retailer SOPs, bulk ordering cycles, pallet configurations, and compliance rules without operational friction.",
      icon: "/configurable.svg",
      variant: "middle",
    },
    {
      title: "High-Volume Order Handling",
      description:
        "Process large MOQs, multi-pallet shipments, and recurring wholesale orders with systems that scale during peak procurement periods.",
      icon: "/highvolume.svg",
      variant: "middle",
    },
    {
      title: "Tech-Driven Operational Agility",
      description:
        "Modular systems support rapid SKU onboarding, batch-level controls, and custom routing logic to meet evolving supply chain needs.",
      icon: "/techdriven.svg",
      variant: "end",
    },
  ];

  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [svgPath, setSvgPath] = useState("");
  const [svgHeight, setSvgHeight] = useState(0);
  const [svgWidth, setSvgWidth] = useState(0);

  const calculatePath = () => {
    if (!containerRef.current) return;

    // Filter out null refs
    const validRefs = cardRefs.current.filter((ref) => ref !== null);
    if (validRefs.length !== 4) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const cardRects = validRefs.map((card) => card.getBoundingClientRect());

    // Calculate positions relative to container
    const positions = cardRects.map((rect) => ({
      top: rect.top - containerRect.top,
      bottom: rect.bottom - containerRect.top,
      left: rect.left - containerRect.left,
      right: rect.right - containerRect.left,
      width: rect.width,
    }));

    // Use actual card measurements
    const cardLeft = positions[0].left;
    const cardRight = positions[0].right;

    // Padding inside the card border
    const leftPad = cardLeft + 10; // 10px from left edge
    const rightPad = cardRight - 10; // 10px from right edge

    // Start at first card top with some padding
    const startY = positions[0].top + 5;

    // End at last card bottom with some padding
    const endY = positions[3].bottom;

    // Total SVG height
    const totalHeight = endY + 50; // extra buffer

    // SVG width matches container
    const svgWidth = containerRect.width;

    const radius = 15;
    // Build the path with dynamic coordinates
    const path = `
    M${leftPad} ${startY}
    H${rightPad - radius}
    Q${rightPad} ${startY} ${rightPad} ${startY + radius}
    V${positions[0].bottom - radius}
    Q${rightPad} ${positions[0].bottom} ${rightPad - radius} ${
      positions[0].bottom
    }
    H${leftPad + radius}
    Q${leftPad} ${positions[0].bottom} ${leftPad} ${
      positions[0].bottom + radius
    }
    V${positions[1].bottom - radius}
    Q${leftPad} ${positions[1].bottom} ${leftPad + radius} ${
      positions[1].bottom
    }
    H${rightPad - radius}
    Q${rightPad} ${positions[1].bottom} ${rightPad} ${
      positions[1].bottom + radius
    }
    V${positions[2].bottom - radius}
    Q${rightPad} ${positions[2].bottom} ${rightPad - radius} ${
      positions[2].bottom
    }
    H${leftPad + radius}
    Q${leftPad} ${positions[2].bottom} ${leftPad} ${
      positions[2].bottom + radius
    }
    V${endY - radius}
    Q${leftPad} ${endY} ${leftPad + radius} ${endY}
    H${rightPad}
  `;

    setSvgPath(path);
    setSvgHeight(totalHeight);
    setSvgWidth(svgWidth); // Add this state
  };

  useEffect(() => {
    const timer = setTimeout(calculatePath, 50);

    // Recalculate on window resize
    window.addEventListener("resize", calculatePath);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calculatePath);
    };
  }, []);

  return (
    <section className="py-8 md:py-16 relative overflow-hidden bg-[#FFF]">
      <div className="container">
        <div className="grid text-center relative">
          <TitleContent {...tc} />
        </div>
        <div className="relative" ref={containerRef}>
          {/* Desktop SVG - Static */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none lg:block hidden"
            viewBox="0 20 1269 416"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter
                id="filter0_f_2952_8795"
                x="-4"
                y="0"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
              </filter>
            </defs>
            <path
              d="M16 435.5H294.301C300.928 435.5 306.301 430.127 306.301 423.5V33.5C306.301 26.8726 311.673 21.5 318.301 21.5H627.72C634.348 21.5 639.72 26.8726 639.72 33.5V423.5C639.72 430.127 645.093 435.5 651.72 435.5H953.118C959.745 435.5 965.118 430.127 965.118 423.5V33.5C965.118 26.8726 970.49 21.5 977.118 21.5H1285"
              stroke="#FFBE2E"
              strokeWidth="3"
              fill="none"
              filter="url(#filter0_f_2952_8795)"
            />
            <path
              d="M16 435.5H294.301C300.928 435.5 306.301 430.127 306.301 423.5V33.5C306.301 26.8726 311.673 21.5 318.301 21.5H627.72C634.348 21.5 639.72 26.8726 639.72 33.5V423.5C639.72 430.127 645.093 435.5 651.72 435.5H953.118C959.745 435.5 965.118 430.127 965.118 423.5V33.5C965.118 26.8726 970.49 21.5 977.118 21.5H1285"
              stroke="#FFBE2E"
              strokeWidth="2"
              fill="none"
            />
          </svg>

          {svgPath && (
            <svg
              className="absolute inset-x-0 top-0 w-full pointer-events-none block sm:hidden"
              height={svgHeight}
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              preserveAspectRatio="none"
            >
              <path
                d={svgPath}
                stroke="#FFBE2E"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          )}

          <div className="relative flex justify-center my-10 flex-wrap">
            {features.map((elem, index) => (
              <LongTermCard
                ref={(el) => (cardRefs.current[index] = el)}
                key={index}
                title={elem.title}
                icon={elem.icon}
                description={elem.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LongTermGrowth;
