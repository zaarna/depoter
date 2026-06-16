"use client";

import { titleContentConfig } from "@/config/titleContentConfig";
import TitleContent from "../All_Title/TitleContent";
import Button from "../Button/Button";
import DeliveryCapabilityCard from "../StepCard/DeliveryCapabilityCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

const deliverySteps = [
  {
    step: 1,
    total: 4,
    title: "Climate-Controlled Deliveries",
    features: [
      {
        icon: "/delivery-v1.svg",
        title: "Ambient Storage & Transport",
        desc: "We offer normal ambient delivery options for products that require a stable environment.",
      },
      {
        icon: "/delivery-v2.svg",
        title: "Cooler Box Solutions",
        desc: "Specialized cooling containers for temperature-sensitive products.",
      },
      {
        icon: "/delivery-v3.svg",
        title: "Chilled and Frozen Capabilities",
        desc: "Advanced infrastructure for chilled and frozen delivery, ensuring the cold chain remains unbroken.",
      },
      {
        icon: "/delivery-v4.svg",
        title: "Sector Expertise",
        desc: "Custom solutions perfectly suited for pharmaceuticals, food items, and other sensitive goods.",
      },
    ],
  },
  {
    step: 2,
    total: 4,
    title: "Dangerous Goods (DG) Shipping",
    features: [
      {
        icon: "/delivery-v5.svg",
        title: "Compliant Handling",
        desc: "Expert management of regulated and hazardous materials in full compliance with safety standards.",
      },
      {
        icon: "/delivery-v6.svg",
        title: "Packaging & Documentation",
        desc: "Comprehensive support for proper labeling, specialized packaging, and all necessary legal documentation.",
      },
      {
        icon: "/delivery-v7.svg",
        title: "International Regulations",
        desc: "Strict adherence to global shipping regulations to ensure safe and secure transportation processes.",
      },
    ],
  },
  {
    step: 3,
    total: 4,
    title: "Integrations & Technology",
    desc: `In a digital-first economy, data transparency is as critical as the physical delivery. Our proprietary technology acts as your complete "back-of-the-house" solution:`,
    features: [
      {
        icon: "/delivery-v8.svg",
        title: "Courier Integration",
        desc: (
          <>
            We are integrated with <b>25+ courier and delivery partners</b>,
            allowing you to manage multiple carriers through one centralized
            dashboard.
          </>
        ),
      },
      {
        icon: "/delivery-v9.svg",
        title: "Instant AWB Generation",
        desc: "Speed up your fulfillment process with automated and instant Air Waybill (AWB) generation.",
      },
      {
        icon: "/delivery-v10.svg",
        title: "Centralized Visibility",
        desc: "A unified platform that provides complete visibility across all shipping partners and territories.",
      },
    ],
  },
  {
    step: 4,
    total: 4,
    title: "Technology That Supports Your Growth",
    features: [
      {
        icon: "/delivery-v11.svg",
        title: "Real-Time Order Tracking",
        desc: "Live order status tracking for both businesses andend-consumers.",
      },
      {
        icon: "/delivery-v12.svg",
        title: "Automated Delay Alerts",
        desc: "Proactive system notifications for any delayed shipmentsto manage customer expectations.",
      },
      {
        icon: "/delivery-v13.svg",
        title: "Order Status History",
        desc: "Access a complete and detailed history Of order status changes for every shipment.",
      },
      {
        icon: "/delivery-v14.svg",
        title: "Data-Driven Insights",
        desc: "Utilize operational analytics and reporting to identify improvements and optimize your logistics performance.",
      },
    ],
  },
];

export default function DeliveryCapabilities() {
  const tc = titleContentConfig["deliverycapabilities"];
  const button = tc.button;
  return (
    <section className="py-8 md:py-16">
      <div className="container">
        {/* Title Section */}
        <div className="grid text-center relative z-10">
          <TitleContent {...tc} />
        </div>

        {/* Steps Swiper */}
        <div className="mt-10 md:mt-14">
          <Swiper
            modules={[Autoplay, FreeMode]}
            freeMode={{ enabled: true, momentum: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop
            spaceBetween={16}
            slidesPerView="auto"
            breakpoints={{
              0: { slidesPerView: 1.1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {deliverySteps.map((step) => (
              <SwiperSlide key={step.step} className="h-auto!">
                <DeliveryCapabilityCard {...step} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Button Section */}
        <div className="pt-8 flex justify-center">
          <Button
            href={button.link}
            className={button.className}
            variant="black"
          >
            {button.text}
          </Button>
        </div>
      </div>
    </section>
  );
}
