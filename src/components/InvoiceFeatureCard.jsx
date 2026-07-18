const InvoiceFeatureCard = ({ number, title, description, dark }) => {
    return (
        <div
            className={`flex h-full  items-start md:items-center rounded-2xl px-5 py-5 transition-all duration-300 ${dark
                ? "bg-[#3F2C07] text-white"
                : "bg-[#F7BA2C] text-[#1A1A1A]"
                }`}
        >

            {/* Number */}
            {/* Number */}
            <div className="flex items-center self-center">
                <span className="text-4xl font-bold leading-none">{number}</span>

                <div
                    className={`mx-4 h-25 w-[2px] self-center ${dark ? "bg-white/70" : "bg-black/70"
                        }`}
                />
            </div>

            {/* Content */}
            <div>
                <h4 className="text-[1.3rem] font-semibold">{title}</h4>

                <p
                    className={`mt-2 text-[1rem] leading-relaxed ${dark ? "text-white/90" : "text-black/80"
                        }`}
                >
                    {description}
                </p>
            </div>
        </div>
    );
};

export default InvoiceFeatureCard;