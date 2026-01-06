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

export default function BuildToHandleCardD2C() {
  const industries = [
    {
      id: 1,
      icon: HealthIcon,
      //   hoverIcon: HealthHoverIcon,
      title: "Health & Wellness",
      description:
        "Fast, secure fulfillment for supplements, hygiene kits, and wellness products.",
      link: "Explore Health Fulfillment",
      href: "/industries/health",
    },
    {
      id: 2,
      icon: BeautyIcon,
      title: "Beauty & Personal Care",
      description:
        "Careful handling and quick shipping for cosmetics, skincare, and grooming items.",
      link: "Discover Beauty Logistics",
      href: "/industries/beauty",
    },
    {
      id: 3,
      icon: ApparelIcon,
      title: "Apparel & Accessories",
      description:
        "Neat packing and smooth delivery for clothing, shoes, and accessories.",
      link: "Simplify Apparel Fulfillment",
      href: "/industries/apparel",
    },
    {
      id: 4,
      icon: PetsIcon,
      title: "Pets",
      description:
        "Reliable fulfillment for pet food, toys, and everyday pet care items.",
      link: "Ship Pet Supplies",
      href: "/industries/pets",
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
    },
    {
      id: 7,
      icon: SportIcon,
      title: "Sports, Toys & Games",
      description:
        "Quick dispatch for active gear, kids' toys, and high-volume seasonal orders.",
      link: "Speed Up Shipping",
      href: "/industries/sports",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap justify-center gap-6">
        {industries.map((industry) => (
          <div
            key={industry.id}
            className="
        w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group relative bg-white rounded-3xl p-4 md:p-8 shadow-md hover:shadow-2xl transition-shadow duration-500 overflow-hidden h-full border-2 border-[#212121]"
          >
            {/* Decorative Circle */}
            <div
              className={`absolute top-0 right-0 left-0 m-auto w-[80px] h-[68px] bg-linear-to-b from-[#FFBE2EBF] to-white
`}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="mb-6 relative w-fit">
                <industry.icon
                  size={80}
                  className={`transition-all duration-300`}
                />
              </div>

              <h3 className={`text-2xl font-semibold mb-3 `}>
                {industry.title}
              </h3>

              <p
                className={`font-light text-lg leading-relaxed mb-6 text-center`}
              >
                {industry.description}
              </p>

              <Link
                href={industry.href}
                className={`inline-flex items-center cursor-pointer gap-3 text-lg font-bold transition-all underline underline-offset-8 text-[#978050] duration-300 p-2 rounded-full hover:text-[#FFBE2E]`}
              >
                <span>{industry.link}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
