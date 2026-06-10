import Accordion from "./ReusableComponent/Accordion";

export default function FAQSection() {
  const faqData = [
    {
      question: "What are freight forwarding services?",
      answer:
        "Freight forwarding services involve managing the transportation of goods across international locations through sea, air, or land logistics networks while handling documentation, customs clearance, and shipment coordination.",
    },
    {
      question:
        "What documents are required for international freight shipping?",
      answer:
        "Common documents include a Bill of Lading, commercial invoice, packing list, and customs declarations. Proper HS Code classification is also required for regulatory compliance.",
    },
    {
      question: "What is the difference between FCL and LCL shipping?",
      answer:
        "FCL (Full Container Load) means one shipper uses the entire container, while LCL (Less than Container Load) involves sharing container space with other shipments, making it suitable for smaller cargo volumes.",
    },
    {
      question: "Why is Dubai important for freight forwarding?",
      answer:
        "Dubai is a major global logistics hub connecting trade routes between Asia, Europe, and the Middle East. Its ports, airports, and logistics infrastructure make it an ideal gateway for international cargo movement.",
    },
    {
      question: "Can freight forwarders provide door-to-door delivery?",
      answer:
        "Yes. Many freight forwarding providers, including Depoter, offer door-to-door logistics services, managing the shipment from supplier pickup to final delivery at the destination.",
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
