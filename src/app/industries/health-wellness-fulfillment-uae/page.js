import InnerHeroSection from "@/components/ReusableComponent/Inner_Hero/InnerHeroSection";
import ManageEverything from "@/components/ReusableComponent/Integration/ManageEverything";

export default function HealthWellnessPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex flex-col min-h-screen w-full  ">
        <InnerHeroSection />

        <ManageEverything />
      </main>
    </div>
  );
}
