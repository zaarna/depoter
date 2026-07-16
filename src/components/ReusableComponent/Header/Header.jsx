"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../Button/Button";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";
import {
  AboutIcon,
  ApparelIcon,
  B2BIcon,
  BeautyIcon,
  BlogIcon,
  CaseStudyIcon,
  ContactIcon,
  CustomIcon,
  D2CIcon,
  DeliveriesIcon,
  FoodIcon,
  FreightIcon,
  FulfillmentIcon,
  HealthIcon,
  HomeIcon,
  IntegrationsIcon,
  InventoryIcon,
  IORIcon,
  KSAIcon,
  MultiChannelIcon,
  PetsIcon,
  ProductIcon,
  SportsIcon,
  UAEFreezoneIcon,
  UAEIcon,
  WarehouseIcon,
} from "../Icons/MenuIcons/AllMenuIcon";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      // Only apply click-outside logic on desktop (lg and up)
      if (window.innerWidth >= 1024) {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
          setActiveDropdown(null);
        }
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleLinkClick = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  const menuData = {
    services: {
      title: "Services",
      sections: [
        {
          title: "FULFILLMENT SERVICES",
          items: [
            {
              name: "D2C",
              icon: <D2CIcon />,
              href: "/d2c-fulfillment-uae",
            },
            {
              name: "B2B",
              icon: <B2BIcon />,
              href: "/b2b-fulfillment-uae",
            },
            {
              name: "Multichannel",
              icon: <MultiChannelIcon />,
              href: "/multichannel-fulfillment-uae",
            },
          ],
        },
        {
          title: "VALUE ADDED SERVICES",
          items: [
            {
              name: "Freight Forwarding",
              icon: <FreightIcon />,
              href: "/freight-forwarding-services-uae",
            },
            {
              name: "Custom Clearance",
              icon: <CustomIcon />,
              href: "/services/customs-clearance-services-uae",
            },
            {
              name: "Product Registration",
              icon: <ProductIcon />,
              href: "/services/product-registration-services-uae",
            },
            // { name: "IOR/EOR", icon: <IORIcon />, href: "/services/job-eob" },
            { name: "IOR/EOR", icon: <IORIcon />, href: "/" },
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
              icon: <IntegrationsIcon />,
              href: "/technology/ecommerce-integration-services-uae",
            },
            {
              name: "Inventory Management",
              icon: <InventoryIcon />,
              // href: "/technology/inventory",
              href: "",
            },
            {
              name: "Warehouse Management System",
              icon: <WarehouseIcon />,
              // href: "/technology/wms",
              href: "",
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
              icon: <HealthIcon />,
              href: "/industries/health-wellness-fulfillment-uae",
            },
            {
              name: "Beauty & Personal Care",
              icon: <BeautyIcon />,
              href: "/industries/beauty-personal-care-fulfillment-uae",
            },
            {
              name: "Food & Beverage",
              icon: <FoodIcon />,
              href: "/industries/food-beverage-fulfillment-uae",
            },
            {
              name: "Apparel & Accessories",
              icon: <ApparelIcon />,
              href: "/industries/apparel-accessories-fulfillment-uae",
            },
            {
              name: "Home Goods",
              icon: <HomeIcon />,
              // href: "/industries/home",
              href: "",
            },
            {
              name: "Pets",
              icon: <PetsIcon />,
              // href: "/industries/pets",
              href: "",
            },
            {
              name: "Sports, Toys, & Games",
              icon: <SportsIcon />,
              // href: "/industries/sports",
              href: "",
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
              icon: <UAEIcon />,
              // href: "/geographies/uae-mainland",
              href: "",
            },
            {
              name: "UAE Freezone",
              icon: <UAEFreezoneIcon />,
              // href: "/geographies/uae-freezone",
              href: "",
            },
            {
              name: "KSA",
              icon: <KSAIcon />,
              //  href: "/geographies/ksa"
              href: "",
            },
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
              icon: <FulfillmentIcon />,
              href: "/infra/fulfillment-center-uae",
            },
            {
              name: "Deliveries",
              icon: <DeliveriesIcon />,
              href: "/infra/delivery-services-uae",
            },
          ],
        },
      ],
    },
    company: {
      title: "Company",
      sections: [
        {
          items: [
            {
              name: "About us",
              icon: <AboutIcon />,
              // href: "/about"
              href: "",
            },
            {
              name: "Blog",
              icon: <BlogIcon />,
              // href: "/blog"
              href: "",
            },
            {
              name: "Case Study",
              icon: <CaseStudyIcon />,
              // href: "/case-study",
              href: "",
            },
            {
              name: "Contact Us",
              icon: <ContactIcon />,
              //  href: "/contact"
              href: "",
            },
          ],
        },
      ],
    },
  };

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
    // setActiveDropdown(menu);
  };

  return (
    <header className="bg-[#FFF7E4] drop-shadow-[0_4px_6px_rgba(0,0,0,0.2)] border-b border-gray-300 sticky top-0 z-50">
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
          <div className="hidden lg:block">
            <div className="flex items-center space-x-6">
              <nav
                ref={menuRef}
                className="hidden lg:flex items-center lg:space-x-3 xl:space-x-8"
              >
                {/* <Link
                  href="/"
                  className="text-[#212121] lg:text-sm xl:text-base relative group"
                >
                  Home
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: "var(--color-text-accent)" }}
                  ></span>
                </Link> */}

                {Object.entries(menuData).map(([key, menu]) => (
                  <div key={key} className="relative">
                    <button
                      type="button"
                      onClick={() =>
                        setActiveDropdown(activeDropdown === key ? null : key)
                      }
                      className="flex items-center gap-1 text-[#212121] lg:text-sm xl:text-base relative group"
                    >
                      {menu.title}

                      <span
                        className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                        style={{ backgroundColor: "var(--color-text-accent)" }}
                      />

                      <ChevronDown
                        className={`w-4 h-4 lg:w-5 lg:h-5 pt-0.5 transition-transform duration-300 ${
                          activeDropdown === key ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown */}
                    {activeDropdown === key && (
                      <div
                        className={`
                        absolute left-0 top-16
                        bg-white rounded-xl shadow-2xl
                        border-b-4 border-[#FFBE2E]
                        grid gap-6 py-3
                        ${
                          menu.sections.length > 1
                            ? "grid-cols-2 w-[600px]"
                            : "grid-cols-1 w-80"
                        }
                      `}
                      >
                        {menu.sections.map((section, idx) => (
                          <div key={idx}>
                            {/* Section Title */}
                            {section.title && (
                              <h3 className="text-lg px-5 font-bold text-[#1C1C1C] uppercase tracking-wider mb-3">
                                {section.title}
                              </h3>
                            )}

                            {/* Items */}
                            <ul className="space-y-2">
                              {section.items.map((item, itemIdx) => (
                                <li
                                  key={itemIdx}
                                  className={`py-1.5 ${
                                    item.href
                                      ? "hover:bg-[#FFF7E4]"
                                      : " cursor-not-allowed"
                                  }`}
                                >
                                  <Link
                                    href={item.href || "#"}
                                    onClick={(e) => {
                                      if (!item.href) {
                                        e.preventDefault();
                                        return;
                                      }

                                      setActiveDropdown(null);
                                    }}
                                    className={`
                                            flex items-center gap-3
                                            px-3 py-1 rounded-lg
                                            transition-all duration-200
                                            group
                                            ${
                                              item.href
                                                ? "text-[#1C1C1C] "
                                                : " pointer-events-none "
                                            }
                                          `}
                                  >
                                    <span className="text-lg">{item.icon}</span>

                                    <span className="text-base font-medium">
                                      {item.name}
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
              {/* <div className="w-px h-8 bg-black mx-3"></div> */}
              <div className=" flex items-center space-x-3">
                {/* <Link
                  href="/"
                  className="text-[#212121] lg:text-sm xl:text-base hover:border-b-2 transition-colors duration-300"
                >
                  Partner With Us
                </Link> */}
                {/* Get a Quote Button - Desktop */}
                <Button href="/" className="px-4 py-2.5">
                  Get a Quote
                </Button>
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
          <div className="lg:hidden py-4">
            <div className="flex items-center justify-between gap-3 border-b-2 border-black py-4 px-4">
              {/* Left text */}
              {/* <Link
                href="/"
                onClick={handleLinkClick}
                className="
      font-semibold text-black
      whitespace-nowrap
      text-[clamp(14px,4.3vw,18px)]
      leading-none
    "
              >
                Partner With Us
              </Link> */}

              {/* Right button */}
              <Link
                href="/quote"
                onClick={handleLinkClick}
                className="
      bg-[#1C1C1C] text-white
      rounded-full
      px-6 py-4
      font-semibold
      whitespace-nowrap
      text-[clamp(13px,3.5vw,16px)]
      leading-none
      shadow-md
      hover:bg-[#2A2A2A]
      transition-colors
    "
              >
                Get a Quote
              </Link>
            </div>

            <div className="space-y-2">
              {/* <Link
                href="/"
                className="block px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors font-medium"
                // onClick={() => setMobileMenuOpen(false)}
                onClick={handleLinkClick}
              >
                Home
              </Link> */}

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
                              // onClick={handleLinkClick}
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
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
