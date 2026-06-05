import React from "react";
import VendorFulfillmentCard from "./VendorFulfillmentCard";

export default function VendorCentralFulfillment() {
  return (
    <>
      <div className="text-center w-full mt-20 pb-15 bg-amber-50">
        <h2 className="text-black font-bold mt-20" style={{ fontSize: "30px" }}>
          Vendor Central Fulfillment
        </h2>
        <div className="mt-6 md:mt-12 relative">
          <div className="lg:hidden flex flex-col">
            {/* {industries.map((category, index) => ( */}
            {/* //   <> */}
            <div>
              <VendorFulfillmentCard />
            </div>
            {/* //   </>
            ))} */}
          </div>

          {/* Tablet and Desktop: Masonry Layout */}
          <div className="hidden lg:flex">
            {/* Even Data Section */}
            <div className="flex flex-col flex-1">
              {/* {industries.map((category, index) => ( */}
              <VendorFulfillmentCard />
              {/* //   ))} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
