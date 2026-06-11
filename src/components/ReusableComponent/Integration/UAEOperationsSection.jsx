"use client";

const features = [
  {
    title: "Faster order processing",
    icon: "/order-fulfillment.svg",
  },
  {
    title: "Reliable shipping coordination",
    icon: "/barcode.svg",
  },
  {
    title: "Real-time tracking",
    icon: "/work-progress.svg",
  },
  {
    title: "Complete operational visibility",
    icon: "/work-progress.svg",
  },
];

export default function UAEOperationsSection() {
  return (
    <section className="bg-[#F8F3E7] py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-[clamp(1.5rem,1rem+2vw,3rem)] text-[#212121]">
            Built for{" "}
            <span className="text-[#F5B42B]">
              UAE Ecommerce &
              <br />
              Logistics Operations
            </span>
          </h2>

          <p className="mt-8 text-[1.3rem] text-[#212121] max-w-5xl mx-auto">
            Businesses in the UAE face unique challenges — multiple delivery
            partners, fast delivery expectations, and high order volumes.
          </p>
        </div>

        {/* Subheading */}
        <div className="text-center mt-20">
          <h3 className="text-[22px] md:text-[28px] font-semibold text-[#212121]">
            Our platform is designed to handle these challenges by offering:
          </h3>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((item, index) => (
            <div
              key={index}
              className="relative rounded-[24px] overflow-hidden pt-14"
            >
              {/* Top Icon Circle */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                <div className="w-[90px] h-[90px] rounded-full bg-[#3A2A08] flex items-center justify-center shadow-lg">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>

              {/* Card */}
              <div className="bg-gradient-to-b from-[#FFF5D8] to-[#F5B42B] rounded-[24px] px-6 pt-20 pb-8 text-center min-h-[180px] flex items-center justify-center">
                <h4 className="text-[20px] leading-[1.5] font-medium text-[#212121]">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
