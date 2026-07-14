import { titleContentConfig } from "@/config/titleContentConfig";
import TitleContent from "../All_Title/TitleContent";
import Button from "../Button/Button";
import Accordion from "../Accordion";

const crossBorderCards = [
    {
        question: "E-commerce Platform Sync",
        answer: " Direct API integrations with Shopify, Salla, and Zid.",
    },
    {
        question: "Marketplace Compliance",
        answer: "Hassle-free inbound preparation for Amazon and Noon marketplaces. ",
    },
    {
        question: "Automated Order Sync",
        answer: "Instant stock updates across all connected platforms to prevent accidental overselling.",
    },
    {
        question: "Secure APIs",
        answer: "Custom-built website integration via secure APIs for smooth, manual-free data flow.",
    },
    {
        question: "Custom Packaging Support",
        answer: "Insert personalized thank-you cards, custom tissue paper, or branded boxes to enhance your brand experience.",
    },
];

export default function DTCMarketplaceIntegration() {
    const tc = titleContentConfig["dtcmarketplaceintegration"];
    return (
        <div className="py-8 md:py-16 bg-[#978050]">
            <div className="container">
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-start mb-10">
                    <div className="relative z-10 text-start md:text-left">
                        <TitleContent {...tc} />
                        <div className="relative -bottom-39 -left-31 hidden md:block">
                            <img src="/marketplace-integration-logo.svg" alt="" />
                        </div>
                    </div>
                    <div className="relative z-10 mt-8 md:mt-0">
                        <Accordion
                            items={crossBorderCards}
                            showIcon={true}
                            ShowBulletDot={false}
                            cardClassName="rounded-2xl border-2 border-[#212121] bg-[#FFF7E4] shadow-sm"
                            contentClassName="bg-[#FFBE2E]"
                            questionClassName="bg-[#FFBE2E]"
                        />
                    </div>
                </div>
                <div className="text-center">
                    <Button href="" className="px-10 py-3" variant="black">
                        Talk to an Integration Expert
                    </Button>
                </div>
            </div>
        </div>
    );
}
