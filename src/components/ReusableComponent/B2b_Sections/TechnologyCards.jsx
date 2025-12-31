import React from "react";
import Dot from "../Dot";

function TechnologyCards({ features }) {
  return (
    <div className="mt-8 ">
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-12 relative z-10">
          {features.map((item, index) => (
            <div key={index}>
              <div className="mb-6 flex justify-center md:justify-start">
                <img src={item.icon} alt={item.title} className="w-25 h-25" />
              </div>

              <h3 className="text-2xl font-bold text-[#212121] mb-4 text-center md:text-left">
                {item.title}
              </h3>

              <p className="text-[#212121] font-light text-base text-center md:text-left">
                {item.description}
              </p>

              <img
                src="/bottomlinevector.svg"
                className="md:hidden h-10 w-40 mx-auto mt-5"
              />
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE */}
      {/* <div className="block md:hidden space-y-16">
        {features.map((item, index) => (
          <div key={index}>
            <div className="w-40 h-40 rounded-full bg-[#FFBE2E] shadow-xl flex items-center justify-center mb-8">
              <img src={item.icon} alt={item.title} className="w-24 h-24" />
            </div>

            <h3 className="text-2xl font-bold text-[#212121] mb-6">
              {item.title}
            </h3>

            <p className="text-[#212121] font-light text-base leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default TechnologyCards;
