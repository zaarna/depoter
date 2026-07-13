import EveryFashionCategory from "@/components/ReusableComponent/ApparelAccessoriesPage/EveryFashionCategory";
import FastDeliveryFashionECommerce from "@/components/ReusableComponent/ApparelAccessoriesPage/FastDeliveryFashionECommerce";
import ReverseLogisticsManagement from "@/components/ReusableComponent/ApparelAccessoriesPage/ReverseLogisticsManagement";
import SolvingApparelBiggestChallenges from "@/components/ReusableComponent/ApparelAccessoriesPage/SolvingApparelBiggestChallenges";
import SupportsFashionBrands from "@/components/ReusableComponent/ApparelAccessoriesPage/SupportsFashionBrands";
import AdvancedSKUManagementApparel from "@/components/ReusableComponent/ApparelAccessoriesPage/WhyChooseDepoterFreezoneFulfillment";
import InnerHeroSection from "@/components/ReusableComponent/Inner_Hero/InnerHeroSection";

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
      </main>
    </div>
  );
}
