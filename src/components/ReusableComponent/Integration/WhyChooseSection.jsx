"use client";
const features = [
  {
    title: "Easy setup with no technical complexity",
    icon: "/Easy-setup.svg",
  },
  {
    title: "Strong integration with leading platforms",
    icon: "/Strong-integration.svg",
  },
  {
    title: "Real-time data visibility",
    icon: "/Real-time-visibility.svg",
  },
  {
    title: "Scalable solution for growing businesses",
    icon: "/Scalable-solution.svg",
  },
  {
    title: "Reliable support and onboarding",
    icon: "/Reliable-support.svg",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-[#F8F3E7] py-16 md:py-24 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.25] bg-[linear-gradient(#d7cfbb_1px,transparent_1px),linear-gradient(90deg,#d7cfbb_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[clamp(1.5rem,1rem+2vw,3rem)] font-semibold text-[#212121]">
            Why businesses choose{" "}
            <span className="text-[#F5B42B]">depoter</span>
          </h2>

          <p className="mt-6 text-[1.3rem] text-[#212121] leading-[1.7]">
            Businesses choose Depoter because we make integrations simple, fast,
            and reliable.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
          {features.map((item, index) => (
            <div key={index} className="relative w-[260px] h-[240px]">
              {/* Outer Border Shape */}
              <div className="absolute inset-0 rounded-[32px] border rounded-tl-none border-[#3F3F3F]" />

              {/* Yellow Corner */}
              <div className="absolute -top-1 -left-1 w-[100px] h-[100px] border-t-[8px] border-l-[8px] border-[#F5B42B] " />

              <div className="absolute h-[150px] w-[150px] bottom-0 right-0 rounded-full bg-[#F5B52E] blur-[60px] z-0" />
              {/* Inner Card */}
              <div className="absolute inset-[12px] rounded-[24px] border border-[#E5D7AE]  bg-[#F8F3E7] flex flex-col items-center justify-center text-center px-6">
                {/* Icon */}
                <div className="mb-6">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-24 h-24 object-contain mx-auto"
                  />
                </div>

                {/* Title */}
                <h3 className="text-[20px] leading-[1.5] font-medium text-[#212121]">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <p className="text-center mt-20 text-[18px] md:text-[22px] leading-[1.7] text-[#212121]">
          We focus on making your operations smoother so you can focus on
          growth.
        </p>
      </div>
    </section>
  );
}
