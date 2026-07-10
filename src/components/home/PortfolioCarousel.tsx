"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { SLIDES } from "./portfolioSlides";

export default function PortfolioCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Derive the active slide from the horizontal scroll position
  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const slideWidth = track.scrollWidth / SLIDES.length;
    setActive(Math.round(track.scrollLeft / slideWidth));
  };

  const scrollToIndex = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slideWidth = track.scrollWidth / SLIDES.length;
    track.scrollTo({ left: slideWidth * i, behavior: "smooth" });
  };

  return (
    <section className="py-12 lg:hidden">
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth px-4 gap-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {SLIDES.map((slide, i) => (
          <article
            key={slide.num}
            className="snap-center shrink-0 w-[86%] max-w-[560px]"
          >
            <div
              className="relative aspect-[4/5] md:aspect-square rounded-[2rem] overflow-hidden"
              style={{
                background: slide.bg,
                boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
              }}
            >
              {/* Ghost watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                <span
                  className="font-display font-black uppercase leading-none tracking-wider"
                  style={{
                    fontSize: "clamp(6rem, 24vw, 18rem)",
                    color: "transparent",
                    WebkitTextStroke: "1.5px rgba(255,255,255,0.09)",
                  }}
                >
                  {slide.client
                    .replace(/[^a-zA-Z]/g, "")
                    .substring(0, 4)
                    .toUpperCase()}
                </span>
              </div>

              {/* Image — fixed aspect frame, so object-cover has a predictable crop */}
              <Image
                src={slide.mobileImage}
                alt={slide.client}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 86vw, 560px"
                priority={i === 0}
                quality={90}
              />

              {/* Top-left label */}
              <p
                className="absolute top-6 left-6 z-20 font-black uppercase tracking-[0.22em] text-[10px]"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                Portfolio Showcase
              </p>

              {/* Top-right counter */}
              <p
                className="absolute top-6 right-6 z-20 font-mono text-xs font-bold tracking-widest"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                {slide.num}&nbsp;/&nbsp;{String(SLIDES.length).padStart(2, "0")}
              </p>
            </div>

            {/* Caption below the frame */}
            <div className="px-2 pt-5">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-muted mb-1">
                {slide.category}&nbsp;·&nbsp;{slide.year}
              </p>
              <h2 className="font-display font-black uppercase text-ink leading-[0.9] tracking-tighter text-3xl">
                {slide.client}
              </h2>
              <p className="mt-2 text-sm text-muted font-sans leading-relaxed">
                {slide.tagline}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination dots */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.num}
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to ${slide.client}`}
            aria-current={active === i}
            className="h-2 rounded-full transition-all duration-300"
            style={{
              width: active === i ? "1.5rem" : "0.5rem",
              background: active === i ? "#111111" : "#D4D4D4",
            }}
          />
        ))}
      </div>
    </section>
  );
}
