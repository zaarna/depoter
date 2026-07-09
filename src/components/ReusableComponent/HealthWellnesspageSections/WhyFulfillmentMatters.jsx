"use client";

import React from "react";
import TitleContent from "../All_Title/TitleContent";
import { titleContentConfig } from "@/config/titleContentConfig";
import FeatureHighlight from "./FeatureHighlight";
// import { titleContentConfig } from "@/config/titleContentConfig";
// import TitleContent from "./ReusableComponent/All_Title/TitleContent";

function WhyFulfillmentMatters({ sectionKey = [] }) {
  const fulfillmentFeatures = [
    {
      icon: "/fullfilment1.svg",
      title: "Better product safety",
    },
    {
      icon: "/fullfilment2.svg",
      title: "Faster delivery",
    },
    {
      icon: "/fullfilment3.svg",
      title: "Accurate order processing",
    },
    {
      icon: "/fullfilment4.svg",
      title: "Improved customer experience",
    },
  ];
  const tc =
    titleContentConfig[sectionKey] ||
    titleContentConfig["WhyFulfillmentMatters"];
  return (
    <section className="py-8 md:py-16 relative overflow-hidden">
      <div className="container">
        <div className=" text-center relative z-10">
          <TitleContent {...tc} />
        </div>
        <FeatureHighlight
          title="A structured fulfillment system ensures:"
          cards={fulfillmentFeatures}
          description="With the right fulfillment partner, businesses can maintain quality while scaling operations efficiently."
        />
      </div>
    </section>
  );
}

export default WhyFulfillmentMatters;
