import { titleContentConfig } from "@/config/titleContentConfig";
import React from "react";
import TitleContent from "../All_Title/TitleContent";
import StorageCard from "../B2b_Sections/StorageCard";
import FulfillmentProcessCard from "./FulfillmentProcessCard";

function FulfillmentCenterWorks({ sectionKey }) {
  const tc =
    titleContentConfig[sectionKey] ||
    titleContentConfig["FulfillmentCenterWorks"];
  const cards = [
    {
      iconsImage: "/smart-receiving.svg",
      title: "Smart Receiving (Inbound)",
      description:
        "Your stock is received, inspected by our experts, and instantly logged into our system for real-time visibility.",
    },
    {
      iconsImage: "/strategic-slotting.svg",
      title: "Strategic Slotting",
      description:
        "Items are assigned to bin, shelf, or pallet locations based on SKU movement and size to optimize picking and packing.  ",
    },
    {
      iconsImage: "/real-time-order-sync.svg",
      title: "Real-Time Order Sync",
      description:
        "As soon as an order is placed on Shopify, Amazon, or Noon, it hits our system instantly for processing.",
    },
    {
      iconsImage: "/expert-processing.svg",
      title: "Expert Processing",
      description:
        "Our trained workforce picks, packs, and sorts the orders using barcode technology to eliminate errors.",
    },
    {
      iconsImage: "/fast-dispatch.svg",
      title: "Smart Receiving (Fast Dispatch)",
      description:
        "Orders are dispatched via our integrated courier network, providing your customers with real-time tracking.",
    },
  ];
  return (
    <section className="py-8 md:py-16 fbn-inbound-bg-image relative overflow-hidden">
      <div className="container">
        <div className="grid text-center relative z-10">
          <TitleContent {...tc} />

          <div className="flex flex-wrap justify-center gap-20 mt-15">
            {cards.map((card, index) => (
              <FulfillmentProcessCard
                key={index}
                iconsImage={card.iconsImage}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FulfillmentCenterWorks;
