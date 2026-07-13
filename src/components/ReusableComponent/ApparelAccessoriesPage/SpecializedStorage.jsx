"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleContent from "../All_Title/TitleContent";
import { titleContentConfig } from "@/config/titleContentConfig";
import GarmentCard from "./GarmentCard";

gsap.registerPlugin(ScrollTrigger);

// --- Tunables -------------------------------------------------------
const CONTAINER_HEIGHT = 532; // fixed height of the whole stack (matches your design)
const CARD_HEIGHT = 372; // GarmentCard's actual natural height (from your Figma spec)
const SCROLL_PER_CARD = 0.9; // fraction of viewport height of scroll used per card transition
// ---------------------------------------------------------------------

// A peeking card's top sits exactly where the active card's bottom edge is,
// which naturally reveals CONTAINER_HEIGHT - CARD_HEIGHT (= 160px here) of it
// inside the clipped box — no ratio guessing needed.
const PEEK_Y = CARD_HEIGHT;
const HIDDEN_Y = CONTAINER_HEIGHT + CARD_HEIGHT; // fully below the box, invisible

export default function SpecializedStorage({ sectionKey = "" }) {
  const tc =
    titleContentConfig[sectionKey] || titleContentConfig["SpecializedStorage"];

  const sectionRef = useRef(null);
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
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const ctx = gsap.context(() => {
        const cardEls = cardRefs.current;
        const n = cardEls.length;

        // Stacking order: later cards render above earlier ones
        cardEls.forEach((el, i) => gsap.set(el, { zIndex: i + 1 }));

        // Initial state: card 0 fully active, card 1 peeking (160px) below it,
        // every later card parked fully off-screen until its turn.
        gsap.set(cardEls[0], { y: 0 });
        if (cardEls[1]) gsap.set(cardEls[1], { y: PEEK_Y });
        for (let i = 2; i < n; i++) {
          gsap.set(cardEls[i], { y: HIDDEN_Y });
        }

        // Single timeline driven by one pinned ScrollTrigger — avoids the
        // manual pixel-offset math that breaks once pin injects its spacer.
        const tl = gsap.timeline({
          defaults: { ease: "none", duration: 1 },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => "+=" + (n - 1) * window.innerHeight * SCROLL_PER_CARD,
            scrub: true,
            pin: ".cards-wrapper",
            pinSpacing: true,
          },
        });

        for (let i = 1; i < n; i++) {
          const step = i - 1;
          // card i slides up from its peek position into the active slot,
          // fully replacing the previous card
          tl.to(cardEls[i], { y: 0 }, step);
          // the next card (i+1), if any, rises from hidden into its own peek
          if (cardEls[i + 1]) {
            tl.to(cardEls[i + 1], { y: PEEK_Y }, step);
          }
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
      className="py-8 md:py-16 buildtohandleser relative"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* LEFT */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <TitleContent {...tc} />
          </div>

          {/* RIGHT - Desktop: fixed-height pinned deck */}
          <div
            className="cards-wrapper relative hidden lg:block overflow-hidden"
            style={{ height: `${CONTAINER_HEIGHT}px` }}
          >
            {cards.map((card, index) => (
              <div
                key={card.number}
                ref={(el) => (cardRefs.current[index] = el)}
                className="absolute inset-x-0 top-0"
                style={{ willChange: "transform" }}
              >
                <GarmentCard {...card} />
              </div>
            ))}
          </div>

          {/* RIGHT - Mobile/Tablet: plain stacked list, no overlap */}
          <div className="flex flex-col gap-6 lg:hidden">
            {cards.map((card) => (
              <GarmentCard key={card.number} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
