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
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Partner With Us", href: "/partner" },
    { name: "Blog", href: "/blog" },
    { name: "Privacy Policies", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
  ];

  const industriesLinks = [
    { name: "Health & Wellness", href: "/industries/health" },
    { name: "Beauty & Personal Care", href: "/industries/beauty" },
    { name: "Food & Beverages", href: "/industries/food" },
    { name: "Apparel & Accessories", href: "/industries/apparel" },
    { name: "Home Goods", href: "/industries/home" },
    { name: "Pets", href: "/industries/pets" },
    { name: "Sports, Toys & Games", href: "/industries/sports" },
  ];

  const quickLinks = [
    { name: "B2C", href: "/b2c" },
    { name: "B2B", href: "/b2b" },
    { name: "Multichannel", href: "/multichannel" },
    { name: "Integration", href: "/integration" },
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
        <div className="py-10">
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
                  value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  href="https://www.google.com/maps?q=Lorem+ipsum"
                />
                <ContactItem
                  icon={PhoneIcon}
                  label="Contact number:"
                  value="00000000"
                  href="tel:00000000"
                />

                <ContactItem
                  icon={MailIcon}
                  label="Email:"
                  value="depoter@gmail.com"
                  href="mailto:depoter@gmail.com"
                />
              </div>

              {/* Social Icons */}
              <div className="flex gap-4">
                <SocialIcons
                  items={[
                    { href: "#", icon: <LinkedinIcon /> },
                    { href: "#", icon: <TwitterIcon /> },
                    { href: "#", icon:  <FacebookIcon /> },
                    { href: "#", icon:  <InstagramIcon /> },
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
                      className="text-sm text-color-text-primary transition-colors"
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
                      className="text-sm text-color-text-primary transition-colors"
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
          <div className="mb-8">
            <p className="text-sm text-color-text-primary leading-relaxed mb-6">
              Depoter offers fast, tech-powered e-commerce fulfillment solutions
              across the UAE and KSA. Our warehousing solutions, on-demand
              Warehousing, and third-party services (3PL services) are trusted
              by growing brands looking for reliability, control, and
              scalability.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-yellow-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Address:
                  </p>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-yellow-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm">
                    <span className="font-semibold text-gray-900">
                      Contact number:
                    </span>{" "}
                    <span className="text-gray-600">00000000</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-yellow-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm">
                    <span className="font-semibold text-gray-900">Email:</span>{" "}
                    <span className="text-gray-600">depoter@gmail.com</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.85.38-1.78.64-2.75.76 1-.6 1.76-1.55 2.12-2.68-.93.55-1.96.95-3.06 1.17-.88-.94-2.13-1.53-3.51-1.53-2.66 0-4.82 2.16-4.82 4.82 0 .38.04.75.13 1.10-4-.2-7.55-2.12-9.93-5.04-.42.72-.66 1.55-.66 2.44 0 1.67.85 3.15 2.14 4.01-.79-.03-1.53-.24-2.18-.6v.06c0 2.34 1.66 4.29 3.87 4.73-.4.11-.83.17-1.27.17-.31 0-.62-.03-.92-.08.62 1.94 2.42 3.35 4.55 3.39-1.67 1.31-3.77 2.09-6.05 2.09-.39 0-.78-.02-1.17-.07 2.18 1.4 4.77 2.21 7.56 2.21 9.05 0 14-7.5 14-14 0-.21 0-.42-.02-.63.96-.69 1.8-1.56 2.46-2.55z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
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
                className={`w-5 h-5 text-gray-600 transition-transform ${
                  openAccordion === "company" ? "rotate-180" : ""
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
                className={`w-5 h-5 text-gray-600 transition-transform ${
                  openAccordion === "industries" ? "rotate-180" : ""
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

        <div className="py-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            © 2025 Depoter, All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
