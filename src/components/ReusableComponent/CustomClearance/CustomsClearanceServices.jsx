import React from "react";
import TitleContent from "../All_Title/TitleContent";
import { titleContentConfig } from "@/config/titleContentConfig";
import CustomsClearanceServicesSection from "./CustomsClearanceServicesSection";
import Button from "../Button/Button";

function CustomsClearanceServices({ sectionKey }) {
    const tc =
        titleContentConfig[sectionKey] || titleContentConfig["customsclearance"];
    return (
        <section className="py-8 md:py-16 bg-[#ffffff] relative overflow-hidden">
            <div className="container">
                <div className="grid text-center relative z-10">
                    <TitleContent {...tc} />
                </div>
                <CustomsClearanceServicesSection />
                <div className="text-center">
                    <Button href="" className="px-5 py-3" variant="black">
                        Talk to a Customs Expert
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default CustomsClearanceServices;
