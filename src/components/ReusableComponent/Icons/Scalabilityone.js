const Scalabilityone = ({ className, size = "100" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <mask
        id="mask0_2663_25210"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="120"
        height="120"
        style={{ maskType: "alpha" }}
      >
        <rect width="120" height="120" fill="#D9D9D9" />
      </mask>

      <g mask="url(#mask0_2663_25210)">
        <rect x="33" y="33" width="70" height="70" rx="3" fill="white" />

        <path
          d="M113.469 104.374C113.469 109.379 109.411 113.437 104.406 113.437H50.0312C45.0263 113.437 40.9688 109.379 40.9688 104.374V49.999C40.9688 44.994 45.0263 40.9365 50.0312 40.9365H104.406C109.411 40.9365 113.469 44.994 113.469 49.999V104.374Z"
          stroke="black"
          strokeWidth="5.6129"
          strokeMiterlimit="10"
        />

        <path
          d="M86.2812 40.9365V68.124H68.1562V40.9365"
          stroke="black"
          strokeWidth="5.6129"
          strokeMiterlimit="10"
        />

        <path
          d="M27.375 77.1865H11.0625"
          stroke="black"
          strokeWidth="5.6129"
          strokeMiterlimit="10"
        />

        <path
          d="M27.375 95.3115H2"
          stroke="black"
          strokeWidth="5.6129"
          strokeMiterlimit="10"
        />

        <path
          d="M27.375 59.0615H2"
          stroke="black"
          strokeWidth="5.6129"
          strokeMiterlimit="10"
        />

        <path
          d="M67.6812 11.6446L77.2933 21.2568L93.3138 5.23633"
          stroke="black"
          strokeWidth="5.6129"
          strokeMiterlimit="10"
        />
      </g>
    </svg>
  );
};

export default Scalabilityone;
