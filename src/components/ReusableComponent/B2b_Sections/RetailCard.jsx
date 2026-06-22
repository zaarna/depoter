import React from "react";
import TitleContent from "../All_Title/TitleContent";

function RetailCard({ icon, title, description }) {
  return (
    <div className="group  relative bg-white rounded-2xl p-6 pt-14 shadow-lg hover:shadow-xl transition-all duration-300  flex flex-col hover:bg-[#FFBE2E] ">
      {/* Floating Icon */}
      <div className="absolute -top-16 left-[50%] -translate-x-1/2 bg-[#f5b400] rounded-full flex items-center justify-center shadow-md group-hover:border-3 group-hover:rounded-full  group-hover:border-[#000000] transition-all duration-200">
        <img src={icon} alt="" className="w-28 h-28" />
      </div>

      {/* Content */}
      <h3 className="text-lg text-[24px] w-50 mx-auto font-bold text-center text-gray-900 mb-3 mt-5">
        {title}
      </h3>

      <p className="text-[18px] font-light text-[#000000] text-center leading-relaxed mb-6">
        {description}
      </p>

      <div className="grow" />
      {/* Bottom Accent */}
      <div className="w-[75%] h-1 bg-[#FFBE2E] mx-auto rounded-full group-hover:bg-[#000000] transition-colors duration-300 mb-8" />
    </div>
  );
}
export default RetailCard;
