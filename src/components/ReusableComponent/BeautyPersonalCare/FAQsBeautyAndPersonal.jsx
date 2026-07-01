import FAQAccordion from "../FreightForwarding/FAQAccordion";

export default function FAQsBeautyAndPersonal() {
    const faqData = [
        {
            question: "What is beauty & personal care fulfillment?",
            answer:
                "It is a fulfillment process designed specifically for cosmetics, skincare, and personal care products, ensuring proper handling, storage, and delivery.",
        },
        {
            question: "Do you provide skincare fulfillment services in UAE?",
            answer:
                "Yes, we provide complete skincare fulfillment services, including storage, inventory management, and delivery.",
        },
        {
            question: "How does beauty fulfillment work in the UAE?",
            answer:
                "It involves receiving inventory, storing products safely, managing expiry and batch tracking, processing orders, and delivering them quickly while maintaining product quality.",
        },
        {
            question: "How does FEFO picking save my business money?",
            answer:
                'FEFO (First Expiry, First Out) ensures that products closest to their expiry date are shipped first. This prevents "dead stock" and ensures your customers always receive fresh, potent products.',
        },
        {
            question: "Can I track inventory and orders in real time?",
            answer:
                "Yes, our system provides real-time tracking for inventory, orders, and shipments through a centralized dashboard.",
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
