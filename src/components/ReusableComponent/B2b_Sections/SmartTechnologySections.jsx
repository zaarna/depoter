"use client";
import { motion } from "framer-motion";
import TitleContent from "../All_Title/TitleContent";
import { titleContentConfig } from "@/config/titleContentConfig";
import TechnologyCards from "./TechnologyCards";

const features = [
  {
    title: "Order Management",
    description:
      "We centralize your entire B2B customer database in a unified system built for high-volume operations. Our team captures accurate billing and shipping information, schedules deliveries, and assigns batch and expiry details with precision. With real-time visibility, we track quantities across pieces, cartons, boxes, or pallets, ensuring seamless execution and faster turnaround for distributors, corporates, and retail networks.",
    icon: "/order_managment.png",
  },
  {
    title: "Picking and Packing",
    description:
      "Our Pick and Pack workflow leverages barcode and QR scanning to eliminate errors and maintain peak efficiency. We use smart cartonization to select the optimal packaging size, while partial fulfillment ensures flexibility for complex B2B orders. Every pick, scan, and pack is logged in our interactive dashboard, giving complete operational oversight for large-volume order management.",
    icon: "/packing.png",
  },
  {
    title: "Dispatch and POD",
    description:
      "We offer both courier-led and dedicated offline dispatch solutions with real-time tracking to keep all stakeholders informed. Digital proof of delivery, including signatures, timestamps, and images, is captured instantly. Every milestone updates automatically in your dashboard, enhancing accountability, reducing disputes, and building trust across your B2B supply chain.",
    icon: "/dispatch.png",
  },
  {
    title: "Custom Labeling for Retail Compliance",
    description:
      "We generate all barcodes, pallet labels, batch markers, expiry info, and retailer-specific tags with precision. This minimizes rejections at receiving docks, accelerates supply chain movement, and maintains consistent presentation across every retail, wholesale, and distribution channel.",
    icon: "/custom_labeling.png",
  },
  {
    title: "Stock Allocation with FIFO and FEFO",
    description:
      "We automate stock rotation across all UOM levels, including pieces, cartons, boxes, and pallets. FIFO guarantees older stock moves first for efficient replenishment, while FEFO prioritizes the earliest-expiry batches to maintain compliance. This reduces wastage, prevents write-offs, and ensures accuracy for distributors, retailers, and enterprise clients.",
    icon: "/stock_allocation.png",
  },
  {
    title: "Inventory Management and API Integration",
    description:
      "Our advanced inventory engine provides live stock updates, low-stock alerts, expiry tracking, and detailed reporting trusted by leading brands. Through secure API integrations, we seamlessly connect with e-commerce platforms, WMS, and marketplaces, keeping product data, stock levels, and order statuses perfectly synchronized. This ensures clarity, accuracy, and speed across every inventory-driven decision.",
    icon: "/inventory.png",
  },
];

const SmartTechnologySection = ({ sectionKey = [] }) => {
  const tc =
    titleContentConfig[sectionKey] || titleContentConfig["smarttechnology"];
  return (
    <section className="py-8 md:py-16 bg-[#ffffff] relative overflow-hidden">
      <div className="grid text-center relative z-10">
        <TitleContent {...tc} />
      </div>
      <TechnologyCards features={features} />
    </section>
  );
};

export default SmartTechnologySection;
