import React from "react";
import AmazonCardHolder from "./AmazonCardHolder";

export default function AmazonFulfillment() {
  const industries = [
    {
      id: 1,
      title: "FNSKU labeling and carton preparation",
      icons: "/fba-icon-1.svg",
      rotate: "rotate-12",
      className: "amazon-process-card-1",
      iconClassName: "amazon-card-icon-1",
    },
    {
      id: 2,
      title: "Shipment creation in Seller Central",
      icons: "/fba-icon-2.svg",
      rotate: "rotate-6",
      className: "amazon-process-card-2",
      iconClassName: "amazon-card-icon-2",
    },
    {
      id: 3,
      title: "Carton and pallet setup as per Amazon standards",
      icons: "/fba-icon-3.svg",
      rotate: "rotate-12",
      className: "amazon-process-card-3",
      iconClassName: "amazon-card-icon-3",
    },
    {
      id: 4,
      title: "Inbound scheduling and tracking",
      icons: "/fba-icon-4.svg",
      rotate: "rotate-6",
      className: "amazon-process-card-4",
      iconClassName: "amazon-card-icon-4",
    },
    {
      id: 5,
      title: "Inventory planning and replenishment support",
      icons: "/fba-icon-5.svg",
      rotate: "rotate-12",
      className: "amazon-process-card-5",
      iconClassName: "amazon-card-icon-5",
    },
    {
      id: 6,
      title: "Compliance documentation and issue resolution",
      icons: "/fba-icon-6.svg",
      rotate: "rotate-6",
      className: "amazon-process-card-6",
      iconClassName: "amazon-card-icon-6",
    },
  ];

  return (
    <>
      <div className="text-center w-full mt-20 ">
        <h2
          className="text-white mb-4"
          style={{ fontSize: "36px", fontFamily: "outfit", fontWeight: "600" }}
        >
          Fulfillment by Amazon (FBA)
        </h2>
        <div className="mt-6 md:mt-12 relative">
          <div className="lg:hidden flex flex-col gap-6">
            <img src="/AmazonCard.png" alt="" />
            {industries.map((category, index) => (
              //   <>
              <div key={index}>
                <AmazonCardHolder industry={category} />
              </div>
              //   </>
            ))}
          </div>

          {/* Tablet and Desktop: Masonry Layout */}
          <div className="hidden lg:flex gap-5">
            {/* Odd Data Section */}
            {/* <div className="flex flex-col gap-x-25 flex-1 gap-y-9 relative">
              {industries
                .filter((_, index) => index % 2 === 0)
                .map((category, index) => (
                  <div
                    key={index}
                    className={category.id === 3 ? "relative left-15" : ""}
                  >
                    <AmazonCardHolder industry={category} />
                  </div>
                ))}
            </div> */}

            {/* <div className="flex items-center justify-center "> */}
            <img className="w-full" src="/amazon-fba-bg.svg" alt="" />
            {industries.map((item, index) => (
              <div
                key={index}
                className={`absolute z-10 border flex items-center w-[250px] px-8 ${item.className}`}
              >
                {index % 2 === 0 ? (
                  <>
                    {/* Left Side Cards (1,3,5) */}
                    <h4 className="flex-1 text-center text-[18px] font-semibold leading-[1.4] text-[#232323]">
                      {item.title}
                    </h4>

                    <img
                      src={item.icons}
                      alt=""
                      className={`w-12 h-12 object-contain absolute flex-shrink-0 ${item.iconClassName}`}
                    />
                  </>
                ) : (
                  <>
                    {/* Right Side Cards (2,4,6) */}
                    <img
                      src={item.icons}
                      alt=""
                      className={`w-12 h-12 object-contain absolute flex-shrink-0 ${item.iconClassName}`}
                    />

                    <h4 className="flex-1 text-center text-[18px] font-semibold leading-[1.4] text-[#232323]">
                      {item.title}
                    </h4>
                  </>
                )}
              </div>
            ))}
            {/* <div className="amazon-lines-1">
                <div className="">
                  <svg
                    width="180"
                    height="90"
                    viewBox="0 0 154 74"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 0.5H91.4647C99.594 0.5 107.162 4.62921 111.648 11.4083C126.489 33.8319 136.388 47.4047 153 73"
                      stroke="#3C2C0B"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="4 4"
                    />
                  </svg>
                </div>
              </div>
              <div className="amazon-lines-2">
                <div className="">
                  <svg
                    width="180"
                    height="90"
                    viewBox="0 0 145 71"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M144.5 0.5H53.5353C45.406 0.5 37.7674 4.59241 33.5791 11.5598C20.5736 33.1948 17.0367 44.52 0.5 70"
                      stroke="#3C2C0B"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="4 4"
                    />
                  </svg>
                </div>
              </div>
              <div className="amazon-lines-3">
                <div className="">
                  <svg
                    width="180"
                    height="90"
                    viewBox="0 0 154 62"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 61.5H93.2742C100.576 61.5 107.48 58.1761 112.034 52.4686L153.5 0.499999"
                      stroke="#3C2C0B"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="4 4"
                    />
                  </svg>
                </div>
              </div>
              <div className="amazon-lines-4">
                <svg
                  width="110"
                  height="90"
                  viewBox="0 0 65 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0.5"
                    y1="0.5"
                    x2="64.5"
                    y2="0.500006"
                    stroke="#3C2C0B"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-dasharray="4 4"
                  />
                </svg>
              </div>
              <div className="amazon-lines-5">
                <svg
                  width="110"
                  height="90"
                  viewBox="0 0 65 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0.5"
                    y1="0.5"
                    x2="64.5"
                    y2="0.500006"
                    stroke="#3C2C0B"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-dasharray="4 4"
                  />
                </svg>
              </div>
              <div className="amazon-lines-6">
                <svg
                  width="180"
                  height="90"
                  viewBox="0 0 154 66"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M153.5 65.5H61.1834C53.6228 65.5 46.5041 61.9373 41.9724 55.8852L0.5 0.5"
                    stroke="#3C2C0B"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-dasharray="4 4"
                  />
                </svg>
              </div> */}
            {/* </div> */}

            {/* Even Data Section */}
            {/* <div className="flex flex-col gap-x-25 flex-1 gap-y-9 relative">
              {industries
                .filter((_, index) => index % 2 !== 0)
                .map((category, index) => (
                  <div
                    key={index}
                    className={category.id === 4 ? "relative right-15" : ""}
                  >
                    <AmazonCardHolder industry={category} />
                  </div>
                ))}
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
