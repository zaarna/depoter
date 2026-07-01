"use client";
import { titleContentConfig } from "@/config/titleContentConfig";
import React from "react";
import TitleContent from "../All_Title/TitleContent";
import Button from "../Button/Button";

function ReadyToLaunchProduct({ sectionKey = [] }) {
    const tc =
        titleContentConfig[sectionKey] || titleContentConfig["clearyourshipment"];
    return (
        <section className="py-8 md:py-16 bg-[#3C2C0B] relative overflow-hidden">
            <div className="container">
                {/* Heading */}
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-[clamp(1.5rem,1rem+2vw,3rem)] text-white">
                        Ready to {""}
                        <span className="text-[#F5B42B]">Launch Your Products</span> {""}
                        in the UAE Market?
                    </h2>

                    <p className="mt-6 text-[18px] md:text-[22px]  text-white/90 max-w-4xl mx-auto">
                        Get your product registration done the right way and enter the UAE market without delays.
                    </p>
                </div>
                <div className="grid mt-6 md:mt-12">
                    <Button
                        href=""
                        className="
    group relative overflow-hidden
    mx-auto block
    w-full sm:w-[80%] md:w-[60%] lg:w-[40%]
    py-4 px-10
    rounded-full
    bg-[#FFBE2E]
    text-black
    font-semibold
    transition-all duration-500
    hover:scale-105
  "
                        variant=""
                    >
                        <span className="relative z-10">
                            Get Started with Product Registration Today
                        </span>

                        <span
                            className="
      absolute inset-0
      -translate-x-full
      skew-x-12
      bg-white/30
      transition-transform duration-700
      group-hover:translate-x-[200%]
    "
                        />
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default ReadyToLaunchProduct;
