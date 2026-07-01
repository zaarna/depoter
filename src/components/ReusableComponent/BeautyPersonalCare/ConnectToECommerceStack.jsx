"use client";

import Button from "../Button/Button";

const platformCards = [
    {
        title: "Ecommerce Platforms",
        items: [
            "/Shopify_new1.svg",
            "/Woo.svg",
            "/magentonew.svg",
            "/Sallanew.svg",
            "/opencartnew.svg",
            "/j.svg",
            "/wixnew.svg",
            "/custom.svg",
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

export default function ConnectToECommerceStack() {
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
                            className="bg-[#F7F1E3] rounded-[28px] p-8 min-h-[430px]
  transition-all duration-300 ease-out
  hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                        >
                            <h3 className="text-[28px] font-semibold text-[#212121]">
                                {card.title}
                            </h3>

                            <div className="w-full h-[1px] bg-[#B8B0A0] mt-4 mb-8"></div>

                            <div className="grid grid-cols-2 gap-6">
                                {card.items.map((logo, i) => (
                                    <div
                                        key={i}
                                        className="border-b-3 border-[#D8D0C0] pb-5 flex items-center justify-center min-h-[70px]"
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
                                <p className="mt-6 text-[20px] leading-[1.7] font-semibold text-[#212121] border-b-3 border-[#D8D0C0] pb-5 w-40">
                                    Other global and regional carriers
                                </p>
                            )}
                        </div>
                    ))}
                </div>



                <div className="text-center mt-25">
                    <Button href="" className="px-5 py-3" variant="black">
                        Connect Your Store
                    </Button>
                </div>
            </div>
        </section>
    );
}
