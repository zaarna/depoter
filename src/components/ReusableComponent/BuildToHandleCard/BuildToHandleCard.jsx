"use client";

import Link from "next/link";
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

export default function BuildToHandleCard() {
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
      accentColor: "bg-[#FFBE2E]",
      hoverColor: "bg-white",
      ContentTitlecolor: "text-black",
      ContentTitlemobilecolor: "text-[#3C2C0B]",
      hoveronText: "group-hover:text-black",
      ContentHover: "group-hover:text-[#3C2C0B]",
      colorText: "text-[#978050]",
      mobileColorText: "text-black",
    },
    {
      id: 2,
      icon: BeautyIcon,
      title: "Beauty & Personal Care",
      description:
        "Careful handling and quick shipping for cosmetics, skincare, and grooming items.",
      link: "Discover Beauty Logistics",
      href: "/industries/beauty",
      accentColor: "bg-[#978050]",
      hoverColor: "bg-[#FFBE2E]",
      ContentTitlecolor: "text-black",
      ContentTitlemobilecolor: "text-white",
      hoveronText: "group-hover:text-[#FFBE2E]",
      ContentHover: "group-hover:text-white",
      colorText: "text-[#978050]",
      mobileColorText: "text-[#FFBE2E]",
    },
    {
      id: 3,
      icon: ApparelIcon,
      title: "Apparel & Accessories",
      description:
        "Neat packing and smooth delivery for clothing, shoes, and accessories.",
      link: "Simplify Apparel Fulfillment",
      href: "/industries/apparel",
      accentColor: "bg-[#978050]",
      hoverColor: "bg-[#FFBE2E]",
      ContentTitlecolor: "text-black",
      ContentTitlemobilecolor: "text-white",
      hoveronText: "group-hover:text-[#FFBE2E]",
      ContentHover: "group-hover:text-white",
      colorText: "text-[#978050]",
      mobileColorText: "text-[#FFBE2E]",
    },
    {
      id: 4,
      icon: PetsIcon,
      title: "Pets",
      description:
        "Reliable fulfillment for pet food, toys, and everyday pet care items.",
      link: "Ship Pet Supplies",
      href: "/industries/pets",
      accentColor: "bg-[#978050]",
      hoverColor: "bg-[#FFBE2E]",
      ContentTitlecolor: "text-black",
      ContentTitlemobilecolor: "text-white",
      hoveronText: "group-hover:text-[#FFBE2E]",
      ContentHover: "group-hover:text-white",
      colorText: "text-[#978050]",
      mobileColorText: "text-[#FFBE2E]",
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
      accentColor: "bg-[#FFBE2E]",
      hoverColor: "bg-white",
      ContentTitlecolor: "text-black",
      ContentTitlemobilecolor: "text-[#3C2C0B]",
      hoveronText: "group-hover:text-black",
      ContentHover: "group-hover:text-[#3C2C0B]",
      colorText: "text-[#978050]",
      mobileColorText: "text-black",
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
      accentColor: "bg-[#FFBE2E]",
      hoverColor: "bg-white",
      ContentTitlecolor: "text-black",
      ContentTitlemobilecolor: "text-[#3C2C0B]",
      hoveronText: "group-hover:text-black",
      ContentHover: "group-hover:text-[#3C2C0B]",
      colorText: "text-[#978050]",
      mobileColorText: "text-black",
    },
    {
      id: 7,
      icon: SportIcon,
      title: "Sports, Toys & Games",
      description:
        "Quick dispatch for active gear, kids' toys, and high-volume seasonal orders.",
      link: "Speed Up Shipping",
      href: "/industries/sports",
      accentColor: "bg-[#978050]",
      hoverColor: "bg-[#FFBE2E]",
      ContentTitlecolor: "text-black",
      ContentTitlemobilecolor: "text-white",
      hoveronText: "group-hover:text-[#FFBE2E]",
      ContentHover: "group-hover:text-white",
      colorText: "text-[#978050]",
      mobileColorText: "text-[#FFBE2E]",
    },
  ];

  return (
    <>
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((industry, index) => {
          return (
            <div
              key={industry.id}
              className={`group relative bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-shadow duration-500 overflow-hidden h-full`}
            >
              {/* Diagonal Hover Background */}
              <div
                className={`absolute -top-8 -right-8 w-24 h-24 rounded-full 
                ${industry.hoverColor}
                opacity-100 md:opacity-0 group-hover:opacity-100
                transition-opacity duration-500 ease-in-out
                origin-top-right z-10`}
              />

              {/* Decorative Circles */}
              <div
                className={`absolute top-0 right-0 w-full h-full md:-top-8 md:-right-8 md:w-24 md:h-24 ${industry.accentColor}
                rounded-3xl md:rounded-full group-hover:rounded-3xl 
                transform md:scale-100 group-hover:scale-[5]
                transition-transform duration-500 ease-in-out
                origin-top-right`}
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-6 relative w-fit group">
                  <industry.icon
                    size={80}
                    className={`transition-all duration-300 ${
                      industry.hoverIcon
                        ? " group-hover:opacity-0"
                        : "group-hover:text-[#212121]"
                    }`}
                  />

                  {industry.hoverIcon && (
                    <industry.hoverIcon
                      size={80}
                      className="
                        absolute inset-0
                        md:opacity-0
                        transition-all duration-300
                        group-hover:opacity-100 opacity-100
                    "
                    />
                  )}
                </div>

                <h3
                  className={`text-2xl font-semibold  md:${industry.ContentTitlecolor} ${industry.ContentHover} ${industry.ContentTitlemobilecolor} mb-3`}
                >
                  {industry.title}
                </h3>

                <p
                  className={`${industry.ContentTitlemobilecolor} md:${industry.ContentTitlecolor} ${industry.ContentHover} font-light text-lg leading-relaxed mb-6`}
                >
                  {industry.description}
                </p>

                <Link
                  href={industry.href}
                  className={`
                    inline-flex items-center gap-3 text-lg font-bold
                     ${industry.mobileColorText} md:${industry.colorText}
                    transition-all duration-300
                    ${industry.hoveronText}
                    p-2 rounded-full
                `}
                >
                  <span>{industry.link}</span>
                  <svg
                    className="
                    w-5 h-5
                    duration-700 ease-in-out
                    group-hover:-rotate-45
                    "
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
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
