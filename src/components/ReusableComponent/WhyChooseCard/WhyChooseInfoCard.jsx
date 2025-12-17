import Image from "next/image";
import React from "react";

export default function WhyChooseInfoCard({ cards = [] }) {
  return (
    <div
      className="
        grid 
        grid-cols-2 
        lg:grid-cols-3 
        gap-4 md:gap-8 
      "
    >
      {cards.map((card, index) => (
        <div
          key={index}
          className="
          bg-white
            border-2 border-[#FFBE2E] 
            rounded-[28px]
            p-5 
            text-center 
            max-w-sm 
            mx-auto 
          "
        >
          {/* Image */}
          <div className="w-full flex justify-center mb-6">
            <Image
              src={card.image}
              alt={card.title}
              width={200}
              height={200}
              className="object-contain"
            />
          </div>

          {/* Title */}
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
            {card.title}
          </h3>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
}
