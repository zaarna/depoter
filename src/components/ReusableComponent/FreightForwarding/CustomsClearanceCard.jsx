import React from "react";

function CustomsClearanceCard({ industry }) {
  return (
    <div className="custom-clearance-card relative text-white bg-[#3C2C0B] hover:border-black hover:bg-[#ffbe2e] rounded-xl group transition-colors duration-1000 ease-out w-full md:w-[calc(50%-12px)] lg:w-[calc(100%-18px)] max-w-sm ">
      <div className="p-8 pt-4">
        <div className="flex justify-center mt-2 mb-6">
          <div className="flex items-center justify-center w-24 h-24 rounded-full bg-amber-400 border-2 border-transparent group-hover:border-[#3c3c0b] transition-colors duration-1000 ease-out -mt-18">
            <img
              src={industry.icon}
              alt={industry.title}
              className="w-15 h-15 block object-contain"
            />
          </div>
        </div>
        <p className="text-center group-hover:text-black w-40 mx-auto leading-relaxed text-[21px] mt-10 h-20 transition-colors duration-1000 ease-out">
          {industry.title}
        </p>
        <div className="mx-auto w-40 h-[4px] bg-[#ffbe2e] group-hover:bg-[#3C2C0B] transition-colors duration-1000 ease-out mt-[30px] "></div>
      </div>
    </div>
  );
}

export default CustomsClearanceCard;
