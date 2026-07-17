"use client";

import React, { useState } from "react";
import Button from "../Button/Button";

export default function freightForwardingServicesCard() {
  const [activeTab, setActiveTab] = useState(0);
  const activeIndex = activeTab ?? 0;

  const renderTextWithBold = (text) => {
    const parts = text.split(/(<b>.*?<\/b>)/gi);
    return parts.map((part, index) => {
      if (/^<b>.*<\/b>$/i.test(part)) {
        return (
          <strong key={index}>{part.replace(/<b>(.*?)<\/b>/i, "$1")}</strong>
        );
      }
      return <React.Fragment key={index}>{part}</React.Fragment>;
    });
  };

  const services = [
    {
      title: "Sea Freight",
      icon: "/ffb-service-1.svg",
      items: [
        "Sea freight remains one of the most cost-effective solutions for international cargo transportation, particularly for high-volume shipments.",
        "We Provide:\n <b>FCL (Full Container Load)</b> solutions for businesses shipping large cargo volumes that require dedicated containers.\n <b>LCL Less than Container Load)</b> services for smaller shipments where cargo is consolidated with other shipments to reduce costs.",
        "Our logistics team manages container booking, port coordination, and shipping documentation such as Bills of Lading, ensuring cargo moves efficiently through international sea routes.",
      ],
    },
    {
      title: "Air Freight",
      icon: "/ffb-service-2.svg",
      items: [
        "When speed is critical, air freight provides the fastest transportation solution for international shipments.",
        "Depoter supports businesses that require rapid cargo movement by coordinating air freight shipments through global airline networks. Our team manages cargo booking, documentation, and customs coordination to ensure shipments reach their destination quickly and safely.",
        "Air freight is commonly used for high-value goods, time-sensitive products, and urgent supply chain requirements",
      ],
    },
    {
      title: "Land Transportation",
      icon: "/ffb-service-3.svg",
      items: [
        "Efficient inland transport plays a critical role in connecting ports, warehouses, and final delivery destinations.",
        "Depoter provides reliable land transport solutions that support cargo movement between ports, logistics hubs, and distribution centers. Our trucking network ensures smooth cargo transfers while maintaining shipment visibility throughout the journey.",
        "This service helps businesses maintain efficient supply chains by ensuring goods reach their final destination without delays.",
      ],
    },
  ];

  return (
    <>
      <div className="lg:hidden">
        {services.map((service, index) => (
          <div
            key={index}
            className="mb-4 rounded-[32px] border border-[#E5E5E5] overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setActiveTab(activeTab === index ? null : index)}
              className={`flex w-full items-center justify-between px-5 py-4 text-left text-[18px] font-semibold transition-all bg-[#ffbe2e]
                 `}
            >
              <span>
                <img
                  className="inline w-10"
                  src={service.icon}
                  alt={service.title}
                />
              </span>
              <span>{service.title}</span>
              <span
                className={`text-2xl transition-transform ${activeTab === index ? "rotate-180" : ""}`}
              >
                ▾
              </span>
            </button>
            {activeTab === index && (
              <div className="border-t border-[#E5E5E5] bg-white px-5 py-4">
                <ul className="space-y-4">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-5 text-[18px] mb-5"
                    >
                      <span className="w-4 h-4 rounded-full border border-[#978050] flex items-center justify-center bg-white mt-1 flex-shrink-0">
                        <span className="w-2 h-2 rounded-full bg-[#978050]"></span>
                      </span>
                      <span className="space-y-1">
                        {item.split("\n").map((line, lineIndex) => (
                          <span key={lineIndex} className="block">
                            {renderTextWithBold(line)}
                          </span>
                        ))}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="hidden lg:block">
        <div className="bg-white rounded-[32px] p-8 shadow-md h-105">
          <div className="flex flex-col-1 lg:flex-row gap-10">
            {/* Left Section */}
            <div className="lg:w-[50%] flex flex-col gap-10 items-center justify-center self-center">
              {services.map((service, index) => (
                <div key={index} className="w-full max-w-[360px]">
                  {activeTab !== index && (
                    <div className="mx-auto mt-2 h-[1.5px] w-full rounded-full bg-gradient-to-r from-[#F5F1E8] via-[#C7B08A] to-[#F5F1E8]" />
                  )}
                  <button
                    onClick={() => setActiveTab(index)}
                    className={`relative text-start overflow-hidden px-5 py-4 w-full rounded-xl min-h-[72px] transition-all border-t border-b
                      ${activeTab === index
                        ? "bg-[#ffbe2e] border text-black border-black"
                        : "border-none"
                      }`}
                  >
                    <span>
                      <img
                        className="inline w-10 me-10"
                        src={service.icon}
                        alt={service.title}
                      />
                    </span>
                    <span className="relative z-10 text-[18px]">
                      {service.title}
                    </span>
                  </button>
                  {activeTab !== index && (
                    <div className="mx-auto mt-2 h-[1.5px] w-full rounded-full bg-gradient-to-r from-[#F5F1E8] via-[#C7B08A] to-[#F5F1E8]" />
                  )}
                </div>
              ))}
            </div>

            {/* Right Section */}
            <div className="lg:w-[50%]">
              <ul className="space-y-4">
                {services[activeIndex].items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-5 text-[18px] mb-5"
                  >
                    <span className="w-4 h-4 rounded-full border border-[#978050] flex items-center justify-center bg-white mt-1 flex-shrink-0">
                      <span className="w-2 h-2 rounded-full bg-[#978050]"></span>
                    </span>

                    <span className="space-y-1">
                      {item.split("\n").map((line, lineIndex) => (
                        <span key={lineIndex} className="block">
                          {renderTextWithBold(line)}
                        </span>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8 my-5 w-100 mx-auto">
        <Button href="/company/contact-us" className="mx-3 block py-3 px-20" variant="black">
          Request Shipping Quote
        </Button>
      </div>
    </>
  );
}
