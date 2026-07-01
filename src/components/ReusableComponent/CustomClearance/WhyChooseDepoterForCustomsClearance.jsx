import { titleContentConfig } from "@/config/titleContentConfig";
import TitleContent from "../All_Title/TitleContent";
import Button from "../Button/Button";

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
        <section className="py-20 bg-[#3C2C0B]">
            <div className="container">
                <div className="grid text-center relative z-10">
                    <TitleContent {...tc} />
                </div>

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-[auto_auto] gap-12 items-stretch justify-center">
                    <div className="flex items-center justify-center">
                        <img
                            src="/delivery-service.svg"
                            alt="Why Choose Depoter Delivery Services"
                            className="object-contain w-full max-w-[3960px]"
                        />
                    </div>
                    <div className="flex items-stretch justify-center gap-4">
                        <img
                            src="/customs-clearance-steps.svg"
                            alt="customs clearance steps"
                            className="object-contain w-auto max-w-[130px] self-stretch"
                        />
                        <ul className="flex flex-col gap-3 lg:gap-0 justify-between py-3 text-base lg:text-xl">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center">
                                    <div className="flex flex-1 items-center">
                                        <p className="text-[#FFFFFF] leading-relaxed">{feature}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mt-15 justify-center text-[22px] items-center flex border-2 border-[#FFBE2E] mx-auto rounded-2xl p-2 w-full md:w-2/4 text-center">
                    <p className="text-[#FFFFFF]">
                        We don’t just clear shipments — we make the process easy. .
                    </p>
                </div>
                <div className="pt-8 mt-5 flex justify-center">
                    <Button
                        href=""
                        className="
    group relative overflow-hidden
    mx-auto block w-90 lg:w-[25%] 
    py-2 px-10
    rounded-full
    bg-[#FFBE2E]
    text-black
    font-semibold
    transition-all duration-500
    hover:scale-105
  "
                        variant=""
                    >
                        <span className="relative z-10"> Request a Free Consultation</span>

                        <span
                            className="
      absolute inset-0
      -translate-x-full
      skew-x-12
      bg-white/30
      transition-transform duration-700
      group-hover:translate-x-[200%]
    "
                        />
                    </Button>
                </div>
            </div>
        </section>
    );
}
