import CtaSection from "@/components/ReusableComponent/CtaSection";
import CrossBorder from "@/components/ReusableComponent/DeliverySection/CrossBorder";
import DeliveryCapabilities from "@/components/ReusableComponent/DeliverySection/DeliveryCapabilities";
import DeliveryOperations from "@/components/ReusableComponent/DeliverySection/DeliveryOperations";
import DeliveryServices from "@/components/ReusableComponent/DeliverySection/DeliveryServices";
import DeliverySolution from "@/components/ReusableComponent/DeliverySection/DeliverySolution";
import ModernCommerce from "@/components/ReusableComponent/DeliverySection/ModernCommerce";
import WhyChooseDeliveryService from "@/components/ReusableComponent/DeliverySection/WhyChooseDeliveryService";
import FaqSection from "@/components/ReusableComponent/FaqSection";
import InnerHeroSection from "@/components/ReusableComponent/Inner_Hero/InnerHeroSection";
import { deliveryservicesfaq } from "@/data/faqdata";

export default function DeliveriesPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex flex-col min-h-screen w-full  ">
        <InnerHeroSection />
        <ModernCommerce />
        <DeliverySolution />
        <CrossBorder />
        <DeliveryCapabilities />
        <DeliveryServices />
        <WhyChooseDeliveryService />
        <FaqSection faqs={deliveryservicesfaq} />
        <CtaSection
          sectionKey="deliveryoperations"
          buttonLink={"#"}
          buttonText="Talk to a Delivery Expert"
        />
      </main>
    </div>
  );
}
