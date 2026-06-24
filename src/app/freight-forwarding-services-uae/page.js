import FAQSection from "@/components/FAQSection";
import AddvalueToSupplyChain from "@/components/ReusableComponent/FreightForwarding/AddValueToSupplyChain";
import CustomsClearance from "@/components/ReusableComponent/FreightForwarding/CustomsClearance";
import FreightForwardingServices from "@/components/ReusableComponent/FreightForwarding/FreightForwardingServices";
import IndustriesWeServe from "@/components/ReusableComponent/FreightForwarding/IndustriesWeServe";
import StepByStepFreightProcess from "@/components/ReusableComponent/FreightForwarding/StepByStepFreightProcess";
import StrategicHub from "@/components/ReusableComponent/FreightForwarding/StrategicHub";
import WhyChooseDepoter from "@/components/ReusableComponent/FreightForwarding/WhyChooseDepoter";
import InnerHeroSection from "@/components/ReusableComponent/Inner_Hero/InnerHeroSection";
import ShippingWithConfidence from "@/components/ShippingWithConfidence";
import TestimonialSection from "@/components/TestimonialSection";

export default function FreightForwarding() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex flex-col min-h-screen w-full  ">
        <InnerHeroSection />
        <StrategicHub />
        <FreightForwardingServices />
        <CustomsClearance />
        <AddvalueToSupplyChain />
        <WhyChooseDepoter />
        <StepByStepFreightProcess />
        <IndustriesWeServe />
        <FAQSection />
        <ShippingWithConfidence />
      </main>
    </div>
  );
}
