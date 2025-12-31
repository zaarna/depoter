"use client";

const steps = [
  {
    title: "Connect Your Store in Minutes",
    desc: "Easily link your store or marketplace to our fulfillment network through a fast, secure, and code-free setup that gets you started in minutes.",
    image: "/Connect1.svg",
    dotClass: "left-[24.5%]",
  },
  {
    title: "Instant Product Sync",
    desc: "Our smart integration automatically imports your product catalog, ensuring accurate details and real-time updates at every stage.",
    image: "/Connect2.svg",
    dotClass: "left-[59.5%]",
  },
  {
    title: "Live Order and Inventory Tracking",
    desc: "Manage operations effortlessly with live order syncing and inventory updates across all channels for smooth, reliable fulfillment.",
    image: "/Connect3.svg",
  },
];

export default function HowToConnect() {
  return (
    <div className="">
      {/* HEADER */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-[#212121]">
          How to <span className="text-[#FFBE2E]">Connect</span>
        </h2>
        <div className="mt-3 w-16 h-[2px] bg-[#212121]" />
      </div>

      {/* STEPS */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-14">
        {/* DOTTED CONNECTOR LINE */}
        <div className="hidden md:block absolute w-[70%] top-[30%] bottom-0 left-0 mx-auto right-0 h-0.5">
          <div
            className="w-full h-full line-animate"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, #C4A45D 0 8px, transparent 8px 16px)",
            }}
          />
        </div>

        {steps.map((step, i) => (
          <div key={i} className=" ">
            {/* CARD */}
            <div className="md:bg-transparent bg-white flex flex-col items-center rounded-2xl md:rounded-none p-8 md:p-0 md:items-start gap-3 relative h-full md:text-left text-center">
              {/* IMAGE */}

              <div className="w-52 h-52 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                <img src={step.image} alt="" className="w-44 h-44" />
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-bold text-[#212121]">{step.title}</h3>

              {/* DESCRIPTION */}
              <p className="text-lg text-[#212121] font-light leading-relaxe">
                {step.desc}
              </p>
            </div>

            {/* CONNECTOR DOT */}
            {i < steps.length - 1 && (
              <span
                className={`hidden md:flex absolute top-[26.5%] ${step.dotClass} items-center justify-center`}
              >
                {/* ANIMATED YELLOW HALO */}
                <span className="absolute w-14 h-14 rounded-full bg-[#DAA946] animate-pulse-zoom" />

                {/* SVG DOT */}
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 140 140"
                  className="relative z-10"
                >
                  <circle
                    cx="70"
                    cy="70"
                    r="60"
                    fill="white"
                    stroke="black"
                    strokeWidth="4"
                  />
                  <circle cx="70" cy="70" r="30" fill="#FFBE2E" />
                </svg>
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
