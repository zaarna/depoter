import React from "react";

function FBNInboundServiceCard({ iconsImage, title, description }) {
  return (
    <div
      className="relative rounded-2xl group transition-all duration-300 ease-out w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] max-w-sm overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 15%, #FFBE2E 100%)",
      }}
    >
      <div className="p-8 pt-4">
        <div className="flex justify-center mt-2 mb-6">
          <div className="flex items-center justify-center">
            <img
              src={iconsImage}
              alt={title}
              className="w-20 h-20 object-contain"
            />
          </div>
        </div>
        <p className="text-[#212121] text-center leading-relaxed text-[18px]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default FBNInboundServiceCard;
