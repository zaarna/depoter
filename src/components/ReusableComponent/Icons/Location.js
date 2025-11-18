

const LocationIcon = ({ size = 30, color = "black" }) => {
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
      <mask
        id="mask0"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="5"
        y="5"
        width="20"
        height="20"
      >
        <path d="M5 5H25V25H5V5Z" fill="white" />
      </mask>
      <g mask="url(#mask0)">
        <path
          d="M9.14062 11.4453C9.14062 8.21465 11.7693 5.58594 15 5.58594C18.2307 5.58594 20.8594 8.21465 20.8594 11.4453C20.8594 13.9684 19.9513 14.6554 15 21.3379C10.0596 14.6701 9.14062 13.9689 9.14062 11.4453Z"
          stroke={color}
          strokeMiterlimit="10"
        />
        <path
          d="M15 13.7891C13.7077 13.7891 12.6562 12.7377 12.6562 11.4453C12.6562 10.153 13.7077 9.10156 15 9.10156C16.2923 9.10156 17.3438 10.153 17.3438 11.4453C17.3438 12.7377 16.2923 13.7891 15 13.7891Z"
          stroke={color}
          strokeMiterlimit="10"
        />
        <path
          d="M16.1675 19.7731C18.8442 19.9896 20.8594 20.9358 20.8594 22.0703C20.8594 23.3647 18.2361 24.4141 15 24.4141C11.764 24.4141 9.14062 23.3647 9.14062 22.0703C9.14062 20.9358 11.1558 19.9896 13.8325 19.7731"
          stroke={color}
          strokeMiterlimit="10"
        />
      </g>
    </svg>
  );
};

export default LocationIcon;
