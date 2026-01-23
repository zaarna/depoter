import { titleContentConfig } from "@/config/titleContentConfig";
import React from "react";
import TitleContent from "../All_Title/TitleContent";
import StorageCard from "./StorageCard";

function FlexibleStorageSection({ sectionKey }) {
  const tc =
    titleContentConfig[sectionKey] || titleContentConfig["flexiblestorage"];
  const cards = [
    {
      iconsImage: "/drystorage.svg",
      title: "Dry Storage",
      description:
        "Suitable for non-perishable items, operating at 30°C to 45°C depending on the country's climate.",
    },
    {
      iconsImage: "/chillerstorage.svg",
      title: "Chiller Storage",
      description:
        "Temperature maintained between 4°C and 10°C for fresh products and beverages.",
    },
    {
      iconsImage: "/frozenstorage.svg",
      title: "Frozen Storage",
      description:
        "Operates between -10°C and -20°C, suitable for frozen foods and pharmaceuticals.",
    },
    {
      iconsImage: "/carbohydratestorage.svg",
      title: "Carbohydrate Drinks",
      description:
        "Air-conditioned between 18°C and 24°C, approved by the authorities for beverage storage.",
    },
    {
      iconsImage: "/tempraturestorage.svg",
      title: "Temperature-Controlled (Food)",
      description:
        "Maintains 18°C to 24°C, ideal for consumables needing stable conditions.",
    },
    {
      iconsImage: "/nonfoodstorage.svg",
      title: "Temperature-Controlled (Non-Food)",
      description:
        "For cosmetics, beauty, and personal care goods stored between 18°C and 24°C.",
    },
    {
      iconsImage: "/dangerousstorage.svg",
      title: "Dangerous Goods (DG) Storage",
      description:
        "Authorized for hazardous materials, fully compliant with UAE and international standards.",
    },
  ];
  return (
    <section className="py-8 md:py-16 bg-[#FFF7E4] relative overflow-hidden">
      <div className="container">
        <div className="grid text-center relative z-10">
          <TitleContent {...tc} />

          <div className="flex flex-wrap justify-center gap-6 mt-15">
            {cards.map((card, index) => (
              <StorageCard
                key={index}
                iconsImage={card.iconsImage}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FlexibleStorageSection;
