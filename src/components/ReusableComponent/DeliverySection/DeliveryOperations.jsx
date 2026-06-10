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
          <Button href={button.link} className={button.className} variant="">
            {button.text}
          </Button>
        </div>
      </div>
    </section>
  );
}
