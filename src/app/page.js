import BrandSection from "@/components/BrandSection";
import BuildToHandlesection from "@/components/BuildToHandlesection";
import CaseStudySection from "@/components/CaseStudySection";
import GlobalSection from "@/components/GlobalSection";
import HowWorksSection from "@/components/HowWorksSection";
import InsightsSection from "@/components/InsightsSection";
import InnerHeroSection from "@/components/ReusableComponent/Inner_Hero/InnerHeroSection";
import ScrollingBanner from "@/components/ReusableComponent/Inner_Hero/ScrollingBanner";
import ScalabilitySection from "@/components/ScalabilitySection";
import ServiceSection from "@/components/ServiceSection";
import TestimonialSection from "@/components/TestimonialSection";
import WhyChoose from "@/components/WhyChoose";
import { features } from "@/data/home";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center ">
      <main className="flex flex-col min-h-screen w-full  ">
        {/* main page */}
        <InnerHeroSection
          bottomSection={<ScrollingBanner features={features} />}
        />
        <ServiceSection />
        <BrandSection />
        <WhyChoose />
        <ScalabilitySection />
        <HowWorksSection />
        <BuildToHandlesection />
        <GlobalSection />
        <CaseStudySection />
        <TestimonialSection />
        <InsightsSection />
      </main>
    </div>
  );
}
