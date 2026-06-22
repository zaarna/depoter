"use client";

import Scalabilityfive from "../Icons/Scalabilityfive";
import Scalabilityfour from "../Icons/Scalabilityfour";
import Scalabilityone from "../Icons/Scalabilityone";
import Scalabilitysix from "../Icons/Scalabilitysix";
import Scalabilitythree from "../Icons/Scalabilitythree";
import Scalabilitytwo from "../Icons/Scalabilitytwo";

export default function ScalabilityCard() {
  const stats = [
    {
      id: 1,
      icon: <Scalabilityone className="w-20 h-20 md:w-24 md:h-24" />,
      value: "1M+",
      label: "Orders Successfully Fulfilled",
      bgColor: "yellow",
    },
    {
      id: 2,
      icon: <Scalabilitytwo className="w-20 h-20 md:w-24 md:h-24" />,
      value: "10",
      label: "State-of-the-Art Warehouses",
      subtitle: "Across 3 Countries",
      bgColor: "dark",
    },
    {
      id: 3,
      icon: <Scalabilitythree className="w-20 h-20 md:w-24 md:h-24" />,
      value: "99.52%",
      label: "Inventory Accuracy Rate",
      bgColor: "yellow",
    },
    {
      id: 4,
      icon: <Scalabilityfour className="w-20 h-20 md:w-24 md:h-24" />,
      value: "100%",
      label: "Pick & Pack Accuracy",
      bgColor: "dark",
    },
    {
      id: 5,
      icon: <Scalabilityfive className="w-20 h-20 md:w-24 md:h-24" />,
      value: "28+",
      label: "Seamless API Integrations",
      bgColor: "yellow",
    },
    {
      id: 6,
      icon: <Scalabilitysix className="w-20 h-20 md:w-24 md:h-24" />,
      value: "20+",
      label: "Trusted Delivery Partners",
      bgColor: "dark",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="group relative overflow-hidden rounded-3xl cursor-pointer h-[270px] md:h-[374px] shadow-lg hover:shadow-2xl transition-all duration-500 p-6 bg-white"
        >
          <div
            className={`absolute top-0 left-0 w-full h-1/2 md:h-full transition-all duration-500 group-hover:h-1/2
              ${stat.bgColor === "yellow" ? "bg-[#FFBE2E]" : "bg-[#3C2C0B]"}`}
          />

          <div
            className={`absolute top-1/2 left-0 right-0 m-auto w-1/2 h-0.5 opacity-0 md:opacity-100 group-hover:opacity-0 transition-all duration-500 ${
              stat.bgColor === "yellow" ? "bg-[#212121] " : "bg-[#FFFFFF]"
            }`}
          />

          <div className="relative z-10 h-full flex flex-col justify-between md:justify-evenly text-center">
            <div
              className={`mx-auto transition-colors duration-500 ${
                stat.bgColor === "yellow" ? "text-gray-900" : "text-[#F4C542]"
              } group-hover:text-gray-900`}
            >
              {stat.icon}
            </div>

            {stat.subtitle ? (
              <div className="flex flex-col md:flex-row justify-center items-around md:items-start gap-4 px-0 md:px-9">
                <h3
                  className={`text-4xl md:text-6xl font-bold transition-colors duration-500 ${
                    stat.bgColor === "yellow"
                      ? "text-[#212121]"
                      : "text-[#3C2C0B] md:text-[#FFBE2E]"
                  } group-hover:text-[#3C2C0B]`}
                >
                  {stat.value}
                </h3>
                <div className="flex flex-col items-center md:items-start">
                  <p
                    className={`text-lg md:text-2xl text-center md:text-left transition-colors duration-500 text-[#3C2C0B] md:text-[#FFBE2E] group-hover:text-[#3C2C0B]`}
                  >
                    {stat.label}
                  </p>

                  <p
                    className={`text-base md:text-lg text-[#3C2C0B] md:text-[#FFBE2E] group-hover:text-[#3C2C0B] mt-1`}
                  >
                    {stat.subtitle}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2 md:gap-4">
                <h3
                  className={`text-4xl md:text-6xl font-bold  
                  transition-colors duration-500 ease-in-out
                  ${
                    stat.bgColor === "yellow"
                      ? "text-[#212121] group-hover:text-[#212121]"
                      : "text-[#3C2C0B] md:text-[#FFBE2E] group-hover:text-[#212121]"
                  }`}
                >
                  {stat.value}
                </h3>

                <p
                  className={`text-lg md:text-2xl transition-colors duration-500 ${
                    stat.bgColor === "yellow"
                      ? "text-[#212121] group-hover:text-[#212121]"
                      : "text-[#3C2C0B] md:text-[#F4C542] group-hover:text-[#3C2C0B]"
                  }`}
                >
                  {stat.label}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
