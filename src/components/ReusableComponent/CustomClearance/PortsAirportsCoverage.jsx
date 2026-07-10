import { titleContentConfig } from "@/config/titleContentConfig";
import TitleContent from "../All_Title/TitleContent";

export default function PortsAirportsCoverage() {
    const tc = titleContentConfig["portsairportscoverage"];
    const coverageData = {
        seaPorts: [
            {
                title: "Jebel Ali Port - Dubai",
                description:
                    "The largest and busiest port in the UAE, ideal for high-volume trade.",
                keyServices:
                    "FCL & LCL container clearance, Machinery & Electronics specialization, and Fast-track customs coordination.",
                bestFor: "Large Shipments & Bulk Commercial Cargo.",
            },
            {
                title: "Port Rashid - Dubai",
                description:
                    "A specialized gateway for high-value and event-driven logistics.",
                keyServices:
                    "Temporary Import/Export handling, Exhibition & Trade Show cargo clearance, and dedicated inspection coordination for high-value goods.",
                bestFor: "Exhibition Cargo & Specialized High-Value Shipments.",
            },
            {
                title: "Khalifa Port - Abu Dhabi",
                description:
                    "A strategic gateway for industrial and manufacturing sectors.",
                keyServices:
                    "Raw materials handling, industrial machinery clearance, and comprehensive HS Code & Duty calculation.",
                bestFor: "Industrial Manufacturers & B2B Enterprises.",
            },
            {
                title: "Sharjah & Khorfakkan Ports",
                description:
                    "Offering flexible and cost-effective solutions for growing businesses.",
                keyServices:
                    "Consolidated cargo clearance, Free Zone transshipment documentation, and rapid processing for SMEs.",
                bestFor: "SMEs & Flexible Logistics Requirements.",
            },
            {
                title: "Fujairah Port",
                description:
                    "A vital hub for heavy industry and energy-related logistics.",
                keyServices:
                    "Bulk cargo clearance, Oil & Gas equipment handling, and specialized port coordination.",
                bestFor: "Heavy Industrial & Energy Sector Cargo.",
            },
        ],

        airports: [
            {
                title: "Dubai International Airport (DXB)",
                description:
                    "The world's leading hub for time-sensitive and premium shipments.",
                keyServices:
                    "Express Airway Bill processing, Duty & VAT handling for high-value goods, and personal effects clearance.",
                bestFor: "Urgent & High-Value Shipments.",
            },
            {
                title: "Abu Dhabi International Airport (AUH)",
                description:
                    "Focused on corporate excellence and specialized project cargo.",
                keyServices:
                    "Project shipment approvals, Express corporate clearance, and direct airline coordination.",
                bestFor: "Corporate & Specialized Project Logistics.",
            },
            {
                title: "Sharjah International Airport (SHJ)",
                description:
                    "The region's leading cost-effective hub for air freight and couriers.",
                keyServices:
                    "SME-focused courier clearance, Commercial air cargo processing, and fast-track documentation.",
                bestFor: "E-commerce, Courier, & SME Air Cargo.",
            },
        ],
    };

    return (
        <div className="bg-[#FFF7E4]">
            <section className="container mx-auto px-4 py-10 lg:py-12">
                <div className="grid text-center relative z-10">
                    <TitleContent {...tc} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10 lg:mt-12">
                    {/* Sea Ports */}
                    <div className="border-[3px] border-[#ffbe2e] rounded-3xl p-4 md:p-6">
                        <h3 className="font-bold text-center mb-6 md:mb-8 lg:mb-10 text-[22px] md:text-[24px] lg:text-[28px]">
                            Major Sea Ports{" "}
                            <span className="block md:inline text-[16px] md:text-[18px] lg:text-[22px] font-normal text-gray-500">
                                (Global Trade Hubs)
                            </span>
                        </h3>

                        <div className="space-y-4 md:space-y-5">
                            {coverageData.seaPorts.map((port) => (
                                <LocationCard key={port.title} {...port} />
                            ))}
                        </div>
                    </div>

                    {/* Airports */}
                    <div className="border-[3px] border-[#ffbe2e] rounded-3xl p-4 md:p-6">
                        <h3 className="font-bold text-center mb-6 md:mb-8 lg:mb-10 text-[22px] md:text-[24px] lg:text-[28px]">
                            International Airports{" "}
                            <span className="block md:inline text-[16px] md:text-[18px] lg:text-[22px] font-normal text-gray-500">
                                (Express & High-Value)
                            </span>
                        </h3>

                        <div className="space-y-4 md:space-y-5">
                            {coverageData.airports.map((airport) => (
                                <LocationCard key={airport.title} {...airport} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

const LocationCard = ({ title, description, keyServices, bestFor }) => (
    <div
        className="rounded-2xl p-4 md:p-5 h-auto min-h-[350px]"
        style={{
            background:
                "linear-gradient(358.44deg, #FFBE2E -111.88%, rgba(255, 190, 46, 0.799014) -43.36%, rgba(255, 190, 46, 0) 76.18%)",
        }}
    >
        <div className="bg-white border rounded-full py-2 px-3 text-center font-semibold text-[14px] md:text-[16px] lg:text-[20px] w-full max-w-[400px] mx-auto mb-4 md:mb-5">
            {title}
        </div>

        <p className="text-center  md:w-90 mx-auto text-[14px] md:text-[16px] lg:text-[18px] mb-5 md:mb-8 lg:mb-10 text-gray-700 leading-relaxed">
            {description}
        </p>

        <div className="space-y-4">
            <div className="flex gap-2 items-start">
                <span className="text-[15px] md:text-[15px] mt-1">◉</span>
                <p className="text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed">
                    <strong className="font-semibold" >Key Services:</strong> {keyServices}
                </p>
            </div>

            <div className="flex gap-2 items-start">
                <span className="text-[15px] md:text-[15px] mt-1">◉</span>
                <p className="text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed">
                    <strong className="font-semibold">Best For:</strong> <span className="font-semibold"> {bestFor}</span>
                </p>
            </div>
        </div>
    </div>
);
