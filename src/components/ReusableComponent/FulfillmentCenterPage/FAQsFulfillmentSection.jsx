import FAQAccordion from "../FreightForwarding/FAQAccordion";

export default function FAQsFulfillmentSection() {
  const faqData = [
    {
      question:
        "What makes Depoter the best fulfillment center for ecommerce in UAE?",
      answer:
        "Our combination of strategically located warehouses, advanced warehouse fulfillment services, and direct integration with marketplaces makes us the top choice for brands looking to scale in the UAE.",
    },
    {
      question: "How does Depoter handle temperature-sensitive items?",
      answer:
        "We offer specialized climate controlled storage with 24/7 temperature and humidity monitoring, making it ideal for cosmetics, electronics, and pharma products.",
    },
    {
      question: "Is your warehouse storage scalable for seasonal growth?",
      answer:
        "Yes. Our logistics infrastructure is designed to be highly scalable. We can easily accommodate increased stock levels during peak shopping seasons like Ramadan or Black Friday.",
    },
    {
      question: "Can I track my orders and inventory in real-time?",
      answer:
        "Absolutely. Our tailor-made technology provides a centralized dashboard where you can monitor inventory accuracy, order status, and real-time tracking data from anywhere.",
    },
    {
      question: "Do you support B2B fulfillment along with D2C?",
      answer:
        "Yes, our infrastructure is industry-agnostic and supports D2C, B2B, and bulk marketplace fulfillment with the same level of accuracy and speed.",
    },
  ];

  return (
    <section className="bg-[#F5F0E4] py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-12 py-2 text-center">
          <h2 className="text-4xl font-bold md:text-4xl">
            Frequently <span className="text-[#E8A91D]">Asked Questions</span>
          </h2>
        </div>

        <FAQAccordion faqs={faqData} />
      </div>
    </section>
  );
}
