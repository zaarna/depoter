import React from "react";
import TitleContent from "../All_Title/TitleContent";

// components/TimelineItem.jsx
const TimelineCard = React.forwardRef(
  ({ title, icon, position, index, isMobile }, ref) => {
    const isTopRow = index < 4;

    return (
      <>
        {isMobile ? (
          <div
            className={`flex md:hidden flex-col w-full ${
              index % 2 == 0 ? "items-start" : "items-end"
            }`}
            ref={ref}
          >
            <div className="w-1/2 text-center">
              <img src={icon} alt="" className="h-20 w-20 mx-auto" />
              <Text title={title} />
            </div>
          </div>
        ) : (
          <div
            className="hidden md:flex flex-col items-center w-[22%]  justify-center text-center gap-y-0 "
            ref={ref}
          >
            {isTopRow ? (
              <>
                <Text title={title} />
                <Image icon={icon} isTopRow={isTopRow} />
              </>
            ) : (
              <>
                <Image icon={icon} isTopRow={isTopRow} />
                <Text title={title} />
              </>
            )}
          </div>
        )}
      </>
    );
  },
);

function Text({ title }) {
  return (
    <h3 className="text-[20px] md:text-[20px] font-semibold text-[#000000] mb-4">
      {title}
    </h3>
  );
}

function Image({ icon, isTopRow }) {
  return (
    <img
      src={icon}
      alt=""
      className={`${
        isTopRow
          ? "md:mb-4 md:mt-5 updownAnimated"
          : "md:mt-4 md:mb-5 downupAnimated"
      } w-30 h-30`}
    />
  );
}

TimelineCard.displayName = "TimelineCard";
export default TimelineCard;
