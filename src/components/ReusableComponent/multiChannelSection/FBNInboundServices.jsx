import { titleContentConfig } from "@/config/titleContentConfig";
import React from "react";
import FBNInboundServiceCard from "./FBNInboundServiceCard";
import FBNStorageCard from "./FBNStorageCard";
import FBNOrderCard from "./FBNOrderCard";
import VendorFulfillmentCard from "./VendorFulfillmentCard";
import DirectShipCard from "./DirectShipCard";

function FBNInboundServices({ sectionKey }) {
  const cards = [
    {
      iconsImage: "/fbn-icon-1.svg",
      title: "Dry Storage",
      description: "Shipment creation in Seller Station",
    },
    {
      iconsImage: "/fbn-icon-2.svg",
      title: "Chiller Storage",
      description: "Item preparation and barcode labeling",
    },
    {
      iconsImage: "/fbn-icon-3.svg",
      title: "Frozen Storage",
      description: "Packaging compliance as per Noon standards",
    },
    {
      iconsImage: "/fbn-icon-4.svg",
      title: "Carbohydrate Drinks",
      description: "Carton setup with weight and size validation",
    },
    {
      iconsImage: "/fbn-icon-5.svg",
      title: "Temperature-Controlled (Food)",
      description: "Inbound booking and delivery slot scheduling",
    },
    {
      iconsImage: "/fbn-icon-6.svg",
      title: "Temperature-Controlled (Non-Food)",
      description: "Transport arrangements to Noon fulfillment centers",
    },
    {
      iconsImage: "/fbn-icon-7.svg",
      title: "Dangerous Goods (DG) Storage",
      description: "Receiving follow-up and discrepancy resolution",
    },
  ];

  const storageCards = [
    {
      iconsImage: "/fbn-storage-icon-1.svg",
      title: "Dry Storage",
      description: "Real-time stock monitoring",
    },
    {
      iconsImage: "/fbn-storage-icon-2.svg",
      title: "Chiller Storage",
      description: "Avoiding long-term storage charges",
    },
    {
      iconsImage: "/fbn-storage-icon-3.svg",
      title: "Frozen Storage",
      description: "Inventory ageing reports",
    },
    {
      iconsImage: "/fbn-storage-icon-4.svg",
      title: "Carbohydrate Drinks",
      description: "Fast replenishment workflows",
    },
  ];

  const orderCards = [
    {
      iconsImage: "/fbn-order-icon-1.svg",
      title: "Dry Storage",
      description: "Damage claims handling",
    },
    {
      iconsImage: "/fbn-order-icon-2.svg",
      title: "Chiller Storage",
      description: "Unshipped item management",
    },
    {
      iconsImage: "/fbn-order-icon-3.svg",
      title: "Frozen Storage",
      description: "SLA monitoring",
    },
    {
      iconsImage: "/fbn-order-icon-4.svg",
      title: "Carbohydrate Drinks",
      description: "Performance improvement actions",
    },
  ];
  return (
    <>
      <section className="overflow-hidden fbn-inbound-bg-image">
        <div className="container">
          <div className="grid text-center relative z-10">
            <div className="text-center fbn-services-bg w-full">
              <h2
                className="font-bold mt-10"
                style={{ fontSize: "24px", fontFamily: "outfit" }}
              >
                FBN Inbound Services
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-15">
              {cards.map((card, index) => (
                <FBNInboundServiceCard
                  key={index}
                  iconsImage={card.iconsImage}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>

            <div className="text-center fbn-services-bg w-full ">
              <h2
                className="font-bold mt-10"
                style={{ fontSize: "24px", fontFamily: "outfit" }}
              >
                FBN Storage & Inventory Health
              </h2>
            </div>

            <div className="relative flex flex-wrap justify-center gap-6 mt-15">
              {storageCards.map((card, index) => (
                <FBNStorageCard
                  key={index}
                  iconsImage={card.iconsImage}
                  title={card.title}
                  description={card.description}
                />
              ))}

              <div className="vertical-line-container hidden md:block">
                <img src="/fbn-storage-vertical-line.svg" alt="" />
              </div>
            </div>

            <div className="text-center fbn-services-bg w-full ">
              <h2
                className="font-bold mt-10"
                style={{ fontSize: "24px", fontFamily: "outfit" }}
              >
                FBN Order Fulfillment Support
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mt-15">
              <div className="absolute">
                <div className="order-vertical-line-container hidden lg:flex">
                  <img src="/fbn-order-horizontal-line.svg" alt="" />
                </div>
                <div className="order-horizontal-bottom-container hidden lg:flex">
                  <img src="/fbn-horizontal-line-bottom.svg" alt="" />
                </div>
                <div className="order-dot-1 hidden lg:flex">
                  <span className="w-6 h-6 rounded-full border-2 border-[#978050] flex items-center justify-center bg-white flex-shrink-0">
                    <span className="w-3 h-3 rounded-full bg-[#FFBE2E]"></span>
                  </span>
                </div>
                <div className="order-dot-2 hidden lg:flex">
                  <span className="w-6 h-6 rounded-full border-2 border-[#978050] flex items-center justify-center bg-white flex-shrink-0">
                    <span className="w-3 h-3 rounded-full bg-[#FFBE2E]"></span>
                  </span>
                </div>
                <div className="order-dot-3 hidden lg:flex">
                  <span className="w-6 h-6 rounded-full border-2 border-[#978050] flex items-center justify-center bg-white flex-shrink-0">
                    <span className="w-3 h-3 rounded-full bg-[#FFBE2E]"></span>
                  </span>
                </div>
              </div>

              {orderCards.map((card, index) => (
                <FBNOrderCard
                  key={index}
                  iconsImage={card.iconsImage}
                  title={card.title}
                  description={card.description}
                />
              ))}

              {/* <div className="vertical-line-container hidden lg:flex">
              <img src="/fbn-storage-vertical-line.svg" alt="" />
            </div> */}
            </div>
          </div>
        </div>
      </section>
      <div className="vendor-card-image">
        <div className="container">
          <div className="grid text-center relative z-10">
            <div className="text-center fbn-services-bg w-full">
              <h2
                className="font-bold mt-10"
                style={{ fontSize: "36px", fontFamily: "outfit" }}
              >
                Direct Ship That Actually Scales
              </h2>
              <p className="mt-5 text-lg text-[#3C2C0B] max-w-3xl mx-auto">
                Direct Ship allows sellers to store products in their own
                warehouse while Noon provides the platform, order flow, and
                delivery. We manage end-to-end seller-fulfilled operations to
                meet Noon’s delivery expectations and customer experience
                standards.
              </p>
              <h4 className="text-[24px] mt-20" style={{ fontWeight: 700 }}>
                How We Support Direct Ship Operations
              </h4>
            </div>
          </div>
          <div className="">
            <div className="mt-3 md:mt-5 relative">
              <div className="lg:hidden flex flex-col">
                {/* {industries.map((category, index) => ( */}
                {/* //   <> */}
                <div>
                  <DirectShipCard />
                </div>
                {/* //   </>
                        ))} */}
              </div>

              {/* Tablet and Desktop: Masonry Layout */}
              <div className="hidden lg:flex ">
                {/* Even Data Section */}
                <div className="flex flex-col flex-1 gap-20">
                  {/* {industries.map((category, index) => ( */}
                  <DirectShipCard />
                  {/* //   ))} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FBNInboundServices;
