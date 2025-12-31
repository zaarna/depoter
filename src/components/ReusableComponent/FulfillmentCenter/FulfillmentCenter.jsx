"use client";

import { useState } from "react";
import OrderingIcon from "../Icons/D2cpageIcons/OrderingIcon";
import AutoRulesIcon from "../Icons/D2cpageIcons/AutoRulesIcon";
import KittingIcon from "../Icons/D2cpageIcons/KittingIcon";
import FifoIcon from "../Icons/D2cpageIcons/FifoIcon";
import CustomPackICon from "../Icons/D2cpageIcons/CustomPackICon";
import LastIcon from "../Icons/D2cpageIcons/LastIcon";
import InventoryIcon from "../Icons/D2cpageIcons/InventoryIcon";
import PickIcon from "../Icons/D2cpageIcons/PickIcon";
import MinusIcon from "../Icons/MinusIcon";
import PlusIcon from "../Icons/PlusIcon";

export default function FulfillmentCenter() {
  const steps = [
    {
      id: "01",
      title: "Order Landing",
      icon: <OrderingIcon className="w-7 h-7 md:w-8 md:h-8" />,
      content: [
        {
          heading: "Default Warehouse",
          text: "Orders land automatically at a predefined primary warehouse unless specific routing conditions apply.",
        },
        {
          heading: "Closest to Customer",
          text: "The system assigns the warehouse nearest to the customer’s location to reduce transit time and shipping cost.",
        },
        {
          heading: "First Fill Rate",
          text: "Orders are directed to the warehouse that can fulfill the entire order from available stock.",
        },
      ],
    },
    {
      id: "02",
      title: "Automation Rules",
      icon: <AutoRulesIcon className="w-7 h-7 md:w-8 md:h-8" />,
      content: [
        {
          heading: "Order Routing Rules",
          text: "Route orders using first-fill-rate logic or custom configurations to balance cost, time, and service-level accuracy.",
        },
        {
          heading: "Order Modification",
          text: "Modify SKUs, apply offers, or edit details before fulfillment for flexibility and precision.",
        },
        {
          heading: "Handling Exceptions",
          text: "Auto-manage missing SKUs, address errors, or discrepancies through alert workflows for zero delays.",
        },
        {
          heading: "Packaging Rules",
          text: "Define packaging standards by product type or customer category for consistency and cost control.",
        },
        {
          heading: "Shipping Provider",
          text: "Auto-select the most efficient courier based on destination, speed, and cost parameters.",
        },
      ],
    },
    {
      id: "03",
      title: "Kitting & Bundling",
      icon: <KittingIcon className="w-7 h-7 md:w-8 md:h-8" />,
      content: [
        {
          heading: "Kitting",
          text: "Pre-assemble multiple SKUs into one package for subscriptions or curated sets to save time and reduce errors.",
        },
        {
          heading: "Bundling",
          text: "Create product combinations dynamically while maintaining SKU-level visibility for flexible promotions.",
        },
      ],
    },
    {
      id: "04",
      title: "FIFO & FEFO",
      icon: <FifoIcon className="w-7 h-7 md:w-8 md:h-8" />,
      content: [
        {
          heading: "FIFO (First-In, First-Out)",
          text: "Dispatches older stock first to prevent stagnation and reduce holding costs.",
        },
        {
          heading: "FEFO (First-Expired, First-Out)",
          text: "Prioritizes near-expiry items to ensure freshness, safety, and compliance.",
        },
      ],
    },
    {
      id: "05",
      title: "Pick and Pack",
      icon: <PickIcon className="w-7 h-7 md:w-8 md:h-8" />,
      content: [
        {
          heading: "Order Allocation",
          text: "Assigns tasks intelligently based on zone, load, and picker performance.",
        },
        {
          heading: "Picking Methods",
          text: "Utilize Single Order, Batch, Wave, or Put-to-Wall for maximum speed and precision.",
        },
        {
          heading: "Double Quality Check",
          text: "Two-step SKU verification during picking and packing ensures 100% accuracy.",
        },
      ],
    },
    {
      id: "06",
      title: "Custom Packaging",
      icon: <CustomPackICon className="w-7 h-7 md:w-8 md:h-8" />,
      content: [
        {
          heading: "Fragile Bubble Wrapping & Fillers",
          text: "Protects delicate items from vibration or damage during last-mile handling.",
        },
        {
          heading: "Eco-Friendly Packaging",
          text: "Uses recyclable, biodegradable materials to support sustainable logistics.",
        },
        {
          heading: "Branded Packaging Boxes",
          text: "Delivers a premium unboxing experience aligned with the client’s brand identity.",
        },
        {
          heading: "DG Packing",
          text: "Ensures safe and compliant handling of restricted items like perfumes or aerosols.",
        },
      ],
    },
    {
      id: "07",
      title: "Last-Mile Delivery",
      icon: <LastIcon className="w-7 h-7 md:w-8 md:h-8" />,
      content: [
        {
          heading: "Diversified Delivery Models",
          text: "Supports On-Demand, Same-Day, Standard, International, FBA/FBN, and Bulk deliveries.",
        },
        {
          heading: "Curated Delivery Partners",
          text: "Works with DHL, FedEx, Aramex, and UPS for global reliability.",
        },
        {
          heading: "Competitive Global Shipping Rates",
          text: "Balances cost and speed for high-performance fulfillment.",
        },
        {
          heading: "Tech-Enabled Operations",
          text: "Provides instant label generation, real-time tracking, and automated updates.",
        },
        {
          heading: "Dedicated Control Tower",
          text: "Monitors every shipment with proactive issue resolution.",
        },
        {
          heading: "WMS Integration",
          text: "Gives complete visibility into delivery performance, returns, and fulfillment analytics.",
        },
      ],
    },
    {
      id: "08",
      title: "Inventory Management",
      icon: <InventoryIcon className="w-7 h-7 md:w-8 md:h-8" />,
      content: [
        {
          heading: "Multi-Warehouse Management",
          text: "Distributes inventory strategically across hubs for faster regional delivery.",
        },
        {
          heading: "Multi UOM Support",
          text: "Manages products by piece, carton, or pallet to ensure flexible inventory control.",
        },
        {
          heading: "Expiry-Lot–Serial Management",
          text: "Tracks product lifecycle for full traceability and compliance.",
        },
        {
          heading: "Automated Replenishment Alerts",
          text: "Triggers stock notifications based on real-time thresholds.",
        },
        {
          heading: "Real-Time Stock Updates",
          text: "Syncs live inventory data across all channels to prevent overselling.",
        },
      ],
    },
  ];

  const [active, setActive] = useState(steps[0].id);
  const activeStep = steps.find((s) => s.id === active);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] gap-10 items-stretch">
      {/* LEFT SIDE – DESKTOP TABS */}
      <div className="hidden md:flex flex-col gap-5 relative">
        <div
          className="absolute left-7 top-0 bottom-0 w-[1.5px]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, #978050 0 8px, transparent 8px 12px)",
          }}
        />

        {steps.map((step, index) => (
          <button
            key={step.id}
            onClick={() => setActive(step.id)}
            className={`relative  flex items-center gap-4 rounded-full text-left transition
        `}
          >
            {/* ICON */}
            <span
              className={`
          flex items-center justify-center
          w-14 h-14 rounded-full
          border 
          transition-all duration-500 relative z-10
          ${
            active === step.id
              ? "bg-black border-black text-[#FFBE2E]"
              : "bg-[#FFF7E4] border-[#939393] text-black"
          }
        `}
            >
              {step.icon}
            </span>
            <div
              className={`absolute left-0 top-0 m-auto bottom-0 w-full h-0.5 bg-[#939393] z-0 transition-opacity duration-500 ease-in-out ${
                active === step.id ? "opacity-100" : "opacity-0"
              }`}
            />
            {/* TEXT */}
            <span
              className={`relative z-10 text-xl leading-tight flex-1 py-2.5 px-5 rounded-4xl border-2 transition-all duration-500 ${
                active === step.id
                  ? "bg-[#FFBE2E] text-black border-[#000000] font-medium "
                  : "bg-[#FFF7E4] text-[#21212199] border-[#939393] font-normal"
              }`}
            >
              {step.title}
            </span>
            <span
              className={`font-bold text-3xl transition-all duration-500 absolute w-[50px] h-[60px] right-10 bottom-4 text-[#939393] ${
                active === step.id ? "opacity-100" : "opacity-10"
              }`}
            >
              {step.id}
            </span>
          </button>
        ))}
      </div>

      {/* RIGHT SIDE – DESKTOP CONTENT */}
      <div
        className="hidden md:block bg-linear-to-r from-[#FFF4DB] to-white rounded-3xl shadow border
        h-full overflow-hidden"
      >
        <div className="p-8 relative">
          <div className="relative space-y-6 pl-10">
            {/* DASH LINE */}
            <div
              className="absolute left-3 top-0 h-full w-[1.5px]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to bottom, #978050 0 8px, transparent 8px 12px)",
              }}
            />

            {steps
              .find((s) => s.id === active)
              ?.content.map((item, i) => (
                <div key={i} className="relative flex flex-col gap-2">
                  {/* DOT */}
                  <div className="absolute -left-10 top-1.5">
                    <svg width="25" height="25" viewBox="0 0 140 140">
                      <circle
                        cx="70"
                        cy="70"
                        r="60"
                        fill="white"
                        stroke="black"
                        strokeWidth="4"
                      />
                      <circle cx="70" cy="70" r="30" fill="#FFBE2E" />
                    </svg>
                  </div>

                  <h4 className="font-semibold text-[#212121] text-xl">
                    {item.heading}
                  </h4>
                  <p className="text-[#212121] text-lg">{item.text}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="absolute bottom-[100px] right-24 opacity-30 text-[#FFBE2E] pointer-events-none">
          <div className=" scale-[4]">{activeStep?.icon}</div>
        </div>
      </div>

      {/* MOBILE – ACCORDION */}
      <div className="md:hidden space-y-4">
        <div
          className="absolute left-[18] top-0 h-full w-[1.5px]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, #978050 0 8px, transparent 8px 12px)",
          }}
        ></div>
        {steps.map((step, index) => {
          const isOpen = active === step.id;
          return (
            <div key={step.id} className=" overflow-hidden">
              <button
                key={step.id}
                onClick={() => setActive(isOpen ? null : step.id)}
                className={`relative  flex items-center gap-3 rounded-full text-left transition w-full
        `}
              >
                {/* ICON */}
                <span
                  className={`
                  flex items-center justify-center
                  w-12 h-12 rounded-full
                  border 
                  transition-all duration-500 relative z-10 text-[#FFBE2E] bg-black border-[#939393]
                `}
                >
                  {step.icon}
                </span>

                {/* TEXT */}
                <div className="flex bg-[#FFBE2E] border-[#939393] rounded-4xl border-2 py-2.5 px-2 w-full justify-between items-center">
                  <span
                    className={`relative  font-semibold z-10 text-base leading-tight flex-1   transition-all duration-500`}
                  >
                    {step.id}. {step.title}
                  </span>
                  {/* plus-minus icon */}
                  <span className="">
                    {isOpen ? <PlusIcon /> : <MinusIcon />}
                  </span>
                </div>
              </button>

              {isOpen && (
                <div className="ml-12 mt-3 p-4 space-y-4 bg-linear-to-r from-[#FFF4DB] to-white rounded-3xl shadow border border-[#978050] h-full overflow-hidden">
                  {step.content.map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="">
                        <h4 className="font-semibold">{item.heading}</h4>
                        <p className="text-sm text-gray-600">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
