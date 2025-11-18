const TwitterIcon = ({ size = 30 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_1590_11384"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="30"
        height="30"
      >
        <rect width="30" height="30" fill="#D9D9D9" />
      </mask>

      <g mask="url(#mask0_1590_11384)" />

      <g clipPath="url(#clip0_1590_11384)">
        <path
          d="M21.4608 5H24.8946L17.3946 13.6295L26.25 25.3313H19.2922L13.8705 18.238L7.63554 25.3313H4.20181L12.244 16.1145L3.75 5H10.8886L15.8133 11.506L21.4608 5ZM20.241 23.253H22.1386L9.8494 6.94277H7.77108L20.241 23.253Z"
          fill="black"
        />
      </g>

      <defs>
        <clipPath id="clip0_1590_11384">
          <rect
            width="22.5"
            height="20.3313"
            fill="white"
            transform="translate(3.75 5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default TwitterIcon;
