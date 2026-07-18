import Link from "next/link";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function ContactusSection() {
  return (
    <section className="py-8 md:py-16">
      <div className="container">
        <div className="rounded-[36px] border-2 border-[#212121] bg-[#FFF8EA] p-4 md:p-6">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8">
            {/* Left */}
            <ContactInfo />

            {/* Right */}
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
