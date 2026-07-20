"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LocationIcon from "../Icons/Location";
import PhoneIcon from "../Icons/Phone";
import MailIcon from "../Icons/Mail";
import ContactItem from "./ContactItem";
import LinkedinIcon from "../Icons/Linkedin";
import TwitterIcon from "../Icons/Twitter";
import FacebookIcon from "../Icons/Facebook";
import InstagramIcon from "../Icons/Instagram";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const companyLinks = [
    // { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/company/contact-us" },
    // { name: "Partner With Us", href: "/partner" },
    // { name: "Blog", href: "/blog" },
    // { name: "Privacy Policies", href: "/privacy" },
    // { name: "Terms & Conditions", href: "/terms" },
  ];

  // industriesLinks
  const industriesLinks = [
    { name: "Health & Wellness", href: "/industries/health-wellness-fulfillment-uae" },
    { name: "Beauty & Personal Care", href: "/industries/beauty-personal-care-fulfillment-uae" },
    { name: "Food & Beverages", href: "/industries/food-beverage-fulfillment-uae" },
    { name: "Apparel & Accessories", href: "/industries/apparel-accessories-fulfillment-uae" },
    // { name: "Home Goods", href: "/industries/home" },
    // { name: "Pets", href: "/industries/pets" },
    // { name: "Sports, Toys & Games", href: "/industries/sports" },
  ];

  const quickLinks = [
    { name: "D2C", href: "/d2c-fulfillment-uae" },
    { name: "B2B", href: "/b2b-fulfillment-uae" },
    { name: "Multichannel", href: "/multichannel-fulfillment-uae" },
    { name: "Integration", href: "/technology/ecommerce-integration-services-uae" },
  ];

  return (
    <footer className="bg-white">
      <div className="container pt-12">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Company Logo"
            width={200}
            height={40}
            priority
            className="w-[120px] md:w-[150px] lg:w-[200px] h-auto"
          />
        </Link>
        {/* Desktop Layout */}
        <div className="hidden lg:block py-10">
          <div className="lg:grid lg:grid-cols-5 lg:gap-26">
            {/* Company Info */}
            <div className="col-span-2 ">
              <p className="text-sm leading-relaxed mb-5">
                Depoter offers fast, tech-powered e-commerce fulfillment
                solutions across the UAE and KSA. Our warehousing solutions,
                on-demand Warehousing, and third-party services (3PL services)
                are trusted by growing brands looking for reliability, control,
                and scalability.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <ContactItem
                  icon={LocationIcon}
                  label="Address:"
                  value="Depoter General Warehousing OPC LLC Media One Tower, Media City, Dubai, UAE"
                  href="https://www.google.com/maps/place/Media+1+Tower+-+Dubai+Media+City,+Plot+No.+1+-+Al+Sufouh+-+Al+Sufouh+2+-+Dubai+-+United+Arab+Emirates/@25.0900112,55.1499263,797m/data=!3m1!1e3!4m6!3m5!1s0x3e5f6b5b141c66bb:0x5e88a4a6e940ec3!8m2!3d25.0900112!4d55.1525012!16s%2Fg%2F11bc6r4q12?entry=ttu&g_ep=EgoyMDI2MDcxMy4wIKXMDSoASAFQAw%3D%3D"
                />
                <ContactItem
                  icon={PhoneIcon}
                  label="Contact number:"
                  value="+971 569902345"
                  href="tel:+971569902345"
                />

                <ContactItem
                  icon={MailIcon}
                  label="Email:"
                  value="info@depoter.com"
                  href="mailto:info@depoter.com"
                />
              </div>

              {/* Social Icons */}
              <div className="flex gap-4">
                <SocialIcons
                  items={[
                    { href: "https://www.linkedin.com/company/depoter2020", icon: <LinkedinIcon /> },
                    // { href: "#", icon: <TwitterIcon /> },
                    { href: "https://www.facebook.com/depoter2020/", icon: <FacebookIcon /> },
                    { href: "https://www.instagram.com/depoterr/", icon: <InstagramIcon /> },
                  ]}
                />
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-base font-medium text-color-text-primary mb-4">
                Company
              </h4>
              <ul className="space-y-2">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm text-color-text-primary hover:font-medium transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries Links */}
            <div>
              <h4 className="text-base font-medium text-color-text-primary mb-4">
                Industries
              </h4>
              <ul className="space-y-2">
                {industriesLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm text-color-text-primary hover:font-medium transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="mt-12">
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Layout with Accordions */}
        <div className="lg:hidden">
          {/* Company Info */}
          <div className="my-8">
            <p className="text-sm text-color-text-primary leading-relaxed mb-6">
              Depoter offers fast, tech-powered e-commerce fulfillment solutions
              across the UAE and KSA. Our warehousing solutions, on-demand
              Warehousing, and third-party services (3PL services) are trusted
              by growing brands looking for reliability, control, and
              scalability.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <ContactItem
                icon={LocationIcon}
                label="Address:"
                value="Depoter General Warehousing OPC LLC Media One Tower, Media City, Dubai, UAE"
                href="https://www.google.com/maps?q=Lorem+ipsum"
              />
              <ContactItem
                icon={PhoneIcon}
                label="Contact number:"
                value="+971 569902345"
                href="tel:+971569902345"
              />

              <ContactItem
                icon={MailIcon}
                label="Email:"
                value="info@depoter.com"
                href="mailto:info@depoter.com"
              />
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <SocialIcons
                items={[
                  { href: "https://www.linkedin.com/company/depoter2020", icon: <LinkedinIcon /> },
                  // { href: "#", icon: <TwitterIcon /> },
                  { href: "https://www.facebook.com/depoter2020/", icon: <FacebookIcon /> },
                  { href: "https://www.instagram.com/depoterr/", icon: <InstagramIcon /> },
                ]}
              />
            </div>
          </div>

          {/* Accordion: Company */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => toggleAccordion("company")}
              className="w-full py-4 flex justify-between items-center text-left"
            >
              <span className="text-lg font-semibold text-gray-900">
                Company
              </span>
              <svg
                className={`w-5 h-5 text-gray-600 transition-transform ${openAccordion === "company" ? "rotate-180" : ""
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openAccordion === "company" && (
              <ul className="pb-4 space-y-2">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Accordion: Industries */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => toggleAccordion("industries")}
              className="w-full py-4 flex justify-between items-center text-left"
            >
              <span className="text-lg font-semibold text-gray-900">
                Industries
              </span>
              <svg
                className={`w-5 h-5 text-gray-600 transition-transform ${openAccordion === "industries" ? "rotate-180" : ""
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openAccordion === "industries" && (
              <ul className="pb-4 space-y-2">
                {industriesLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Quick Links (no accordion) */}
          <div className="mt-6 space-y-2">
            {quickLinks.map((link, index) => (
              <div key={index}>
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-gray-900 hover:text-purple-600 transition-colors block py-2"
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="py-8 border-t border-white lg:border-gray-200 text-left lg:text-center">
          <p className="text-sm text-[#212121] font-medium">
            © 2026 Depoter, All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
