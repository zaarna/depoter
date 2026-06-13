import InnerHeroSection from "@/components/ReusableComponent/Inner_Hero/InnerHeroSection";
import AmazonSection from "@/components/ReusableComponent/multiChannelSection/AmazonSection";
import BetterChoiceSection from "@/components/ReusableComponent/multiChannelSection/BetterChoiceSection";
import FBNInboundServices from "@/components/ReusableComponent/multiChannelSection/FBNInboundServices";
import FulfillByMerchant from "@/components/ReusableComponent/multiChannelSection/FulfillByMerchant";
import HandleEveryOrder from "@/components/ReusableComponent/multiChannelSection/HandleEveryOrder";
import ReturnNExchange from "@/components/ReusableComponent/multiChannelSection/ReturnNExchange";
import SeamlessNoonOrder from "@/components/ReusableComponent/multiChannelSection/SeamlessNoonOrder";
import VendorCentralFulfillment from "@/components/ReusableComponent/multiChannelSection/VendorCentralFulfillment";
import TestimonialSection from "@/components/TestimonialSection";

import { testimonialsMultichannel } from "@/data/home";

export default function multiChannelPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex flex-col min-h-screen w-full  ">
        <InnerHeroSection />
        <BetterChoiceSection />
        <HandleEveryOrder />
        <AmazonSection />
        <FulfillByMerchant />
        <VendorCentralFulfillment />
        <SeamlessNoonOrder />
        <FBNInboundServices />
        <ReturnNExchange />
        <TestimonialSection testimonials={testimonialsMultichannel} />
      </main>
    </div>
  );
}
