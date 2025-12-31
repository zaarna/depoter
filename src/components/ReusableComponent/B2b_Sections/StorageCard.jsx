import React from "react";

function StorageCard({ iconsImage, title, description }) {
  return (
    <div
      className="relative bg-[#FFFFFF] rounded-2xl border-2 border-b-4 border-[#978050]  group
    hover:shadow-[0_0_10px_3px_rgba(0,0,0,0.2)]  hover:-translate-y-0.5
    transition-all duration-300 ease-out w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] max-w-sm "
    >
      <div className="absolute top-0 right-8 z-10 group-hover:-top-0.5 transition-transform duration-300 ease-out">
        <img src="/saveicon.svg" className="h-10 w-10" />
      </div>

      <div className="p-8 pt-4">
        <div className="flex justify-center mb-1">
          <img
            src={iconsImage}
            alt={title}
            className="w-32 h-32 object-contain"
          />
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

export default StorageCard;
