"use client";

import Image from "next/image";

const items = [
  {
    leftTitle: "Ecommerce brands",
    leftIcon: "/ecommerce.svg",
    rightTitle: "D2C businesses",
    rightIcon: "/d2c.svg",
  },
  {
    leftTitle: "Retail companies",
    leftIcon: "/retail.svg",
    rightTitle: "Marketplace sellers",
    rightIcon: "/marketplace.svg",
  },
  {
    leftTitle: "Logistics companies",
    leftIcon: "/logistics.svg",
    rightTitle: "Growing startups",
    rightIcon: "/startup.svg",
  },
];

export default function SolutionForSection() {
  return (
    <section className="bg-[#3F2A05] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-white text-4xl lg:text-6xl font-bold leading-tight">
            Who This <span className="text-[#F5B42B]">Solution</span> Is For
          </h2>

          <p className="text-white text-lg mt-4 font-medium">
            Our ecommerce integration services UAE are ideal for:
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-[1fr_120px_120px_1fr] items-center gap-x-6 max-w-[1400px] mx-auto">
            {/* LEFT PILLS */}
            <div className="flex flex-col justify-between h-[420px]">
              {items.map((item) => (
                <div
                  key={item.leftTitle}
                  className="relative h-[88px] rounded-full bg-[#ECECEC] flex items-center justify-center"
                >
                  <span className="text-[#1F1F1F] text-xl font-medium">
                    {item.leftTitle}
                  </span>
                </div>
              ))}
            </div>

            {/* LEFT CONNECTOR */}
            <div className="relative h-[332px] w-[120px]">
              <Image
                src="/dotted-line-left.svg"
                alt=""
                fill
                className="object-contain"
              />

              {items.map((item, index) => (
                <div
                  key={item.leftTitle}
                  className="absolute left-0 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    top: `${8 + index * 158}px`,
                  }}
                >
                  <div className="w-[82px] h-[82px] rounded-full bg-white border-[3px] border-[#6A4A0A] shadow-lg flex items-center justify-center">
                    <div className="w-[64px] h-[64px] rounded-full bg-[#F5B42B] flex items-center justify-center">
                      <Image
                        src={item.leftIcon}
                        alt={item.leftTitle}
                        width={34}
                        height={34}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT CONNECTOR */}
            <div className="relative h-[332px] w-[120px]">
              <Image
                src="/dotted-line-right.svg"
                alt=""
                fill
                className="object-contain"
              />

              {items.map((item, index) => (
                <div
                  key={item.rightTitle}
                  className="absolute right-0 translate-x-1/2 -translate-y-1/2"
                  style={{
                    top: `${8 + index * 158}px`,
                  }}
                >
                  <div className="w-[82px] h-[82px] rounded-full bg-white border-[3px] border-[#6A4A0A] shadow-lg flex items-center justify-center">
                    <div className="w-[64px] h-[64px] rounded-full bg-[#F5B42B] flex items-center justify-center">
                      <Image
                        src={item.rightIcon}
                        alt={item.rightTitle}
                        width={34}
                        height={34}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT PILLS */}
            <div className="flex flex-col justify-between h-[420px]">
              {items.map((item) => (
                <div
                  key={item.rightTitle}
                  className="relative h-[88px] rounded-full bg-[#ECECEC] flex items-center justify-center"
                >
                  <span className="text-[#1F1F1F] text-xl font-medium">
                    {item.rightTitle}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden mt-12 space-y-5">
          {items
            .flatMap((item) => [
              {
                title: item.leftTitle,
                icon: item.leftIcon,
              },
              {
                title: item.rightTitle,
                icon: item.rightIcon,
              },
            ])
            .map((item) => (
              <div
                key={item.title}
                className="bg-[#ECECEC] rounded-full px-5 py-4 flex items-center gap-4"
              >
                <div className="w-14 h-14 rounded-full bg-white border-2 border-[#6A4A0A] flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#F5B42B] flex items-center justify-center">
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
