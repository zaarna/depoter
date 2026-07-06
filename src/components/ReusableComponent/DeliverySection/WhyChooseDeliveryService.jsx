import { titleContentConfig } from "@/config/titleContentConfig";
import TitleContent from "../All_Title/TitleContent";
import FeatureList from "../FeatureList";

const features = [
  "One Contract, Multi-Delivery Options – Access Next-Day, Same-Day, Express, GCC, and International deliveries through a single agreement.",
  "Competitive Shipping Rates – Benefit from our high shipping volumes to secure lower courier rates from leading delivery partners.",
  "Multi-Courier Network – Seamlessly connect with all major delivery providers and choose the best option for every shipment.",
  "Automated Shipping & Live Tracking – Instantly generate AWBs and provide customers with real-time shipment tracking.",
  "Dedicated Customer Success Team – End-to-end operational support from shipment creation to successful delivery.",
  "COD & Invoice Management – Automated COD reconciliation and thorough validation of courier invoices to eliminate billing discrepancies.",
  "Centralized Dashboard & Analytics – Monitor all shipments, delivery performance, costs, COD, and courier KPIs from a single dashboard.",
  "Scalable Logistics Solution – Whether you're shipping hundreds or thousands of orders, Depoter grows with your business.",
];

export default function WhyChooseDeliveryService() {
  const tc = titleContentConfig["whychoosedeliveryservice"];
  return (
    <section className="py-20 bg-[#3C2C0B]">
      <div className="container">
        <div className="grid text-center relative z-10">
          <TitleContent {...tc} />
        </div>
        <div className="mt-8 justify-center items-center flex border-2 border-[#FFBE2E] mx-auto rounded-3xl p-2 w-full md:w-2/4 text-center">
          <p className="text-[#FFFFFF]">
            Depoter focuses on speed, accuracy, and reliability to deliver
            <br />
            consistent results.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[auto_auto] gap-12 items-stretch justify-center">
          <div className="flex items-center justify-center">
            <img
              src="/delivery-service.svg"
              alt="Why Choose Depoter Delivery Services"
              className="object-contain w-full max-w-[360px]"
            />
          </div>
          <div className="flex items-stretch justify-center gap-4">
            <FeatureList
              features={features}
              space="4"
              textClassName="text-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
