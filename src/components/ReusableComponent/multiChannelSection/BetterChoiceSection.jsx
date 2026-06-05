"use client";
import React from "react";
import { titleContentConfig } from "@/config/titleContentConfig";
import { services } from "@/data/home";
import TitleContent from "../All_Title/TitleContent";
import BuildToHandleCard from "../BuildToHandleCard/BuildToHandleCard";
import HealthIcon from "../Icons/HealthIcon";
import HealthHoverIcon from "../Icons/HealthHoverIcon";
import BeautyIcon from "../Icons/BeautyIcon";
import ApparelIcon from "../Icons/ApparelIcon";
import PetsIcon from "../Icons/PetsIcon";
import HomeIcon from "../Icons/HomeIcon";
import HomeHoverIcon from "../Icons/HomeHoverIcon";
import FoodIcon from "../Icons/FoodIcon";
import FoodHoverIcon from "../Icons/FoodHoverIcon";
import SportIcon from "../Icons/SportIcon";
import BetterChoiceMultiChannel from "../BetterChoiceCardMultiChannel/BetterChoicecardMultiChannel";

function BetterChoiceSection({ sectionKey = [] }) {
  const industries = [
    {
      id: 1,
      icon: HealthIcon,
      hoverIcon: HealthHoverIcon,
      title: "Health & Wellness",
      description: "End-to-end compliance across Amazon and Noon.   ",
      link: "Explore Health Fulfillment",
      href: "/industries/health",
      // accentColor: "bg-[#FFBE2E]",
      // hoverColor: "bg-white",
      // ContentTitlecolor: "text-black",
      // ContentTitlemobilecolor: "text-[#3C2C0B]",
      // hoveronText: "group-hover:text-black",
      // ContentHover: "group-hover:text-[#3C2C0B]",
      // colorText: "text-[#978050]",
      // mobileColorText: "text-black",
      mobileclass: "yellow",
      desktopclass: "yellow",
      column: 0,
      marginTop: "mt-25",
      icons: "/EtoEAmazon.svg",
    },
    {
      id: 2,
      icon: BeautyIcon,
      title: "Beauty & Personal Care",
      description:
        "Specialists for Seller Central, Vendor Central, and Noon Seller Station.",
      link: "Discover Beauty Logistics",
      href: "/industries/beauty",
      // accentColor: "bg-[#978050]",
      // hoverColor: "bg-[#FFBE2E]",
      // ContentTitlecolor: "text-black",
      // ContentTitlemobilecolor: "text-white",
      // hoveronText: "group-hover:text-[#FFBE2E]",
      // ContentHover: "group-hover:text-white",
      // colorText: "text-[#978050]",
      // mobileColorText: "text-[#FFBE2E]",
      mobileclass: "dark",
      desktopclass: "dark",
      column: 1,
      marginTop: "mt-0",
      icons: "/betterChoiceSpecalist.svg",
    },
    {
      id: 3,
      icon: ApparelIcon,
      title: "Apparel & Accessories",
      description: "Fast, SLA-driven inbound and outbound operations",
      link: "Simplify Apparel Fulfillment",
      href: "/industries/apparel",
      // accentColor: "bg-[#978050]",
      // hoverColor: "bg-[#FFBE2E]",
      // ContentTitlecolor: "text-black",
      // ContentTitlemobilecolor: "text-white",
      // hoveronText: "group-hover:text-[#FFBE2E]",
      // ContentHover: "group-hover:text-white",
      // colorText: "text-[#978050]",
      // mobileColorText: "text-[#FFBE2E]",
      mobileclass: "yellow",
      desktopclass: "yellow",
      column: 2,
      marginTop: "mt-25",
      icons: "/betterChoiceFastSLA.svg",
    },
    {
      id: 4,
      icon: PetsIcon,
      title: "Pets",
      description: "Daily reporting and real-time visibility",
      link: "Ship Pet Supplies",
      href: "/industries/pets",
      // accentColor: "bg-[#978050]",
      // hoverColor: "bg-[#FFBE2E]",
      // ContentTitlecolor: "text-black",
      // ContentTitlemobilecolor: "text-white",
      // hoveronText: "group-hover:text-[#FFBE2E]",
      // ContentHover: "group-hover:text-white",
      // colorText: "text-[#978050]",
      // mobileColorText: "text-[#FFBE2E]",
      mobileclass: "dark",
      desktopclass: "dark",
      column: 0,
      marginTop: "mt-0",
      icons: "/betterChoiceDailyReporting.svg",
    },
    {
      id: 5,
      icon: HomeIcon,
      hoverIcon: HomeHoverIcon,
      title: "Home Goods",
      description:
        "Integration-ready multi-channel fulfillment services across all channels.",
      link: "Fulfill Home Essentials",
      href: "/industries/home",
      // accentColor: "bg-[#FFBE2E]",
      // hoverColor: "bg-white",
      // ContentTitlecolor: "text-black",
      // ContentTitlemobilecolor: "text-[#3C2C0B]",
      // hoveronText: "group-hover:text-black",
      // ContentHover: "group-hover:text-[#3C2C0B]",
      // colorText: "text-[#978050]",
      // mobileColorText: "text-black",
      mobileclass: "yellow",
      desktopclass: "dark",
      column: 1,
      marginTop: "mt-0",
      icons: "/betterChoiceIntegration.svg",
    },
    {
      id: 6,
      icon: FoodIcon,
      hoverIcon: FoodHoverIcon,
      title: "Food & Beverage",
      description:
        "Scalable capacity for high-volume and multi-marketplace growth.",
      link: "Enable Food Fulfillment",
      href: "/industries/food",
      // accentColor: "bg-[#FFBE2E]",
      // hoverColor: "bg-white",
      // ContentTitlecolor: "text-black",
      // ContentTitlemobilecolor: "text-[#3C2C0B]",
      // hoveronText: "group-hover:text-black",
      // ContentHover: "group-hover:text-[#3C2C0B]",
      // colorText: "text-[#978050]",
      // mobileColorText: "text-black",
      mobileclass: "dark",
      desktopclass: "yellow",
      column: 2,
      marginTop: "mt-0",
      icons: "/betterChoiceMultiMarket.svg",
    },
    {
      id: 7,
      icon: SportIcon,
      title: "Sports, Toys & Games",
      description:
        "Coverage across India, UAE, KSA, Egypt, and global regions.",
      link: "Speed Up Shipping",
      href: "/industries/sports",
      // accentColor: "bg-[#978050]",
      // hoverColor: "bg-[#FFBE2E]",
      // ContentTitlecolor: "text-black",
      // ContentTitlemobilecolor: "text-white",
      // hoveronText: "group-hover:text-[#FFBE2E]",
      // ContentHover: "group-hover:text-white",
      // colorText: "text-[#978050]",
      // mobileColorText: "text-[#FFBE2E]",
      mobileclass: "yellow",
      desktopclass: "dark",
      column: 1,
      marginTop: "mt-0",
      icons: "/betterChoiceDistibution.svg",
    },
    {
      id: 8,
      icon: SportIcon,
      title: "Sports, Toys & Games",
      description:
        "Trusted e-commerce logistics provider and 3PL e-commerce partner.",
      link: "Speed Up Shipping",
      href: "/industries/sports",
      // accentColor: "bg-[#978050]",
      // hoverColor: "bg-[#FFBE2E]",
      // ContentTitlecolor: "text-black",
      // ContentTitlemobilecolor: "text-white",
      // hoveronText: "group-hover:text-[#FFBE2E]",
      // ContentHover: "group-hover:text-white",
      // colorText: "text-[#978050]",
      // mobileColorText: "text-[#FFBE2E]",
      mobileclass: "dark",
      desktopclass: "yellow",
      icons: "/betterChoiceInsurance.svg",
    },
  ];

  const tc =
    titleContentConfig[sectionKey] ||
    titleContentConfig["betterchoicemultichannel"];
  return (
    <section className="py-8 md:py-16 bg-[#FFF7E4] relative overflow-hidden">
      <div className="container">
        <div className="grid text-center relative z-10">
          <TitleContent {...tc} />
        </div>
        <div className="mt-6 md:mt-12 relative">
          <div className="lg:hidden flex flex-col gap-6">
            {industries.map((category, index) => (
              //   <>
              <div key={index}>
                <BetterChoiceMultiChannel industry={category} />
              </div>
              //   </>
            ))}
          </div>

          {/* Tablet and Desktop: Masonry Layout */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-6">
            {industries.map((category, index) => (
              <div key={index}>
                <BetterChoiceMultiChannel industry={category} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BetterChoiceSection;
