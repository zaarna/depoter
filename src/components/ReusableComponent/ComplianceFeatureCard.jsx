const ComplianceFeatureCard = ({ title, icon, hoverIcon }) => {
    return (
        <div className="relative h-[260px] w-[250px]">
            {/* Outer Border */}
            <div className="absolute inset-0 rounded-[32px] rounded-tl-none border border-[#3F3F3F]" />

            {/* Yellow Corner */}
            <div className="absolute -top-1 -left-1 h-[100px] w-[100px] border-t-[8px] border-l-[8px] border-[#F5B42B]" />

            {/* Glow */}
            <div className="absolute right-0 bottom-0 z-0 h-[150px] w-[150px] rounded-full bg-[#F5B52E] blur-[60px]" />

            {/* Inner Card */}
            <div className="group absolute inset-[12px] flex flex-col items-center justify-center rounded-[24px] border border-[#E5D7AE] bg-[#F8F3E7] px-6 text-center transition-all duration-700 hover:border-[#3C2C0B] hover:bg-[#3C2C0B]">
                <div className="mb-6">
                    <div className="relative mx-auto h-24 w-24">
                        {/* Default Icon */}
                        <img
                            src={icon}
                            alt={title}
                            className="absolute inset-0 h-full w-full object-contain transition-opacity duration-300 group-hover:opacity-0"
                        />

                        {/* Hover Icon */}
                        {hoverIcon && (
                            <img
                                src={hoverIcon}
                                alt={`${title} Hover`}
                                className="absolute inset-0 h-full w-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            />
                        )}
                    </div>
                </div>

                <h3 className="text-[18px] transition-colors duration-700 group-hover:text-[#FFBE2E]">
                    {title}
                </h3>
            </div>
        </div>
    );
};

export default ComplianceFeatureCard;