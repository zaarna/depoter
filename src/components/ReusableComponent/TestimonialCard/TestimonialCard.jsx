"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

export default function TestimonialCard({ testimonials = [] }) {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation]}
        centeredSlides
        loop
        slidesPerView={3}
        spaceBetween={10}
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
          <SwiperSlide key={item.id}>
            {({ isActive }) => (
              <div
                className={`rounded-2xl p-6 h-full transition-all duration-500 border-2 bg-[#FFBE2E1A]
                  ${
                    isActive
                      ? " border-[#FFBE2E80] scale-100 opacity-100"
                      : "border-[#000000] opacity-40 scale-95"
                  }`}
              >
                {/* Avatar */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-semibold text-lg">
                    {item.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-lg">{item.name}</p>
                    <p className="text-base ">{item.role}</p>
                  </div>
                </div>

                {/* Message */}
                <p className="text-gray-700 leading-relaxed">
                  “{item.message}”
                </p>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation */}
      <div className="flex justify-center gap-6 mt-5">
        <button className="prev-btn w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.92009 9.90071H20.0692"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M6.0415 4.12695L1.91671 8.25174C1.13894 9.02952 0.750047 9.41841 0.750047 9.90166C0.750047 10.3849 1.13894 10.7738 1.91671 11.5516L6.0415 15.6764"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button className="next-btn w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.899 9.90071H0.749926"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M14.7776 4.12695L18.9024 8.25174C19.6802 9.02952 20.069 9.41841 20.069 9.90166C20.069 10.3849 19.6802 10.7738 18.9024 11.5516L14.7776 15.6764"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
