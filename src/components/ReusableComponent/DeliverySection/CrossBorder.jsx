import { titleContentConfig } from "@/config/titleContentConfig";
import TitleContent from "../All_Title/TitleContent";
import Button from "../Button/Button";
import Accordion from "../Accordion";

const crossBorderCards = [
  {
    question: "GCC Delivery",
    answer: [
      {
        label: "Fast Connectivity",
        value:
          "Next-day delivery to major GCC countries with both <strong>Air and Ground shipping</strong> options available.",
      },
      {
        label: "Financial Flexibility:",
        value:
          "<strong>Cash on Delivery (COD)</strong> is fully supported to meet regional market demands and boost customer trust.",
      },
      {
        label: "Smooth Operations:",
        value:
          "Reliable <strong>customs handling</strong> and faster clearance to ensure your shipments move across borders without delays.",
      },
    ],
  },
  {
    question: "International Delivery",
    answer: [
      {
        label: "Global Reach",
        value:
          "Coverage across <strong>180+ countries</strong> worldwide, ensuring your brand has a truly global presence.",
      },
      {
        label: "Rapid Timelines",
        value:
          "Secure and reliable cross-border shipping with fast delivery in <strong>3–4 business days</strong>.",
      },
      {
        label: "Flexible Payments",
        value:
          "Optimized for <strong>prepaid (paid) orders</strong>, providing a smooth checkout-to-delivery experience.",
      },
    ],
  },
  {
    question: "Bulk B2B Cross-Border Shipments",
    answer: [
      {
        label: "Cost-Effective Scaling",
        value:
          "Pricing models designed for high-volume international shipments, helping you save on margins.",
      },
      {
        label: "Customized Planning",
        value:
          "Strategic logistics planning for bulk deliveries, ideal for distributors, wholesalers, and export businesses.",
      },
      {
        label: "End-to-End Coordination",
        value:
          "We handle everything, including <strong>documentation and clearance support</strong>, so you don't have to worry about the paperwork.",
      },
    ],
  },
];

export default function CrossBorder() {
  const tc = titleContentConfig["crossborderdelivery"];
  const button = tc.button;
  return (
    <div className="py-8 md:py-16 bg-[#978050]">
      <div className="container">
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">
          <div className="relative z-10 text-center md:text-left">
            <TitleContent {...tc} />
            <div className="pt-6 md:pt-8 flex justify-center md:justify-start">
              <Button
                href={button.link}
                className={button.className}
                variant="black"
              >
                {button.text}
              </Button>
            </div>
          </div>
          <div className="relative z-10 mt-8 md:mt-0">
            <Accordion
              items={crossBorderCards}
              showIcon={false}
              cardClassName="rounded-2xl border-2 border-[#212121] bg-[#FFF7E4] shadow-sm"
              contentClassName="bg-[#FFBE2E]"
              questionClassName="bg-[#FFBE2E]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
