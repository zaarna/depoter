import React from "react";

function AddvalueToSupplyChainCard({ industry }) {
  return (
    <div className="custom-clearance-card relative text-white w-full">
      <div className="p-8 pt-4">
        <div className="flex justify-center mt-2 mb-6">
          <div className="flex w-full max-w-[220px] items-center justify-center h-60 mx-auto">
            <img
              src={industry.icon}
              alt={industry.title}
              className="w-50 block object-contain"
            />
          </div>
        </div>
        <h4 className="text-center w-[70%] mx-auto font-semibold group-hover:text-black leading-relaxed text-[23px] mt-5">
          {industry.title}
        </h4>

        <p className="text-center group-hover:text-black mx-auto leading-relaxed w-[80%] text-[18px] mt-5">
          {industry.discription}
        </p>
      </div>
    </div>
  );
}

export default AddvalueToSupplyChainCard;
