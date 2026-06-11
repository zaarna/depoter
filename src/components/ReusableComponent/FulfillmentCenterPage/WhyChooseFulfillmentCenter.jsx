"use client";

import Image from "next/image";

const benefitsData = [
  {
    title: "Reduced Operational Costs",
    description:
      "Save on overheads and scale technology by using our optimized infrastructure.",
    position: "lg:absolute lg:left-25 lg:-top-4",
    dark: false,
  },
  {
    title: "Faster Order Processing",
    description:
      "Streamlined storage and automated workflows ensure quick picking, packing, and dispatch.",
    position: "lg:absolute lg:right-15 lg:-top-4",
    dark: true,
  },
  {
    title: "Accurate Inventory Control",
    description:
      "Barcode-driven operations and quality checks minimize stock errors and losses.",
    position: "lg:absolute lg:left-20 lg:top-44",
    dark: true,
  },
  {
    title: "Better Financial Visibility",
    description:
      "Transparent pricing and real-time COD tracking help improve cash flow management.",
    position: "lg:absolute lg:right-20 lg:top-44",
    dark: false,
  },
  {
    title: "Scalable Growth",
    description:
      "Expand into new markets easily with our strategic fulfillment and warehouse network.",
    position: "lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:bottom-0",
    dark: false,
  },
];

export default function WhyChooseFulfillmentCenter() {
  return (
    <section className="bg-white ">
      <div className="container mx-auto px-4">
        <div className="p-8 lg:p-12">
          {/* Heading */}
          <div className="text-center mt-5">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              <span className="text-black">Why Businesses Choose</span>{" "}
              <span className="text-[#F5B52E]">
                Depoter <br /> Fulfillment Center
              </span>
            </h2>

            <p className="mx-auto mt-4 text-[20px] w-[70%] text-[#666666]">
              Depoter's fulfillment infrastructure is designed to improve
              efficiency, reduce costs, and give you complete operational
              control.
            </p>
          </div>

          {/* Desktop Layout */}
          <div className="relative mt-14 hidden min-h-[450px] lg:block">
            {/* Center Logo */}
            <div className="absolute left-1/2 top-2/5 -translate-x-1/2 -translate-y-1/2">
              <Image
                src="/depoter-logo-icon.svg"
                alt="Depoter Logo"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>

            {/* Benefit Cards */}
            {benefitsData.map((item, index) => (
              <BenefitCard
                key={index}
                title={item.title}
                description={item.description}
                dark={item.dark}
                className={item.position}
              />
            ))}
          </div>

          {/* Mobile Layout */}
          <div className="mt-10 flex flex-col gap-4 lg:hidden">
            <div className="mb-6 flex justify-center">
              <Image
                src="/depoter-logo-icon.svg"
                alt="Depoter Logo"
                width={140}
                height={140}
              />
            </div>

            {benefitsData.map((item, index) => (
              <BenefitCard
                key={index}
                title={item.title}
                description={item.description}
                dark={item.dark}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitCard({ title, description, dark, className = "" }) {
  return (
    <div
      className={`
        w-full lg:w-[380px]
        rounded-xl
        border-1
        px-4 py-4
        shadow-sm
        ${dark ? "bg-[#8D7650] text-white" : "bg-[#F5B52E] text-black"}
        ${className}
      `}
    >
      <h3 className="text-base font-bold">{title}</h3>

      <p
        className={`mt-2 text-sm leading-relaxed ${
          dark ? "text-white/90" : "text-black/80"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
