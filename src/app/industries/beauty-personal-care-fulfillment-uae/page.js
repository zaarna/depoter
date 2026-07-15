import ALLInOneFulfillmentBeauty from "@/components/ReusableComponent/BeautyPersonalCare/ALLInOneFulfillmentBeauty";
import BeautyLogisticsChallenges from "@/components/ReusableComponent/BeautyPersonalCare/BeautyLogisticsChallenges";
import BenefitsForYourBeautyBrand from "@/components/ReusableComponent/BeautyPersonalCare/BenefitsForYourBeautyBrand";
import ConnectToECommerceStack from "@/components/ReusableComponent/BeautyPersonalCare/ConnectToECommerceStack";
import InventoryControlBeautyHealth from "@/components/ReusableComponent/BeautyPersonalCare/InventoryControlBeautyHealth";
import PersonalCareProductFulfillment from "@/components/ReusableComponent/BeautyPersonalCare/PersonalCareProductFulfillment";
import CtaSection from "@/components/ReusableComponent/CtaSection";
import FaqSection from "@/components/ReusableComponent/FaqSection";
import InnerHeroSection from "@/components/ReusableComponent/Inner_Hero/InnerHeroSection";
import ScrollToTop from "@/components/ScrollToTop";
import { beautyandppersonalcarefaq } from "@/data/faqdata";

export default function ProductRegistration() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex flex-col min-h-screen w-full">
        <ScrollToTop />
        <InnerHeroSection />
        <ALLInOneFulfillmentBeauty />
        <BeautyLogisticsChallenges />
        <BenefitsForYourBeautyBrand />
        <InventoryControlBeautyHealth />
        <ConnectToECommerceStack />
        <PersonalCareProductFulfillment />
        <FaqSection faqs={beautyandppersonalcarefaq} />
        <CtaSection
          sectionKey="beautybrandwithbetterfulfillment"
          buttonLink={"#"}
          buttonText="  Talk to a Fulfillment Expert"
        />
      </main>
    </div>
  );
}
