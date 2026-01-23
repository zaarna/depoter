"use client";
import React from "react";
import TitleContent from "../All_Title/TitleContent";
import { titleContentConfig } from "@/config/titleContentConfig";
import { SwiperSlide, Swiper } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";

function ExpandBuisnessSection({ sectionKey }) {
  const tc =
    titleContentConfig[sectionKey] || titleContentConfig["expandbuisness"];

  // data/b2bSliderData.js
  const b2bSliderData = [
    {
      id: 1,
      title: "Marketplaces & Quick Commerce",
      desc: "Seamless e-Commerce fulfillment with fully integrated platforms ensuring faster order flow, accurate processing, and reliable multi-channel delivery.",
      image: "/marketplace.webp",
    },
    {
      id: 2,
      title: "Supermarkets & Retail Chains",
      desc: "Optimized B2B fulfillment solutions that align with every retailer’s packaging, labeling, and delivery standards for smooth and timely distribution.",
      image: "/marketplace.webp",
    },
    {
      id: 3,
      title: "Distribution Partners",
      desc: "Scalable bulk logistics tailored for distributors with consistent timelines and inventory control.",
      image: "/marketplace.webp",
    },
    {
      id: 4,
      title: "Pharma & Healthcare",
      desc: "Compliance-driven logistics for temperature-sensitive and regulated pharmaceutical distribution.",
      image: "/marketplace.webp",
    },
    {
      id: 5,
      title: "Electronics & Appliances",
      desc: "Secure handling, packaging, and delivery for high-value electronics across B2B channels.",
      image: "/marketplace.webp",
    },
    {
      id: 6,
      title: "FMCG & Bulk Goods",
      desc: "High-volume, high-frequency fulfillment optimized for speed, accuracy, and cost efficiency.",
      image: "/marketplace.webp",
    },
  ];

  return (
    <section className="bg-[#FFF8E7] my-5 py-10 lg:py-25 px-6 lg:pl-14 lg:pr-0 overflow-hidden">
      {/* TITLE */}
      <div className="grid text-center relative z-10">
        <TitleContent {...tc} />
      </div>

      <div className="flex flex-col lg:flex-row gap-12 mt-5">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-[35%] flex flex-col justify-between text-center lg:text-left">
          <div>
            <p
              className="
    mb-6 text-black leading-relaxed
    text-[clamp(1.05rem,2.5vw,1.125rem)]
    line-clamp-4
    sm:line-clamp-5
    lg:line-clamp-none
  "
            >
              Depoter connects your brand with multiple B2B and retail
              ecosystems, ensuring your products reach the right destination on
              time and in perfect condition.
            </p>

            <p
              className="
    text-black leading-relaxed
    text-[clamp(1.05rem,2.5vw,1.125rem)]
    line-clamp-3
    sm:line-clamp-4
    lg:line-clamp-none
  "
            >
              Our
              <span className="font-semibold"> B2B logistics services</span> are
              designed to reduce complexity and increase control across your
              entire bulk sales network.
            </p>
          </div>

          {/* DIVIDER */}
          <div className="mt-6 lg:mt-0 flex lg:justify-start justify-center">
            <span
              className="
                block h-[1px] bg-black
                w-1/2
                md:w-[260px]
                lg:w-[180px]
              "
            />
          </div>

          {/* CONTROLS — DESKTOP */}
          <div className="hidden lg:flex justify-end gap-4 mb-3">
            <button className="prev-btn w-12 h-12 rounded-full bg-[#3A2A0A] flex items-center justify-center cursor-pointer">
              <img
                src="/right-control.svg"
                alt="Previous"
                className="w-3 h-auto"
              />
            </button>

            <button className="next-btn w-12 h-12 rounded-full bg-[#3A2A0A] flex items-center justify-center cursor-pointer">
              <img src="/left-control.svg" alt="Next" className="w-3 h-auto" />
            </button>
          </div>
        </div>

        {/* RIGHT SLIDER */}
        <div className="w-full lg:w-[65%] relative">
          <div className="hidden lg:block absolute -top-28 left-75 w-[calc(100%-2rem)] h-[calc(100%+5rem)] border-2 border-[#C4A574] rounded-[2rem] z-1" />

          <Swiper
            modules={[Navigation, FreeMode]}
            navigation={{
              prevEl: ".prev-btn",
              nextEl: ".next-btn",
            }}
            freeMode={{
              enabled: true,
              momentum: true,
              momentumRatio: 0.6,
              momentumBounce: false,
            }}
            centeredSlides={false}
            slidesPerView={2.1}
            spaceBetween={10}
            loop={false}
            breakpoints={{
              0: { slidesPerView: 1.1 },
              768: { slidesPerView: 1.6 },
              1024: { slidesPerView: 2.1 },
            }}
          >
            {b2bSliderData.map((item) => (
              <SwiperSlide key={item.id} className="!h-auto">
                <Card {...item} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* CONTROLS — MOBILE / TABLET */}
          <div className="flex lg:hidden justify-center gap-6 mt-10 mb-6">
            <button className="prev-btn w-12 h-12 rounded-full bg-[#3A2A0A] flex items-center justify-center cursor-pointer">
              <img
                src="/right-control.svg"
                alt="Previous"
                className="w-3 h-auto"
              />
            </button>

            <button className="next-btn w-12 h-12 rounded-full bg-[#3A2A0A] flex items-center justify-center cursor-pointer">
              <img src="/left-control.svg" alt="Next" className="w-3 h-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ title, desc, image }) {
  return (
    <div className="h-full bg-white rounded-[28px] border border-[#C9A86A] p-8 flex flex-col">
      <h3
        className="
    mb-4 text-black
    font-semibold
    leading-[1.25]
    text-[clamp(1.625rem,2.8vw,1.75rem)]
  "
      >
        {title}
      </h3>

      <p
        className="
    mb-8 text-[#212121]
    font-normal
    leading-[1.8]
    text-[clamp(1.05rem,2.5vw,1.125rem)]
  "
      >
        {desc}
      </p>

      <div className="mt-auto">
        <div className=" rounded-2xl ">
          <img
            src={image}
            alt={title}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default ExpandBuisnessSection;
