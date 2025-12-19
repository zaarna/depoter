"use client";

import { useState } from "react";
import Image from "next/image";

export default function MapSection() {
  return (
    <>
      {/* Map Container */}
      <div className="relative justify-center grid">
        {/* World Map Image */}
        <Image
          src="/worldmapwithline.webp"
          alt="World Map"
          width={1200}
          height={400}
          className="object-fill relative "
        />
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
