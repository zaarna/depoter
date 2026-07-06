"use client";

export default function FeatureList({
    features,
    textClassName = "text-[#FFFFFF]",
    space = "8",
}) {
    return (
        <ul className={`space-y-${space}`}>
            {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                    {/* Marker */}
                    <div className="flex flex-shrink-0 items-center">
                        {/* Diamond */}
                        <div
                            className="flex h-[2.5em] w-[4.5em] flex-shrink-0 items-center justify-center bg-[#f4c743]"
                            style={{
                                clipPath:
                                    "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                            }}
                        >
                            <span className="text-[20px] font-extrabold tracking-tight text-[#1f1c17]">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                        </div>

                        {/* Dotted Trail */}
                        <div className="ml-1 flex items-center gap-[5px]">
                            {Array.from({ length: 8 }).map((_, i) => (
                                <span
                                    key={i}
                                    className="h-[3px] w-[3px] flex-shrink-0 rounded-full bg-[#df9236]"
                                />
                            ))}
                        </div>

                        {/* Arrow */}
                        <div
                            className="ml-1.5 mr-2 flex-shrink-0"
                            style={{
                                width: 0,
                                height: 0,
                                borderTop: "5px solid transparent",
                                borderBottom: "5px solid transparent",
                                borderLeft: "8px solid #df9236",
                            }}
                        />
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                        <p className={`leading-relaxed ${textClassName}`}>
                            {feature}
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    );
}