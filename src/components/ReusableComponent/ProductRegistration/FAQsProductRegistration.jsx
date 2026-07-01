import FAQAccordion from "../FreightForwarding/FAQAccordion";


export default function FAQsProductRegistration() {
    const faqData = [
        {
            question: "What is product registration in UAE?",
            answer: "Product registration is the process of getting approval from relevant authorities before a product can be legally imported, sold, or distributed in the UAE.",
        }
        ,
        {
            question: "Is product registration mandatory in UAE?",
            answer: "Yes, most products must be registered before entering the UAE market to ensure compliance with safety and quality standards.",
        },
        {
            question: "How long does product registration take?",
            answer: "The timeline depends on the product category, but it usually takes a few days to a few weeks if documents are correct.",
        },
        {
            question: "What documents are required for product registration?",
            answer: "The required documents usually include product details, labels, ingredient information, and supporting compliance documents based on the product category.",
        },
        {
            question: "What happens if my product is not registered?",
            answer: "Unregistered products may face shipment delays, rejection, penalties, or may not be allowed to be sold in the UAE.",
        },
        {
            question: "Can you help with multiple product categories?",
            answer: "Yes, we provide product registration support across different industries and product types.",
        },
        {
            question: "Does every SKU need separate registration?",
            answer: "Yes, each unique product (SKU) must be registered individually to ensure compliance with UAE regulations",
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
