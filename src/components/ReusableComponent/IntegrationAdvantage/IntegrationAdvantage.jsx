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
        <div className="px-5">
          {/* Desktop : Original 3-column layout */}
          <div className="hidden lg:grid grid-cols-3 justify-items-center">
            {features.map((item, i) => (
              <div
                key={i}
                className="relative max-h-[320px] lg:min-h-[460px] md:max-w-max max-w-[320px] lg:max-w-[460px] flex items-center justify-center p-8"
              >
                {/* DOTTED CIRCLE */}
                <div className="absolute flex items-center justify-center">
                  <div className="min-w-[320px] min-h-[320px] md:min-w-[460px] md:min-h-[460px] rounded-full dotted-circle animate-spin-slow" />
                </div>

                {/* CONTENT */}
                <div className="flex items-center justify-center">
                  <div className="relative z-10 max-w-72 flex flex-col items-center text-center gap-6">
                    {/* ICON */}
                    <div className="w-20 md:w-28 mx-auto flex items-center justify-center shadow-lg">
                      <img src={item.icon} alt="" />
                    </div>

                    <h3 className="text-white text-xl font-bold">
                      {item.title}
                    </h3>
                    <p className="text-lg text-white font-light leading-relaxe">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tablet: Triangle layout (2 top, 1 bottom centered) */}
          <div className="hidden md:flex lg:hidden flex-col items-center">
            {/* Top Row - 2 items */}
            <div className="flex justify-center -space-x-10">
              {features.slice(0, 2).map((item, i) => (
                <div
                  key={i}
                  className="relative min-h-[320px] max-w-[380px] flex items-center justify-center p-8"
                >
                  {/* DOTTED CIRCLE */}
                  <div className="absolute flex items-center justify-center">
                    <div className="min-w-[380px] min-h-[380px] rounded-full dotted-circle animate-spin-slow" />
                  </div>

                  {/* CONTENT */}
                  <div className="flex items-center justify-center">
                    <div className="relative z-10 max-w-72 flex flex-col items-center text-center gap-6">
                      {/* ICON */}
                      <div className="w-24 mx-auto flex items-center justify-center shadow-lg">
                        <img src={item.icon} alt="" />
                      </div>

                      <h3 className="text-white text-xl font-bold">
                        {item.title}
                      </h3>
                      <p className="text-lg text-white font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Row - 1 item centered, overlapping top circles */}
            <div className="flex justify-center -mt-12">
              {features.slice(2, 3).map((item, i) => (
                <div
                  key={i}
                  className="relative min-h-[380px] max-w-[380px] flex items-center justify-center p-8"
                >
                  {/* DOTTED CIRCLE */}
                  <div className="absolute flex items-center justify-center">
                    <div className="min-w-[380px] min-h-[380px] rounded-full dotted-circle animate-spin-slow" />
                  </div>

                  {/* CONTENT */}
                  <div className="flex items-center justify-center">
                    <div className="relative z-10 max-w-72 flex flex-col items-center text-center gap-6">
                      {/* ICON */}
                      <div className="w-24 mx-auto flex items-center justify-center shadow-lg">
                        <img src={item.icon} alt="" />
                      </div>

                      <h3 className="text-white text-xl font-bold">
                        {item.title}
                      </h3>
                      <p className="text-lg text-white font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: Single column */}
          <div className="md:hidden grid grid-cols-1 justify-items-center">
            {features.map((item, i) => (
              <div
                key={i}
                className="relative max-h-[320px] max-w-[320px] flex items-center justify-center p-8"
              >
                {/* DOTTED CIRCLE */}
                <div className="absolute flex items-center justify-center">
                  <div className="min-w-[320px] min-h-[320px] rounded-full dotted-circle animate-spin-slow" />
                </div>

                {/* CONTENT */}
                <div className="flex items-center justify-center">
                  <div className="relative z-10 max-w-72 flex flex-col items-center text-center gap-6">
                    {/* ICON */}
                    <div className="w-20 mx-auto flex items-center justify-center shadow-lg">
                      <img src={item.icon} alt="" />
                    </div>

                    <h3 className="text-white text-xl font-bold">
                      {item.title}
                    </h3>
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
    </div>
  );
}
