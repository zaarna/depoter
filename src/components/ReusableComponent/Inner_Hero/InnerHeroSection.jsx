"use client";

import React from "react";
import Button from "../Button/Button";
import BannerHeading from "../All_Title/BannerHeading";
import { usePathname } from "next/navigation";
import { heroConfig } from "@/config/heroConfig";

const RouteData = {
  "/d2c-fulfillment-uae": {
    className: "backgroundcover-d2c",
    paddingTop: "md:pt-[230px]",
    heading: {
      title: "Direct-To-Consumer ",
      highlight: "Fulfillment Service in UAE",
      description:
        "From order capture to last-mile delivery, streamline every step of your direct-to-consumer fulfillment.",
    },
    button: {
      text: "Start Your D2C Journey",
      link: "/#",
      className: "px-6 sm:px-12 py-3.5",
    },
  },

  "/b2b-fulfillment-uae": {
    className: "backgroundcover-b2b",
    paddingTop: "md:pt-[230px]",
    heading: {
      title: "Business-to-Business",
      highlight: "Fulfillment Service in UAE",
      description:
        "Seamless bulk distribution, retailer-ready compliance, and real-time control for growing wholesale and enterprise networks.",
    },
    button: {
      text: "Talk to Our Experts",
      link: "/#",
      className: "px-6 sm:px-12 py-3.5",
    },
  },
};

function InnerHeroSection({ bottomSection }) {
  const pathname = usePathname();
  console.log("====================================");
  console.log(pathname);
  console.log("====================================");
  const cleanPath = pathname.replace(/\/$/, "").toLowerCase();
  const selectedHero =
    RouteData[cleanPath.toLowerCase()] ||
    heroConfig[cleanPath.toLowerCase()] ||
    heroConfig["/"];
  const heading = selectedHero.heading;
  const button = selectedHero.button;
  return (
    <section
      className={`relative overflow-hidden min-h-[700px] sm:min-h-[650px] md:min-h-[900px] h-auto ${selectedHero.className}`}
    >
      <div className="container">
        <div
          className={`flex flex-col items-center md:items-start w-full max-w-[571px] pt-0 ${selectedHero.paddingTop} relative z-10`}
        >
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
