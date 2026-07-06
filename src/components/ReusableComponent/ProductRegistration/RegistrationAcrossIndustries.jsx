"use client";
import React from "react";
import TitleContent from "../All_Title/TitleContent";
import { titleContentConfig } from "@/config/titleContentConfig";
import { SwiperSlide, Swiper } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

function RegistrationAcrossIndustries({ sectionKey }) {
    const tc =
        titleContentConfig[sectionKey] ||
        titleContentConfig["strategicallylocated"];

    // data/b2bSliderData.js
    const b2bSliderData = [
        {
            id: 1,
            title: "Health & Wellness",
            desc: "Includes supplements, wellness products, and healthcare items that require strict regulatory compliance.",
            image: "/Health-Wellness.svg",
        },
        {
            id: 2,
            title: "Beauty & Personal Care",
            desc: "Cosmetics, skincare, and personal care products must meet labeling and safety standards before entering the market.",
            image: "/BeautyPersonalCare.svg",
        },
        {
            id: 3,
            title: "Food & Beverage",
            desc: "Food products require proper ingredient disclosure, safety approvals, and registration before sale.",
            image: "/FoodBeverage.svg",
        },
        {
            id: 4,
            title: "Apparel & Accessories",
            desc: (
                <>
                    Certain materials and product types require compliance checks before distribution.
                </>
            ),
            image: "/ApparelAccessories.svg",
        },
        {
            id: 5,
            title: "Home Goods",
            desc: "Household products must meet quality and safety standards.",
            image: "/HomeGoods.svg",
        },
        {
            id: 6,
            title: "Pet Products",
            desc: "Pet food and accessories must comply with animal safety regulations.",
            image: "/PetProductsRegistration.svg",
        },
        {
            id: 7,
            title: "Sports, Toys & Games",
            desc: "These products require safety approvals, especially for children’s use, including compliance with G-Mark (Gulf Conformity Mark) for regulated items such as toys and electronics.",
            image: "/SportsToysGames.svg",
        },
    ];

    return (
        <section className=" py-10 lg:py-25 px-6 lg:pl-14 lg:pr-0 overflow-hidden">
            {/* TITLE */}
            <div className="grid text-center lg:text-start relative z-10">
                <TitleContent {...tc} />
            </div>

            <div className="flex flex-col lg:flex-row gap-1 mt-5">
                <div className="w-full relative">
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
                        slidesPerView={3.5}
                        spaceBetween={0}
                        loop={false}
                        breakpoints={{
                            0: { slidesPerView: 1.0 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 2.3 },
                            1440: { slidesPerView: 3.5 },
                        }}
                    >
                        {b2bSliderData.map((item) => (
                            <SwiperSlide key={item.id} className="!h-auto">
                                <Card {...item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* CONTROLS — DESKTOP */}
                    <div className="hidden lg:flex justify-center gap-6 mt-15">
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
        <div className="w-[300px] h-[300px] md:h-[380px] md:w-[400px] bg-[#FFF7E4] border-2 border-[#F4B223] rounded-[36px] p-6 md:p-8">

            {/* Image */}
            <div className="my-5 h-20 md:h-30">
                <img
                    src={image}
                    alt={title}
                    className="h-20 md:h-auto object-contain"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4">
                <h3 className="text-[#212121] text-[1.25rem] md:text-[1.6rem] font-bold leading-[1.15]">
                    {title}
                </h3>

                <p className="text-[#212121] text-sm md:text-[1em]">
                    {desc}
                </p>
            </div>

        </div>
    );
}

export default RegistrationAcrossIndustries;
