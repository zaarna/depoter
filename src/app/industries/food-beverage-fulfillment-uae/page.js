import ChallengesFoodNBeverage from "@/components/ReusableComponent/FoodAndBeveragesPage/ChallengesFoodNBeverage";
import ColdChainLogisticsBuiltFoodSafety from "@/components/ReusableComponent/FoodAndBeveragesPage/ColdChainLogisticsBuiltFoodSafety";
import ConnectYourEntireEcommerceSystem from "@/components/ReusableComponent/FoodAndBeveragesPage/ConnectYourEntireEcommerceSystem";
import FAQsFoodAndBeverages from "@/components/ReusableComponent/FoodAndBeveragesPage/FAQsFoodAndBeverages";
import FastDeliveryNSafeReturnsManagement from "@/components/ReusableComponent/FoodAndBeveragesPage/FastDeliveryNSafeReturnsManagement";
import FoodCategories from "@/components/ReusableComponent/FoodAndBeveragesPage/FoodCategories";
import FoodSafetyComplianceHandling from "@/components/ReusableComponent/FoodAndBeveragesPage/FoodSafetyComplianceHandling";
import HowDepoterSupportsFood from "@/components/ReusableComponent/FoodAndBeveragesPage/HowDepoterSupportsFood";
import InventoryControlBuiltFreshness from "@/components/ReusableComponent/FoodAndBeveragesPage/InventoryControlBuiltFreshness";
import ReadyToScaleYourFoodAndBeverage from "@/components/ReusableComponent/FoodAndBeveragesPage/ReadyToScaleYourFoodAndBeverage";
import ReliableFulfillmentForFood from "@/components/ReusableComponent/FoodAndBeveragesPage/ReliableFulfillmentForFood";
import WhyChooseDepoterFoodFulfillment from "@/components/ReusableComponent/FoodAndBeveragesPage/WhyChooseDepoterFoodFulfillment";
import InnerHeroSection from "@/components/ReusableComponent/Inner_Hero/InnerHeroSection";

export default function FoodAndBeveragesFulfillment() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex flex-col min-h-screen w-full  ">
        <InnerHeroSection />
        <ReliableFulfillmentForFood />
        <ChallengesFoodNBeverage />
        <HowDepoterSupportsFood />
        <ColdChainLogisticsBuiltFoodSafety />
        <FoodCategories />
        <InventoryControlBuiltFreshness />
        <FastDeliveryNSafeReturnsManagement />
        <FoodSafetyComplianceHandling />
        <ConnectYourEntireEcommerceSystem />
        <WhyChooseDepoterFoodFulfillment />
        <FAQsFoodAndBeverages />
        <ReadyToScaleYourFoodAndBeverage />
      </main>
    </div>
  );
}
