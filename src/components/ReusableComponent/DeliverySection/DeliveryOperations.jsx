import { titleContentConfig } from "@/config/titleContentConfig";
import TitleContent from "../All_Title/TitleContent";
import Button from "../Button/Button";

export default function DeliveryOperations() {
  const tc = titleContentConfig["deliveryoperations"];
  const button = tc.button;
  return (
    <section className="py-15 bg-[#3C2C0B]">
      <div className="container">
        <div className="grid text-center relative z-10">
          <TitleContent {...tc} />
        </div>
        {/* Button Section */}
        <div className="pt-8 flex justify-center">
          <Button
            href=""
            className="
    group relative overflow-hidden
    mx-auto block w-[25%]
    py-4 px-10
    rounded-full
    bg-[#FFBE2E]
    text-black
    font-semibold
    transition-all duration-500
    hover:scale-105
  "
            variant=""
          >
            <span className="relative z-10">{button.text}</span>

            <span
              className="
      absolute inset-0
      -translate-x-full
      skew-x-12
      bg-white/30
      transition-transform duration-700
      group-hover:translate-x-[200%]
    "
            />
          </Button>
        </div>
      </div>
    </section>
  );
}
