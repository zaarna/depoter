"use client";

import Link from "next/link";
import { MapPin, Mail, Headphones } from "lucide-react";
import { titleContentConfig } from "@/config/titleContentConfig";
import TitleContent from "./ReusableComponent/All_Title/TitleContent";

export default function ContactInfo({ sectionKey = [] }) {
  const tc =
    titleContentConfig[sectionKey] || titleContentConfig["contactinfo"];
  return (
    <div className="relative overflow-hidden rounded-[30px] border border-[#9C8555] bg-[#FFE8B0] p-8 lg:p-10 flex flex-col justify-end">
      {/* Background Watermark */}
      <div class="absolute top-0 right-0">
        <img alt="" src="/watermark.svg" />
      </div>

      {/* Heading */}
      <div className="relative z-10">
        <TitleContent {...tc} />
      </div>

      {/* Contact Cards */}
      <div className="relative z-10 mt-5  space-y-5">
        {/* Address */}

        <Link
          href="https://maps.google.com/?q=Media+One+Tower+Media+City+Dubai+UAE"
          target="_blank"
          className="block rounded-2xl bg-[#FFBE2E] p-4"
        >
          <div className="flex items-center gap-2 mb-2">
            <MapPin size={20} strokeWidth={2} />
            <h3 className="text-lg md:text-xl font-bold text-[#212121]">
              Address
            </h3>
          </div>

          <p className="text-base leading-7 text-[#212121]">
            Depoter General Warehousing OPC LLC Media One Tower, Media City,
            Dubai, UAE
          </p>
        </Link>

        {/* Bottom Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Email */}

          <Link
            href="mailto:info@depoter.com"
            className="rounded-2xl bg-[#FFBE2E] p-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <Mail size={20} />
              <h3 className="text-lg md:text-xl font-bold text-[#212121]">
                Email
              </h3>
            </div>

            <p className="text-[17px] text-[#212121] break-all">
              info@depoter.com
            </p>
          </Link>

          {/* Phone */}

          <Link
            href="tel:+971569902345"
            className="rounded-2xl bg-[#FFBE2E] p-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <Headphones size={20} />
              <h3 className="text-lg md:text-xl font-bold text-[#212121]">
                Contact
              </h3>
            </div>

            <p className="text-[17px] text-[#212121]">+971 56 990 2345</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
