import ALLInOneFulfillmentBeauty from "@/components/ReusableComponent/BeautyPersonalCare/ALLInOneFulfillmentBeauty";
import BeautyBrandwithBetterFulfillment from "@/components/ReusableComponent/BeautyPersonalCare/BeautyBrandwithBetterFulfillment";
import BeautyLogisticsChallenges from "@/components/ReusableComponent/BeautyPersonalCare/BeautyLogisticsChallenges";
import BenefitsForYourBeautyBrand from "@/components/ReusableComponent/BeautyPersonalCare/BenefitsForYourBeautyBrand";
import ConnectToECommerceStack from "@/components/ReusableComponent/BeautyPersonalCare/ConnectToECommerceStack";
import FAQsBeautyAndPersonal from "@/components/ReusableComponent/BeautyPersonalCare/FAQsBeautyAndPersonal";
import InventoryControlBeautyHealth from "@/components/ReusableComponent/BeautyPersonalCare/InventoryControlBeautyHealth";
import PersonalCareProductFulfillment from "@/components/ReusableComponent/BeautyPersonalCare/PersonalCareProductFulfillment";
import InnerHeroSection from "@/components/ReusableComponent/Inner_Hero/InnerHeroSection";

export default function ProductRegistration() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex flex-col min-h-screen w-full  ">
        <InnerHeroSection />
        <ALLInOneFulfillmentBeauty />
        <BeautyLogisticsChallenges />
        <BenefitsForYourBeautyBrand />
        <InventoryControlBeautyHealth />
        <ConnectToECommerceStack />
        <PersonalCareProductFulfillment />
        <FAQsBeautyAndPersonal />
        <BeautyBrandwithBetterFulfillment />
      </main>
    </div>
  );
}
