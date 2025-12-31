import { titleContentConfig } from "@/config/titleContentConfig";
import React from "react";
import TitleContent from "../All_Title/TitleContent";
import RetailCard from "./RetailCard";

function DelieverRetails({ sectionKey = [] }) {
  const services = [
    {
      id: 1,
      title: "Bulk Order \n Fulfillment",
      description:
        "Process large shipments ranging from cartons to pallets with accuracy and speed using our optimized routing systems.",
      icon: "/bulkorder.svg",
    },
    {
      id: 2,
      title: "Retail-Ready \n Compliance",
      description:
        "We manage every retailer's entry protocol, labeling standard, and receiving procedure to guarantee smooth deliveries.",
      icon: "/retailready.svg",
    },
    {
      id: 3,
      title: "Dedicated \n Delivery Fleet",
      description:
        "Our trained delivery teams handle supermarket and retail deliveries with full professionalism and adherence to compliance standards.",
      icon: "/dedicateddelievery.svg",
    },
    {
      id: 4,
      title: "Proof of Delivery \n (POD) Tracking",
      description:
        "Each order completion is supported by digital proof through signatures, timestamps, and images, visible instantly in your Depoter dashboard.",
      icon: "/proofofdelivery.svg",
    },
  ];
  const tc =
    titleContentConfig[sectionKey] || titleContentConfig["deliverretail"];
  return (
    <section className="py-10 md:py-16  relative overflow-hidden brand-bg">
      <div className="container">
        <div className="grid text-center relative">
          <TitleContent {...tc} />
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-20 mt-28 lg:mt-23">
          {services.map((service, index) => (
            <RetailCard
              title={service.title}
              icon={service.icon}
              description={service.description}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default DelieverRetails;
