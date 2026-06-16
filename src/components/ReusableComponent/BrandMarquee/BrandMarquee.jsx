"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

function BrandMarquee({ brands = [] }) {
  return (
    <div className="w-full mt-6 md:mt-12 relative overflow-hidden z-20">
      <Marquee pauseOnHover={true} speed={45} gradient={false}>
        <div className="flex space-x-6 px-4">
          {brands.map((logo, index) => (
            <div
              key={index}
              className=" h-[80px] bg-white shadow-md rounded-xl flex items-center justify-center px-4"
            >
              <Image
                src={logo}
                width={120}
                height={60}
                alt="brand logo"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}

export default BrandMarquee;
