"use client";

import Image from "next/image";

export default function FreightProcessCard({
  number,
  title,
  description,
  processImage,
  isEven = false,
}) {
  return (
    <div
      className={`w-full flex flex-col lg:flex-row items-center ${
        isEven ? "lg:justify-end" : "lg:justify-start"
      }`}
    >
      {/* Mobile Image */}
      {processImage && (
        <div className="flex lg:hidden w-full justify-center mb-4">
          <Image
            src={processImage}
            alt={title}
            width={220}
            height={220}
            className="object-contain w-[180px] sm:w-[220px] h-auto"
          />
        </div>
      )}

      {/* Left Image for Even Cards - Desktop */}
      {isEven && processImage && (
        <div className="hidden lg:flex w-[100%] items-center justify-center self-center">
          <Image
            src={processImage}
            alt={title}
            width={260}
            height={260}
            className="object-contain"
          />
        </div>
      )}

      {/* Card Section */}
      <div className={`w-full max-w-[520px] ${isEven ? "lg:me-7" : "lg:ms-8"}`}>
        {/* Header */}
        <div className="relative">
          <div
            className="h-[50px] sm:h-[58px] flex items-center pl-[55px] sm:pl-[65px] pr-4 sm:pr-6"
            style={{
              backgroundImage: "url('/freight-process-icon-1.svg')",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <h3 className="text-[13px] sm:text-[15px] md:text-[20px] font-bold text-[#2D2D2D] leading-tight">
              {title}
            </h3>
          </div>

          {/* Number Badge */}
          <div className="absolute left-[4px] top-1/2 z-20 flex h-7 w-7 sm:h-8 sm:w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#3C2C0B] text-sm sm:text-base font-bold text-white">
            {String(number).padStart(2, "0")}
          </div>
        </div>

        {/* Description Box */}
        <div className="mt-3 ml-0 lg:ml-14 rounded-[16px] lg:rounded-[20px] border border-[#D39A00] bg-[#FFC62A] px-4 sm:px-6 py-4 sm:py-5 shadow-sm">
          <p className="text-[14px] sm:text-[15px] leading-relaxed text-[#2D2D2D]">
            {description}
          </p>
        </div>
      </div>

      {/* Right Image for Odd Cards - Desktop */}
      {!isEven && processImage && (
        <div className="hidden lg:flex w-[100%] items-center justify-center self-center">
          <Image
            src={processImage}
            alt={title}
            width={260}
            height={260}
            className="object-contain"
          />
        </div>
      )}
    </div>
  );
}
