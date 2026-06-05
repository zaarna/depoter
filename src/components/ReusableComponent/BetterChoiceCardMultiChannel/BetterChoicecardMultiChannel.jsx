"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function BetterChoiceMultiChannel({
  variant = "grid",
  industry,
}) {
  const [isMobile, setisMobile] = useState(false);
  useEffect(() => {
    const checkScreen = () => {
      setisMobile(window.innerWidth <= 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <>
      <div
        key={industry.id}
        className={`industry-card better-choice-card-multi-channel`}
      >
        {/* Diagonal Hover Background */}
        {/* <div className="industry-card__hover-bg" /> */}

        {/* Decorative Circles */}
        <div
          className={`better-circle-icon ${isMobile === "mobile" ? industry.mobileclass : industry.desktopclass}`}
        />

        {/* Content */}
        <div className="industry-card__content">
          <div className="industry-card__icon-wrapper group">
            <img src={industry.icons} alt="" />

            {/* {industry.hoverIcon && (
              <industry.hoverIcon
                size={80}
                className="industry-card__icon-hover"
              />
            )} */}
          </div>

          {/* <h3 className="industry-card__title">{industry.title}</h3> */}

          <p className="industry-card__description">{industry.description}</p>

          {/* <Link href={industry.href} className="industry-card__link">
            <span>{industry.link}</span>
            <svg
              className="industry-card__arrow"
              width="23"
              height="18"
              viewBox="0 0 23 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 8.89387C0 9.50287 0.422 9.93687 1.0315 9.93687H16.465L18.973 9.84287L15.1175 13.3584L12.4925 16.0184C12.305 16.2064 12.211 16.4874 12.211 16.7684C12.211 17.3434 12.656 17.7764 13.231 17.7764C13.512 17.7764 13.758 17.6714 13.9925 17.4484L21.7855 9.66787C22.0195 9.44487 22.137 9.17537 22.137 8.89437C22.137 8.60137 22.0195 8.33187 21.7855 8.10937L13.9925 0.327867C13.7575 0.105367 13.512 -0.000133939 13.2305 -0.000133939C12.6565 -0.000133939 12.211 0.433366 12.211 1.01937C12.211 1.28887 12.305 1.56987 12.4925 1.75737L15.1175 4.42937L18.961 7.93337L16.465 7.83937L1.0315 7.83937C0.422 7.83937 0 8.28387 0 8.89387Z"
                fill="currentColor"
              />
            </svg>
          </Link> */}
        </div>
      </div>
    </>
  );
}
