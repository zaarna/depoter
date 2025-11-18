"use client";

import React from "react";
import Link from "next/link";

const Button = ({
  children = "Click Me",
  href,
  onClick,
  type = "button",
  className = "",
}) => {
  const buttonClasses = `btn-radial transition-all duration-500 ${className}`;

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
