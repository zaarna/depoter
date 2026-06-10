import { titleContentConfig } from "@/config/titleContentConfig";
import TitleContent from "../All_Title/TitleContent";
import GradientStepCard from "../GradientStepCard/GradientStepCard";

const steps = [
  {
    id: 1,
    title: "Returns & Exchange Management",
    description: [
      "Reverse pickup from customer locations (local & international)",
      "Smooth handling of return orders",
      "Faster processing to improve customer experience",
    ],
    image: "/delivery-service-1.svg",
    reverse: false,
  },
  {
    id: 2,
    title: "Smart Replacement Deliveries",
    description: [
      "Simultaneous pickup of old product and delivery of new one",
      "Available for local deliveries",
      "Ideal for exchange and replacement scenarios",
    ],
    image: "/delivery-service-2.svg",
    reverse: true,
  },
  {
    id: 3,
    title: "Payment Collection Services",
    description: [
      "Cash, Card, and POS payment options available",
      "Supported across local and GCC deliveries",
      "Collection in local destination currency",
      "Competitive exchange rates for better value realization",
    ],
    image: "/delivery-service-3.svg",
    reverse: false,
  },
  {
    id: 4,
    title: "Dedicated Last-Mile Support",
    description: [
      "Specialized support for delivery operations",
      "Quick query resolution and proactive communication",
      "Assistance across the entire delivery lifecycle",
    ],
    image: "/delivery-service-4.svg",
    reverse: false,
  },
  {
    id: 5,
    title: "Documentation Support",
    description: [
      "Packing lists and invoices for international shipments",
      "Complete cross-border documentation assistance",
      "Support for customs clearance requirements",
      "Error-free paperwork for faster delivery processing",
    ],
    image: "/delivery-service-5.svg",
    reverse: false,
  },
];

export default function DeliveryServices() {
  const tc = titleContentConfig["deliveryservices"];
  return (
    <section className="py-20 bg-[#FFF7E4]">
      <div className="container">
        <div className="grid text-center relative z-10">
          <TitleContent {...tc} />
        </div>
        {/* Steps */}
        <div className="space-y-6 mt-6">
          {steps.map((step) => (
            <GradientStepCard
              key={step.id}
              id={step.id}
              title={step.title}
              description={step.description}
              image={step.image}
              imageWidth={200}
              imageHeight={200}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
