const PlatformCard = ({
    title,
    items,
    showFooter1 = false,
    isHover = true,
    showFooter2 = false,
}) => {
    return (
        <div className={`min-h-[430px] rounded-[28px] border-2 p-8 transition-all duration-300 ease-out  ${isHover === true ? "hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]" : " "} `}>
            <h3 className="text-[28px] font-semibold text-[#212121]">
                {title}
            </h3>

            <div className="mt-4 mb-8 h-[2px] w-full bg-[#B8B0A0]" />

            <div className="grid grid-cols-2 gap-6">
                {items.map((logo, index) => (
                    <div
                        key={index}
                        className="flex min-h-[70px] items-center justify-center border-b-3 border-[#D8D0C0] pb-5"
                    >
                        <img
                            src={logo}
                            alt="platform logo"
                            className="h-auto max-w-[120px] object-contain"
                        />
                    </div>
                ))}

                {showFooter1 && (
                    <div className="flex min-h-[70px] items-center border-b-3 border-[#D8D0C0] pb-5">
                        <p className="text-[20px] text-center font-semibold leading-[1.7] text-[#212121]">
                            Custom-built websites
                        </p>
                    </div>
                )}

                {showFooter2 && (
                    <div className="flex min-h-[70px] items-center border-b-3 border-[#D8D0C0] pb-5">
                        <p className="text-[20px] font-semibold leading-[1.7] text-[#212121]">
                            Other global and regional carriers
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PlatformCard;