"use client";
import React, { useState, useEffect, useRef } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const calculateDesktopTimeline = () => {
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
    const horizontalGap = 5;

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
        verticalPath += ` L${centerX} ${targetY - 25}`;
      } else {
        verticalPath += ` Q${centerX} ${lineY} ${centerX} ${lineY + radius}`;
        verticalPath += ` L${centerX} ${targetY + 25}`;
      }

      paths.push(verticalPath);
    });

    // === 3. FINAL HORIZONTAL ===
    const lastCenterX = sortedCards[sortedCards.length - 1].centerX;
    const finalPath = `M${lastCenterX + horizontalGap} ${lineY} L${
      svgWidth - 10
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

  const calculateMobileTimeline = () => {
    if (!containerRef.current) return;

    const validRefs = cardRefs.current.filter((ref) => ref !== null);
    if (validRefs.length !== solutions.length) return;

    const containerRect = containerRef.current.getBoundingClientRect();

    // Calculate total height
    let totalCardsHeight = 0;
    validRefs.forEach((card) => {
      const rect = card.getBoundingClientRect();
      totalCardsHeight += rect.height;
    });

    const numGaps = solutions.length - 1;
    const gapHeight = numGaps * 32;

    const topPadding = 50;
    const bottomPadding = 50;

    const calculatedHeight =
      totalCardsHeight + gapHeight + topPadding + bottomPadding;
    const minHeight = 1450;
    const finalHeight = Math.max(calculatedHeight, minHeight);

    const svgWidth = containerRect.width;
    const svgHeight = finalHeight;

    const centerX = containerRect.width / 2;

    const startY = topPadding;
    const endY = finalHeight - bottomPadding;

    const cardData = validRefs.map((card, index) => {
      const rect = card.getBoundingClientRect();
      const imgElement = card.querySelector("img");
      const imgRect = imgElement ? imgElement.getBoundingClientRect() : rect;

      return {
        cardTopY: rect.top - containerRect.top + topPadding,
        cardBottomY: rect.bottom - containerRect.top + topPadding,
        iconCenterX: imgRect.left - containerRect.left + imgRect.width / 2,
        iconCenterY:
          imgRect.top - containerRect.top + imgRect.height / 2 + topPadding,
        isRightSide: index % 2 === 1,
      };
    });

    const curveRadius = 15; // Controls curve roundness
    const verticalGap = 0; // Keep at 0
    const verticalReduction = 0; //

    let paths = [];

    // === FIRST VERTICAL LINE ===
    // Starts from top circle, ends shorter (natural gap before horizontal)

    const firstHorizontalY = cardData[0].cardTopY - 10;
    paths.push(
      `M${centerX} ${startY} V${
        firstHorizontalY - curveRadius - verticalReduction
      }`
    ); // Vertical ends earlier (natural gap)

    cardData.forEach((card, index) => {
      const targetX = card.iconCenterX;
      const horizontalY = card.cardTopY - 10;

      // === HORIZONTAL LINE TO ICON ===
      // Starts with curve from vertical direction
      // let horizontalPath = `M${centerX - 20} ${horizontalY}`;
      let horizontalPath = ``;

      if (card.isRightSide) {
        // Curve right towards icon
        horizontalPath += `M${centerX + 40} ${horizontalY} Q${centerX} ${
          horizontalY - verticalGap
        } ${centerX + curveRadius} ${horizontalY - verticalGap}`;
        horizontalPath += ` L${targetX} ${horizontalY - verticalGap}`;
      } else {
        // Curve left towards icon
        horizontalPath += `M${centerX - 20} ${horizontalY} Q${centerX - 20} ${
          horizontalY - verticalGap
        } ${centerX - curveRadius} ${horizontalY - verticalGap}`;
        horizontalPath += ` L${targetX} ${horizontalY - verticalGap}`;
      }
      paths.push(horizontalPath);

      // === VERTICAL LINE BETWEEN CARDS ===
      if (index < cardData.length - 1) {
        const nextHorizontalY = cardData[index + 1].cardTopY - 10;

        // Curve FROM horizontal BACK TO vertical (NO GAP HERE)
        let verticalPath = `M${
          centerX + (card.isRightSide ? curveRadius : -curveRadius)
        } ${horizontalY - verticalGap}`;

        // Smooth curve connecting horizontal to vertical
        verticalPath += ` Q${centerX} ${horizontalY - verticalGap} ${centerX} ${
          horizontalY - verticalGap + curveRadius
        }`;

        // Straight line down, but SHORTER (ends earlier for natural gap)
        verticalPath += ` L${centerX} ${
          nextHorizontalY - curveRadius - verticalReduction
        }`; // Vertical ends earlier (natural gap)

        paths.push(verticalPath);
      }
    });

    // === FINAL VERTICAL TO BOTTOM CIRCLE ===
    // This one goes FULL LENGTH (no reduction)
    const lastHorizontalY = cardData[cardData.length - 1].cardTopY - 10;
    const lastIsRightSide = cardData[cardData.length - 1].isRightSide;

    let finalVertical = `M${
      centerX + (lastIsRightSide ? curveRadius : -curveRadius)
    } ${lastHorizontalY - verticalGap}`;

    // Smooth curve from horizontal to vertical
    finalVertical += ` Q${centerX} ${
      lastHorizontalY - verticalGap
    } ${centerX} ${lastHorizontalY - verticalGap + curveRadius}`;

    // Straight to bottom circle (FULL LENGTH, no reduction)
    finalVertical += ` L${centerX} ${endY}`;
    paths.push(finalVertical);

    setSvgData({
      paths,
      width: svgWidth,
      height: svgHeight,
      centerX,
      startY: startY - 13,
      endY: endY + 13,
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isMobile) {
        calculateMobileTimeline();
      } else {
        calculateDesktopTimeline();
      }
    }, 100);

    const handleResize = () => {
      if (isMobile) {
        calculateMobileTimeline();
      } else {
        calculateDesktopTimeline();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, [solutions.length, isMobile]);

  return (
    <section className="py-8 md:py-16 relative overflow-hidden bg-[#FFF7E4]">
      <div className="container">
        <div className="grid text-center relative">
          <TitleContent {...tc} />
        </div>
        <div className="relative" ref={containerRef}>
          {/* SVG Timeline */}
          {!isMobile && svgData && (
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
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              ))}

              {/* Start circle */}
              {!isMobile && (
                <circle
                  cx={svgData.startX}
                  cy={svgData.lineY}
                  r="12"
                  fill="#FFF7E4"
                  stroke="#978050"
                  strokeWidth="4"
                />
              )}

              {/* End circle */}
              {!isMobile && (
                <circle
                  cx={svgData.endX}
                  cy={svgData.lineY}
                  r="12"
                  fill="#FFF7E4"
                  stroke="#978050"
                  strokeWidth="4"
                />
              )}
            </svg>
          )}

          {isMobile && svgData && (
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
              ))}

              {isMobile && (
                <circle
                  cx={svgData.centerX}
                  cy={svgData.startY}
                  r="13"
                  fill="#FFF7E4"
                  stroke="#978050"
                  strokeWidth="2"
                />
              )}

              {isMobile && (
                <circle
                  cx={svgData.centerX}
                  cy={svgData.endY}
                  r="13"
                  fill="#FFF7E4"
                  stroke="#978050"
                  strokeWidth="2"
                />
              )}
            </svg>
          )}

          {/* Cards */}
          <div
            className={`relative flex ${
              isMobile
                ? "flex-col gap-y-8 justify-center min-h-[1450px] "
                : "gap-x-5 gap-y-15 px-10 py-10 flex-row flex-wrap justify-center items-center"
            }`}
          >
            {solutions.map((item, index) => (
              <TimelineCard
                ref={(el) => (cardRefs.current[index] = el)}
                key={index}
                title={item.title}
                icon={item.icon}
                position={item.position}
                index={index}
                isMobile={isMobile}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdvanceTechnologySection;
