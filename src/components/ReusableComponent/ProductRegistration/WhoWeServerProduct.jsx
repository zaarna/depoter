"use client";

import ComplianceFeatureCard from "../ComplianceFeatureCard";

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
                <div className="mt-20 flex flex-wrap justify-center gap-20 max-w-6xl mx-auto">
                    {features.map((item, index) => (
                        <ComplianceFeatureCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
