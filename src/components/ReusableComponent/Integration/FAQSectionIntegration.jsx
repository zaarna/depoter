import FAQAccordion from "../FreightForwarding/FAQAccordion";

export default function FAQSectionIntegration() {
  const faqData = [
    {
      question: "What are ecommerce integration services?",
      answer:
        "Ecommerce integration services connect your store, warehouse, and shipping systems so data flows automatically between them without manual work.",
    },
    {
      question: "Do I need technical knowledge to use this system?",
      answer:
        "No, our onboarding team handles the setup. You can start using the system without technical experience.",
    },
    {
      question: "Can I integrate multiple platforms at once?",
      answer:
        "Yes, you can connect multiple ecommerce platforms, marketplaces, and courier partners in one system.",
    },
    {
      question: "How does real-time synchronization work?",
      answer:
        "Orders, inventory, and tracking data are automatically updated across all connected systems through API-based integration.",
    },
    {
      question: "Can this system support UAE deliveries?",
      answer:
        "Yes, our platform supports multiple courier partners in the UAE for smooth shipping and delivery operations.",
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
