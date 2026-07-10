import CtaSection from "@/components/ReusableComponent/CtaSection";
import CustomsClearanceBenefits from "@/components/ReusableComponent/CustomClearance/CustomsClearanceBenefits";
import CustomsClearanceProcessWorks from "@/components/ReusableComponent/CustomClearance/CustomsClearanceProcessWorks";
import CustomsClearanceServices from "@/components/ReusableComponent/CustomClearance/CustomsClearanceServices";
import PortsAirportsCoverage from "@/components/ReusableComponent/CustomClearance/PortsAirportsCoverage";
import WhoWeServe from "@/components/ReusableComponent/CustomClearance/WhoWeServe";
import WhyChooseDepoterForCustomsClearance from "@/components/ReusableComponent/CustomClearance/WhyChooseDepoterForCustomsClearance";
import FaqSection from "@/components/ReusableComponent/FaqSection";
import InnerHeroSection from "@/components/ReusableComponent/Inner_Hero/InnerHeroSection";
import { customsclearancefaq } from "@/data/faqdata";

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
        <FaqSection faqs={customsclearancefaq} />
        <CtaSection
          sectionKey="clearyourshipment"
          buttonLink={"#"}
          buttonText="Request Customs Clearance Support Now"
        />
      </main>
    </div>
  );
}
