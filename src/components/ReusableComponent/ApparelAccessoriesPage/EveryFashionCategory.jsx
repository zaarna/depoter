"use client";
import React from "react";
import TitleContent from "../All_Title/TitleContent";
import { titleContentConfig } from "@/config/titleContentConfig";
import { SwiperSlide, Swiper } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

function EveryFashionCategory({ sectionKey }) {
    const tc =
        titleContentConfig[sectionKey] ||
        titleContentConfig["everyfashioncategory"];

    // data/b2bSliderData.js
    const b2bSliderData = [
        {
            id: 1,
            title: "Clothing Items",
            desc: "Structured storage for men’s, women’s, and kids' wear across all fabrics. ",
            image: "/faster-deliveries-icon-1.svg",
        },
        {
            id: 2,
            title: "Footwear & Accessories",
            desc: "Dedicated setups for shoes, handbags, belts, and jewelry.",
            image: "/faster-deliveries-icon-2.svg",
        },
        {
            id: 3,
            title: "Seasonal Collections",
            desc: (
                <>
                    Rapid scaling and storage prep for new "Drops" and seasonal inventory shifts.
                </>
            ),
            image: "/faster-deliveries-icon-3.svg",
        },
        {
            id: 4,
            title: "High-Value Products",
            desc: (
                <>
                    Secure, dust-free handling for luxury garments and designer labels.
                </>
            ),
            image: "/faster-deliveries-icon-4.svg",
        },
        {
            id: 5,
            title: "B2B & DTC Distribution",
            desc: "Seamless multi-channel routing for both retail store supply and online customers. ",
            image: "/faster-deliveries-icon-5.svg",
        },
    ];

    return (
        <section className=" py-10 lg:py-25 px-6 lg:pl-14 lg:pr-0 overflow-hidden">
            {/* TITLE */}
            <div className="grid text-center lg:text-start relative z-10">
                <TitleContent {...tc} />
            </div>

            <div className="flex flex-col lg:flex-row gap-12 mt-5">
                {/* LEFT CONTENT */}
                <div className="w-full lg:w-[28%] flex flex-col justify-between text-center lg:text-left">
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
                            We support a wide range of fashion and lifestyle products that require proper  handling and organized storage:
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

export default EveryFashionCategory;
