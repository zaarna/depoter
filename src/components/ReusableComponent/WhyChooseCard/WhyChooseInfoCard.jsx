"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseInfoCard() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;

      const OFFSET = 20; // visible stack gap like screenshot

      // Initial stacked layout
      gsap.set(cards, {
        x: (i) => i * OFFSET,
        y: (i) => i * OFFSET,
        zIndex: (i) => i + 1,
        transformOrigin: "top left",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${cards.length * 900}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;

        const nextCard = cards[i + 1];

        // Keep next card above previous ones
        tl.set(nextCard, { zIndex: cards.length + i }, i);

        // Next card comes from bottom and lands in stack position
        tl.fromTo(
          nextCard,
          {
            y: window.innerHeight + 200,
            x: (i + 1) * OFFSET,
          },
          {
            y: (i + 1) * OFFSET,
            x: (i + 1) * OFFSET,
            ease: "power2.out",
            duration: 1,
          },
          i
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative">

      {/* ================= Desktop ================= */}
      <div ref={sectionRef} className="relative hidden lg:block pt-20">
        <div className="relative h-screen">
          <div className="relative h-[650px]">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div
                  className="w-full rounded-3xl border border-yellow-200 shadow-2xl py-8"
                  style={{
                    background: step.bg,
                    maxWidth: "1400px",
                    height: "625px",
                  }}
                >

                  <div className="mb-8 px-8">
                    <div className="inline-flex rounded-full bg-[#212121] px-5 py-2 text-sm">
                      <span className="text-[#FFBE2E]">{step.step}</span>

                      <span className="mx-2 text-[#8F6C17]">/</span>

                      <span className="text-[#8F6C17]">{step.total}</span>
                    </div>

                    <div className="mt-5 flex items-center gap-4">
                      <h2 className="text-3xl font-semibold">{step.title}</h2>

                      <div className="h-[2px] flex-1 bg-[#FFBE2E]" />
                    </div>
                  </div>

                  {/* Features */}

                  <div className="grid grid-cols-1 gap-6 px-8 md:grid-cols-3">
                    {step.features.map((feature) => (
                      <div
                        key={feature.id}
                        className="rounded-3xl border border-[#FFBE2E] bg-white p-6 shadow-md"
                      >
                        <div className="relative mb-6 h-40">
                          <Image
                            src={feature.image}
                            alt={feature.title}
                            fill
                            className="object-contain"
                          />
                        </div>

                        <h3 className="mb-2 text-xl font-bold">
                          {feature.title}
                        </h3>

                        <p className="leading-relaxed text-gray-600">
                          {feature.subtitle}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= Mobile ================= */}
      <div className="block lg:hidden">
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="rounded-3xl border border-yellow-200 shadow-xl py-6"
              style={{ background: step.bg }}
            >
              {/* Badge */}
              <div className="px-5">
                <div className="inline-flex rounded-full bg-[#212121] px-4 py-2 text-sm">
                  <span className="text-[#FFBE2E]">{step.step}</span>
                  <span className="mx-2 text-[#8F6C17]">/</span>
                  <span className="text-[#8F6C17]">{step.total}</span>
                </div>

                <div className="mt-5">
                  <h2 className="text-2xl font-semibold">{step.title}</h2>
                  <div className="mt-3 h-[2px] w-full bg-[#FFBE2E]" />
                </div>
              </div>

              {/* Features */}
              <div className="mt-6 grid grid-cols-1 gap-5 px-5">
                {step.features.map((feature) => (
                  <div
                    key={feature.id}
                    className="rounded-2xl border border-[#FFBE2E] bg-white p-5 shadow-md"
                  >
                    <div className="relative mb-5 h-44">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-contain"
                      />
                    </div>

                    <h3 className="mb-3 text-xl font-bold">
                      {feature.title}
                    </h3>

                    <p className="leading-relaxed text-gray-600">
                      {feature.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
