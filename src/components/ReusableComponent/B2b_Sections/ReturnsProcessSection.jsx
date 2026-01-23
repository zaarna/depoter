"use client";

import { useRef, useState, useEffect } from "react";
import ProcessCard from "./ProcessCard";

function ReturnsProcessSection() {
  const [svgData, setSvgData] = useState(null);
  const containerRef = useRef(null);
  const leftRefs = useRef([]);
  const rightRefs = useRef([]);
  const leftItems = [
    {
      id: 1,
      index: "01",
      icon: "/return-request.svg",
      title: "Return Request and RMA Creation",
      description:
        "Clients can raise return requests quickly through WMS, the portal, or API. Our system creates an RMA (Return Merchandise Authorization) instantly, allowing your team to track every return with full clarity and zero confusion.",
    },
    {
      id: 2,
      index: "03",
      icon: "/sorting.svg",
      title: "Fast and Accurate Receiving",
      description:
        "When the returned goods arrive, we scan and verify everything in real time. This ensures accuracy, reduces mistakes, and gives your business a clean and reliable return flow.",
    },
    {
      id: 3,
      index: "05",
      icon: "/leftthird.svg",
      title: "Clear Sorting for Faster Decisions",
      description:
        "Products are sorted into categories like Sellable, Repack or Refurbish, Return to Vendor, Scrap, or Quarantine. This quick sorting helps you make faster business decisions and maintain a clean inventory structure.",
    },
    {
      id: 4,
      index: "07",
      icon: "/reports.svg",
      title: "Easy Reports and Smooth Closure",
      description:
        "We provide a complete return and QC report with item status, photos, and findings. Our team handles the next steps, such as Return to Vendor, scrap, or refurbish as per your instructions, ensuring an easy and hassle-free closure.",
    },
  ];

  const rightItems = [
    {
      id: 5,
      index: "02",
      icon: "/receiving.svg",
      title: "Inbound Scheduling and Shipment Alerts",
      description:
        "We schedule the return arrival in advance and capture the shipment details. This helps our warehouse prepare the right space and team, making the entire process smooth and well-organized.",
    },
    {
      id: 6,
      index: "04",
      icon: "/inventory.svg",
      title: "Quality Check That Protects Your Inventory",
      description:
        "Every product goes through a detailed but efficient QC process. We check for damage, test functionality, verify expiry and batch details, and record images for full transparency. This protects your sellable inventory and avoids costly errors.",
    },
    {
      id: 7,
      index: "06",
      icon: "/inbound.svg",
      title: "Instant Inventory Updates",
      description:
        "All changes reflect instantly across the WMS, OMS, and ERP. Your team can view updated stock levels in real time, which helps with accurate planning and better order management.",
    },
  ];

  const mobileItems = [
    ...leftItems.slice(0, 1),
    ...rightItems.slice(0, 1),
    ...leftItems.slice(1, 2),
    ...rightItems.slice(1, 2),
    ...leftItems.slice(2, 3),
    ...rightItems.slice(2, 3),
    ...leftItems.slice(3),
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

          <div className="flex flex-col gap-20 mt-24 w-[40%] relative">
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
    bottom-18
    -right-5
    w-50
    lg:w-80
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

export default ReturnsProcessSection;
