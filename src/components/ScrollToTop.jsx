"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
    const pathname = usePathname();

    useEffect(() => {
        // Let #anchor links do their job.
        if (window.location.hash) return;

        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }

        const reset = () => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;

            // If a wrapper element is the real scroller, reset it too.
            // Change the selector to match your layout, or delete this block.
            document.querySelectorAll("[data-scroll-container]").forEach((el) => {
                el.scrollTop = 0;
            });
        };

        reset();

        // Images with `fill` and framer-motion settle after paint and can
        // shift scroll back. Re-assert a couple of times.
        const raf = requestAnimationFrame(reset);
        const t = setTimeout(reset, 120);

        return () => {
            cancelAnimationFrame(raf);
            clearTimeout(t);
        };
    }, [pathname]);

    return null;
}