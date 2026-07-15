import DTCMarketplaceIntegration from "@/components/ReusableComponent/ApparelAccessoriesPage/DTCMarketplaceIntegration";
import EveryFashionCategory from "@/components/ReusableComponent/ApparelAccessoriesPage/EveryFashionCategory";
import FashionFulfillment from "@/components/ReusableComponent/ApparelAccessoriesPage/FashionFulfillment";
import FastDeliveryFashionECommerce from "@/components/ReusableComponent/ApparelAccessoriesPage/FastDeliveryFashionECommerce";
import FlexibleFulfillmentGrowingBrands from "@/components/ReusableComponent/ApparelAccessoriesPage/FlexibleFulfillmentGrowingBrands";
import ReverseLogisticsManagement from "@/components/ReusableComponent/ApparelAccessoriesPage/ReverseLogisticsManagement";
import SolvingApparelBiggestChallenges from "@/components/ReusableComponent/ApparelAccessoriesPage/SolvingApparelBiggestChallenges";
import SpecializedStorage from "@/components/ReusableComponent/ApparelAccessoriesPage/SpecializedStorage";
import SupportsFashionBrands from "@/components/ReusableComponent/ApparelAccessoriesPage/SupportsFashionBrands";
import WhyChooseDepoterFashionFulfillment from "@/components/ReusableComponent/ApparelAccessoriesPage/WhyChooseDepoterFashionFulfillment";
import AdvancedSKUManagementApparel from "@/components/ReusableComponent/ApparelAccessoriesPage/AdvancedSKUManagementApparel";
import CtaSection from "@/components/ReusableComponent/CtaSection";
import FaqSection from "@/components/ReusableComponent/FaqSection";
import InnerHeroSection from "@/components/ReusableComponent/Inner_Hero/InnerHeroSection";
import { apparelfaq, wellnessfaq } from "@/data/faqdata";
import ScrollToTop from "@/components/ScrollToTop";

export default function ApparelAccessoriesPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex flex-col min-h-screen w-full  ">
        <ScrollToTop />
        <InnerHeroSection />
        <EveryFashionCategory />
        <SolvingApparelBiggestChallenges />
        <SupportsFashionBrands />
        <AdvancedSKUManagementApparel />
        <SpecializedStorage />
        <ReverseLogisticsManagement />
        <FastDeliveryFashionECommerce />
        <FlexibleFulfillmentGrowingBrands />
        <DTCMarketplaceIntegration />
        <WhyChooseDepoterFashionFulfillment />
        <FashionFulfillment />
        <FaqSection faqs={apparelfaq} />
        <CtaSection
          sectionKey="apparelctabutton"
          buttonLink={"#"}
          buttonText="Get a Quote for Your Brand"
        />
      </main>
    </div>
  );
}
