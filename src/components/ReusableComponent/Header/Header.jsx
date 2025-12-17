"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../Button/Button";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuData = {
    services: {
      title: "Services",
      sections: [
        {
          title: "FULFILLMENT SERVICES",
          items: [
            { name: "D2C", icon: "📦", href: "/services/d2c" },
            { name: "E2B", icon: "🏢", href: "/services/e2b" },
            {
              name: "Multichannel",
              icon: "🔄",
              href: "/services/multichannel",
            },
            {
              name: "Marketplace Amazon",
              icon: "🛒",
              href: "/services/marketplace-amazon",
            },
            {
              name: "Marketplace Noon",
              icon: "🌙",
              href: "/services/marketplace-noon",
            },
          ],
        },
        {
          title: "VALUE ADDED SERVICES",
          items: [
            {
              name: "Freight Forwarding",
              icon: "🚚",
              href: "/services/freight",
            },
            { name: "Custom Clearance", icon: "📋", href: "/services/customs" },
            {
              name: "Product Bundling",
              icon: "📦",
              href: "/services/bundling",
            },
            { name: "JOB/EOB", icon: "⚙️", href: "/services/job-eob" },
          ],
        },
      ],
    },
    technology: {
      title: "Technology",
      sections: [
        {
          items: [
            {
              name: "Integrations",
              icon: "🔌",
              href: "/technology/integrations",
            },
            {
              name: "Inventory Management",
              icon: "📊",
              href: "/technology/inventory",
            },
            {
              name: "Warehouse Management System",
              icon: "🏭",
              href: "/technology/wms",
            },
          ],
        },
      ],
    },
    industries: {
      title: "Industries",
      sections: [
        {
          items: [
            {
              name: "Health & Wellness",
              icon: "💊",
              href: "/industries/health",
            },
            {
              name: "Beauty & Personal Care",
              icon: "💄",
              href: "/industries/beauty",
            },
            { name: "Food & Beverage", icon: "🍔", href: "/industries/food" },
            {
              name: "Apparel & Accessories",
              icon: "👔",
              href: "/industries/apparel",
            },
            { name: "Home Goods", icon: "🏠", href: "/industries/home" },
            { name: "Pets", icon: "🐾", href: "/industries/pets" },
            {
              name: "Sports, Toys, & Games",
              icon: "⚽",
              href: "/industries/sports",
            },
          ],
        },
      ],
    },
    geographies: {
      title: "Geographies",
      sections: [
        {
          items: [
            {
              name: "UAE Mainland",
              icon: "🇦🇪",
              href: "/geographies/uae-mainland",
            },
            {
              name: "UAE Freezone",
              icon: "🏢",
              href: "/geographies/uae-freezone",
            },
            { name: "KSA", icon: "🇸🇦", href: "/geographies/ksa" },
          ],
        },
      ],
    },
    infra: {
      title: "Infra",
      sections: [
        {
          items: [
            {
              name: "Fulfillment Center",
              icon: "🏭",
              href: "/infra/fulfillment-center",
            },
            { name: "Deliveries", icon: "🚚", href: "/infra/deliveries" },
          ],
        },
      ],
    },
    company: {
      title: "Company",
      sections: [
        {
          items: [
            { name: "About us", icon: "ℹ️", href: "/about" },
            { name: "Blog", icon: "📝", href: "/blog" },
            { name: "Case Study", icon: "📊", href: "/case-study" },
            { name: "Contact Us", icon: "📞", href: "/contact" },
            { name: "Career", icon: "💼", href: "/career" },
          ],
        },
      ],
    },
  };

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header className="bg-[#FFF7E4] absolute drop-shadow-[0_4px_6px_rgba(0,0,0,0.2)] border-b border-gray-300 sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center space-x-4 h-20 justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {/* Left GIF */}
            <Image
              src="/logo-animation1.gif"
              alt="Logo Animation"
              width={80}
              height={80}
              className="animatedlogo"
              priority
            />
            {/* Right Logo */}
            <Image
              src="/logo.svg"
              alt="Company Logo"
              width={100}
              height={28}
              className="lg:w-[100px] xl:w-[100px] 2xl:w-[140px] h-auto textlogo"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="">
            <div className="flex items-center">
              <nav className="hidden lg:flex items-center lg:space-x-3 xl:space-x-8">
                <Link
                  href="/"
                  className="text-[#212121] lg:text-sm xl:text-base relative group"
                >
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{backgroundColor: 'var(--color-text-accent)'}}></span>
                </Link>

                {Object.entries(menuData).map(([key, menu]) => (
                  <div
                    key={key}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(key)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center gap-1 text-[#212121] lg:text-sm xl:text-base relative group">
                      {menu.title}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{backgroundColor: 'var(--color-text-accent)'}}></span>
                      <ChevronDown className="w-4 h-4 lg:w-5 lg:h-5 pt-0.5 transition-colors duration-300 group-hover:color-[#212121]" />
                    </button>

                    {/* Dropdown Menu */}
                    {activeDropdown === key && (
                      <div className="absolute left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 py-4 px-2">
                        {menu.sections.map((section, idx) => (
                          <div
                            key={idx}
                            className={
                              idx > 0
                                ? "mt-4 pt-4 border-t border-gray-200"
                                : ""
                            }
                          >
                            {section.title && (
                              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider px-3 mb-2">
                                {section.title}
                              </h3>
                            )}
                            <ul className="space-y-1">
                              {section.items.map((item, itemIdx) => (
                                <li key={itemIdx}>
                                  <Link
                                    href={item.href}
                                    className="flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group relative"
                                    style={{'--hover-bg': 'rgba(var(--color-text-accent-rgb), 0.05)'}}
                                  >
                                    <span className="text-xl group-hover:scale-110 transition-transform duration-200">{item.icon}</span>
                                    <span className="text-sm text-gray-700 font-medium relative" style={{color: 'inherit'}}>
                                      {item.name}
                                      <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{backgroundColor: 'var(--color-text-accent)'}}></span>
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              <div className="w-px h-8 bg-black mx-3"></div>
              <div className="flex items-center space-x-3">
                <Link
                  href="/partner"
                  className="text-[#212121] lg:text-sm xl:text-base hover:font-semibold"
                >
                  Partner With Us
                </Link>
                {/* Get a Quote Button - Desktop */}
                <Button href="/" className="px-4 py-2.5">Get a Quote</Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-900"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-300">
            <div className="space-y-2">
              <Link
                href="/"
                className="block px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              {Object.entries(menuData).map(([key, menu]) => (
                <div key={key}>
                  <button
                    onClick={() => toggleDropdown(key)}
                    className="w-full flex items-center justify-between px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors font-medium"
                  >
                    {menu.title}
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === key ? "rotate-180" : ""
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

                  {activeDropdown === key && (
                    <div className="ml-4 mt-2 space-y-1 bg-white rounded-lg p-2">
                      {menu.sections.map((section, idx) => (
                        <div key={idx}>
                          {section.title && (
                            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider px-3 py-2">
                              {section.title}
                            </h3>
                          )}
                          {section.items.map((item, itemIdx) => (
                            <Link
                              key={itemIdx}
                              href={item.href}
                              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <span className="text-lg">{item.icon}</span>
                              <span className="text-sm text-gray-700">
                                {item.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link
                href="/partner"
                className="block px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Partner With Us
              </Link>

              <Link
                href="/quote"
                className="block mx-4 mt-4 bg-gray-900 text-white px-6 py-2.5 rounded-full hover:bg-gray-800 transition-colors text-center font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
