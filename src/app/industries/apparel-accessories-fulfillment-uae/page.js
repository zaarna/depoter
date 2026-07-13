import EveryFashionCategory from "@/components/ReusableComponent/ApparelAccessoriesPage/EveryFashionCategory";
import FashionFulfillment from "@/components/ReusableComponent/ApparelAccessoriesPage/FashionFulfillment";
import FastDeliveryFashionECommerce from "@/components/ReusableComponent/ApparelAccessoriesPage/FastDeliveryFashionECommerce";
import ReverseLogisticsManagement from "@/components/ReusableComponent/ApparelAccessoriesPage/ReverseLogisticsManagement";
import SolvingApparelBiggestChallenges from "@/components/ReusableComponent/ApparelAccessoriesPage/SolvingApparelBiggestChallenges";
import SupportsFashionBrands from "@/components/ReusableComponent/ApparelAccessoriesPage/SupportsFashionBrands";
import AdvancedSKUManagementApparel from "@/components/ReusableComponent/ApparelAccessoriesPage/WhyChooseDepoterFreezoneFulfillment";
import CtaSection from "@/components/ReusableComponent/CtaSection";
import FaqSection from "@/components/ReusableComponent/FaqSection";
import InnerHeroSection from "@/components/ReusableComponent/Inner_Hero/InnerHeroSection";
import { apparelfaq, wellnessfaq } from "@/data/faqdata";

export default function ApparelAccessoriesPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex flex-col min-h-screen w-full  ">
        <InnerHeroSection />
        <EveryFashionCategory />
        <SolvingApparelBiggestChallenges />
        <SupportsFashionBrands />
        <AdvancedSKUManagementApparel />
        <ReverseLogisticsManagement />
        <FastDeliveryFashionECommerce />
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
