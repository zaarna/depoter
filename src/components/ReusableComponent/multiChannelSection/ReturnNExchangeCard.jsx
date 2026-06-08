"use client";

const steps = [
  {
    title: "Receiving and Scanning",
    desc: "All inbound returns are received, scanned, and recorded against original orders.",
    icon: "/return-exchange-1.svg",
  },
  {
    title: "Quality Inspection",
    desc: "Products are inspected and classified as sellable, damaged, refurbishable, or not sellable.",
    icon: "/return-exchange-2.svg",
  },
  {
    title: "Repacking and Relabeling",
    desc: "Eligible items are repacked and relabeled for resale as per platform guidelines.",
    icon: "/return-exchange-3.svg",
  },
  {
    title: "Restock or Disposal Workflows",
    desc: "Items are restocked, refurbished, or disposed of based on your defined return policies.",
    icon: "/return-exchange-4.svg",
  },
  {
    title: "Marketplace-Specific Handling",
    desc: "Support for Amazon Vendor Central, Seller Central, and Noon return workflows.",
    icon: "/return-exchange-5.svg",
  },
  {
    title: "Reporting and Reconciliation",
    desc: "Detailed reports with inventory adjustments, reconciliation records, and return insights.",
    icon: "/return-exchange-6.svg",
  },
];

export default function ReturnNExchangeCard() {
  return (
    <div className="max-w-[1100px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-5 lg:gap-y-16 auto-rows-fr relative">
        {steps.map((step, i) => (
          <div
            key={i}
            className="flex flex-col items-center lg:items-start gap-5 relative h-auto lg:h-[460px]"
          >
            {/* ICON CARD */}
            {/* ICON */}
            <div className="relative flex items-center justify-center w-52 h-52">
              {/* Oval background */}
              <div className="absolute w-50 h-52 mt-10  bg-[#ffffff] rounded-full rotate-x-[125deg]" />

              {/* Image */}
              <img
                src={step.icon}
                alt=""
                className="relative z-10 w-44 h-44 object-contain"
              />
            </div>

            {/* TEXT */}
            <div className="w-full lg:w-[230px] text-center lg:text-left mt-10">
              <h3 className="text-xl font-bold text-[white] mb-7">
                {step.title}
              </h3>
              <p className="text-lg text-[white] font-light leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
