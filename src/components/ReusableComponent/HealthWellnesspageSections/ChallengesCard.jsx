"use client";

import Link from "next/link";
import ManagingproductIcon from "../Icons/ManagingproductIcon";
import EnvironmentalIcon from "../Icons/EnvironmentalIcon";
import InventoryChaosIcon from "../Icons/InventoryChaosIcon";
import PackagingIcon from "../Icons/PackagingIcon";
import ComplianceIcon from "../Icons/ComplianceIcon";

export default function ChallengesCard() {
  const industries = [
    {
      id: 1,
      icon: ManagingproductIcon,
      title: "Managing Product Expiry",
      description: "Dealing with shelf-life items and avoiding dead stock.",
    },
    {
      id: 2,
      icon: EnvironmentalIcon,
      title: "Environmental Factors",
      description:
        "Protecting sensitive products from extreme UAE heat and improper warehouse storage conditions.",
    },
    {
      id: 3,
      icon: InventoryChaosIcon,
      title: "Inventory Chaos",
      description:
        "Difficulty in maintaining batch-level accuracy across multiple sales channels.",
    },
    {
      id: 4,
      icon: PackagingIcon,
      title: "Packaging Sensitivity",
      description:
        "Handling fragile glass bottles or specialized hygiene packaging that requires extra care.",
    },
    {
      id: 5,
      icon: ComplianceIcon,
      title: "Compliance Standards",
      description:
        "Meeting strict product safety and hygiene requirements for health-grade goods.",
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
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
