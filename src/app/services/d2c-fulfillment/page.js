import BuiltHandleService from "@/components/d2cPageSection/BuiltHandleService";
import BusinessInSync from "@/components/d2cPageSection/BusinessInSync";
import Crossdocking from "@/components/d2cPageSection/Crossdocking";
import D2cFulfillmentCenter from "@/components/d2cPageSection/D2cFulfillmentCenter";
import EasyReturns from "@/components/d2cPageSection/EasyReturns";
import FastAndFlexible from "@/components/d2cPageSection/FastAndFlexible";
import WhyChooseDepotter from "@/components/d2cPageSection/WhyChooseDepotter";
import InnerHeroSection from "@/components/ReusableComponent/Inner_Hero/InnerHeroSection";
import KeyMetrics from "@/components/ReusableComponent/Inner_Hero/KeyMetrics";
import TestimonialSection from "@/components/TestimonialSection";
import { testimonialsd2c } from "@/data/home";

export default function d2cPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex flex-col min-h-screen w-full  ">
        <InnerHeroSection bottomSection={<KeyMetrics />} />
        <BuiltHandleService />
        <D2cFulfillmentCenter />
        <EasyReturns />
        <FastAndFlexible />
        <BusinessInSync />
        <Crossdocking />
        <WhyChooseDepotter />
        <TestimonialSection testimonials={testimonialsd2c} />
      </main>
    </div>
  );
}
