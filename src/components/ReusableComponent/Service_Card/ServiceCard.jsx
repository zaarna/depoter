import Image from "next/image";
import Button from "../Button/Button";
import TitleContent from "../All_Title/TitleContent";

export default function ServiceCard({ services }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative bgimage-service">
      {services.map((service) => (
        <div
          key={service.id}
          className={`relative overflow-hidden duration-300 `}
        >
          {/* Image */}
          <div className="relative w-full h-72 rounded-4xl mb-4 overflow-hidden group">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover rounded-4xl transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Title + Description */}
          <div
            className={`relative ${service.bgColor}  rounded-4xl p-4 text-left`}
          >
            <TitleContent
              title={service.title}
              content={service.description}
              titleTag="h3"
              contentTag="p"
              titleSize="text-[clamp(1.7rem,1.2rem+1vw,2.7rem)]"
              contentSize="text-base lg:text-lg"
              titleColor="#212121"
              contentColor="#4A4A4A"
              className="mb-6"
            />

            {/* CTA Button → NOW USING YOUR BUTTON COMPONENT */}
            <Button
              href={service.buttonLink}
              className="bg-gray-900 text-yellow-400 px-6 py-3 rounded-full font-semibold text-sm lg:text-base hover:bg-gray-800 transition-colors shadow-md"
            >
              {service.buttonText}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
