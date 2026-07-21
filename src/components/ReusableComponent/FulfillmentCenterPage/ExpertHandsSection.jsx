"use client";

import Image from "next/image";

const points = [
  {
    number: "01",
    title: "Marketplace Specialists:",
    description:
      "A deep understanding of marketplace-specific SOPs and SLAs ensures you never face penalties.",
  },
  {
    number: "02",
    title: "Multi-Level Quality Checks:",
    description:
      "Every inbound and outbound shipment goes through rigorous QC to ensure inventory management remains perfect.",
  },
  {
    number: "03",
    title: "Operational Excellence:",
    description:
      "Continuous training programs keep our team updated on the best handling and sorting processes.",
  },
];

export default function ExpertHandsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[clamp(1.5rem,1rem+2vw,3rem)] font-bold text-black">
            Expert Hands Behind Every
          </h2>

          <h2 className="text-[clamp(1.5rem,1rem+2vw,3rem)] font-bold text-[#F5B52E]">
            Inbound & Outbound
          </h2>

          <p className="mt-4 text-gray-600 text-[21px]">
            While our technology is advanced, our people are the real experts.
            Our workforce is highly trained to handle the complexities of
            picking and packing.
          </p>
        </div>

        {/* Content */}
        <div className="mt-14 grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <div className=" p-4 rounded-md">
            <Image
              src="/inbound-outbound-image.svg"
              alt="Expert Hands"
              width={600}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Right Points */}
          <div className="flex flex-col lg:gap-20 sm:gap-10">
            {points.map((item, index) => (
              <PointCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PointCard({ number, title, description }) {
  return (
    <div className="relative min-h-[110px] overflow-hidden rounded-xl">
      {/* Background Image */}
      <div className="absolute inset-0 point-card-bg" style={{}} />

      {/* Optional Overlay */}
      <div className="absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 expert-card-section flex items-center ms-3 md:ms-0 lg:gap-8 md:gap-7 gap-5 -mt-2 px-2">
        {/* Number */}
        <div className="flex number-section shrink-0 items-center justify-center rounded-full  font-bold text-black">
          {number}
        </div>

        {/* Text */}
        <div className="description-section">
          <p
            className="  leading-relaxed text-gray-700"
            style={{ width: "100%" }}
          >
            <span className="font-bold text-black">{title}</span>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
