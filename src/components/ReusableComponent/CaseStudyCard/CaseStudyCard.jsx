import Image from "next/image";
import Link from "next/link";

export default function CaseStudySection() {
  const caseStudies = [
    {
      id: 1,
      title: "Ndure",
      image: "/indure.webp",
      href: "/indure.webp",
      variant: "bottom", // title bottom, hover bottom → top
    },
    {
      id: 2,
      title: "XYZ",
      image: "/xyz.jpg",
      href: "/case-study/xyz",
      variant: "top", // title top, hover top → bottom
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {caseStudies.map((item) => {
        const isBottom = item.variant === "bottom";

        return (
          <div key={item.id}>
            <div className="group relative aspect-600/600 border border-[#978050] rounded-3xl overflow-hidden bg-white shadow-lg">
              <div className="">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className=" object-fill rounded-3xl"
                />
              </div>

              {/* HOVER OVERLAY */}
              <div
                className={`
                absolute inset-0
                bg-black/60
                transition-transform duration-500 ease-in-out
                z-10
                ${
                  isBottom
                    ? "translate-y-full group-hover:translate-y-0"
                    : "-translate-y-full group-hover:translate-y-0"
                }
              `}
              />

              {/* VIEW CASE STUDY */}
              <div
                className="
                absolute inset-0
                flex items-center justify-center
                opacity-0
                group-hover:opacity-100
                transition-opacity duration-500
                z-20
              "
              >
                <Link
                  href={item.href}
                  className="
                  text-[#FFB703]
                  text-2xl font-semibold
                  flex items-center gap-2
                  hover:gap-3 transition-all
                  underline                  
                "
                >
                  View Case Study
                  <span>
                    <svg
                      width="23"
                      height="18"
                      viewBox="0 0 23 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 8.89387C0 9.50287 0.422 9.93687 1.0315 9.93687H16.465L18.973 9.84287L15.1175 13.3584L12.4925 16.0184C12.305 16.2064 12.211 16.4874 12.211 16.7684C12.211 17.3434 12.656 17.7764 13.231 17.7764C13.512 17.7764 13.758 17.6714 13.9925 17.4484L21.7855 9.66787C22.0195 9.44487 22.137 9.17537 22.137 8.89437C22.137 8.60137 22.0195 8.33187 21.7855 8.10937L13.9925 0.327867C13.7575 0.105367 13.512 -0.000133939 13.2305 -0.000133939C12.6565 -0.000133939 12.211 0.433366 12.211 1.01937C12.211 1.28887 12.305 1.56987 12.4925 1.75737L15.1175 4.42937L18.961 7.93337L16.465 7.83937L1.0315 7.83937C0.422 7.83937 0 8.28387 0 8.89387Z"
                        fill="#FFBE2E"
                      />
                    </svg>
                  </span>
                </Link>
              </div>

              {/* TITLE BAR */}
              <div
                className={`
                absolute left-0 w-full
                bg-[#FFC533]
                text-center py-4
                text-lg font-semibold
                z-30
                ${isBottom ? "bottom-0" : "top-0"}
              `}
              >
                {item.title}
              </div>
            </div>
            <Link
              href=""
              className="text-yellow-300 underline lg:hidden block relative text-center mt-4 flex justify-center gap-1 items-center group"
            >
              {" "}
              View Case Study{" "}
              <Image
                src="/yellowarrow.svg"
                height={35}
                width={13}
                className="group-hover:-translate-x-[5px]"
              />
            </Link>
          </div>
        );
      })}
    </section>
  );
}
