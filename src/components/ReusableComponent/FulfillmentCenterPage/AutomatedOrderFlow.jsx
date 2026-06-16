import { titleContentConfig } from "@/config/titleContentConfig";
import React from "react";
import TitleContent from "../All_Title/TitleContent";
import RetailCard from "../B2b_Sections/RetailCard";

function AutomatedOrderFlow({ sectionKey = [] }) {
  const services = [
    {
      id: 1,
      title: "Seamless\n Integration",
      description:
        "Direct connection with marketplaces, custom websites, and ERP systems for a centralized data flow.",
      icon: "/semless-integration.svg",
    },
    {
      id: 2,
      title: "Tailor-Made \n Solutions",
      description:
        "Customized technology built specifically around your business and operational needs.",
      icon: "/Tailor-Made.svg",
    },
    {
      id: 3,
      title: "Actionable \n Dashboards",
      description:
        "Access detailed dashboards with real-time KPIs and analytics to make informed decisions.",
      icon: "/Actionable.svg",
    },
    {
      id: 4,
      title: "Automated \n Rules",
      description:
        "Smart automation rules drive cost-efficient operations and eliminate the need for manual intervention",
      icon: "/AutomatedRules.svg",
    },
  ];
  const tc =
    titleContentConfig[sectionKey] || titleContentConfig["automatedorderflow"];
  return (
    <section className="py-10 md:py-16  relative overflow-hidden brand-bg">
      <div className="container relative z-10">
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

export default AutomatedOrderFlow;
