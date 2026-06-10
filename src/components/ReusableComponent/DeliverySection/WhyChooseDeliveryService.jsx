import { titleContentConfig } from "@/config/titleContentConfig";
import TitleContent from "../All_Title/TitleContent";

const features = [
  "Fast shipping with optimized delivery routes",
  "Reliable last-mile and cross-border operations",
  "Real-time shipment tracking and visibility",
  "Scalable infrastructure for growing businesses",
  "Strong delivery network across UAE and global markets",
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
            <img
              src="/delivery-steps.svg"
              alt="delivery steps"
              className="object-contain w-auto max-w-[130px] self-stretch"
            />
            <ul className="flex flex-col gap-3 lg:gap-0 justify-between py-3 text-base lg:text-xl">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <div className="flex flex-1 items-center">
                    <p className="text-[#FFFFFF] leading-relaxed">{feature}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
