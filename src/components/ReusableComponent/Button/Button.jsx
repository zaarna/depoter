"use client";

import React from "react";
import Link from "next/link";

const Button = ({
  children = "Click Me",
  href,
  onClick,
  type = "button",
  className = "",
  variant = "black",
}) => {
  let variantStyle = "";
  if (variant == "black") {
    variantStyle = "bg-[#212121] text-[#FFBE2E] black";
  }
  const buttonClasses = `btn-radial transition-all duration-500 ${variantStyle} ${className}`;

  // If href exists → render link button
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        <span>{children}</span>
      </Link>
    );
  }

  // Otherwise → normal button
  return (
    <button type={type} onClick={onClick} className={buttonClasses}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
