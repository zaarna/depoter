"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseInfoCard() {
  const containerRef = useRef(null);

  const steps = [
    {
      step: "01",
      total: "04",
      title: "Distilled Simplicity",
      features: [
        {
          id: 1,
          title: "Start with us at no cost",
          subtitle:
            "Begin your journey at zero cost. Experience smooth onboarding, explore our services, and realize tangible value before any financial commitment.",
          image: "/simplicity01.svg",
        },
        {
          id: 2,
          title: "Complexity to clarity",
          subtitle:
            "From bundled offers and custom orders to unique packaging or promotions, we simplify complex fulfillment into smart, cost-effective processes designed for your business.",
          image: "/simplicity02.svg",
        },
        {
          id: 3,
          title: "Hassel-free onboarding",
          subtitle:
            "Whether expanding into new markets or launching fresh operations, our onboarding stays effortless. We manage setup, workflows, billing, and team training to keep you ready from day one.",
          image: "/simplicity03.svg",
        },
      ],
      bg: "#FFF2D5",
    },

    {
      step: "02",
      total: "04",
      title: "Dynamic Infrastructure",
      features: [
        {
          id: 1,
          title: "Global Multi-Location Fulfillment",
          subtitle:
            "Our international warehouse network positions your products closer to your buyers. With multiple regional hubs, we help you deliver faster, reduce logistics expenses, and manage inventory more efficiently.",
          image: "/Dynamic01.svg",
        },
        {
          id: 2,
          title: "Seasonal demand flexibility",
          subtitle:
            "We recognize that demand fluctuates throughout the year. Our flexible warehousing and fulfillment model allows you to scale operations up or down based on seasonal business needs.",
          image: "/Dynamic02.svg",
        },
        {
          id: 3,
          title: "Versatile Warehousing for Every Need",
          subtitle:
            "We provide adaptable storage environments that maintain optimal product conditions. Every warehouse is built to meet safety and compliance standards, ensuring reliable and cost-effective operations.",
          image: "/Dynamic03.svg",
        },
      ],
      bg: "#FFEBC0",
    },

    {
      step: "03",
      total: "04",
      title: "Dexterous Tech",
      features: [
        {
          id: 1,
          title: "Smart Systems (OMS, WMS & TMS)",
          subtitle:
            "Our intelligent tech ecosystem powers fast, efficient, and accurate fulfillment. Integrated management systems automate workflows, handle custom rules, and maintain operational consistency.",
          image: "/Tech01.svg",
        },
        {
          id: 2,
          title: "Plug & play integration",
          subtitle:
            "Our integrations connect easily with your eCommerce platforms, marketplaces, and ERP systems, enabling quick setup and faster syncing without complex technical work.",
          image: "/Tech02.svg",
        },
        {
          id: 3,
          title: "Automated Billing and Insights",
          subtitle:
            "We deliver detailed billing supported by live dashboards that keep every transaction transparent and traceable. You get complete visibility with accurate, on-time reporting.",
          image: "/Tech03.svg",
        },
      ],
      bg: "#FFE4AE",
    },

    {
      step: "04",
      total: "04",
      title: "Dedicated Growth",
      features: [
        {
          id: 1,
          title: "Scale your ambition",
          subtitle:
            "We give your business the freedom and flexibility to grow without limitations. Our scalable fulfillment model supports market expansion and peak-season demands with ease.",
          image: "/Growth01.svg",
        },
        {
          id: 2,
          title: "AI-enabled customer support",
          subtitle:
            "Our AI support delivers instant answers, proactive communication, and efficient problem resolution. This ensures faster responses, minimal delays, and a smoother customer experience.",
          image: "/Growth02.svg",
        },
        {
          id: 3,
          title: "Direct settlements",
          subtitle:
            "We keep your cash flow steady through timely payments, precise COD reconciliation, and transparent invoicing, ensuring every transaction is accurate and hassle-free.",
          image: "/Growth03.svg",
        },
      ],
      bg: "#FFDE9C",
    },
  ];

  // useEffect(() => {
  //   const cards = gsap.utils.toArray(".stack-inner");

  //   cards.forEach((card, index) => {
  //     if (index === cards.length - 1) return;

  //     const scaleTo = 1 - (cards.length - 1 - index) * 0.08;

  //     gsap.to(card, {
  //       scale: scaleTo,
  //       y: -20,
  //       filter: "brightness(0.85)",
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: cards[index + 1],
  //         start: "top center",
  //         end: "top top",
  //         scrub: true,
  //       },
  //     });
  //   });

  //   return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  // }, []);

  return (
    <section className="relative">
      {steps.map((step, index) => (
        <div key={index} className="min-h-[650px] mb-10 ">
          <div className={`sticky top-24 flex justify-center`}>
            <div
              className="stack-inner bg-[fff4db] rounded-3xl py-6 lg:py-8 shadow-xl border border-yellow-200"
              style={{ backgroundColor: step.bg }}
            >
              {/* Badge + Title */}
              <div className="mb-8 pl-6 lg:pl-8">
                <div className="inline-block bg-[#212121] text-[#FFBE2E] text-sm px-4 py-2 rounded-full mb-4">
                  <span className="text-[#FFBE2E] font-medium">
                    {step.step}
                  </span>{" "}
                  / <span className="text-[#93680A]">{step.total}</span>
                </div>

                <div className="flex items-center gap-4 stack-card">
                  <h2 className="text-xl lg:text-3xl text-gray-900">
                    {step.title}
                  </h2>
                  <div className="hidden lg:block flex-1 h-0.5 bg-[#FFBE2E] relative dot-line" />
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 lg:px-8">
                {step.features.map((feature) => (
                  <div
                    key={feature.id}
                    className="bg-white rounded-4xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 group border border-[#FFBE2E]"
                  >
                    {/* Image */}
                    <div className="relative w-full h-48 mb-6 overflow-hidden">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {feature.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
