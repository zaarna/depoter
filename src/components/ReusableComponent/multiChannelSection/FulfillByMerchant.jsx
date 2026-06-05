import React from "react";
import MerchantFulFillmentCard from "./MerchantFulFillmentCard";

export default function FulfillByMerchant() {
  const industries = [
    {
      id: 1,
      title: "Amazon EasyShip",
      icons: "/Merchant_1.svg",
      rotate: "rotate-12",
      list: [
        "Pickup scheduling",
        "Label printing and manifest management",
        "Order packaging and dispatch",
        "Tracking and exception handling",
      ],
    },
    {
      id: 2,
      title: "Self-Ship",
      icons: "/Merchant_2.svg",
      rotate: "rotate-6",
      list: [
        "Order picking and packing",
        "AWB creation",
        "Courier allocation and dispatch",
        "Delivery updates and performance reports",
      ],
    },
  ];
  return (
    <>
      <div className="text-center w-full mt-25">
        <h2 className="text-black font-bold mb-25" style={{ fontSize: "30px" }}>
          Fulfillment by Merchant (FBM)
        </h2>
        <div className="mt-6 md:mt-12 relative">
          <div className="lg:hidden flex flex-col gap-6">
            {industries.map((category, index) => (
              //   <>
              <div key={index}>
                <MerchantFulFillmentCard industry={category} />
              </div>
              //   </>
            ))}
          </div>

          {/* Tablet and Desktop: Masonry Layout */}
          <div className="hidden lg:flex gap-5">
            {/* Even Data Section */}
            <div className="flex flex-col lg:grid-cols-6 gap-x-25 flex-1 gap-y-9">
              {industries.map((category, index) => (
                <MerchantFulFillmentCard key={index} industry={category} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
