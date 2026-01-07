"use client";

import Marquee from "react-fast-marquee";

const row1 = ["/Shopify.svg", "/Salla.svg", "/Woocommerce.svg", "/Wix.svg"];

const row2 = ["/Magento.svg", "/Opencart.svg", "/Zid.svg", "/Bigcommerce.svg"];

export default function LogosWithMarquee() {
  return (
    <section className="bg-[#FFF7E4] overflow-hidden relative py-8 md:py-16 layer-bg">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 md:gap-12 items-center overflow-hidden">
          {/* LEFT SIDE – TEXT */}
          <div>
            <h2 className="text-3xl font-semibold text-[#212121] mb-4">
              Platforms We{" "}
              <span className="text-[#FFBE2E] font-bold">Integrate With</span>
            </h2>

            <div className="w-16 h-[2px] bg-[#212121] mb-4" />
          </div>

          {/* RIGHT SIDE – LOGO MARQUEE */}
          <div className="hidden md:block space-y-6">
            {/* ROW 1 – CLOCKWISE */}
            <Marquee
              speed={80}
              direction="right"
              pauseOnHover
              gradient={true}
              // autoFill
            >
              {row1.map((logo, i) => (
                <LogoCard key={i} src={logo} />
              ))}
            </Marquee>

            {/* ROW 2 – ANTI-CLOCKWISE */}
            <Marquee
              speed={80}
              direction="left"
              pauseOnHover
              gradient={true}
              // autoFill
            >
              {row2.map((logo, i) => (
                <LogoCard key={i} src={logo} />
              ))}
            </Marquee>
          </div>
          {/* MOBILE STATIC LOGOS */}
          <div className="grid grid-cols-2 justify-items-center gap-3 md:hidden">
            {[...row1, ...row2].map((logo, i) => (
              <LogoCard key={i} src={logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoCard({ src }) {
  return (
    <div className="mx-0 md:mx-3">
      <div className="w-28 sm:w-36 md:w-[200px] ">
        <img
          src={src}
          alt=""
          className=" object-contain border border-[#939393] rounded-xl"
        />
      </div>
    </div>
  );
}
