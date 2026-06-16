"use client";

import { useState } from "react";
import Button from "../Button/Button";

const benefits = [
  {
    title: "Error-Free Data Exchange",
    description:
      "Manual processes often lead to errors, especially when handling large volumes of data. Our system reduces these issues by using automated workflows and accurate SKU mapping. This helps keep your data clean and consistent, reduces order mistakes, and improves overall operational accuracy.",
    icon: "/Error-Free.svg",
  },
  {
    title: "Real-Time Synchronization",
    description:
      "Keep your operations updated at all times with instant inventory and order updates. Once systems are connected, orders update automatically, stock levels remain accurate, and tracking information stays current without any manual effort.",
    icon: "/Real-Time.svg",
  },
  {
    title: "Maximum Data Utilization",
    description:
      "Our system goes beyond basic data syncing by capturing and exchanging complete information across all connected platforms. This helps you understand your performance better, plan operations more effectively, and make smarter business decisions based on accurate data.",
    icon: "/Maximum-data.svg",
  },
  {
    title: "Enhanced Customer Experience",
    description:
      "Customers expect fast and transparent delivery. With real-time tracking and instant updates, you can give them clear visibility of their orders and timely delivery updates, which helps improve their overall experience and satisfaction. ",
    icon: "/Customer-Experience.svg",
  },
  {
    title: "Operational Efficiency & Scalability",
    description:
      "As your business grows, manual processes can slow things down and create challenges. Our system helps you automate repetitive tasks, reduce dependency on manual work, and manage your operations more efficiently, making it easier to scale as your business expands. ",
    icon: "/Operational-Efficiency.svg",
  },
];

export default function BenefitsAccordionSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F4F4F4] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[40%_60%] gap-12 items-start">
          {/* Left Side */}
          <div className="flex flex-col justify-center h-full items-center lg:items-start text-center lg:text-left">
            <h2 className="text-[clamp(1.5rem,1rem+2vw,3rem)] text-[#212121]">
              Benefits of
              <br />
              Our{" "}
              <span className="text-[#F5B42B]">
                Integration
                <br />
                System
              </span>
            </h2>

            <Button className="py-4 px-15 mt-20">
              Request an Integration Demo
            </Button>
          </div>

          {/* Accordion */}
          <div className="space-y-5">
            {benefits.map((item, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  key={index}
                  className={`bg-white border border-[#F5B42B] rounded-[28px] transition-all duration-300 overflow-hidden ${
                    isOpen ? "p-7" : "p-5"
                  }`}
                >
                  {/* Header */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between gap-4 text-left"
                  >
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div className="min-w-[60px] h-[60px] rounded-full bg-[#F5B42B] flex items-center justify-center">
                        <img
                          src={item.icon}
                          alt={item.title}
                          className="w-[60px] h-[60px] object-contain"
                        />
                      </div>

                      {/* Title */}
                      <h3 className="text-[22px] md:text-[26px] font-semibold text-[#212121]">
                        {item.title}
                      </h3>
                    </div>
                  </button>

                  {/* Content */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[16px] leading-[1.8] text-[#4A4A4A] pl-[76px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
