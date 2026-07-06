const AdvantageCard = ({ number, title, description }) => {
    return (
        <div className="flex items-stretch gap-4 rounded-2xl border border-[#F2B233] bg-white p-5 transition-all duration-300 hover:shadow-md">
            {/* Number */}
            <div className="flex w-13 flex-shrink-0 items-center justify-center rounded-lg bg-[#FDBD2D]">
                <span
                    className="text-3xl font-extrabold text-[#222]"
                    style={{
                        textShadow: "3px 3px 0px rgba(128, 96, 33, 0.45)",
                    }}
                >
                    {number}
                </span>
            </div>

            {/* Divider */}
            <div className="flex items-center">
                <div className="me-4 h-[90%] w-[2px] bg-black/70" />
            </div>

            {/* Content */}
            <div className="flex-1">
                <h3 className="text-2xl font-semibold text-[#222]">
                    {title}
                </h3>

                <p className="mt-2 text-[18px] leading-6 text-[#555]">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default AdvantageCard;