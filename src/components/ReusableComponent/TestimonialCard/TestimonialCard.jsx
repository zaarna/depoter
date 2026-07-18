"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function TestimonialCard({ testimonials = [] }) {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  const [highlightIndex, setHighlightIndex] = useState(0);

  return (
    <>
      <div className="relative h-full flex">
        <Swiper
          modules={[Navigation]}
          loop
          initialSlide={0}
          spaceBetween={20}
          slidesPerView={3}
          navigation={{ prevEl, nextEl }}
          onSwiper={(swiper) => {
            const isDesktop = window.innerWidth >= 1024;
            setHighlightIndex(
              isDesktop ? (swiper.realIndex + 1) % testimonials.length : swiper.realIndex
            );
          }}
          onSlideChange={(swiper) => {
            const isDesktop = window.innerWidth >= 1024;
            setHighlightIndex(
              isDesktop ? (swiper.realIndex + 1) % testimonials.length : swiper.realIndex
            );
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={item.id} className="h-full flex">
              <div
                className={`h-full flex flex-col rounded-2xl p-6 transition-all duration-500 border-2 bg-[#FFBE2E1A]
          ${index === highlightIndex
                    ? "border-[#FFBE2E80] opacity-100 scale-100"
                    : "border-black opacity-40 scale-95"
                  }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-semibold text-lg">
                    {item.avatar}
                  </div>

                  <div>
                    <p className="font-medium text-lg">{item.name}</p>
                    {item.role && <p className="text-base">{item.role}</p>}
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mt-auto">
                  "{item.message}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-center gap-6 mt-10 mb-6">
        <button
          ref={setPrevEl}
          type="button"
          className="w-12 h-12 rounded-full bg-[#3A2A0A] flex items-center justify-center cursor-pointer"
        >
          <img src="/right-control.svg" alt="Next" className="w-3 h-auto" />
        </button>

        <button
          ref={setNextEl}
          type="button"
          className="w-12 h-12 rounded-full bg-[#3A2A0A] flex items-center justify-center cursor-pointer"
        >
          <img src="/left-control.svg" alt="Previous" className="w-3 h-auto" />
        </button>
      </div>
    </>
  );
}