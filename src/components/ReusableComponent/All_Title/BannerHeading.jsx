export default function BannerHeading({
  title,
  highlight,
  description,

  // 🎨 Customizable colors
  titleColor = "#212121",
  highlightColor = "#978050",
  descriptionColor = "#4A4A4A",
  titlealignment = "md:text-left",
}) {
  return (
    <div className={`text-center ${titlealignment}`}>
      {/* Main Heading */}
      <h1
        className="
          font-semibold
          leading-[1.2]
          text-[clamp(1.75rem,1.525rem+1.125vw,2.875rem)] 
        "
        style={{ color: titleColor }}
      >
        {title}{" "}
        {highlight && (
          <span style={{ color: highlightColor }}>{highlight}</span>
        )}
      </h1>

      {/* Description */}
      {description && (
        <p
          className="
            mt-4 
            text-[clamp(1rem,0.8rem+1vw,1.5rem)]
          "
          style={{ color: descriptionColor }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
