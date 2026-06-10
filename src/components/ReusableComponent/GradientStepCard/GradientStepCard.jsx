import Image from "next/image";
import BulletDot from "../BulletDot";

const GradientStepCard = ({
  id,
  title,
  description,
  image,
  imageWidth = 350,
  imageHeight = 250,
}) => {
  const isEven = id % 2 === 0;
  return (
    <div
      className={`grid lg:grid-cols-2 gap-8 items-start rounded-3xl p-6 md:p-5
        ${isEven ? "lg:[&>*:first-child]:order-2" : ""}
      `}
      style={{
        background: isEven
          ? "linear-gradient(270deg, #FFBE2E 0%, rgba(255, 190, 46, 0) 100%)"
          : "linear-gradient(90deg, #FFBE2E 0%, rgba(255, 190, 46, 0) 100%)",
      }}
    >
      {/* Content */}
      <div>
        <h3 className="text-[24px] md:text-[28px] font-semibold text-[#212121] mb-4">
          {id != null && `${id}. `}
          {title}
        </h3>

        {Array.isArray(description) ? (
          <ul className="space-y-2">
            {description.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-2 leading-relaxed text-gray-800 ml-3"
              >
                <BulletDot color="#000000" className="mt-1" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-[16px] md:text-[18px] leading-[1.8] text-[#212121] ml-5">
            {description || ""}
          </p>
        )}
      </div>

      {/* Image */}
      <div className="bg-[#F8F8F8] rounded-[20px] p-6 flex items-center justify-center min-h-[260px]">
        <Image
          src={image}
          alt={title}
          width={imageWidth}
          height={imageHeight}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default GradientStepCard;
