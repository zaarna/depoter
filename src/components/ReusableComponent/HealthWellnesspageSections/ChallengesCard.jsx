"use client";

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
      description:
        'Dealing with shelf-life items and avoiding <span style="font-weight:600;">dead stock.</span>',
    },
    {
      id: 2,
      icon: EnvironmentalIcon,
      title: "Environmental Factors",
      description:
        'Protecting sensitive products from extreme UAE heat and improper <span style="font-weight:600;">warehouse storage</span> conditions.',
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
        'Meeting strict <span style="font-weight:600;">product safety</span> and hygiene requirements for health-grade goods.',
    },
  ];

  return (
    <div className="flex flex-wrap items-stretch justify-center gap-6">
      {industries.map((industry) => (
        <div
          key={industry.id}
          className="
            group
            relative
            flex
            min-h-[290px]
            w-full
            flex-col
            overflow-hidden
            rounded-3xl
            border-2
            border-[#212121]
            bg-white
            px-5
            py-6
            shadow-md
            transition-all
            duration-500
            hover:shadow-2xl
            md:min-h-[320px]
            md:w-[calc(50%-12px)]
            md:px-6
            md:py-8
            lg:min-h-[340px]
            lg:w-[calc(33.333%-16px)]
          "
        >
          {/* Decorative Circle */}
          <div className="absolute left-0 right-0 top-0 mx-auto h-[68px] w-[80px] bg-gradient-to-b from-[#FFBE2EBF] to-white" />

          {/* Content */}
          <div className="relative z-10 flex flex-1 flex-col items-center text-center">
            <div className="relative mb-6 w-fit">
              <industry.icon
                size={80}
                className="transition-all duration-300"
              />
            </div>

            <h3 className="mb-3 text-2xl font-semibold leading-tight">
              {industry.title}
            </h3>

            <p
              className="text-center text-lg font-light leading-relaxed text-[#3A3A3A]"
              dangerouslySetInnerHTML={{ __html: industry.description }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
