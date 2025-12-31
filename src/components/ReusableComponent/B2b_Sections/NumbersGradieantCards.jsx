// import React from "react";
// import TitleContent from "../All_Title/TitleContent";
// import { titleContentConfig } from "@/config/titleContentConfig";
// import StatsCard from "./StatsCard";

// function NumbersGradieantCards({ data = [], layout, sectionKey = [] }) {
//   const tc =
//     titleContentConfig[sectionKey] || titleContentConfig["b2bgradient"];

//   const renderLayout = () => {
//     if (layout === "2-3" && data.length >= 5) {
//       return (
//         <>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//             {data.slice(0, 2).map((item, index) => (
//               <StatsCard
//                 key={index}
//                 stat={item.stat}
//                 description={item.description}
//                 icon={item.icon}
//               />
//             ))}
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {data.slice(2, 5).map((item, index) => (
//               <StatsCard
//                 key={index + 2}
//                 stat={item.stat}
//                 description={item.description}
//                 icon={item.icon}
//               />
//             ))}
//           </div>
//           {data.length > 5 && (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
//               {data.slice(5).map((item, index) => (
//                 <StatsCard
//                   key={index + 5}
//                   stat={item.stat}
//                   description={item.description}
//                   icon={item.icon}
//                 />
//               ))}
//             </div>
//           )}
//         </>
//       );
//     } else if (layout === "uniform") {
//       // Uniform grid
//       return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {data.map((item, index) => (
//             <StatsCard
//               key={index}
//               stat={item.stat}
//               description={item.description}
//               icon={item.icon}
//             />
//           ))}
//         </div>
//       );
//     } else {
//       // Default fallback
//       return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {data.map((item, index) => (
//             <StatsCard
//               key={index}
//               stat={item.stat}
//               description={item.description}
//               icon={item.icon}
//             />
//           ))}
//         </div>
//       );
//     }
//   };

//   return (
//     <div className="w-full mx-auto px-4 py-10 bg-[#FFFFFF]">
//       {/* Title */}
//       <div className="text-center mb-4">
//         <TitleContent {...tc} />
//       </div>

//       {/* Stats Grid with Custom Layout */}
//       {renderLayout()}
//     </div>
//   );
// }

// export default NumbersGradieantCards;

"use client";
import React from "react";

import StatsCard from "./StatsCard";
import { titleContentConfig } from "@/config/titleContentConfig";
import TitleContent from "../All_Title/TitleContent";

function NumbersGradieantCards({ data = [], sectionKey = [] }) {
  const tc =
    titleContentConfig[sectionKey] || titleContentConfig["b2bgradient"];
  return (
    <section className="py-8 md:py-16 bg-[#ffffff] relative overflow-hidden">
      <div className="container">
        <div className="grid text-center relative z-10">
          <TitleContent {...tc} />
        </div>
        <div className="mt-6 md:mt-12 relative">
          <div className="hidden md:block">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {data.slice(0, 2).map((item, index) => (
                <StatsCard
                  stat={item.stat}
                  description={item.description}
                  icon={item.icon}
                  key={index}
                  index={index}
                />
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.slice(2, 5).map((item, index) => (
                <StatsCard
                  stat={item.stat}
                  description={item.description}
                  icon={item.icon}
                  key={index + 2}
                  index={index}
                />
              ))}
            </div>
          </div>
          <div className="block md:hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {data.map((item, index) => (
                <StatsCard
                  stat={item.stat}
                  description={item.description}
                  icon={item.icon}
                  key={index}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NumbersGradieantCards;
