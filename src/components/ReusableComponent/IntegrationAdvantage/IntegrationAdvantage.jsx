"use client";

const features = [
  {
    title: "Real-Time Sync",
    desc: "Inventory and orders update automatically across all channels.",
    icon: "/Advantage1.svg",
  },
  {
    title: "Automated Workflows",
    desc: "Reduce manual errors and save time on order management.",
    icon: "/Advantage2.svg",
  },
  {
    title: "Scalable & Flexible",
    desc: "Add new sales channels or tools as your business grows.",
    icon: "/Advantage3.svg",
  },
];

export default function IntegrationAdvantage() {
  return (
    <div className="relative py-8 md:py-16 brand-bg">
      <div className="container relative z-10">
        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-white">
            The Integration <span className="text-[#FFBE2E]">Advantage</span>
          </h2>
          <div className="mt-3.5 w-40 h-px bg-white" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 px-5 justify-items-center">
          {features.map((item, i) => (
            <div
              key={i}
              className="relative max-h-[320px]  md:min-h-[460px] max-w-[320px] md:max-w-[460px] flex items-center justify-center p-8"
            >
              {/* DOTTED CIRCLE */}
              <div className="absolute flex items-center justify-center">
                <div className="min-w-[320px] min-h-[320px] md:min-w-[460px] md:min-h-[460px] rounded-full dotted-circle animate-spin-slow" />
              </div>

              {/* CONTENT */}
              <div className="flex items-center justify-center">
                <div className="relative z-10 max-w-72 flex flex-col items-center text-center gap-6">
                  {/* ICON */}
                  <div className="w-20 md:w-28 mx-auto  flex items-center justify-center shadow-lg">
                    <img src={item.icon} alt="" />
                  </div>

                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                  <p className="text-lg text-white font-light leading-relaxe">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
