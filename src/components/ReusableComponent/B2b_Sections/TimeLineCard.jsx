import React from "react";
import TitleContent from "../All_Title/TitleContent";

// components/TimelineItem.jsx
const TimelineCard = React.forwardRef(
  ({ title, icon, position, index }, ref) => {
    const isTopRow = index < 4;
    console.log();

    return (
      <div
        className="flex flex-col items-center w-[22%]  justify-center text-center gap-y-0"
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
    );
  }
);

function Text({ title }) {
  return (
    <TitleContent title={title} titleColor="#000000" titleSize="text-[15px]" />
  );
}

function Image({ icon, isTopRow }) {
  return (
    <img
      src={icon}
      alt=""
      className={`${
        isTopRow ? "mb-4 mt-5 updownAnimated" : "mt-4 mb-5 downupAnimated"
      } w-30 h-30`}
    />
  );
}

TimelineCard.displayName = "TimelineCard";
export default TimelineCard;
