import InnerHeroSection from "@/components/ReusableComponent/Inner_Hero/InnerHeroSection";

export default function FulfillmentCenterPage() {
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
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex flex-col min-h-screen w-full  ">
        <InnerHeroSection />
        {/* <NumbersGradieantCards data={data} /> */}
        {/* <HandleEveryOrder /> */}
        {/* <AmazonSection /> */}
        {/* <FulfillByMerchant /> */}
        {/* <VendorCentralFulfillment /> */}
        {/* <SeamlessNoonOrder /> */}
        {/* <FBNInboundServices /> */}
        {/* <ReturnNExchange /> */}
        {/* <TestimonialSection /> */}
      </main>
    </div>
  );
}
