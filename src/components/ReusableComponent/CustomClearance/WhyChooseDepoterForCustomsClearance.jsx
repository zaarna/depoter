import { titleContentConfig } from "@/config/titleContentConfig";
import TitleContent from "../All_Title/TitleContent";
import Button from "../Button/Button";
import FeatureList from "../FeatureList";

const features = [
    "Experienced customs team",
    "UAE-wide port & airport coverage",
    "Fast clearance process",
    "Real-time tracking updates",
    "Complete documentation support",
    "End-to-end logistics integration",
];

export default function WhyChooseDepoterForCustomsClearance() {
    const tc = titleContentConfig["whychoosedepotercustomclearance"];
    return (
        <section className="py-20 brand-bg">
            <div className="container relative z-10">
                <div className="grid text-center relative z-10">
                    <TitleContent {...tc} />
                </div>

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-[auto_auto] gap-12 items-stretch justify-center">
                    <div className="flex items-center justify-center">
                        <img
                            src="/customs-clearance.svg"
                            alt="Why Choose Depoter Delivery Services"
                            className="object-contain w-full max-w-[3960px]"
                        />
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <FeatureList
                            features={features}
                            textClassName="text-white"
                        />
                    </div>
                </div>
                <div className="mt-15 justify-center text-[22px] items-center flex border-2 border-[#FFBE2E] mx-auto rounded-2xl p-2 w-full md:w-2/4 text-center">
                    <p className="text-[#FFFFFF]">
                        We don’t just clear shipments — we make the process easy.
                    </p>
                </div>
                <div className="pt-8 mt-5 flex justify-center">
                    <Button
                        children="Request a Free Consultation"
                        className="px-5 py-2"
                        href={"/company/contact-us"}
                        variant="yellow"
                    />
                </div>
            </div>
        </section>
    );
}
