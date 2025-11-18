const FacebookIcon = ({ size = 30 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_1590_11290"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="30"
        height="30"
      >
        <rect width="30" height="30" fill="#D9D9D9" />
      </mask>

      <g mask="url(#mask0_1590_11290)">
        <path
          d="M12.0949 25.4363V15.5442H8.75V11.689H12.0949V8.84594C12.0949 5.54657 14.1197 3.75 17.0771 3.75C18.4937 3.75 19.7112 3.85497 20.066 3.90188V7.34992L18.0149 7.35084C16.4065 7.35084 16.0951 8.11148 16.0951 9.22766V11.689H19.931L19.4315 15.5442H16.0951V25.4363H12.0949Z"
          fill="#212121"
        />
      </g>
    </svg>
  );
};

export default FacebookIcon;
