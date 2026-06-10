export default function StepCard({ number, title, desc }) {
  return (
    <div className="flex items-center gap-4 md:gap-5">
      {/* Number with yellow highlight */}
      <div className="relative shrink-0">
        <span className="relative z-10 text-2xl md:text-3xl font-extrabold text-[#212121]">
          {number}
        </span>
        <span className="absolute left-0 bottom-1 z-0 h-4 w-4 bg-[#FFBE2E] rounded-full" />
      </div>

      {/* Divider + content */}
      <div className="border-l-2 border-[#000000] pl-4 md:pl-5">
        <h3 className="text-[#212121] text-lg md:text-xl font-bold mb-1.5">
          {title}
        </h3>
        <p className="text-[#212121] text-sm md:text-base leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}
