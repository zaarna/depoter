import Accordion from "../Accordion";

export default function FAQs() {
  const faqData = [
    {
      question: "What areas do your delivery services UAE cover?",
      answer:
        "We provide 100% coverage across all major Emirates, including specialized routes for remote areas and dedicated deliveries to retail malls and marketplace warehouses.",
    },
    {
      question: "Do you provide same day delivery in UAE?",
      answer:
        "Yes, we offer same day delivery UAE services for faster order fulfillment and improved customer satisfaction.",
    },
    {
      question: "Do you support multi-channel courier integration?",
      answer:
        "Yes, our system integrates with over 25+ global and regional carriers, giving you the power to choose the best partner for every specific route from one dashboard.",
    },
    {
      question: "Can I frack my shipments in real time?",
      answer:
        "Yes, our system provides real-time shipment tracking and updates across all delivery stages.",
    },
    {
      question: "Do you handle returns and exchanges?",
      answer:
        "Yes, we offer complete returns management and replacement delivery solutions for smooth operations.",
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

        <Accordion items={faqData} />
      </div>
    </section>
  );
}
