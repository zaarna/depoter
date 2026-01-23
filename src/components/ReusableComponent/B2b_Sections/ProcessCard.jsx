function ProcessCard({ index, icon, title, description, align = "left" }) {
  return (
    <div
      className={`relative ${align === "right" ? "text-left" : "text-left"}`}
    >
      {/* Background Index */}
      <span
        className="
    absolute
    top-3
    md:-top-3
    right-0 
    font-bold 
    text-[#0000000D] 
    select-none
    text-[clamp(75px,6vw,88px)]
    leading-none
  "
      >
        {index}
      </span>

      {/* Icon */}
      <div className="mb-5">
        <img src={icon} alt={title} className="w-auto h-45" />
      </div>

      {/* Title */}
      <h3
        className="
      font-bold 
      text-[#212121] 
      mb-3
      text-[clamp(20px,2vw,26px)]
      leading-[1.25]
    "
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="
      text-[#212121BF]
      text-[clamp(15px,1.1vw,18px)]
      leading-[1.7]
    "
      >
        {description}
      </p>
    </div>
  );
}

export default ProcessCard;
