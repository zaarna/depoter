import Image from "next/image";
import { titleContentConfig } from "@/config/titleContentConfig";
import TitleContent from "../All_Title/TitleContent";
import Button from "../Button/Button";
import StepCard from "../StepCard/StepCard";

const defaultSteps = [
  {
    number: "01",
    title: "First Mile Delivery",
    desc: "Pickup and movement of goods from manufacturers, suppliers, or sellers to the warehouse or distribution center.",
  },
  {
    number: "02",
    title: "Mid-Mile Logistics",
    desc: "Efficient movement between hubs and distribution centers.",
  },
  {
    number: "03",
    title: "Last Mile Delivery",
    desc: "The final step to the customer, optimized for speed and satisfaction.",
  },
];

const defaultCallout = (
  <>
    Whether you are handling B2C orders, B2B bulk requirements, or marketplace orders, our scalable infrastructure adapts to changing order volumes during Ramadan, Black Friday, White Friday, Diwali, Thanksgiving, Easter, and other peak shopping seasons.
  </>
);

export default function ModernCommerce({
  configKey = "moderncommercedeliveries",
  steps = defaultSteps,
  callout = defaultCallout,
  ctaText = "Get a Quote",
  ctaHref = "#",
  image = "/deliveryModernCommerce.svg",
  imageAlt = "Modern commerce delivery network",
}) {
  const tc = titleContentConfig[configKey];

  return (
    <section className="py-8 md:py-16 relative overflow-hidden">
      <div className="container">
        <div className="grid text-center relative z-10">
          <TitleContent {...tc} />
        </div>

        {/* Cards + Illustration */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {/* Numbered steps */}
            <div className="rounded-2xl bg-[#FFBE2E]/10 border-2 border-[#FFBE2E]/50 p-6 md:p-8 flex flex-col justify-between flex-1 gap-6">
              {steps.map((step) => (
                <StepCard key={step.number} {...step} />
              ))}
            </div>

            {/* Callout */}
            {callout && (
              <div className="rounded-2xl border-2 border-[#FFBE2E]/50  bg-[#FFBE2E]/10 p-6 md:p-7">
                <p className="text-[#4A4A4A] text-sm md:text-base leading-relaxed">
                  {callout}
                </p>
              </div>
            )}

            {/* CTA */}
            {ctaText && (
              <div>
                <Button
                  href={ctaHref}
                  className="px-6 sm:px-12 py-3.5"
                  variant="black"
                >
                  {ctaText}
                </Button>
              </div>
            )}
          </div>

          {/* Right column - illustration */}
          <div className="rounded-2xl bg-[#FFBE2E]/10 border-2 border-[#FFBE2E]/50 flex items-center justify-center p-6 md:p-10">
            {image && (
              <Image src={image} alt={imageAlt} width={600} height={600} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
