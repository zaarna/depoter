import Button from "../Button/Button";
import ClimateStorageCard from "./ClimateStorageCard";

export default function ClimateStorageSection() {
  const climateStorageData = [
    {
      id: 1,
      image: "/cc-storage-1.svg",
      title: "Temperature & Humidity Control",
      description:
        "Dedicated zones specifically designed for products sensitive to heat or moisture, such as electronics, cosmetics, pharma, and FMCG.",
      number: "01",
    },
    {
      id: 2,
      image: "/cc-storage-2.svg",
      title: "24/7 Monitoring",
      description:
        "Our continuous monitoring systems maintain optimal storage conditions around the clock, so you never have to worry about external weather.",
      number: "02",
    },
    {
      id: 3,
      image: "/cc-storage-3.svg",
      title: "Quality Preservation",
      description:
        "Proper climate controlled storage ensures a longer shelf life, maximum product safety, and maintains the high standards of your brand.",
      number: "03",
    },
  ];

  return (
    <section className="py-16 bg-[#FFF7E4]">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-[clamp(1.5rem,1rem+2vw,3rem)] font-bold text-[#212121]">
            Climate-Controlled Storage for
            <span className="block text-[#F5BC36]">Product Safety</span>
          </h2>

          <p className="mt-6 text-[1.3rem] text-[#4A4A4A]">
            UAE's climate requires specialized care for sensitive products. We
            ensure your items stay in "factory-fresh" condition by maintaining
            the perfect environment.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {climateStorageData.map((card) => (
            <ClimateStorageCard
              key={card.id}
              image={card.image}
              title={card.title}
              description={card.description}
              number={card.number}
            />
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-12">
          <Button href={"/company/contact-us"} className="py-2 px-10">Talk to a Fulfillment Expert</Button>
        </div>
      </div>
    </section>
  );
}
