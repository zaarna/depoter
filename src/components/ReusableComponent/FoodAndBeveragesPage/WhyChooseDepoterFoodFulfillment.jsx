import { titleContentConfig } from "@/config/titleContentConfig";
import React from "react";
import TitleContent from "../All_Title/TitleContent";

const WhyChooseDepoterFoodFulfillment = ({ sectionKey = [] }) => {
    const benefits = [
        {
            image: "/benefits-custom-clearance-1.svg",
            title: "Strong focus on food safety and product handling",
            gradient: "bg-[#FFEECA]",
        },
        {
            image: "/benefits-custom-clearance-2.svg",
            title: "Reliable cold chain logistics for sensitive goods",
            gradient: "bg-[#FFE3A5]",
        },
        {
            image: "/benefits-custom-clearance-3.svg",
            title: "Scalable infrastructure for growing businesses",
            gradient: "bg-[#FFD67A]",
        },
        {
            image: "/benefits-custom-clearance-4.svg",
            title: "Real-time tracking and visibility",
            gradient: "bg-[#FFCB56]",
        },
        {
            image: "/benefits-custom-clearance-5.svg",
            title: "Efficient delivery network across UAE and global markets",
            gradient: "bg-[#FFBE2E]",
        },
    ];

    const tc =
        titleContentConfig[sectionKey] ||
        titleContentConfig["whychoosedepoterfoodfulfillment"];

    return (
        <section className=" container w-full bg-[#ffffff] py-12 px-6 lg:px-12 relative overflow-hidden">
            <div className="mx-auto grid lg:grid-cols-2 md:gap-10 items-center">
                {/* Left Content */}
                <div className="flex justify-center mb-12">
                    <div className="text-center">
                        <TitleContent {...tc} />
                    </div>
                </div>

                {/* Right Cards */}
                <div className="space-y-5">
                    {benefits.map((item, index) => (
                        <div
                            key={index}
                            className="relative rounded-bl-2xl rounded-tl-2xl rounded-tr-[45px] rounded-br-[45px] p-[3px] bg-gradient-to-r from-[#F8AF0C] to-[#BA8101]"
                        >
                            <div
                                className={`relative flex items-center pl-16 pr-6 h-[75px] rounded-bl-xl rounded-tl-xl rounded-tr-[45px] rounded-br-[45px] bg-gradient-to-r ${item.gradient}`}
                            >
                                {/* Number Circle */}
                                <div className="absolute -left-5 w-16 h-16 rounded-full bg-[#E3E3E3] border-[3px] border-[#ffffff] shadow-md flex items-center justify-center">
                                    <div className={`w-14 h-14 rounded-full border-2 border-[#F2B233] ${item.gradient} flex items-center justify-center`}>
                                        <span className="text-[18px] font-bold text-[#1F2937]">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                    </div>
                                </div>

                                <p className="text-clip md:text-[20px] text-[#1F2937]">
                                    {item.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseDepoterFoodFulfillment;