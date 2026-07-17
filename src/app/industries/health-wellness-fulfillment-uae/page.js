import CtaSection from "@/components/ReusableComponent/CtaSection";
import FaqSection from "@/components/ReusableComponent/FaqSection";
import ChallengesFulfillment from "@/components/ReusableComponent/HealthWellnesspageSections/ChallengesFulfillment";
import EcommerceStack from "@/components/ReusableComponent/HealthWellnesspageSections/EcommerceStack";
import FlexibleFulfillment from "@/components/ReusableComponent/HealthWellnesspageSections/FlexibleFulfillment";
import InventoryControl from "@/components/ReusableComponent/HealthWellnesspageSections/InventoryControl";
import ReliableFulfillment from "@/components/ReusableComponent/HealthWellnesspageSections/ReliableFulfillment";
import WellnessSupportSection from "@/components/ReusableComponent/HealthWellnesspageSections/WellnessSupportSection";
import WhyDepoterHealthFulfillment from "@/components/ReusableComponent/HealthWellnesspageSections/WhyDepoterHealthFulfillment";
import WhyFulfillmentMatters from "@/components/ReusableComponent/HealthWellnesspageSections/WhyFulfillmentMatters";
import InnerHeroSection from "@/components/ReusableComponent/Inner_Hero/InnerHeroSection";
import ScrollToTop from "@/components/ScrollToTop";
import { wellnessfaq } from "@/data/faqdata";

export default function HealthWellnessPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex flex-col min-h-screen w-full  ">
        <ScrollToTop />
        <InnerHeroSection />
        <ReliableFulfillment />
        <ChallengesFulfillment />
        <WellnessSupportSection />
        <InventoryControl />
        <EcommerceStack />
        <FlexibleFulfillment />
        <WhyDepoterHealthFulfillment />
        <WhyFulfillmentMatters />
        <FaqSection faqs={wellnessfaq} />
        <CtaSection
          sectionKey="wellnessctabutton"
          buttonLink={"/company/contact-us"}
          buttonText="Talk to an Expert Today"
        />
      </main>
    </div>
  );
}
