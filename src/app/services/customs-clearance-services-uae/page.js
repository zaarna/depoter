import EndToEndSection from "@/components/ReusableComponent/B2b_Sections/EndToEndSection";
import ClearYourShipment from "@/components/ReusableComponent/CustomClearance/ClearYourShipment";
import CustomsClearanceBenefits from "@/components/ReusableComponent/CustomClearance/CustomsClearanceBenefits";
import CustomsClearanceProcessWorks from "@/components/ReusableComponent/CustomClearance/CustomsClearanceProcessWorks";
import CustomsClearanceServices from "@/components/ReusableComponent/CustomClearance/CustomsClearanceServices";
import FAQsCustomsClearance from "@/components/ReusableComponent/CustomClearance/FAQsCustomsClearance";
import PortsAirportsCoverage from "@/components/ReusableComponent/CustomClearance/PortsAirportsCoverage";
import WhoWeServe from "@/components/ReusableComponent/CustomClearance/WhoWeServe";
import WhyChooseDepoterForCustomsClearance from "@/components/ReusableComponent/CustomClearance/WhyChooseDepoterForCustomsClearance";
import ScaleOperations from "@/components/ReusableComponent/FulfillmentCenterPage/ScaleOperations";
import InnerHeroSection from "@/components/ReusableComponent/Inner_Hero/InnerHeroSection";

export default function CustomClearance() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex flex-col min-h-screen w-full  ">
        {/* multiChannelPage */}
        <InnerHeroSection />
        <CustomsClearanceServices />
        <PortsAirportsCoverage />
        <CustomsClearanceProcessWorks />
        <WhyChooseDepoterForCustomsClearance />
        <CustomsClearanceBenefits />
        <WhoWeServe />
        <FAQsCustomsClearance />
        <ClearYourShipment />
      </main>
    </div>
  );
}
