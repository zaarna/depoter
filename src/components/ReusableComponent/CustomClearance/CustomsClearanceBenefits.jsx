import React from "react";

const CustomsClearanceBenefits = () => {
    const benefits = [
        {
            image: "/benefits-custom-clearance-1.svg",
            title: "Faster shipment clearance",
        },
        {
            image: "/benefits-custom-clearance-2.svg",
            title: "No penalties or delays",
        },
        {
            image: "/benefits-custom-clearance-3.svg",
            title: "Accurate documentation",
        },
        {
            image: "/benefits-custom-clearance-4.svg",
            title: "Full compliance with UAE laws",
        },
        {
            image: "/benefits-custom-clearance-5.svg",
            title: "Stress-free experience",
        },
    ];

    return (
        <section className="w-full bg-[#ffffff] py-12 px-6 lg:px-12 relative overflow-hidden">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
                {/* Left Content */}
                <div>
                    <h2 className="text-[clamp(1.5rem,1rem+2vw,3rem)] text-center md:text-start font-bold leading-tight max-w-s">
                        Benefits of
                        <br />
                        Our{" "}
                        <span className="text-[#f2b233]">
                            Customs
                            <br />
                            Clearance
                            <br />
                            Services
                        </span>
                    </h2>
                </div>

                {/* Right Cards */}
                <div className="space-y-5">
                    {benefits.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center h-[100px] gap-4 border border-[#f2b233] rounded-2xl border-l-5 bg-white px-4 py-3 shadow-sm"
                        >
                            {/* Icon Circle */}
                            {/* Icon Circle */}
                            <div className="w-14 h-14 min-w-[48px] rounded-full border-2 border-[#f2b233] flex items-center justify-center">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="object-contain"
                                />
                            </div>

                            {/* Text */}
                            <p className="font-bold text-[22px] text-gray-900">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CustomsClearanceBenefits;