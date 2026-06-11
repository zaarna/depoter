"use client";

import Image from "next/image";

const audienceData = [
  {
    title: "Ecommerce brands",
    icon: "/ecommerce.svg",
  },
  {
    title: "D2C businesses",
    icon: "/d2c.svg",
  },
  {
    title: "Retail companies",
    icon: "/retail.svg",
  },
  {
    title: "Marketplace sellers",
    icon: "/marketplace.svg",
  },
  {
    title: "Logistics companies",
    icon: "/logistics.svg",
  },
  {
    title: "Growing startups",
    icon: "/startup.svg",
  },
];

export default function SolutionAudienceSection() {
  return (
    <section className="relative bg-[#4D3400] py-20 overflow-visible">
      <div className="container relative mx-auto px-4">
        {/* Decorative Images */}
        <Image
          src="/solution-is-for-left-image.svg"
          alt=""
          width={100}
          height={100}
          className="absolute left-[561px] top-[222px] z-99 hidden xl:block"
        />

        <Image
          src="/solution-is-for-right-image.svg"
          alt=""
          width={100}
          height={100}
          className="absolute right-[561px] top-[222px] z-99 hidden xl:block"
        />

        {/* Heading */}
        <div className="relative z-10 text-center">
          <h2 className="text-[clamp(1.5rem,1rem+2vw,3rem)] ">
            <span className="text-white">Who This </span>
            <span className="text-[#F5B52E]">Solution</span>
            <span className="text-white"> Is For</span>
          </h2>

          <p className="mt-4 text-[1.3rem]  text-white">
            Our ecommerce integration services UAE are ideal for:
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="relative z-10 mt-16 max-w-[1100px] mx-auto hidden lg:block">
          {/* Connector Image */}

          <div className="grid grid-cols-2 gap-x-50 gap-y-19">
            {audienceData.map((item, index) => (
              <AudienceCard
                key={index}
                title={item.title}
                icon={item.icon}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="relative z-10 mt-12 space-y-5 lg:hidden">
          {audienceData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-full px-5 py-4 flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-[#4D3400] border-2 border-white flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-[#F5B52E] flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={22}
                    height={22}
                  />
                </div>
              </div>

              <span className="text-[#1F1F1F] font-medium">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AudienceCard({ title, icon, isLeft }) {
  return (
    <div
      className={`relative flex items-center h-[102px] rounded-full bg-white z-10
      ${isLeft ? "justify-end pr-24 pl-10" : "justify-start pl-24 pr-10"}`}
    >
      <h3 className="text-[18px] md:text-[20px] font-semibold text-[#2F2F2F]">
        {title}
      </h3>

      <div
        className={`absolute top-1/2 -translate-y-1/2
        ${isLeft ? "right-[-12px]" : "left-[-12px]"}`}
      >
        <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full border-[4px] border-white bg-[#4D3400]">
          <div className="flex h-[82px] w-[82px] items-center justify-center rounded-full bg-[#F5B52E]">
            <Image
              src={icon}
              alt={title}
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
