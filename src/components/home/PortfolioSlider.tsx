"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { SLIDES } from "./portfolioSlides";
import PortfolioCarousel from "./PortfolioCarousel";

// SSR-safe media query hook. Defaults to `false` on the server and the first
// client render (mobile-first), then updates after mount — so the desktop
// slider only ever mounts when it's actually visible and measurable.
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

export default function PortfolioSlider() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  // Desktop (≥lg): scroll-driven stacked slider.
  // Mobile + Tablet (<lg): swipeable carousel.
  return isDesktop ? <DesktopSlider /> : <PortfolioCarousel />;
}

function DesktopSlider() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const cards = cardsRef.current.filter((c): c is HTMLDivElement => !!c);
      if (cards.length < 2) return;

      // Cards 2–5 start fully below the viewport
      gsap.set(cards.slice(1), { yPercent: 110 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // Slide each subsequent card up over an equal share of the scroll
      cards.slice(1).forEach((card, i) => {
        tl.to(card, { yPercent: 0, ease: "none", duration: 1 }, i);
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `${SLIDES.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {SLIDES.map((slide, i) => {
          // Extract before the image conditional so TypeScript doesn't narrow slide to `never`
          const clientInitial = slide.client[0];
          return (
            <div
              key={slide.num}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="absolute top-20 bottom-4 left-4 right-4 mx-auto max-w-container flex flex-col will-change-transform rounded-[2.5rem] overflow-hidden"
              style={{
                zIndex: i + 1,
                background: slide.bg,
                boxShadow: "0 10px 50px rgba(0,0,0,0.15)",
              }}
            >
              {/* ── Visual area ── */}
              <div className="relative flex-1 overflow-hidden">
                {/* Ghost watermark */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                  <span
                    className="font-display font-black uppercase leading-none tracking-wider"
                    style={{
                      fontSize: "clamp(8rem, 28vw, 28rem)",
                      color: "transparent",
                      WebkitTextStroke: "1.5px rgba(255,255,255,0.09)",
                    }}
                  >
                    {slide.client.replace(/[^a-zA-Z]/g, "").substring(0, 4).toUpperCase()}
                  </span>
                </div>
                {slide.image ? (
                  <Image
                    src={slide.image}
                    alt={slide.client}
                    fill
                    className="object-cover object-center"
                    sizes="100vw"
                    priority={i === 0}
                    quality={90}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div
                      className="flex items-center justify-center rounded-full"
                      style={{
                        width: "clamp(14rem, 28vw, 28rem)",
                        height: "clamp(14rem, 28vw, 28rem)",
                        background: "rgba(255,255,255,0.10)",
                        border: "1.5px solid rgba(255,255,255,0.18)",
                      }}
                    >
                      <span
                        className="font-display font-black uppercase leading-none text-white"
                        style={{ fontSize: "clamp(5rem, 10vw, 10rem)", letterSpacing: "-0.04em" }}
                      >
                        {clientInitial}
                      </span>
                    </div>
                  </div>
                )}

                {/* Top-left label */}
                <p
                  className="absolute top-8 left-8 z-20 font-black uppercase tracking-[0.22em] text-[10px]"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  Portfolio Showcase
                </p>

                {/* Top-right counter */}
                <p
                  className="absolute top-8 right-8 z-20 font-mono text-xs font-bold tracking-widest"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {slide.num}&nbsp;/&nbsp;{String(SLIDES.length).padStart(2, "0")}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
