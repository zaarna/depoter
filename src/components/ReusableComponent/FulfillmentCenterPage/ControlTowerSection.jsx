"use client";

import Image from "next/image";

const supportData = [
  {
    title: "Dedicated Support",
    description:
      "A single point of contact for all your queries and issue resolution.",
  },
  {
    title: "Proactive Communication",
    description:
      "Real-time coordination via channels like WhatsApp and live communication tools.",
  },
  {
    title: "Seamless Onboarding",
    description:
      "Expert support to ensure your setup is quick, easy, and error-free.",
  },
];

export default function ControlTowerSection() {
  return (
    <section className=" bg-[#F8F1E1] ">
      <div className="container mx-auto px-4">
        <div className=" p-6 md:p-12">
          {/* Heading */}
          <div className="text-center mb-30">
            <h2 className="text-[clamp(1.7rem,1.2rem+1vw,2.7rem)] font-bold leading-tight">
              <span className="text-black">Control Tower for </span>
              <span className="text-[#F5B52E]">End-to-End Support</span>
            </h2>

            <p className="mt-5 text-[#333333] text-[1.3rem]">
              At Depoter, you are never alone. Our Control Tower team provides
              complete operational visibility
            </p>
          </div>

          {/* Content */}
          <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <div className="flex flex-col gap-10">
              {supportData.map((item, index) => (
                <SupportCard
                  key={index}
                  number={index + 1}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
            <div className="absolute image-container hidden lg:block">
              <Image
                src="/controltower-arrow-1.svg"
                className="relative w-full max-w-[300px] -top-5 -right-130"
                width={250}
                height={250}
              />
              <Image
                src="/controltower-arrow-2.svg"
                className="relative w-full max-w-[150px] top-22 -right-160"
                width={100}
                height={100}
              />
              <Image
                src="/controltower-arrow-3.svg"
                className="relative w-full max-w-[270px] top-40 -right-130"
                width={250}
                height={250}
              />
            </div>
            {/* Right Side Image */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/control-tower.svg"
                alt="Control Tower"
                width={500}
                height={500}
                className="w-full max-w-[420px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SupportCard({ title, description, number }) {
  return (
    <div
      className={`max-w-[460px] ${number % 2 === 0 ? "md:ms-20 lg:ms-30" : ""}`}
    >
      {/* Top Title Box */}
      <div className="rounded-full border border-[#B8B8B8] bg-[#F7F7F7] px-5 py-2 shadow-sm">
        <h3
          className="text-[28px] leading-none text-[#333333]"
          style={{ fontWeight: "500" }}
        >
          {title}
        </h3>
      </div>

      {/* Description Box */}
      <div className="mt-2 rounded-2xl border border-[#D39A00] bg-[#F5B52E] px-5 py-4 shadow-sm">
        <p className="text-[20px] leading-relaxed text-[#333333]">
          {description}
        </p>
      </div>
    </div>
  );
}
