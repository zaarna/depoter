"use client";

import Image from "next/image";

export default function FeatureHighlight({ title, cards = [], description }) {
  return (
    <div className="pt-4 md:pt-8">
      <div className="container">
        <div className="rounded-[24px] md:rounded-[32px] border-2 border-[#F4A300] bg-white p-5 md:p-8 lg:p-10">
          {/* Heading */}
          <h2 className="text-center text-2xl font-bold text-[#2A2A2A] md:text-3xl lg:text-4xl">
            {title}
          </h2>

          {/* Cards */}
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card, index) => (
              <div
                key={index}
                className="rounded-bl-3xl border-2 border-t-0 border-white rounded-br-3xl bg-[linear-gradient(180deg,rgba(255,190,46,0)_30%,rgba(255,190,46,0.6)_90.3%)] p-6 text-center hover:shadow-[0_0_3px_rgba(0,0,0,0.25)] hover:border-2 hover:border-t-0 hover:border-[#F4A300]  transition-all duration-300 ease-in-out"
              >
                <div className="relative mx-auto h-20 w-20 md:h-24 md:w-24">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="mt-5 text-xl font-semibold leading-snug text-[#212121]">
                  {card.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Bottom Text */}
          <p className="mx-auto mt-8 max-w-4xl text-center text-lg leading-relaxed text-[#212121]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
