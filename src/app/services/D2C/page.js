import InnerHeroSection from "@/components/ReusableComponent/Inner_Hero/InnerHeroSection";
import KeyMetrics from "@/components/ReusableComponent/Inner_Hero/KeyMetrics";

export default function d2cPage() {
  return (
    <div className="flex min-h-screen items-center justify-center dark:bg-black">
      <main className="flex flex-col min-h-screen w-full bg-white dark:bg-black">
        <InnerHeroSection bottomSection={<KeyMetrics />} />
      </main>
    </div>
  );
}
