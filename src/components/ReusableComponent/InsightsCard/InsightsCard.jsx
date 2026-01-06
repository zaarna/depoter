import Image from "next/image";
import Button from "../Button/Button";

function InsightsGrid({ insights = [] }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {insights.map((item) => (
          <div
            key={item.id}
            className="bg-white group rounded-2xl shadow-lg  transition-shadow duration-300 overflow-hidden"
          >
            {/* Image */}
            <div className="relative h-48 w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={item.id === 1}
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-medium mb-4 text-black">
                {item.title}
              </h3>

              <p className="text-xs uppercase text-gray-400 mb-4">
                {item.date}
              </p>
              <hr className="border-t border-gray-200 mb-4 w-3xs" />
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                {item.description}
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-[#B8860B] font-semibold group"
              >
                Read More
                <span className="transition-transform duration-300 group-hover:translate-x-1 w-4 h-4">
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.899 9.90071H0.749926"
                      stroke="#978050"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M14.7776 4.12695L18.9024 8.25174C19.6802 9.02952 20.069 9.41841 20.069 9.90166C20.069 10.3849 19.6802 10.7738 18.9024 11.5516L14.7776 15.6764"
                      stroke="#978050"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button children="View All" className="px-28 md:px-36 py-3" />
      </div>
    </>
  );
}

export default InsightsGrid;
