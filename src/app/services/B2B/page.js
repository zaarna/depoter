import InnerHeroSection from "@/components/ReusableComponent/Inner_Hero/InnerHeroSection";
import Link from "next/link";

export default function b2cPage() {
  return (
    <div className="flex min-h-screen items-center justify-center dark:bg-black">
      <main className="flex flex-col min-h-screen w-full bg-white dark:bg-black">
        <InnerHeroSection />
      </main>
    </div>
  );
}
