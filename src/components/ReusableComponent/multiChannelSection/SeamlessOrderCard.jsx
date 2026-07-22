import React from "react";

export default function SeamlessOrderCard() {
  return (
    <>
      <div className="text-center text-white w-full mt-20 mb-10  z-1 ">
        <h2
          className="font-bold mt-20"
          style={{ fontSize: "30px", fontFamily: "outfit" }}
        >
          Your Products Are Ready to Sell
        </h2>
        <p
          className=" mt-4 mb-10"
          style={{ fontSize: "21px", fontFamily: "outfit" }}
        >
          Fulfilled by Noon (FBN)
        </p>
      </div>

      <div className="mt-6 md:mt-12 ">
        <div className="lg:hidden block flex items-center justify-center mb-10">
          <img src="/Polygone-brown.svg" alt="" className="h-60" />
        </div>
        <div className="flex items-center justify-center ">
          <div className="seamless-order-card">
            <p className="my-auto">
              FBN is <b>Noon’s</b> warehouse-based fulfillment model, where Noon
              manages <b>storage, picking, packing,</b> and{" "}
              <b>last-mile delivery.</b> We take care of inbound operations,
              inventory management, and marketplace compliance to keep your Noon
              fulfillment running smoothly and your products always ready to sell.
            </p>
          </div>

          <div className="polygone hidden lg:block">
            <img
              src="/AmazonCardDesktop.svg"
              alt=""
              className="h-60"
            />
          </div>
        </div>
      </div>
      <div className="seamless-order-lines lg:hidden">
        <div className="line-6">
          <img src="/Vector_7153.svg" alt="line" className="w-10" />
        </div>
        <div className="line-7">
          <img src="/Vector_7154.svg" alt="line" className="w-10" />
        </div>
      </div>
    </>
  );
}
