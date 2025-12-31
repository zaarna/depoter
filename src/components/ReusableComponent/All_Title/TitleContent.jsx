import React from "react";

function TitleContent({
  title = "",
  highlight = "",
  content = "",
  titleTag: TitleTag = "h2",
  contentTag: ContentTag = "p",
  titleSize = "text-clamp(1.5rem, 0.9815rem + 2.5926vw, 3.25rem)",
  contentSize = "text-[1rem]",
  titleColor = "#212121",
  highlightColor = "#978050",
  contentColor = "#4A4A4A",
  className = "",
}) {
  // If highlight exists, replace it inside the title text
  const renderTitle = () => {
    const safeTitle = title.replace(/\n/g, "<br />"); // convert \n to <br />

    if (!highlight) {
      return <span dangerouslySetInnerHTML={{ __html: safeTitle }} />;
    }

    const safeHighlight = highlight.replace(/\n/g, "<br />");
    const parts = safeTitle.split(highlight);

    return (
      <span>
        <span dangerouslySetInnerHTML={{ __html: parts[0] }} />
        <span style={{ color: highlightColor }}>{highlight}</span>
        <span dangerouslySetInnerHTML={{ __html: parts[1] }} />
      </span>
    );
  };

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <TitleTag
        className={`${titleSize} font-semibold`}
        style={{ color: titleColor }}
      >
        {renderTitle()}
      </TitleTag>

      <ContentTag
        className={`${contentSize} leading-relaxed`}
        style={{ color: contentColor }}
      >
        {content}
      </ContentTag>
    </div>
  );
}

export default TitleContent;
