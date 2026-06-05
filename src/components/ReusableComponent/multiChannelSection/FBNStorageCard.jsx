import React from "react";

function FBNStorageCard({ iconsImage, title, description }) {
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
        <div className="absolute">
          <div className="fbn-dot-1">
            <span className="w-6 h-6 rounded-full border-2 border-[#978050] flex items-center justify-center bg-white flex-shrink-0">
              <span className="w-3 h-3 rounded-full bg-[#FFBE2E]"></span>
            </span>
          </div>
        </div>

        <img src="/fbn-storage-line.svg" alt="Line" className="mx-auto" />
        <p className="w-[200px] h-[90px] mx-auto flex items-center justify-center text-center border-1 rounded-full bg-[#3C2C0B] text-white p-4 text=[18px] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default FBNStorageCard;
