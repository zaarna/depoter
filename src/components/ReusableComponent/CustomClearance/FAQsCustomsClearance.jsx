import FAQAccordion from "../FreightForwarding/FAQAccordion";

export default function FAQsCustomsClearance() {
    const faqData = [
        {
            question: "What are Customs Clearance Services in UAE?",
            answer:
                "Customs clearance services help in legally importing or exporting goods by handling documentation, duties, and approvals.",
        },
        {
            question: "How long does customs clearance take?",
            answer: "Usually, it takes 1–3 days if all documents are correct.",
        },
        {
            question: "What documents are required?",
            answer:
                "The required documents usually include a commercial invoice, packing list, Bill of Lading or Airway Bill, and HS code details. These documents help ensure smooth customs clearance without delays.",
        },
        {
            question: "When do delays happen?",
            answer:
                "Delays happen if documents are incorrect or inspections are required.",
        },
        {
            question: "Do you provide door-to-door service?",
            answer:
                "Yes, we provide complete logistics support from pickup to delivery.",
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
