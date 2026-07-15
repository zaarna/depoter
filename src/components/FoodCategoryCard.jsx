const FoodCategoryCard = ({ icon, title, description }) => {
    return (
        <div className="prh-card group relative flex min-h-[290px] flex-col items-center justify-center overflow-hidden rounded-bl-[30px] rounded-br-[30px] bg-gradient-to-b from-[#f6e5bd00] to-[#EFD188] px-5 pt-7 pb-10">
            <img
                src={icon}
                alt={title}
                className="mb-5 h-[90px] w-[90px] object-contain transition-transform duration-500 group-hover:-translate-y-5"
            />

            <h3 className="text-center text-[20px] font-bold leading-[1.3] transition-transform duration-500 group-hover:-translate-y-5">
                {title}
            </h3>

            {/* Description */}
            <p className="absolute right-5 top-50 md:bottom-6 md:left-5 translate-y-5 text-center text-[15px] leading-6 text-[#333] opacity-100 md:opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {description}
            </p>
        </div>
    );
};

export default FoodCategoryCard;