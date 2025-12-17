
import React from "react";
import WhyChooseInfoCard from "./WhyChooseInfoCard";
import { cardsone } from "@/data/home";

export default function WhyChooseCard() {

   const whyChooseSteps = [
  {
    number: "01/04",
    title: "Distilled Simplicity",
    cards: cardsone,
  },
  {
    number: "02/04",
    title: "Complexity to Clarity",
    cards: cardsone,
  },
  {
    number: "03/04",
    title: "Hassle-free Onboarding",
    cards: cardsone,
  },
  {
    number: "04/04",
    title: "Effortless Scaling",
    cards: cardsone,
  },
];
    const steps = whyChooseSteps;

  return (
      <div className=" relative h-[615px] overflow-y-scroll scroll-smooth "> 
        {/* 5x height to allow stickiness */}
        
        {steps.map((step, i) => (
          <div
            key={i}
            className="sticky top-0  flex items-center justify-center"
          >
            <div className="bg-[#FFF4D9] rounded-4xl border border-[#F7D487] 
                            p-5 md:p-10 shadow-sm w-[90%] max-w-6xl">

              {/* Number Badge */}
              <div className="bg-[#212121] w-fit px-4 py-2 rounded-full text-sm font-medium">
                <span className="text-[#FFBE2E]">
                  {String(i + 1).padStart(2, "0")}/
                </span>
                {String(steps.length).padStart(2, "0")}
              </div>

              {/* Title */}
              <div className="flex items-center my-4 relative">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#212121]">
                  {step.title}
                </h2>
                <div className="flex-1 bg-[#FFBE2E] absolute right-0 w-full h-0.5"></div>
              </div>

              {/* Cards */}
              <WhyChooseInfoCard cards={step.cards} />
            </div>
          </div>
        ))}
      </div>
  );
}
