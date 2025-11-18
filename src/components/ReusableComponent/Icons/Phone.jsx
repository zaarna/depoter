import React from "react";

const PhoneIcon = ({ size = 30, color = "black" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="15" cy="15" r="14.5" stroke={color} />
      <circle cx="15" cy="15" r="8" fill="#FFBE2E" />

      <g clipPath="url(#clip0_2049_3179)">
        <mask
          id="mask0_2049_3179"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="6"
          y="6"
          width="18"
          height="18"
        >
          <path d="M6 6H24V24H6V6Z" fill="white" />
        </mask>

        <g mask="url(#mask0_2049_3179)">
          <path
            d="M6.52734 11.8931C6.52734 10.6275 7.03008 9.41371 7.92505 8.5187C8.85873 7.58502 9.91641 6.52735 9.91641 6.52735L13.3055 11.0461C13.3055 11.0461 12.115 12.2365 11.2799 13.0716C11.0681 13.2835 10.9492 13.5707 10.9492 13.8703C10.9492 14.17 11.0681 14.4572 11.2799 14.669C12.3551 15.7442 14.2558 17.6449 15.331 18.7201C15.5428 18.9319 15.83 19.0508 16.1297 19.0508C16.4293 19.0508 16.7165 18.9319 16.9284 18.7201C17.7635 17.885 18.9539 16.6945 18.9539 16.6945L23.4727 20.0836L21.4813 22.0749C20.5863 22.9699 19.3725 23.4727 18.1069 23.4727H18.1063C16.8408 23.4727 15.627 22.9699 14.732 22.0749C12.9109 20.2539 9.74611 17.0891 7.92505 15.268C7.03008 14.373 6.52734 13.1592 6.52734 11.8937V11.8931Z"
            stroke="black"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>

      <defs>
        <clipPath id="clip0_2049_3179">
          <rect width="18" height="18" fill="white" transform="translate(6 6)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PhoneIcon;
