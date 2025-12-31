import React from "react";
import TitleContent from "../All_Title/TitleContent";

const LongTermCard = React.forwardRef(
  ({ title, icon, description, className }, ref) => {
    return (
      <div
        ref={ref}
        className={`w-[95%] sm:w-[48%] lg:w-[25%] flex flex-col justify-start lg:items-start sm:items-center items-start gap-y-5 px-8 py-8 ${className}`}
      >
        <img src={icon} className="h-20 w-20" />
        <TitleContent
          title={title}
          titleColor="#000000"
          titleSize="text-[20px]"
        />
        <p className="text-[#000000] font-light  leading-relaxed max-w-md text-[20px]">
          {description}
        </p>
      </div>
    );
  }
);

export default LongTermCard;
