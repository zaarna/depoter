const BulletDot = ({ color = "#978050", className = "" }) => {
  return (
    <span
      className={`w-4 h-4 rounded-full border flex items-center justify-center bg-white shrink-0 ${className}`}
      style={{ borderColor: color }}
    >
      <span
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: color }}
      ></span>
    </span>
  );
};

export default BulletDot;
