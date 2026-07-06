const ChallengeCard = ({ item }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-5 md:gap-20 items-center mb-10">
            {/* Left Card */}
            <div className="relative inline-flex">
                {/* Back Layer */}
                <div className="absolute -inset-0 md:w-55 w-65 -translate-x-2 -translate-y-2 rounded-[18px] bg-[#FDBD2D]" />
                <div className="absolute -inset-0 md:w-55 w-65 -translate-x-2 translate-y-2 rounded-[18px] bg-[#FDBD2D]" />
                {/* Front Card */}
                <div className="relative flex min-h-[90px] w-80 items-center justify-center rounded-[18px] border border-[#8E6B28] bg-[#F8F8F8] px-6 py-6">
                    <h3 className="w-full md:w-50 text-center text-[1.25rem] font-semibold leading-[1.35] text-[#2B2B2B]">
                        {item.leftTitle}
                    </h3>

                    {/* Arrow */}
                    <div className="absolute -right-[16px] top-1/2 -translate-y-1/2">
                        <svg
                            width="30"
                            height="43"
                            viewBox="0 0 30 43"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M29.7437 21.0498L17.6221 42.0923H0V0H17.6221L29.7437 21.0498Z"
                                fill="#FFBE2E"
                            />
                        </svg>
                    </div>
                </div>

            </div>

            {/* Right Card */}
            <div className="rounded-[18px] border border-[#FDBD2D] bg-white px-8 py-6">
                <h3 className="text-[1.25rem] font-semibold text-[#2B2B2B]">
                    {item.rightTitle}
                </h3>

                <p className="mt-2 text-[18px] leading-8 text-[#4F4F4F]">
                    {item.description}
                </p>
            </div>
        </div>
    );
};

export default ChallengeCard;