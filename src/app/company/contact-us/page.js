import GlobalSection from "@/components/GlobalSection";
import InnerHeroSection from "@/components/ReusableComponent/Inner_Hero/InnerHeroSection";
import TitleSectionHero from "@/components/ReusableComponent/Inner_Hero/TitleSectionHero";
import ScrollToTop from "@/components/ScrollToTop";

export default function DeliveriesPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex flex-col min-h-screen w-full  ">
        <ScrollToTop />
        <TitleSectionHero />
        <GlobalSection />
      </main>
    </div>
  );
}
