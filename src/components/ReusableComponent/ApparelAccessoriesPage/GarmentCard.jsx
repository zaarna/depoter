"use client";

import Image from "next/image";

export default function GarmentCard({
  numberImage,
  title,
  description,
  icon,
  bgColor,
}) {
  return (
    <div
      className="
      rounded-[28px]
      p-8
      border
      border-[#212121]
      relative
      overflow-hidden
      origin-top
      
      "
      style={{
        background: bgColor,
      }}
    >
      <div className="absolute right-6 top-0">
        <Image
          src={numberImage}
          alt="Card Number"
          width={120}
          height={120}
          className="object-contain"
        />
      </div>

      <div className="relative z-10">
        <div className="w-20 h-20 rounded-xl bg-white flex items-center justify-center border mb-4">
          <Image src={icon} alt="" width={45} height={45} />
        </div>

        <h3 className="text-3xl font-semibold">{title}</h3>

        <p className="mt-4 text-lg leading-8 max-w-md">{description}</p>
      </div>
    </div>
  );
}
