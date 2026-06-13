import InnerHeroSection from "@/components/ReusableComponent/Inner_Hero/InnerHeroSection";
import NumbersGradieantCards from "@/components/ReusableComponent/B2b_Sections/NumbersGradieantCards";
import SmartTechnologySection from "@/components/ReusableComponent/B2b_Sections/SmartTechnologySections";
import FlexibleStorageSection from "@/components/ReusableComponent/B2b_Sections/FlexibleStorageSection";
import FasterExpansionSection from "@/components/ReusableComponent/B2b_Sections/FasterExpansionSection";
import ManageMeasurmentSection from "@/components/ReusableComponent/B2b_Sections/ManageMeasurmentSection";
import DelieverRetails from "@/components/ReusableComponent/B2b_Sections/DelieverRetails";
import ScalabilitySection from "@/components/ScalabilitySection";
import LongTermGrowth from "@/components/ReusableComponent/B2b_Sections/LongTermGrowth";
import AdvanceTechnologySection from "@/components/ReusableComponent/B2b_Sections/AdvanceTechnologySection";
import TestimonialSection from "@/components/TestimonialSection";
import ExpandBuisnessSection from "@/components/ReusableComponent/B2b_Sections/ExpandBuisnessSection";
import EndToEndSection from "@/components/ReusableComponent/B2b_Sections/EndToEndSection";

export default function b2cPage() {
  const data = [
    {
      stat: "100%",
      description: "On-Time Processing",
      icon: "/timeprocessing.svg",
    },
    { stat: "99.98%", description: "Accuracy", icon: "/accuracy.svg" },
    { stat: "50K+", description: "Sq Ft Storage", icon: "/storage.svg" },
    { stat: "10", description: "Industries", icon: "/industries.svg" },
    { stat: "07", description: "Climate Zones", icon: "/clinetzone.svg" },
  ];
  return (
    <div className="flex min-h-screen items-center justify-center ">
      <main className="flex flex-col min-h-screen w-full bg-white ">
        <InnerHeroSection />
        <NumbersGradieantCards data={data} />
        <ExpandBuisnessSection />
        <SmartTechnologySection />
        <FlexibleStorageSection />
        <FasterExpansionSection />
        <ManageMeasurmentSection />
        <DelieverRetails />
        <EndToEndSection />
        <LongTermGrowth />
        <AdvanceTechnologySection />
        <TestimonialSectionz />
      </main>
    </div>
  );
}
