const StatsCard = ({ stat, description, icon, index }) => {
  return (
    <div
      className={`rounded-3xl p-4 md:p-6 lg:p-8 shadow-lg  transition-all duration-300 flex items-center justify-between   ${index % 2 === 0 ? "stats-card-mobile-even" : "stats-card-mobile-odd"
        } gradientCard border border-[#978050]`}
    >
      <div>
        <h3 className="text-5xl font-black text-[#212121] mb-2 tracking-tight">
          {stat}
        </h3>
        <p className="text-lg md:text-xl text-[#212121]">{description}</p>
      </div>

      <div className="md:ml-4 ">
        <img src={icon} />
      </div>
    </div>
  );
};

export default StatsCard;
