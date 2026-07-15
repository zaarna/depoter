"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleContent from "../All_Title/TitleContent";
import { titleContentConfig } from "@/config/titleContentConfig";
import GarmentCard from "./GarmentCard";

gsap.registerPlugin(ScrollTrigger);

// --- Tunables -------------------------------------------------------
const GAP = 8; // space between the active card and the next one (0 = flush, negative = overlap)
const PEEK = 40; // how much of the NEXT card is visible below the active one
const SCROLL_PER_CARD = 1.2; // scroll distance per card, as a fraction of viewport height
const TOP_OFFSET = 96; // px of breathing room above the section while it's pinned
const SCRUB = 1;
// ---------------------------------------------------------------------

export default function SpecializedStorage({ sectionKey = "" }) {
  const tc =
    titleContentConfig[sectionKey] || titleContentConfig["SpecializedStorage"];

  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const cardRefs = useRef([]);

  const cards = [
    {
      numberImage: "/01.png",
      title: "Garment on Hanger (GOH)",
      description:
        "For premium suits, evening gowns, and high-end jackets that cannot be folded.",
      icon: "/goh.svg",
      bgColor: "#FFBE2E",
    },
    {
      numberImage: "/02.png",
      title: "Standard Shelving",
      description:
        "Optimized rack setups for folded items like t-shirts, jeans, and activewear.",
      icon: "/shelf.svg",
      bgColor: "#FFCB58",
    },
    {
      numberImage: "/03.png",
      title: "High-Security Zones",
      description:
        "Dedicated secure cages for high-value accessories like luxury watches, bags, and jewelry.",
      icon: "/security.svg",
      bgColor: "#FFD26D",
    },
    {
      numberImage: "/04.png",
      title: "Accessories Sorting",
      description:
        "Specialized small bins for items like sunglasses, socks, and scarves to prevent losses.",
      icon: "/bin.svg",
      bgColor: "#FFDF97",
    },
  ];

  useLayoutEffect(() => {
    ScrollTrigger.clearScrollMemory();

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const cardEls = cardRefs.current.filter(Boolean);
      const n = cardEls.length;
      const wrapper = wrapperRef.current;
      if (!wrapper || n === 0) return;

      // Measure the REAL rendered card height instead of guessing it — this is
      // what keeps the space between cards equal to GAP (no dead gap).
      const cardH = cardEls[0].offsetHeight;
      const PEEK_Y = cardH + GAP; // next card's top sits GAP px below active card's bottom
      const CONTAINER_HEIGHT = cardH + GAP + PEEK; // one card + gap + a sliver of the next
      const HIDDEN_Y = CONTAINER_HEIGHT + cardH; // parked fully below the box, invisible

      wrapper.style.height = `${CONTAINER_HEIGHT}px`;

      const ctx = gsap.context(() => {
        // Stacking order: later cards render above earlier ones
        cardEls.forEach((el, i) => gsap.set(el, { zIndex: i + 1 }));

        // Initial state: card 0 active, card 1 peeking, the rest parked off-screen
        gsap.set(cardEls[0], { y: 0 });
        if (cardEls[1]) gsap.set(cardEls[1], { y: PEEK_Y });
        for (let i = 2; i < n; i++) gsap.set(cardEls[i], { y: HIDDEN_Y });

        // Pin the whole section and scrub the deck as the page scrolls.
        // Scroll happens ANYWHERE on the page — no need to hover the cards.
        // After the last card, the pin releases and the section scrolls up.
        const tl = gsap.timeline({
          defaults: { ease: "none", duration: 1 },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${(n - 1) * SCROLL_PER_CARD * window.innerHeight}`,
            pin: true,
            pinSpacing: true,
            scrub: SCRUB,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            // markers: true,
          },
        });

        for (let i = 1; i < n; i++) {
          const step = i - 1;
          // card i slides up from its peek into the active slot
          tl.to(cardEls[i], { y: 0 }, step);
          // the following card rises from hidden into its own peek
          if (cardEls[i + 1]) tl.to(cardEls[i + 1], { y: PEEK_Y }, step);
        }

        const raf = requestAnimationFrame(() => ScrollTrigger.refresh());
        return () => cancelAnimationFrame(raf);
      }, sectionRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="buildtohandleser relative py-8 md:py-8 lg:py-0 lg:min-h-screen lg:flex lg:items-center lg:overflow-hidden"
    >
      <div className="container w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:items-center w-full">
          {/* LEFT */}
          <div className="z-10">
            <TitleContent {...tc} />
          </div>

          {/* RIGHT - Desktop: single-card window, cards scrub with the section */}
          <div
            ref={wrapperRef}
            className="cards-wrapper relative hidden lg:block overflow-hidden"
          >
            {cards.map((card, index) => (
              <div
                key={card.title}
                ref={(el) => (cardRefs.current[index] = el)}
                className="absolute inset-x-0 top-0"
                style={{ willChange: "transform" }}
              >
                <GarmentCard {...card} />
              </div>
            ))}
          </div>

          {/* RIGHT - Mobile/Tablet: plain stacked list */}
          <div className="flex flex-col gap-6 lg:hidden">
            {cards.map((card) => (
              <GarmentCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
