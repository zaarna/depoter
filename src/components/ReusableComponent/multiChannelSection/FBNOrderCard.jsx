import React from "react";

function FBNOrderCard({ iconsImage, title, description }) {
  return (
    <div className="relative rounded-2xl group md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] max-w-sm overflow-hidden">
      <div className="p-8 pt-4">
        <div className="flex justify-center mt-2 ">
          <div className="flex items-center justify-center">
            <img
              src={iconsImage}
              alt={title}
              className="w-40 h-40 object-contain"
            />
          </div>
        </div>

        <img
          src="/fbn-order-vertical-line.svg"
          alt="Line"
          className="mx-auto"
        />
        <div className="fbn-order-description">
          <p className="mx-auto py-2 px-4 w-50">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default FBNOrderCard;
