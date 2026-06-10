import CrossBorder from "@/components/ReusableComponent/DeliverySection/CrossBorder";
import DeliveryCapabilities from "@/components/ReusableComponent/DeliverySection/DeliveryCapabilities";
import DeliveryOperations from "@/components/ReusableComponent/DeliverySection/DeliveryOperations";
import DeliveryServices from "@/components/ReusableComponent/DeliverySection/DeliveryServices";
import DeliverySolution from "@/components/ReusableComponent/DeliverySection/DeliverySolution";
import FAQs from "@/components/ReusableComponent/DeliverySection/FAQs";
import ModernCommerce from "@/components/ReusableComponent/DeliverySection/ModernCommerce";
import WhyChooseDeliveryService from "@/components/ReusableComponent/DeliverySection/WhyChooseDeliveryService";
import InnerHeroSection from "@/components/ReusableComponent/Inner_Hero/InnerHeroSection";

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
        <FAQs />
        <DeliveryOperations />
      </main>
    </div>
  );
}
