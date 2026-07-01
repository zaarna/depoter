import FAQAccordion from "../FreightForwarding/FAQAccordion";

export default function FAQsFoodAndBeverages() {
    const faqData = [
        {
            question: "What is Food & Beverage Fulfillment?",
            answer:
                "Food & beverage fulfillment is a logistics process designed for storing, handling, and delivering food products while maintaining safety, freshness, and quality throughout the supply chain.",
        },
        {
            question: "Do You Provide Cold Chain Logistics in UAE?",
            answer:
                "Yes. We provide cold chain logistics with temperature-controlled storage and delivery to ensure sensitive and perishable products remain safe and compliant during storage and transportation.",
        },
        {
            question: "How Do You Handle Product Expiration and Batch Codes?",
            answer:
                "We follow FEFO (First-Expiry, First-Out) operations. Our warehouse management system automatically prioritizes picking based on expiry dates, while every incoming stock batch is uniquely logged for complete traceability and inventory visibility.",
        },
        {
            question: "Can I Track Inventory in Real Time?",
            answer:
                "Yes. You receive 24/7 access to our cloud-based dashboard, allowing you to monitor real-time SKU quantities, batch information, expiry records, and individual order tracking updates.",
        },
        {
            question: "Do You Support Both B2C E-commerce and Bulk B2B Distribution?",
            answer:
                "Yes. Our fulfillment system efficiently handles both direct-to-consumer (B2C) e-commerce orders and large-volume B2B pallet shipments for retailers, wholesalers, and regional distributors.",
        },
    ];

    return (
        <section className="bg-[#F5F0E4] py-16">
            <div className="mx-auto max-w-5xl px-4">
                <div className="mb-12 py-2 text-center">
                    <h2 className="text-[clamp(1.5rem,1rem+2vw,3rem)] font-bold">
                        Frequently <span className="text-[#E8A91D]">Asked Questions</span>
                    </h2>
                </div>

                <FAQAccordion faqs={faqData} />
            </div>
        </section>
    );
}
