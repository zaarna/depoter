import React from "react";

function ManageButton({ isActive, icon, title, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className={`cursor-pointer w-full flex items-center gap-4 px-6 py-4 rounded-xl transition-all duration-300 border-2 border-[#C4A574]  last:mb-0 
        justify-between md:justify-start relative z-15
        md:mb-6 ${isActive ? "bg-[#FDB022] rounded-bl-none rounded-br-none md:rounded-br-xl md:rounded-bl-xl" : "bg-[#ffffff]  "}`}
    >
      <img src={icon} className="h-13 w-13" />
      <span
        className={`text-lg font-bold text-[20px] ${
          isActive ? "text-black" : "text-[#212121]"
        }`}
      >
        {title}
      </span>
      <img
        src={isActive ? "/minus.svg" : "/add.svg"}
        className="h-11 w-11 block md:hidden"
      />
    </button>
  );
}

export default ManageButton;
