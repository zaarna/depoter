import React from "react";

const MailIcon = ({ size = 30, color = "black" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="15" cy="15" r="14.5" stroke={color} />

      <g clipPath="url(#clip0_2049_3195)">
        <circle cx="15" cy="15" r="8" fill="#FFBE2E" />

        <mask
          id="mask0_2049_3195"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="6"
          y="5"
          width="18"
          height="19"
        >
          <path d="M6 5H24V24H6V5Z" fill="white" />
        </mask>

        <g mask="url(#mask0_2049_3195)">
          <path
            d="M23.4849 9.93368V19.0468C23.4849 19.2753 23.4534 19.4955 23.3948 19.7019C23.2992 20.0398 23.1319 20.3408 22.9132 20.5811C22.5812 20.9456 22.1315 21.1699 21.6373 21.1699H8.38719C7.9188 21.1699 7.49098 20.9687 7.16505 20.638C6.93854 20.4078 6.76128 20.1151 6.65434 19.7837C6.58012 19.5542 6.53955 19.3057 6.53955 19.0468V9.93368C6.53955 8.76288 7.36843 7.81055 8.38719 7.81055H21.6373C22.656 7.81055 23.4849 8.76288 23.4849 9.93368Z"
            stroke={color}
            strokeMiterlimit="10"
          />

          <path
            d="M23.4849 10.2252L15.2549 15.8967C15.1002 16.0033 14.8997 16.0032 14.7452 15.8964L6.53955 10.2252"
            stroke={color}
            strokeMiterlimit="10"
          />

          <path
            d="M23.2036 20.1719L16.8701 14.7852"
            stroke={color}
            strokeMiterlimit="10"
          />

          <path
            d="M6.93164 20.1719L13.2069 14.8348"
            stroke={color}
            strokeMiterlimit="10"
          />
        </g>
      </g>

      <defs>
        <clipPath id="clip0_2049_3195">
          <rect width="20" height="20" fill="white" transform="translate(5 5)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MailIcon;
