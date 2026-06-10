const pad = (n) => String(n).padStart(2, "0");

export default function DeliveryCapabilityCard({
  step,
  total,
  title,
  desc,
  features = [],
}) {
  return (
    <div className="flex h-full flex-col rounded-3xl bg-[#FFBE2E]/10 border-2 border-[#FFBE2E]/50 p-6 md:p-8">
      {/* Badge */}
      <div className="inline-flex w-fit items-center bg-[#212121] text-sm px-4 py-2 rounded-full">
        <span className="text-[#FFBE2E] font-medium">{pad(step)}</span>
        <span className="text-[#93680A]">/{pad(total)}</span>
      </div>

      {/* Title */}
      <h3 className="text-[#212121] text-2xl md:text-[28px] font-bold mt-5 mb-2">
        {title}
      </h3>
      {desc ? <p>{desc}</p> : ""}

      {/* Features */}
      <div className="mt-2">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={`flex items-start gap-4 py-5 ${
              index !== 0 ? "border-t border-[#FFBE2E]/40" : ""
            }`}
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="h-12 w-12 object-contain"
            />
            <div>
              <h4 className="text-[#212121] text-base md:text-lg font-bold mb-1">
                {feature.title}
              </h4>
              <p className="text-[#6B6B6B] text-sm md:text-[15px] leading-relaxed">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
