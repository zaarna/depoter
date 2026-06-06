import React from "react";

function WhyChooseDepoterCard({ industry }) {
  return (
    <div
      className="wcd-card custom-clearance-card relative w-full rounded-[28px]"
      style={{
        background:
          "linear-gradient(358.44deg, #FFBE2E -111.88%, rgba(255, 190, 46, 0.799014) -43.36%, rgba(255, 190, 46, 0) 76.18%)",
      }}
    >
      <div className="p-8">
        <div className="flex justify-center mt-2 mb-6">
          <div className="flex w-full max-w-[220px] items-center justify-center h-30 mx-auto">
            <img
              src={industry.icon}
              alt={industry.title}
              className="w-25 block object-contain"
            />
          </div>
        </div>
        <h4 className="text-center mx-auto w-[80%] font-bold leading-relaxed text-[18px]  mt-5">
          {industry.title}
        </h4>

        <p className="text-center mx-auto leading-relaxed text-[15px] mt-5">
          {industry.discription}
        </p>
      </div>
    </div>
  );
}

export default WhyChooseDepoterCard;
