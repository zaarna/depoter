"use client";
import React from "react";
import TitleContent from "../All_Title/TitleContent";
import { titleContentConfig } from "@/config/titleContentConfig";
import { SwiperSlide, Swiper } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

function StrategicallyLocatedWarehouses({ sectionKey }) {
  const tc =
    titleContentConfig[sectionKey] ||
    titleContentConfig["strategicallylocated"];

  // data/b2bSliderData.js
  const b2bSliderData = [
    {
      id: 1,
      title: "Proximity to City Hubs",
      desc: "Our facilities are located close to major UAE city hubs to enable quick commerce and ultra-fast deliveries.",
      image: "/faster-deliveries-icon-1.svg",
    },
    {
      id: 2,
      title: "Seamless Connectivity",
      desc: "We offer direct access to major highways and key transport routes, ensuring the efficient movement of goods with minimal delays.",
      image: "/faster-deliveries-icon-2.svg",
    },
    {
      id: 3,
      title: "Traffic-Free Operations",
      desc: "Our locations are chosen for easy warehouse access, helping you avoid traffic congestion and operational bottlenecks.",
      image: "/faster-deliveries-icon-3.svg",
    },
    {
      id: 4,
      title: "Freezone Facilities",
      desc: "Compliance-driven logistics for temperature-sensitive and regulated pharmaceutical distribution.",
      image: "/faster-deliveries-icon-4.svg",
    },
    {
      id: 5,
      title: "Electronics & Appliances",
      desc: " Take advantage of duty-free operations and cost-efficient international shipping with our available Freezone storage options.",
      image: "/faster-deliveries-icon-5.svg",
    },
  ];

  return (
    <section className=" py-10 lg:py-25 px-6 lg:pl-14 lg:pr-0 overflow-hidden">
      {/* TITLE */}
      <div className="grid text-start relative z-10">
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
              Location is the foundation of any successful logistics operation.
              Our infrastructure is designed to bridge the gap between your
              products and your customers.
            </p>
            <div className="mt-20 flex lg:justify-start justify-center">
              <span
                className="
                block h-[1px] bg-black
                w-1/2
                md:w-[260px]
                lg:w-[180px]
              "
              />
            </div>
          </div>

          {/* DIVIDER */}

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
          <div className="hidden lg:block absolute -top-28 left-80 w-[calc(100%-2rem)] h-[calc(100%+5rem)] border-2 border-[#C4A574] rounded-[2rem] z-0" />

          <Swiper
            className="overflow-visible"
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
    <div className="h-full bg-[#FFF7E4] rounded-[28px] border border-[#C9A86A] p-8 flex flex-col">
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

export default StrategicallyLocatedWarehouses;
