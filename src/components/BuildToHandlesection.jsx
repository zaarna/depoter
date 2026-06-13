"use client";
import React from "react";
import { titleContentConfig } from "@/config/titleContentConfig";
import { services } from "@/data/home";
import TitleContent from "./ReusableComponent/All_Title/TitleContent";
import BuildToHandleCard from "./ReusableComponent/BuildToHandleCard/BuildToHandleCard";
import HealthIcon from "./ReusableComponent/Icons/HealthIcon";
import HealthHoverIcon from "./ReusableComponent/Icons/HealthHoverIcon";
import BeautyIcon from "./ReusableComponent/Icons/BeautyIcon";
import ApparelIcon from "./ReusableComponent/Icons/ApparelIcon";
import PetsIcon from "./ReusableComponent/Icons/PetsIcon";
import HomeIcon from "./ReusableComponent/Icons/HomeIcon";
import HomeHoverIcon from "./ReusableComponent/Icons/HomeHoverIcon";
import FoodIcon from "./ReusableComponent/Icons/FoodIcon";
import FoodHoverIcon from "./ReusableComponent/Icons/FoodHoverIcon";
import SportIcon from "./ReusableComponent/Icons/SportIcon";

function BuildToHandlesection({ sectionKey = [] }) {
  const industries = [
    {
      id: 1,
      icon: HealthIcon,
      hoverIcon: HealthHoverIcon,
      title: "Health & Wellness",
      description:
        "Fast, secure fulfillment for supplements, hygiene kits, and wellness products.",
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
    },
    {
      id: 2,
      icon: BeautyIcon,
      title: "Beauty & Personal Care",
      description:
        "Careful handling and quick shipping for cosmetics, skincare, and grooming items.",
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
    },
    {
      id: 3,
      icon: ApparelIcon,
      title: "Apparel & Accessories",
      description:
        "Neat packing and smooth delivery for clothing, shoes, and accessories.",
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
      desktopclass: "dark",
      column: 2,
      marginTop: "mt-25",
    },
    {
      id: 4,
      icon: PetsIcon,
      title: "Pets",
      description:
        "Reliable fulfillment for pet food, toys, and everyday pet care items.",
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
    },
    {
      id: 5,
      icon: HomeIcon,
      hoverIcon: HomeHoverIcon,
      title: "Home Goods",
      description:
        "Efficient fulfillment for furniture, home decor, and daily-use essentials.",
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
      desktopclass: "yellow",
      column: 1,
      marginTop: "mt-0",
    },
    {
      id: 6,
      icon: FoodIcon,
      hoverIcon: FoodHoverIcon,
      title: "Food & Beverage",
      description:
        "Safe storage and timely delivery for packaged snacks, drinks, and more.",
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
    },
    {
      id: 7,
      icon: SportIcon,
      title: "Sports, Toys & Games",
      description:
        "Quick dispatch for active gear, kids' toys, and high-volume seasonal orders.",
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
    },
  ];

  const columnCards = [
    industries.filter((cat) => cat.column === 0),
    industries.filter((cat) => cat.column === 1),
    industries.filter((cat) => cat.column === 2),
  ];

  const tc =
    titleContentConfig[sectionKey] || titleContentConfig["buildtohandle"];
  return (
    <section className="py-8 md:py-16 buildtohandle relative overflow-hidden">
      <div className="container">
        <div className="grid text-center relative z-10">
          <TitleContent {...tc} />
        </div>
        <div className="mt-6 md:mt-12 relative">
          <div className="lg:hidden flex flex-col gap-6">
            {industries.map((category, index) => (
              <BuildToHandleCard key={index} industry={category} />
            ))}
          </div>

          {/* Tablet and Desktop: Masonry Layout */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6">
            {columnCards.map((column, columnIndex) => (
              <div key={columnIndex} className="flex flex-col gap-6">
                {column.map((category, cardIndex) => (
                  <div key={cardIndex} className={category.marginTop}>
                    <BuildToHandleCard industry={category} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BuildToHandlesection;
