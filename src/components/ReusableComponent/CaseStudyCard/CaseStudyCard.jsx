import Image from "next/image";
import Link from "next/link";

export default function CardsSection() {
  const statsData = [
    {
      id: 1,
      icon: "/delivery-depoter-icon-1.svg",
      value: "1M+",
      label: "Orders Delivered Successfully",
    },
    {
      id: 2,
      icon: "/delivery-depoter-icon-2.svg",
      value: "99.5%",
      label: "Order Accuracy",
    },
    {
      id: 3,
      icon: "/delivery-depoter-icon-3.svg",
      value: "100%",
      label: "Pick & Pack Accuracy",
    },
  ];
  return (
    <section className="container mx-auto px-4 py-10">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 mb-6">
        {/* First Card - 60% */}
        <div className="group relative lg:col-span-6 h-[550px] rounded-3xl overflow-hidden">
          <Image
            src="/magnific__enhance__89677.png"
            alt="Featured Card"
            fill
            className="overflow-hidden"
          />

          {/* Overlay - Top to Bottom */}
          <div
            className="
              absolute inset-0
              bg-black/60
              transition-transform duration-500 ease-in-out
              z-10
              -translate-y-full
              group-hover:translate-y-0
            "
          />

          {/* Hover Content */}
          <div
            className="
              absolute inset-0
              flex items-center justify-center
              opacity-0
              group-hover:opacity-100
              transition-opacity duration-500
              z-20
            "
          >
            <Link
              href="/case-study"
              className="
                text-[#FFB703]
                text-2xl font-semibold
                flex items-center gap-2
                hover:gap-3 transition-all
                underline
              "
            >
              View Case Study
              <span>
                <svg
                  width="23"
                  height="18"
                  viewBox="0 0 23 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 8.89387C0 9.50287 0.422 9.93687 1.0315 9.93687H16.465L18.973 9.84287L15.1175 13.3584L12.4925 16.0184C12.305 16.2064 12.211 16.4874 12.211 16.7684C12.211 17.3434 12.656 17.7764 13.231 17.7764C13.512 17.7764 13.758 17.6714 13.9925 17.4484L21.7855 9.66787C22.0195 9.44487 22.137 9.17537 22.137 8.89437C22.137 8.60137 22.0195 8.33187 21.7855 8.10937L13.9925 0.327867C13.7575 0.105367 13.512 -0.000133939 13.2305 -0.000133939C12.6565 -0.000133939 12.211 0.433366 12.211 1.01937C12.211 1.28887 12.305 1.56987 12.4925 1.75737L15.1175 4.42937L18.961 7.93337L16.465 7.83937L1.0315 7.83937C0.422 7.83937 0 8.28387 0 8.89387Z"
                    fill="#FFBE2E"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>

        {/* Second Card - 40% */}
        <div className="group relative lg:col-span-4 h-[550px] rounded-[32px] border-3 border-[#e8b954] bg-white overflow-hidden">
          {/* Card Content */}
          <div className="h-full container flex flex-col">
            {/* Top Image */}
            <div className="relative flex-1 px-6 pt-6">
              <Image
                src="/delovered-by-depoter-section-two.svg"
                alt="Smart Warehouse"
                fill={false}
                width={250}
                height={250}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Bottom Content Box */}
            <div className="p-5">
              <div className="rounded-[24px] bg-[#F6F0E2] border border-[#E8A81A] p-5">
                <h3 className="text-[28px] font-semibold text-black leading-none mb-3">
                  Smart Warehouse
                </h3>

                <p className="text-[18px] text-[#333333] leading-relaxed">
                  Optimized Storage. Faster Fulfillment.
                </p>
              </div>
            </div>
          </div>

          {/* Hover Overlay */}
          <div
            className="
      absolute inset-0
      bg-black/60
      translate-y-full
      group-hover:translate-y-0
      transition-transform duration-500 ease-in-out
      flex items-center justify-center
      z-10
    "
          >
            <Link
              href="/case-study"
              className="
        text-[#FFB703]
        text-2xl font-semibold
        flex items-center gap-2
        hover:gap-3 transition-all
        underline
      "
            >
              View Case Study
            </Link>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="w-full rounded-[32px] border-2 border-[#E8B954] bg-white p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Content */}
          <div className="lg:col-span-4">
            <h3 className="text-[24px] font-semibold text-black mb-3">
              Growing E-Commerce Brand
            </h3>

            <p className="text-[18px] text-[#4A4A4A] leading-[1.4]">
              End-to-end fulfillment and warehouse management solution
            </p>
          </div>

          {/* Right Stats */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {statsData.map((item, index) => (
              <div
                key={index}
                className="rounded-[24px] bg-[#F6F0E2] border border-[#E8B954] p-5 text-center h-full"
              >
                {/* Fixed Image Height */}
                <div className="h-[50px] flex items-center justify-center mb-4">
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>

                {/* Content */}
                <h4 className="text-[24px] font-bold text-black leading-none mb-2">
                  {item.value}
                </h4>

                <p className="text-[14px] text-[#4A4A4A] leading-snug">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
