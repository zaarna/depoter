"use client";

import Image from "next/image";
import AnimatedLineDown from "../Icons/AnimatedLineDown";
import AnimatedLineUp from "../Icons/AnimatedLineUp";

export default function HowITWorksDetail() {
  const steps = [
    {
      number: "01",
      title: "Connect Your Store",
      description:
        "Easily integrate your sales channels with our tech-powered platform.",
      image: "/works1.webp",
      imagePosition: "right",
    },
    {
      number: "02",
      title: "Send Us Inventory",
      description:
        "Ship your products to our strategically located dark stores and fulfillment centers for fast, region-wide distribution.",
      image: "/works2.webp",
      imagePosition: "left",
    },
    {
      number: "03",
      title: "Orders Flow In",
      description:
        "Once orders come in, we pick, pack, and deliver them with speed and accuracy using our last-mile delivery network.",
      image: "/works3.webp",
      imagePosition: "right",
    },
  ];

  return (
    <div className=" relative overflow-hidden">
      {/* Steps */}
      <div className="space-y-10 md:space-y-20">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse lg:flex-col ${
              step.imagePosition === "left"
                ? "lg:flex-row"
                : "lg:flex-row-reverse"
            } items-center gap-6 lg:gap-20 relative`}
          >
            {/* Connecting Dotted Line */}
            {/* {index < steps.length - 1 && (
                <div
                  className={`hidden lg:block absolute left-1/2 bottom-0
                    translate-y-[100%] -translate-x-[35%]
                    transition-transform duration-500
                    ${index === 1 ? "rotate-x-180" : "rotate-0"}
                    `}
                >
                  <svg
                    width="511"
                    height="240"
                    viewBox="0 0 511 240"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="animated-path"
                  >
                    <path
                      opacity="0.8"
                      d="M510 0V2.22416C510 22.1064 493.882 38.2242 474 38.2242H102.72C82.8373 38.2242 66.7195 54.3419 66.7195 74.2242V203C66.7195 222.882 50.6018 239 30.7195 239H0"
                      stroke="#978050"
                      strokeDasharray="10 10"
                    />
                  </svg>
                </div>
              )} */}
            {/* Connecting Dotted Line */}
            {index < steps.length - 1 && (
              <div
                className="hidden lg:block absolute left-1/2 bottom-0
               translate-y-[100%] "
              >
                {index === 0 && (
                  <AnimatedLineDown className="-translate-x-[35%]" />
                )}
                {index === 1 && (
                  <AnimatedLineUp className="-translate-x-[70%]" />
                )}
              </div>
            )}

            {/* Image Side */}
            <div className={`flex-1 `}>
              <div className="relative w-full  max-w-md mx-auto">
                {/* Circle Background */}
                <div className="flex items-center justify-center group border-2 rounded-full border-[#978050] w-80 h-80 mx-auto overflow-hidden shadow-lg bg-white">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={200}
                    height={200}
                    className="object-contain group-hover:scale-110 transition-transform duration-700 ease-out "
                  />
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className={`flex-1 `}>
              <div className="flex items-stretch gap-6">
                {/* Number Badge */}
                <div className="shrink-0 self-stretch">
                  <div className="w-14 h-full bg-[#FFBE2E] border-2 border-[#212121] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-3xl font-medium text-[#212121]">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-2xl lg:text-3xl font-medium text-[#212121] mb-4">
                    {step.title}
                  </h3>

                  <div className="bg-[#FFF7E4] border border-[#978050] rounded-3xl p-6 shadow-md">
                    <p className="text-base lg:text-lg text-black leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Connecting Lines between circles - Mobile */}
      {/* <div className="lg:hidden absolute left-1/2 top-[500px]">
          <svg width="3" height="500" className="text-amber-950">
            <line
              x1="2"
              y1="0"
              x2="1"
              y2="500"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="10,10"
            />
          </svg>
        </div> */}
    </div>
  );
}
