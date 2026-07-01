"use client";
const features = [
    {
        title: "Importers and exporters",
        icon: "/importersandexporters.svg",
        hoverIcon: "/importersandexportershover.svg",
    },
    {
        title: "E-commerce businesses",
        icon: "/e-commercebusinesses.svg",
        hoverIcon: "/e-commercebusinesseshover.svg",
    },
    {
        title: "Manufacturers and brand owners",
        icon: "/manufacturersandbrandowners.svg",
        hoverIcon: "/manufacturersandbrandownershover.svg",
    },
    {
        title: "SMEs and large enterprises",
        icon: "/smesandlargeenterprises.svg",
        hoverIcon: "/smesandlargeenterpriseshover.svg",
    },
    {
        title: "Startups entering the UAE market",
        icon: "/startupsenteringtheUAEmarket.svg",
        hoverIcon: "/startupsenteringtheUAEmarkethover.svg",
    },
];

export default function WhoWeServerProduct() {
    return (
        <section className="transparent-invoicing-bg py-16 md:py-24 relative overflow-hidden">

            <div className="container mx-auto px-4 relative z-10">
                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-[clamp(1.5rem,1rem+2vw,3rem)] text-[#ffffff]">
                        Who We {" "}
                        <span className="text-[#F5B42B]">Serve</span>
                    </h2>
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
                            <div className="absolute inset-[12px] rounded-[24px] border border-[#E5D7AE] bg-[#F8F3E7] hover:bg-[#3c2c0b] hover:border-[#3c2c0b] duration-700 flex flex-col items-center justify-center text-center px-6 group">
                                <div className="mb-6">
                                    <div className="relative w-24 h-24 mx-auto">
                                        {/* Normal Icon */}
                                        <img
                                            src={item.icon}
                                            alt={item.title}
                                            className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-0"
                                        />

                                        {/* Hover Icon */}
                                        {item.hoverIcon && (
                                            <img
                                                src={item.hoverIcon}
                                                alt={`${item.title} Hover`}
                                                className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                            />
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-[20px] leading-[1.5] transition-colors duration-700 group-hover:text-[#ffbe2e]">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
