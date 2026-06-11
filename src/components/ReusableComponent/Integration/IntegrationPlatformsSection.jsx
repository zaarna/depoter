"use client";

const platformCards = [
  {
    title: "Ecommerce Platforms",
    items: [
      "/Shopify_new.svg",
      "/Woo.svg",
      "/magentonew.svg",
      "/Sallanew.svg",
      "/opencartnew.svg",
      "/j.svg",
      "/wixnew.svg",
      "/custom.png",
    ],
  },
  {
    title: "Marketplaces",
    items: ["/amazon.svg", "/Noon.svg"],
  },
  {
    title: "Shipping Platforms",
    items: ["/dhl.png", "/fedx.svg", "/aramex.svg", "/ups.svg"],
  },
];

export default function IntegrationPlatformsSection() {
  return (
    <section className="bg-[#AA9970] py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-[clamp(1.5rem,1rem+2vw,3rem)] text-white">
            We Integrate with Leading
            <br />
            <span className="text-[#F5B42B]">Platforms & Partners</span>
          </h2>

          <p className="mt-6 text-[18px] md:text-[22px]  text-white/90 max-w-4xl mx-auto">
            We connect your business with all major platforms used by ecommerce
            and logistics businesses in the UAE, so your operations run smoothly
            without switching between multiple systems.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {platformCards.map((card, index) => (
            <div
              key={index}
              className="bg-[#F7F1E3] rounded-[28px] p-8 min-h-[430px]"
            >
              <h3 className="text-[28px] font-semibold text-[#212121]">
                {card.title}
              </h3>

              <div className="w-full h-[1px] bg-[#B8B0A0] mt-4 mb-8"></div>

              <div className="grid grid-cols-2 gap-6">
                {card.items.map((logo, i) => (
                  <div
                    key={i}
                    className="border-b border-[#D8D0C0] pb-5 flex items-center justify-center min-h-[70px]"
                  >
                    <img
                      src={logo}
                      alt="platform logo"
                      className="max-w-[120px] h-auto object-contain"
                    />
                  </div>
                ))}
              </div>

              {index === 2 && (
                <p className="mt-6 text-[16px] leading-[1.7] text-[#212121]">
                  Other global and regional carriers
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Shipping Text */}
        <p className="text-center text-white text-[20px] leading-[1.7] mt-12 max-w-4xl mx-auto">
          These shipping integrations ensure smooth order dispatch and delivery
          across UAE and international markets.
        </p>

        {/* ERP Box */}
        <div className="bg-[#F7F1E3] rounded-[28px] p-8 md:p-8 mt-14 text-center md:w-[80%] mx-auto">
          <h3 className="text-[32px] font-semibold text-[#212121]">
            ERP Systems
          </h3>

          <div className="w-[300px] h-[1px] bg-[#B8B0A0] mx-auto mt-4"></div>

          <p className="mt-8 text-[20px] leading-[1.8] text-[#212121] max-w-5xl mx-auto">
            We integrate with leading ERP systems to ensure smooth data flow
            between finance, inventory, and operations.
          </p>

          {/* Highlight Badge */}
          <div className="mt-10 inline-flex items-center gap-3 bg-[#F5B42B] px-8 py-4 rounded-2xl">
            <span className="text-black text-xl">➤</span>

            <p className="text-[18px] md:text-[22px] font-medium text-[#212121]">
              All integrations are secure, scalable, and built using reliable
              API systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
