const Dot = ({ size = "md", className = "" }) => {
  const sizes = {
    sm: "w-1.5 h-1.5",
    md: "w-2.5 h-2.5",
    lg: "w-4 h-4",
  };

  return (
    <div className={`${sizes[size]} rounded-full bg-[#FDB022] ${className}`} />
  );
};

export default Dot;
