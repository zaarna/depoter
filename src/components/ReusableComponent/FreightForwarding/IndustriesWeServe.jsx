"use client";
import React from "react";
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
import { titleContentConfig } from "@/config/titleContentConfig";
import TitleContent from "../All_Title/TitleContent";
import BuildToHandleCard from "../BuildToHandleCard/BuildToHandleCard";
import IndustriesWeServeCard from "./IndustriesWeServeCard";
import FoodPerishableGoodsIcon from "../Icons/FoodPerishableGoodsIcon";
import FoodPerishableGoodsHoverIcon from "../Icons/FoodPerishableGoodsHoverIcon";
import ManufacturingIcon from "../Icons/ManufacturingIcon";
import ConstructionIcon from "../Icons/ConstructionIcon";
import ECommarceIcon from "../Icons/ECommarceIcon";
import ECommarceHoverIcon from "../Icons/ECommarceHoverIcon";
import ElectronicsIcon from "../Icons/ElectronicsIcon";
import ElectronicsHoverIcon from "../Icons/ElectronicsHoverIcon";
import AutomativeIcon from "../Icons/AutomativeIcon";

function IndustriesWeServe({ sectionKey = [] }) {
  const industries = [
    {
      id: 1,
      icon: FoodPerishableGoodsIcon,
      hoverIcon: FoodPerishableGoodsHoverIcon,
      title: "Health & Wellness",
      description:
        "Fast, secure fulfillment for supplements, hygiene kits, and wellness products.",
      link: "Explore Health Fulfillment",
      href: "/industries/health",
      mobileclass: "yellow",
      desktopclass: "yellow",
      column: 0,
      marginTop: "mt-55",
    },
    {
      id: 2,
      icon: ManufacturingIcon,
      // icon: "/industries-we-serve-icon-1.svg",
      title: "Beauty & Personal Care",
      description:
        "Careful handling and quick shipping for cosmetics, skincare, and grooming items.",
      link: "Discover Beauty Logistics",
      href: "/industries/beauty",
      mobileclass: "dark",
      desktopclass: "dark",
      column: 1,
      marginTop: "mt-0",
    },
    {
      id: 3,
      icon: ECommarceIcon,
      hoverIcon: ECommarceHoverIcon,
      title: "Apparel & Accessories",
      description:
        "Neat packing and smooth delivery for clothing, shoes, and accessories.",
      link: "Simplify Apparel Fulfillment",
      href: "/industries/apparel",
      mobileclass: "yellow",
      desktopclass: "yellow",
      column: 2,
      marginTop: "mt-55",
    },
    {
      id: 4,
      icon: ConstructionIcon,
      title: "Pets",
      description:
        "Reliable fulfillment for pet food, toys, and everyday pet care items.",
      link: "Ship Pet Supplies",
      href: "/industries/pets",
      mobileclass: "dark",
      desktopclass: "dark",
      column: 0,
      marginTop: "mt-0",
    },
    {
      id: 5,
      icon: "/industries-we-serve-icon-5.svg",
      title: "Home Goods",
      description:
        "Efficient fulfillment for furniture, home decor, and daily-use essentials.",
      link: "Fulfill Home Essentials",
      // href: "/industries/home",
      mobileclass: "yellow",
      desktopclass: "yellow",
      column: 1,
      marginTop: "mt-0",
    },
    {
      id: 6,
      icon: AutomativeIcon,
      title: "Food & Beverage",
      description:
        "Safe storage and timely delivery for packaged snacks, drinks, and more.",
      link: "Enable Food Fulfillment",
      href: "/industries/food",
      mobileclass: "dark",
      desktopclass: "dark",
      column: 2,
      marginTop: "mt-0",
    },
    {
      id: 7,
      icon: ElectronicsIcon,
      hoverIcon: ElectronicsHoverIcon,
      title: "Sports, Toys & Games",
      description:
        "Quick dispatch for active gear, kids' toys, and high-volume seasonal orders.",
      link: "Speed Up Shipping",
      href: "/industries/sports",
      mobileclass: "yellow",
      desktopclass: "yellow",
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
              <>
                <IndustriesWeServeCard key={index} industry={category} />
              </>
            ))}
          </div>

          {/* Tablet and Desktop: Masonry Layout */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6">
            {columnCards.map((column, columnIndex) => (
              <div key={columnIndex} className="flex flex-col gap-6">
                {column.map((category, cardIndex) => (
                  <div key={cardIndex} className={category.marginTop}>
                    <IndustriesWeServeCard industry={category} />
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

export default IndustriesWeServe;
