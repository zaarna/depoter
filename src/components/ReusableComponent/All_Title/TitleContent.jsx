import React from "react";

function TitleContent({
  title = "",
  highlight = "",
  content = "",
  titleTag: TitleTag = "h2",
  contentTag: ContentTag = "p",
  titleSize = "text-clamp(1.5rem, 0.9815rem + 2.5926vw, 3.25rem)",
  contentSize = "text-[1.25rem]",
  titleColor = "#212121",
  highlightColor = "#978050",
  contentColor = "#4A4A4A",
  contentAlign = "center",
  contentWidth = "w-full",
  className = "",
}) {
  // If highlight exists, replace it inside the title text
  const renderTitle = () => {
    const safeTitle = title.replace(/\n/g, "<br />"); // convert \n to <br />

    if (!highlight) {
      return <span dangerouslySetInnerHTML={{ __html: safeTitle }} />;
    }

    const safeHighlight = highlight.replace(/\n/g, "<br />");
    const parts = safeTitle.split(safeHighlight);

    return (
      <span>
        <span dangerouslySetInnerHTML={{ __html: parts[0] ?? "" }} />
        <span
          style={{ color: highlightColor }}
          dangerouslySetInnerHTML={{ __html: safeHighlight }}
        />
        <span
          dangerouslySetInnerHTML={{ __html: parts.slice(1).join(safeHighlight) }}
        />
      </span>
    );
  };

  const contentAlignClass =
    {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    }[contentAlign] || "text-left";

  const contentWidthClass = contentWidth || "w-full";

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <TitleTag
        className={`${titleSize} font-semibold`}
        style={{ color: titleColor }}
      >
        {renderTitle()}
      </TitleTag>

      <ContentTag
        className={`${contentSize} mx-auto leading-relaxed ${contentAlignClass} ${contentWidthClass}`}
        style={{ color: contentColor, fontSize: contentSize }}
      >
        {content}
      </ContentTag>
    </div>
  );
}

export default TitleContent;
