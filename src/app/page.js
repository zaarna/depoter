import BrandSection from "@/components/BrandSection";
import BuildToHandlesection from "@/components/BuildToHandlesection";
import HowWorksSection from "@/components/HowWorksSection";
import InnerHeroSection from "@/components/ReusableComponent/Inner_Hero/InnerHeroSection";
import ScrollingBanner from "@/components/ReusableComponent/Inner_Hero/ScrollingBanner";
import ScalabilitySection from "@/components/ScalabilitySection";
import ServiceSection from "@/components/ServiceSection";
import WhyChoose from "@/components/WhyChoose";
import { features } from "@/data/home";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center dark:bg-black">
      <main className="flex flex-col min-h-screen w-full bg-white dark:bg-black">
        <InnerHeroSection
          bottomSection={<ScrollingBanner features={features} />}
        />
        <ServiceSection />
        <BrandSection />
        <WhyChoose />
        <ScalabilitySection />
        <HowWorksSection />
        <BuildToHandlesection />
      </main>
    </div>
  );
}
