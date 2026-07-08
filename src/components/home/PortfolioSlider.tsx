"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

const SLIDES = [
  {
    num: "01",
    client: "Minimalist",
    category: "Brand Identity · Packaging",
    year: "2025",
    tagline: "Wellness ritual, redefined.",
    bg: "#F7C82A",
    image: "/images/mockup-hero2.jpg",
    mobileImage: "/images/mockup-hero2-mobile.jpg",
  },
  {
    num: "02",
    client: "GUD MISHRI",
    category: "Brand · Packaging",
    year: "2025",
    tagline: "Precision meets purity.",
    bg: "#7B3FA0",
    image: "/images/mockup-hero3.jpg",
    mobileImage: "/images/mockup-hero3-mobile.jpg",
  },
  {
    num: "03",
    client: "Womenia",
    category: "Packaging · Graphic",
    year: "2025",
    tagline: "Craft coffee, bold identity.",
    bg: "#F26522",
    image: "/images/mockup-hero4.jpg",
    mobileImage: "/images/mockup-hero4-mobile.jpg",
  },
  {
    num: "04",
    client: "Breath of Nature",
    category: "Brand Identity",
    year: "2024",
    tagline: "Nature distilled to essence.",
    bg: "#5DBB46",
    image: "/images/mockup-hero5.jpg",
    mobileImage: "/images/mockup-hero5-mobile.jpg",
  },
  {
    num: "05",
    client: "Zovvy",
    category: "Packaging Design",
    year: "2024",
    tagline: "Light, fresh, energized.",
    bg: "#3B9EDC",
    image: "/images/mockup-hero6.jpg",
    mobileImage: "/images/mockup-hero6-mobile.jpg",
  },
] as const;

export default function PortfolioSlider() {
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
        },
      });

      // Slide each subsequent card up over an equal share of the total scroll
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
                  <>





                    {/* Desktop Image */}
                    <Image
                      src={slide.image}
                      alt={slide.client}
                      fill
                      className="hidden md:block object-cover"
                      sizes="100vw"
                      priority={i === 0}
                      quality={90}
                    />

                    {/* Mobile Image */}
                    <Image
                      src={slide.mobileImage}
                      alt={slide.client}
                      fill
                      className="block md:hidden object-cover"
                      sizes="100vw"
                      priority={i === 0}
                      quality={90}
                    />


                  </>
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

              {/* ── Info bar ── */}
              {/* <div className="bg-canvas px-8 md:px-16 py-7 md:py-9 flex items-end justify-between gap-6 shrink-0">
              <div className="min-w-0">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-muted mb-2">
                  {slide.category}&nbsp;&nbsp;·&nbsp;&nbsp;{slide.year}
                </p>
                <h2
                  className="font-display font-black uppercase text-ink leading-[0.88] tracking-tighter"
                  style={{ fontSize: "clamp(2.4rem, 5.5vw, 5.5rem)" }}
                >
                  {slide.client}
                </h2>
                <p className="mt-2 text-sm text-muted font-sans leading-relaxed">
                  {slide.tagline}
                </p>
              </div>

              <Link
                href="/work"
                className="shrink-0 flex items-center justify-center rounded-full bg-brand-magenta text-white hover:scale-110 hover:bg-ink transition-all duration-300 shadow-md"
                style={{ width: "clamp(3.25rem, 4.5vw, 4rem)", height: "clamp(3.25rem, 4.5vw, 4rem)", fontSize: "1.1rem" }}
                aria-label={`View ${slide.client} project`}
              >
                ↗
              </Link>
            </div> */}
            </div>
          );
        })}
      </div>
    </section>
  );
}
