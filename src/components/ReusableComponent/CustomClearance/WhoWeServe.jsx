import React from "react";
import WhatWeServeCard from "./WhatWeServeCard";
import { titleContentConfig } from "@/config/titleContentConfig";
import TitleContent from "../All_Title/TitleContent";

export default function WhoWeServe() {
    const tc = titleContentConfig["whoweserve"];
    return (
        <>
            <div className="text-center who-we-serve-card-image w-full pb-15">
                <div className="grid text-center relative z-10 mt-20">
                    <TitleContent {...tc} />
                </div>
                <div className="mt-6 md:mt-12 relative">
                    <div className="lg:hidden flex flex-col">
                        {/* {industries.map((category, index) => ( */}
                        {/* //   <> */}
                        <div>
                            <WhatWeServeCard />
                        </div>
                        {/* //   </>
            ))} */}
                    </div>

                    {/* Tablet and Desktop: Masonry Layout */}
                    <div className="hidden lg:flex">
                        {/* Even Data Section */}
                        <div className="flex flex-col flex-1">
                            {/* {industries.map((category, index) => ( */}
                            <WhatWeServeCard />
                            {/* //   ))} */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
