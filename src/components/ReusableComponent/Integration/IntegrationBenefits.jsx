import React from "react";
import Image from "next/image";

const benefits = [
  {
    title: "Reduce manual work",
    image: "/manualwork.svg",
    dark: true,
  },
  {
    title: "Improve accuracy",
    image: "/Improveaccuracy.svg",
    dark: false,
  },
  {
    title: "Speed up order fulfillment",
    image: "/orderfulfillment.svg",
    dark: false,
  },
  {
    title: "Maintain better control over operations",
    image: "/Maintainbetter.svg",
    dark: true,
  },
];

const IntegrationBenefits = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F8F8F8]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-[clamp(1.4rem,1.2rem+1vw,2.7rem)] text-[#212121]">
              Stop Managing
              <br />
              Multiple Systems —
              <br />
              <span className="text-[#F5B42B]">
                Connect
                <br />
                Everything in One
                <br />
                Place
              </span>
            </h2>

            <div className="mt-8 md:mt-10 space-y-6 max-w-[560px]">
              <p className="text-[1.3rem] text-[#212121]">
                Running an ecommerce or logistics business in the UAE often
                means managing multiple platforms — orders, inventory, shipping,
                and tracking across different systems.
              </p>

              <p className="text-lg md:text-xl leading-[1.8] text-[#212121]">
                Our platform is built to solve this problem by enabling
                multi-platform integration with real-time coordination between
                your systems. From order processing to delivery, everything
                stays connected through secure API connectivity.
              </p>
            </div>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((item, index) => (
              <div
                key={index}
                className={`rounded-[24px] p-6 md:p-8 min-h-[250px] flex flex-col justify-between transition-all duration-300 ${item.dark
                  ? "bg-[#A99158]"
                  : "bg-white border border-[#F5B42B]"
                  }`}
              >
                <div className="flex justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={140}
                    height={140}
                    className="object-contain"
                  />
                </div>

                <h3
                  className={`text-center text-lg md:text-xl font-medium leading-snug ${item.dark ? "text-white" : "text-[#212121]"
                    }`}
                >
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationBenefits;
