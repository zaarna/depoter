import React from "react";
import TitleContent from "../All_Title/TitleContent";
import { titleContentConfig } from "@/config/titleContentConfig";

function FeatureCard({ image, alt, title, description }) {
  const tc = titleContentConfig["higherduty"];
  return (
    <div className="w-full md:w-[45%] px-6 md:px-8">
      <div className="flex flex-col items-center text-center">
        <img
          src={image}
          alt={alt}
          className="w-45 h-45 mb-4 md:mb-8 object-contain"
        />
        <TitleContent
          title={title}
          titleColor="#000000"
          titleSize="text-[24px]"
        />
        <p className="text-[#000000] font-light  leading-relaxed max-w-md text-[20px]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default FeatureCard;
