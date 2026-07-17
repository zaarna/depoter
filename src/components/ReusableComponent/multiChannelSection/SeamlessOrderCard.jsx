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
        <div className="seamless-order-card mt-25 ms-15 re">
          <p className="my-auto">
            FBN is <b>Noon’s</b> warehouse-based fulfillment model, where Noon
            manages <b>storage, picking, packing,</b> and{" "}
            <b> last-mile delivery.</b> We take care of inbound operations,
            inventory management, and marketplace compliance to keep your Noon
            fulfillment running smoothly and your products always ready to sell.
          </p>
        </div>
      </div>
      <div className="seamless-order-lines hidden lg:block ">
        <div className="line-1">
          <img src="/line_254.svg" alt="line" className="w-50" />
        </div>
        <div className="line-2">
          <img src="/line_255.svg" alt="line" className="w-42" />
        </div>
        <div className="line-3">
          <img src="/line_256.svg" alt="line" className="w-35" />
        </div>
        <div className="line-4">
          <img src="/line_259.svg" alt="line" className="w-42" />
        </div>
        <div className="line-5">
          <img src="/line_258.svg" alt="line" className="w-50" />
        </div>
        <div className="polygone block ">
          <img src="/Polygone-brown.svg" alt="" className="h-60" />
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
