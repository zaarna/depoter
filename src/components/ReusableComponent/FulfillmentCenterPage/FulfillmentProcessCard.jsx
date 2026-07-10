import React from "react";

function FulfillmentProcessCard({ iconsImage, title, description, background = "bg-[#FFFFFF]", Margin = "-mt-4" }) {
  return (
    <div className={`relative ${background} rounded-2xl border-2 border-[#978050] group md:w-[calc(50%-12px)] lg:w-[calc(28%-18px)] max-w-sm`}>
      <div className="p-2 pt-4">
        <div className="flex justify-center mb-1">
          <div
            className={`h-30 w-20 ${Margin} mb-9 flex items-end justify-center`}
          // style={{
          //   background:
          //     "linear-gradient(180deg, #FFF8E1 0%, #F5B52E 60%, rgba(245,181,46,0.15) 100%)",
          // }}
          >
            <img src={iconsImage} className="block mx-auto" alt="" />
          </div>
        </div>

        <h3 className="text-2xl font-bold text-[#212121] text-center mb-4">
          {title}
        </h3>

        <p className="text-[#212121] text-center leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default FulfillmentProcessCard;
