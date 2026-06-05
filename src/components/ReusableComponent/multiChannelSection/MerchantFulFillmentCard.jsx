"use client";
import React from "react";

export default function MerchantFulFillmentCard({ industry }) {
  const isEven = industry.id % 2 === 0;

  const listItems = Array.isArray(industry.list)
    ? industry.list
    : industry.list
      ? Object.values(industry.list)
      : [industry.title];

  return (
    <div className="merchant-fulfillment-card container mb-20">
      <div
        className={`flex flex-col gap-6 items-center ${
          isEven ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        {/* MOBILE LAYOUT */}
        <div className="block lg:hidden w-full">
          {/* Image */}
          <div className="w-full flex justify-center mb-6">
            <div className="max-w-[350px] w-full overflow-hidden rounded-[24px] p-4">
              <img
                src={industry.icons}
                alt={industry.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* List */}
          <div className="rounded-[24px] text-start p-6">
            <h3 className="text-xl font-bold text-black mb-4">
              {industry.title}
            </h3>

            <div className="custom-list-wrapper">
              {listItems.map((item, index) => (
                <div key={index} className="list-row">
                  <div className="list-icon">
                    <img
                      src="/checkmark_15817400.svg"
                      alt="service"
                      className="icon-image"
                    />
                  </div>

                  <li className="custom-list-item">{item}</li>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden lg:flex flex-1 w-full">
          <div className="rounded-[24px] text-start p-6 w-full">
            <h3 className="merchant-title text-xl font-bold text-black mb-4">
              {industry.title}
            </h3>

            <div className="custom-list-wrapper">
              {listItems.map((item, index) => (
                <div key={index} className="list-row">
                  <div className="list-icon">
                    <img
                      src="/checkmark_15817400.svg"
                      alt="service"
                      className="icon-image"
                    />
                  </div>

                  <li className="custom-list-item">{item}</li>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden lg:flex flex-1 w-full justify-center">
          <div className="max-w-[400px] w-full overflow-hidden rounded-[24px] p-4">
            <img
              src={industry.icons}
              alt={industry.title}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
