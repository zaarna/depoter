"use client";
import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import TitleContent from "../All_Title/TitleContent";
import { titleContentConfig } from "@/config/titleContentConfig";
import TimelineCard from "./TimeLineCard";

function AdvanceTechnologySection(sectionKey = []) {
  const tc =
    titleContentConfig[sectionKey] || titleContentConfig["advancetechnology"];

  const solutions = [
    {
      title: "Warehouse Management \n Systems (WMS)",
      icon: "/wms.svg",
      position: "top",
    },
    {
      title: "Order Management \n Systems (OMS)",
      icon: "/oms.svg",
      position: "top",
    },
    {
      title: "Barcode Scanning \n and RFID",
      icon: "/rfid.svg",
      position: "top",
    },
    {
      title: "Artificial Intelligence (AI) \n and Machine Learning (ML)",
      icon: "/aiml.svg",
      position: "top",
    },
    {
      title: "Internet of \n Things (IoT)",
      icon: "/iot.svg",
      position: "bottom",
    },

    {
      title: "Electronic Data \n Interchange (EDI)",
      icon: "/edi.svg",
      position: "bottom",
    },

    {
      title: "Enterprise Resource \n Planning (ERP)",
      icon: "/erp.svg",
      position: "bottom",
    },
  ];

  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [svgData, setSvgData] = useState(null);
  const [maxHeight, setMaxHeight] = useState(0);

  const calculateTimeline = () => {
    if (!containerRef.current) return;

    const validRefs = cardRefs.current.filter((ref) => ref !== null);
    if (validRefs.length !== solutions.length) return;

    const containerRect = containerRef.current.getBoundingClientRect();

    const cardData = validRefs.map((card, index) => {
      const rect = card.getBoundingClientRect();
      const imgElement = card.querySelector("img");
      const imgRect = imgElement ? imgElement.getBoundingClientRect() : rect;

      return {
        index: index,
        centerX: (rect.left + rect.right) / 2 - containerRect.left,
        imgTop: imgRect.top - containerRect.top,
        imgBottom: imgRect.bottom - containerRect.top,
        isTopRow: index < 4,
      };
    });

    // Sort cards by horizontal position (centerX)
    const sortedCards = [...cardData].sort((a, b) => a.centerX - b.centerX);

    const lineY = containerRect.height / 2;
    const svgWidth = containerRect.width;
    const svgHeight = containerRect.height;
    const radius = 15;
    const horizontalGap = 10;

    let paths = [];
    const startX = 20;

    sortedCards.forEach((card, sortedIndex) => {
      const centerX = card.centerX;
      const targetY = card.isTopRow ? card.imgBottom : card.imgTop;

      // === 1. HORIZONTAL SEGMENT ===
      let segmentStartX;

      if (sortedIndex === 0) {
        // First card in horizontal order
        segmentStartX = startX;
      } else {
        // Start after previous card + gap
        const prevCenterX = sortedCards[sortedIndex - 1].centerX;
        segmentStartX = prevCenterX + horizontalGap;
      }

      // End where this curve starts
      const segmentEndX = centerX - radius;

      let horizontalPath = `M${segmentStartX} ${lineY} L${segmentEndX} ${lineY}`;
      paths.push(horizontalPath);

      // === 2. VERTICAL WITH CURVE ===
      let verticalPath = `M${segmentEndX} ${lineY}`;

      if (card.isTopRow) {
        verticalPath += ` Q${centerX} ${lineY} ${centerX} ${lineY - radius}`;
        verticalPath += ` L${centerX} ${targetY}`;
      } else {
        verticalPath += ` Q${centerX} ${lineY} ${centerX} ${lineY + radius}`;
        verticalPath += ` L${centerX} ${targetY}`;
      }

      paths.push(verticalPath);
    });

    // === 3. FINAL HORIZONTAL ===
    const lastCenterX = sortedCards[sortedCards.length - 1].centerX;
    const finalPath = `M${lastCenterX + horizontalGap} ${lineY} L${
      svgWidth - 20
    } ${lineY}`;
    paths.push(finalPath);

    setSvgData({
      paths,
      width: svgWidth,
      height: svgHeight,
      lineY,
      startX: 20,
      endX: svgWidth - 20,
    });
  };
  useEffect(() => {
    const timer = setTimeout(calculateTimeline, 100);
    window.addEventListener("resize", calculateTimeline);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calculateTimeline);
    };
  }, [solutions.length]);
  return (
    <section className="py-8 md:py-16 relative overflow-hidden bg-[#FFF7E4]">
      <div className="container">
        <div className="grid text-center relative">
          <TitleContent {...tc} />
        </div>
        <div className="relative" ref={containerRef}>
          {/* SVG Timeline */}
          {svgData && (
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox={`0 0 ${svgData.width} ${svgData.height}`}
              preserveAspectRatio="none"
            >
              {/* Draw all path segments */}
              {svgData.paths.map((path, index) => (
                <path
                  key={index}
                  d={path}
                  stroke="#978050"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
              ))}

              {/* Start circle */}
              <circle
                cx={svgData.startX}
                cy={svgData.lineY}
                r="12"
                fill="#FFF7E4"
                stroke="#978050"
                strokeWidth="4"
              />

              {/* End circle */}
              <circle
                cx={svgData.endX}
                cy={svgData.lineY}
                r="12"
                fill="#FFF7E4"
                stroke="#978050"
                strokeWidth="4"
              />
            </svg>
          )}

          {/* Cards */}
          <div className="relative flex gap-x-5 gap-y-15 px-10 py-10 flex-row flex-wrap justify-center items-center">
            {solutions.map((item, index) => (
              <TimelineCard
                ref={(el) => (cardRefs.current[index] = el)}
                key={index}
                title={item.title}
                icon={item.icon}
                position={item.position}
                index={index}
                minHeight={maxHeight}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdvanceTechnologySection;
