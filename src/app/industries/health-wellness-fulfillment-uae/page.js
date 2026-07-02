import CtaSection from "@/components/ReusableComponent/CtaSection";
import FaqSection from "@/components/ReusableComponent/FaqSection";
import InnerHeroSection from "@/components/ReusableComponent/Inner_Hero/InnerHeroSection";
import { wellnessfaq } from "@/data/faqdata";

export default function HealthWellnessPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex flex-col min-h-screen w-full  ">
        <InnerHeroSection />
        <FaqSection faqs={wellnessfaq} />
        <CtaSection
          sectionKey="wellnessctabutton"
          buttonLink={"#"}
          buttonText="Talk to an Expert Today"
        />
      </main>
    </div>
  );
}
