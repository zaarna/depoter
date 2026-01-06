"use client";

import React from "react";
import Button from "../Button/Button";
import BannerHeading from "../All_Title/BannerHeading";
import { usePathname } from "next/navigation";
import { heroConfig } from "@/config/heroConfig";

function InnerHeroSection({ bottomSection }) {
  const pathname = usePathname();
  const selectedHero = heroConfig[pathname] || heroConfig["/"];
  const heading = selectedHero.heading;
  const button = selectedHero.button;
  return (
    <section
      className={`relative overflow-hidden min-h-[700px] md:min-h-[900px] h-auto ${selectedHero.className}`}
    >
      <div className="container">
        <div className="flex flex-col items-center md:items-start w-full max-w-[571px] pt-0 md:pt-[310px] relative z-10">
          <BannerHeading
            title={heading.title}
            highlight={heading.highlight}
            description={heading.description}
            titleColor={heading.titleColor || "#212121"}
            highlightColor={heading.highlightColor || "#978050"}
            descriptionColor={heading.descriptionColor || "#212121"}
          />

          <div className="pt-8">
            <Button
              href={button.link}
              className={button.className}
              variant="black"
            >
              {button.text}
            </Button>
          </div>
        </div>
      </div>

      {bottomSection && (
        <div className="absolute bottom-0 right-0 z-10 w-full">
          {bottomSection}
        </div>
      )}
    </section>
  );
}

export default InnerHeroSection;
