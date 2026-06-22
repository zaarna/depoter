import Image from "next/image";

export default function ClimateStorageCard({
  image,
  title,
  description,
  number,
}) {
  return (
    <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-b from-[#fff7e4] to-[#F5BC36] p-5 min-h-[450px]">
      <div className="mb-6">
        <div className="flex h-[140px] w-[140px] items-center justify-center rounded-xl bg-[#F7F4ED]">
          <Image
            src={image}
            alt={title}
            width={140}
            height={140}
            className="object-contain"
          />
        </div>
      </div>

      <h3 className="mb-3 text-[24px] leading-[1.1] font-semibold text-[#212121]">
        {title}
      </h3>

      <p className="text-[18px] leading-[1.5] text-[#212121]">{description}</p>

      <span
        className="absolute -bottom-4 right-3 text-[92px]"
        style={{
          zIndex: 2,
          fontSize: "110px",
          fontWeight: 900,
          letterSpacing: "-4px",
          color: "#A9760680", // fill inside the text
          WebkitTextStroke: "2px #6E4C00", // outline around it
          lineHeight: 1,
          fontFamily: '"Arial Black", Arial, sans-serif',
        }}
      >
        {number}
      </span>
    </div>
  );
}
