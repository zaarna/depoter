"use client";

const cards = [
  {
    icon: "/product-registration-icon-1.svg",
    title: "Ensure your product meets UAE standards",
  },
  {
    icon: "/product-registration-icon-2.svg",
    title: "Avoid customs delays or shipment holds",
  },
  {
    icon: "/product-registration-icon-3.svg",
    title: "Prevent penalties or rejection",
  },
  {
    icon: "/product-registration-icon-4.svg",
    title: "Allow legal sale in retail and online markets",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-[#FFF7E4]">
      <div className="container">
        {/* Heading */}
        <div className="max-w-[900px] mx-auto text-center mb-14">
          <h2 className="text-[clamp(1.5rem,1rem+2vw,3rem)] text-[#212121]">
            Why <span className="text-[#F5B42B]">Product Registration</span> is <br /> Important in UAE
          </h2>

          <p className="mt-4 text-lg md:text-[1.4rem] text-[#212121]">
            The UAE has strict regulations to ensure product safety, quality, and consumer protection.
            Before any product is imported, sold, or distributed, it must be approved by the relevant
            authority.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          <div className="border-[3px] border-[#F2B233] rounded-[40px] p-4">
            <h4 className="text-center text-[28px] font-semibold mb-10">
              Product registration helps:
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {cards.map((item, index) => (
                <div
                  key={index}
                  className="prh-card relative overflow-hidden rounded-tl-0 rounded-tr-0 rounded-br-[30px] rounded-bl-[30px] bg-gradient-to-b from-[#f6e5bd00] to-[#EFD188] min-h-[220px] flex flex-col items-center justify-center px-5 py-7"
                >
                  <img
                    src={item.icon}
                    alt=""
                    className="w-[90px] h-[90px] object-cover mb-5"
                  />

                  <h3 className="text-center text-[20px] font-bold leading-[1.3]">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default HowItWorksSection;
