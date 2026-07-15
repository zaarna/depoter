// "use client";

// import { useState } from "react";
// import BulletDot from "./BulletDot";

// export default function Accordion({
//   items,
//   showIcon = true,
//   ShowBulletDot = true,
//   cardClassName = "rounded-[30px] border border-[#D2A847] bg-[#F3E0A8]",
//   iconClassName = "bg-[#D8B04D]",
//   contentClassName = "",
//   questionClassName = "",
// }) {
//   const [openIndex, setOpenIndex] = useState(0);

//   const toggle = (index) => {
//     setOpenIndex(openIndex === index ? 0 : index);
//   };

//   return (
//     <div className="space-y-5">
//       {items.map((item, index) => {
//         const isOpen = openIndex === index;

//         return (
//           <div
//             key={index}
//             className={`overflow-hidden transition-all duration-300 ${cardClassName}`}
//           >
//             <button
//               onClick={() => toggle(index)}
//               className={`flex w-full items-center justify-between px-6 py-5 text-left cursor-pointer ${
//                 isOpen ? questionClassName : ""
//               }`}
//             >
//               <h3 className="pr-4 text-xl font-semibold text-black">
//                 {item.question}
//               </h3>

//               {showIcon && (
//                 <div
//                   className={`flex h-10 w-10 min-w-10 items-center justify-center border rounded-full text-xl font-bold ${iconClassName} ${isOpen ? "bg-[#ffffff]" : "bg-[#ffbe2e]"}`}
//                 >
//                   {isOpen ? "-" : "+"}
//                 </div>
//               )}
//             </button>

//             <div
//               className={`grid transition-all duration-300 ease-in-out ${
//                 isOpen
//                   ? "grid-rows-[1fr] opacity-100"
//                   : "grid-rows-[0fr] opacity-0"
//               }`}
//             >
//               <div className="overflow-hidden">
//                 <div className={`px-6 pb-6 ${contentClassName}`}>
//                   {Array.isArray(item.answer) ? (
//                     <ul className="space-y-2">
//                       {item.answer.map((point, i) => (
//                         <li
//                           key={i}
//                           className="flex items-start gap-2 leading-relaxed text-gray-800"
//                         >
//                           {ShowBulletDot && <BulletDot className="mt-1 " />}
//                           {point.label && (
//                             <span>
//                               <span className="block font-semibold">
//                                 {point.label}:
//                               </span>
//                               <span
//                                 dangerouslySetInnerHTML={{
//                                   __html: point.value,
//                                 }}
//                               />
//                             </span>
//                           )}
//                         </li>
//                       ))}
//                     </ul>
//                   ) : (
//                     <p className="leading-relaxed text-gray-800">
//                       {item.answer}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import BulletDot from "./BulletDot";

export default function Accordion({
  items,
  showIcon = true,
  ShowBulletDot = true,
  cardClassName = "rounded-[30px] border border-[#D2A847] bg-[#F3E0A8]",
  iconClassName = "bg-[#D8B04D]",
  contentClassName = "",
  questionClassName = "",
}) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-5">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={`overflow-hidden transition-all duration-500 ease-in-out ${cardClassName}`}
          >
            <button
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className={`flex w-full cursor-pointer items-center justify-between px-6 py-5 text-left ${
                isOpen ? questionClassName : ""
              }`}
            >
              <h3 className="pr-4 text-xl font-semibold text-black">
                {item.question}
              </h3>

              {showIcon && (
                <div
                  className={`flex h-10 w-10 min-w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                    isOpen ? "bg-white" : "bg-[#FFBE2E]"
                  } ${iconClassName}`}
                >
                  <div className="transition-transform duration-300 ease-in-out">
                    {isOpen ? (
                      <Minus size={20} strokeWidth={2.5} />
                    ) : (
                      <Plus size={20} strokeWidth={2.5} />
                    )}
                  </div>
                </div>
              )}
            </button>

            <div
              className={`grid transition-all duration-500 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className={`px-6 pb-6 ${contentClassName}`}>
                  {Array.isArray(item.answer) ? (
                    <ul className="space-y-3">
                      {item.answer.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 leading-relaxed text-gray-800"
                        >
                          {ShowBulletDot && <BulletDot className="mt-1" />}

                          {point.label ? (
                            <span>
                              <span className="font-semibold">
                                {point.label}:
                              </span>{" "}
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: point.value,
                                }}
                              />
                            </span>
                          ) : (
                            <span
                              dangerouslySetInnerHTML={{
                                __html: point,
                              }}
                            />
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p
                      className="leading-relaxed text-gray-800"
                      dangerouslySetInnerHTML={{
                        __html: item.answer,
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
