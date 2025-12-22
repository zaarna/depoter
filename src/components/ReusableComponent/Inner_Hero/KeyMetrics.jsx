import React from "react";

function KeyMetrics() {
  const stats = [
    {
      id: 3,
      value: "2M+",
      label: "Units handling",
      icon: "/Units.svg",
    },
    {
      id: 7,
      value: "1000+",
      label: "Happy Brands",
      icon: "/Brands_Hero.svg",
    },
    {
      id: 11,
      value: "99.98%",
      label: "On-time order fulfilment",
      icon: "/Order_Time.svg",
    },
    {
      id: 15,
      value: "89.77%",
      label: "Same/next day delivery",
      icon: "/Same_Day.svg",
    },
  ];
  return (
    <section className="w-full relative">
      {/* Brown background strip at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 md:h-40 bg-[#978050] border-b-14 border-[#3C2C0B]">
        {" "}
      </div>

      {/* Container with spacing from edges */}
      <div className="relative w-[90%] mx-auto md:mt-5 lg:mt-0 ">
        {/* Pyramid/Trapezoid shaped container with background image */}
        <div
          className="relative w-full md:px-4 lg:px-8 min-h-[510px] flex items-center justify-center "
          id="keyMetricsDiv"
        >
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-y-15 lg:mt-10 md:pt-10">
            <div className="w-full md:w-[30%]">
              <h3 className="font-semibold text-[40px] lg:text-[50px] text-center md:text-left leading-[1.05]">
                <span className="block">Define Every </span>
                <span className="block text-[#FFBE2E] mt-0 pt-0">
                  Experience
                </span>
              </h3>
            </div>
            <div className="flex items-center mx-auto px-4 md:px-0 justify-center gap-x-2 sm:gap-x-0 gap-y-10 lg:gap-y-15 w-fit md:w-[70%] flex-wrap">
              {stats.map((stat, index) => (
                <div
                  key={stat.id}
                  className="flex justify-start md:justify-start md:items-center lg:items-start gap-4 w-[45%] sm:w-[40%] md:w-[45%]"
                >
                  {/* Icon Circle */}
                  <div className="w-fit h-fit shrink-0">
                    <img
                      src={stat.icon}
                      className="h-10 w-10 sm:w-16 sm:h-16 lg:w-22 lg:h-22 rounded-full "
                      alt={stat.label}
                    />
                  </div>

                  {/* Stat Content */}
                  <div className="text-[#ffffff]">
                    {/* Animated value container */}
                    <div
                      className="overflow-hidden relative h-8 sm:h-10 lg:h-[60px]"
                      style={{
                        maskImage:
                          "linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)",
                        WebkitMaskImage:
                          "linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)",
                      }}
                    >
                      <div
                        className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#FFBE2E] animate-roll-up"
                        style={{
                          animationDelay: `4s`,
                        }}
                      >
                        {/* Duplicate text for rolling effect */}
                        <div className="leading-tight">{stat.value}</div>
                        <div className="leading-tight">{stat.value}</div>
                      </div>
                    </div>

                    <div className="text-[14px] sm:text-[16px]  lg:text-[20px] mt-0">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KeyMetrics;
