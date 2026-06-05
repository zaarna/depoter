"use client";
import Link from "next/link";

export default function HandleEveryOrderCard({ variant = "grid", industry }) {
  return (
    <>
      <div key={industry.id} className="every-order-card mx-auto">
        {/* Card */}
        <div className="flex items-center justify-around gap-4">
          {/* Image Card */}
          <div className="every-order-card__image-wrapper flex items-center justify-center">
            <img
              className="every-order-card__image"
              src={industry.icons}
              alt=""
            />
          </div>

          {/* Number */}
          <div className="every-order-card__content flex items-center justify-center">
            <p className="every-order-card__description">0{industry.id}</p>
          </div>
        </div>
        {/* Title and List */}
        <div className="">
          <h4 className="every-order-card__title">{industry.title}</h4>
          <ul className="every-order-card__list mb-1 mt-4">
            {(Array.isArray(industry.list)
              ? industry.list
              : Object.values(industry.list || {})
            ).map((item, index) => (
              <li
                key={index}
                className="every-order-card__list-item flex items-start gap-2 mb-2"
              >
                <span className="w-4 h-4 rounded-full border border-[#978050] flex items-center justify-center bg-white mt-1 flex-shrink-0">
                  <span className="w-2 h-2 rounded-full bg-[#978050]"></span>
                </span>

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
