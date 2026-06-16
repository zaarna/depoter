import AutomatedOrderFlow from "@/components/ReusableComponent/FulfillmentCenterPage/AutomatedOrderFlow";
import ClimateStorageSection from "@/components/ReusableComponent/FulfillmentCenterPage/ClimateStorageSection";
import ControlTowerSection from "@/components/ReusableComponent/FulfillmentCenterPage/ControlTowerSection";
import EfficientStorageArchitecture from "@/components/ReusableComponent/FulfillmentCenterPage/EfficientStorageArchitecture";
import ExpertHandsSection from "@/components/ReusableComponent/FulfillmentCenterPage/ExpertHandsSection";
import FAQsFulfillmentSection from "@/components/ReusableComponent/FulfillmentCenterPage/FAQsFulfillmentSection";
import FulfillmentCenterWorks from "@/components/ReusableComponent/FulfillmentCenterPage/FulfillmentProcess";
import ScaleOperations from "@/components/ReusableComponent/FulfillmentCenterPage/ScaleOperations";
import StrategicallyLocatedWarehouses from "@/components/ReusableComponent/FulfillmentCenterPage/StrategicallyLocatedWarehouses";
import TransparentInvoicingSection from "@/components/ReusableComponent/FulfillmentCenterPage/TransparentInvoicingSection";
import WeStoreAnything from "@/components/ReusableComponent/FulfillmentCenterPage/WeStoreAnything";
import WhyChooseFulfillmentCenter from "@/components/ReusableComponent/FulfillmentCenterPage/WhyChooseFulfillmentCenter";
import InnerHeroSection from "@/components/ReusableComponent/Inner_Hero/InnerHeroSection";

export default function FulfillmentCenterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex flex-col min-h-screen w-full  ">
        <InnerHeroSection />
        <StrategicallyLocatedWarehouses />
        <FulfillmentCenterWorks />
        <WeStoreAnything />
        <EfficientStorageArchitecture />
        <ClimateStorageSection />
        <AutomatedOrderFlow />
        <ExpertHandsSection />
        <ControlTowerSection />
        <TransparentInvoicingSection />
        <WhyChooseFulfillmentCenter />
        <FAQsFulfillmentSection />
        <ScaleOperations />
      </main>
    </div>
  );
}
