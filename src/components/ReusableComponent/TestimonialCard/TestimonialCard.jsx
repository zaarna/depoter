"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

export default function TestimonialCard({ testimonials = [] }) {
  return (
    <div className="relative h-full flex">
      <Swiper
        modules={[Navigation]}
        centeredSlides
        loop
        spaceBetween={10}
        className="items-stretch"
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id} className="h-full flex">
            {({ isActive }) => (
              <div
                className={`h-full flex flex-col rounded-2xl p-6 transition-all duration-500 border-2 bg-[#FFBE2E1A]
              ${
                isActive
                  ? "border-[#FFBE2E80] scale-100 opacity-100"
                  : "border-black opacity-40 scale-95"
              }`}
              >
                {/* Avatar */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-semibold text-lg">
                    {item.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-lg">{item.name}</p>
                    <p className="text-base">{item.role}</p>
                  </div>
                </div>

                {/* Message */}
                <p className="text-gray-700 leading-relaxed mt-auto">
                  “{item.message}”
                </p>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
