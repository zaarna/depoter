"use client";

const cards = [
    {
        icon: "/Food-Categories-1.svg",
        title: "Ensure your product meets UAE standards",
        description: "Fruits, vegetables, dairy, and fresh proteins.",
    },
    {
        icon: "/Food-Categories-2.svg",
        title: "Avoid customs delays or shipment holds",
        description: "Quick and reliable delivery services across the UAE with real-time tracking.",
    },
    {
        icon: "/Food-Categories-3.svg",
        title: "Prevent penalties or rejection",
        description: "Quick and reliable delivery services across the UAE with real-time tracking.",
    },
    {
        icon: "/Food-Categories-4.svg",
        title: "Allow legal sale in retail and online markets",
        description: "Quick and reliable delivery services across the UAE with real-time tracking.",
    },
];

const HowItWorksSection = () => {
    return (
        <section className="py-20 bg-[#FFF7E4]">
            <div className="container">
                {/* Heading */}
                <div className="max-w-[900px] mx-auto text-center mb-14">
                    <h2 className="text-[clamp(1.5rem,1rem+2vw,3rem)] text-[#212121]">
                        <span className="text-[#F5B42B]">Food Categories </span>We Handle
                    </h2>
                </div>

                {/* Steps */}
                <div className="space-y-6">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {cards.map((item, index) => (
                            <div
                                key={index}
                                className="prh-card group relative overflow-hidden rounded-bl-[30px] rounded-br-[30px] bg-gradient-to-b from-[#f6e5bd00] to-[#EFD188] min-h-[290px] flex flex-col items-center justify-center px-5 pt-7 pb-10"
                            >
                                <img
                                    src={item.icon}
                                    alt=""
                                    className="w-[90px] h-[90px] object-contain mb-5 transition-transform duration-500 group-hover:-translate-y-5"
                                />

                                <h3 className="text-center text-[20px] font-bold leading-[1.3] transition-transform duration-500 group-hover:-translate-y-5">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p
                                    className="
            absolute
            left-5
            right-5
            bottom-6
            text-center
            text-[15px]
            leading-6
            text-[#333]
            opacity-0
            translate-y-5
            transition-all
            duration-500
            group-hover:opacity-100
            group-hover:translate-y-0
        "
                                >
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
};

export default HowItWorksSection;
