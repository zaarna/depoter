import InnerHeroSection from "@/components/ReusableComponent/Inner_Hero/InnerHeroSection";
import IntegrationBenefits from "@/components/ReusableComponent/Integration/IntegrationBenefits";
import HowItWorksSection from "@/components/ReusableComponent/Integration/HowItWorksSection";
import SmartIntegration from "@/components/ReusableComponent/Integration/SmartIntegration";
import BenefitsSection from "@/components/ReusableComponent/Integration/BenefitsSection";
import IntegrationPlatformsSection from "@/components/ReusableComponent/Integration/IntegrationPlatformsSection";
import UAEOperationsSection from "@/components/ReusableComponent/Integration/UAEOperationsSection";
import SupplyChainSection from "@/components/ReusableComponent/Integration/SupplyChainSection";
import WhyChooseSection from "@/components/ReusableComponent/Integration/WhyChooseSection";
import SolutionForSection from "@/components/ReusableComponent/Integration/SolutionForSection";
import FAQSection from "@/components/FAQSection";
import ShippingWithConfidence from "@/components/ShippingWithConfidence";

export default function IntegrationsPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex flex-col min-h-screen w-full  ">
        <InnerHeroSection />
        <IntegrationBenefits />
        <HowItWorksSection />
        <SmartIntegration />
        <BenefitsSection />
        <IntegrationPlatformsSection />
        <UAEOperationsSection />
        <SupplyChainSection />
        <WhyChooseSection />
        <SolutionForSection />
        <FAQSection />
        <ShippingWithConfidence />
      </main>
    </div>
  );
}
