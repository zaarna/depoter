"use client";
import TitleContent from "@/components/ReusableComponent/All_Title/TitleContent";
import { titleContentConfig } from "@/config/titleContentConfig";
import Image from "next/image";

export default function WhyChooseDepotter({ sectionKey = [] }) {
  const tc =
    titleContentConfig[sectionKey] || titleContentConfig["whychoosedepoter"];

  const features = [
    {
      title: "Zero VAT & Customs Duty",
      text: "Store goods in the UAE without bearing extra import fees or tax charges.",
      roundcolor: "bg-[#978050]",
      bordercolor: "border-[#978050]",
      translatestyle: "translate-y-0 md:-translate-y-10",
    },
    {
      title: "Flexible Storage Options",
      text: "Access secure, spacious, and customisable storage designed around your business needs.",
      roundcolor: "bg-[#FFBE2E]",
      bordercolor: "border-[#FFBE2E]",
      translatestyle: "translate-y-0 md:translate-y-10",
    },
    {
      title: "Instant Free Zone Documentation",
      text: "Create and access all necessary compliance and shipping papers instantly with digital accuracy.",
      roundcolor: "bg-[#939393]",
      bordercolor: "border-[#939393]",
      translatestyle: "translate-y-0 md:-translate-y-10",
    },
    {
      title: "Real-Time Reconciliation Reports",
      text: "Get accurate, up-to-date inventory and transaction summaries whenever you need them.",
      roundcolor: "bg-[#3C2C0B]",
      bordercolor: "border-[#3C2C0B]",
      translatestyle: "translate-y-0 md:translate-y-10",
    },
  ];

  return (
    <section className="bg-[#978050] relative overflow-hidden py-8 md:py-36">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* LEFT – CIRCLE + CARDS */}
          <div className="relative flex justify-center items-center order-2 md:order-1">
            {/* BACKGROUND IMAGE (instead of circle) */}
            <div className="absolute">
              <Image
                src="/whychoosebg.svg" // 🔁 your image path
                alt="Background"
                width={620}
                height={620}
                className="object-contain opacity-0 md:opacity-100"
                priority
              />
            </div>

            {/* FEATURE CARDS */}
            <div className="featurecard relative grid grid-cols-1 md:grid-cols-2 gap-6 ">
              {features.map((item, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden bg-white border-l-4 md:border-l-0 border-b-0 md:border-b-4 ${item.bordercolor} ${item.translatestyle} rounded-2xl md:rounded-4xl shadow-xl p-4 md:p-6 w-auto h-auto md:w-[260px] md:h-[260px] text-center md:text-left
                  carditem transition-all duration-500`}
                >
                  <span
                    className={`w-14 h-14 rounded-full opacity-0 md:opacity-100 absolute -right-3 -top-3 ${item.roundcolor}`}
                  ></span>
                  <h4 className="text-lg md:text-xl font-bold text-[#212121]">
                    {item.title}
                  </h4>
                  <span
                    className={`w-20 h-px opacity-0 md:opacity-100 rounded-full block my-0 md:my-3 ${item.roundcolor}`}
                  ></span>
                  <p className="text-base md:text-lg text-[#212121] font-light leading-relaxe">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT – TEXT CONTENT */}
          <div className="order-1 md:order-2 text-center lg:text-right">
            <div className=" text-center lg:text-right relative z-10 ">
              <TitleContent {...tc} />
            </div>

            <p className="text-[#F5F1E6] text-lg leading-relaxed mb-6">
              We manage your entire fulfillment process with precision, from
              product storage to pick and pack and delivery. Each operation is
              executed with complete customs documentation and full free zone
              compliance.
            </p>

            <p className="text-[#F5F1E6] text-lg leading-relaxed">
              Our streamlined workflows support faster cross-border deliveries,
              improved tax efficiency, and stronger cash flow for your business.
            </p>
            <div className="flex justify-center lg:justify-end mt-6 md:mt-10">
              <span className=" w-20 h-0.5 block bg-[#FFBE2E] opacity-0 md:opacity-100 " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
