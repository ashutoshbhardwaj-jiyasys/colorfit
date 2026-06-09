"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import ColorDots from "@/components/ColorDots";

const ROTATING_WORDS = [
  { text: "Purposeful.", color: "#7B3FA0" }, // Violet
  { text: "Creative.", color: "#F26522" },   // Orange
  { text: "Focused.", color: "#3B9EDC" },    // Sky
  { text: "Beautiful.", color: "#F0047F" },  // Magenta
  { text: "Purposeful.", color: "#7B3FA0" }, // Duplicate for seamless infinite slide
];

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLSpanElement>(null);
  const [index, setIndex] = useState(0);

  // Entrance animations and scroll triggers
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-eyebrow", { autoAlpha: 0, y: 16, duration: 0.6 })
        .from(
          ".hero-title-line",
          { autoAlpha: 0, y: 40, duration: 1.1, ease: "power4.out", stagger: 0.1 },
          "-=0.4"
        )
        .from(
          ".hero-sub",
          { autoAlpha: 0, y: 20, duration: 0.7 },
          "-=0.6"
        )
        .from(
          ".hero-placeholder",
          { autoAlpha: 0, scale: 0.95, y: 20, duration: 0.8 },
          "-=0.6"
        )
        .from(
          ".hero-cta",
          { autoAlpha: 0, y: 20, duration: 0.7 },
          "-=0.5"
        );

      // Parallax drift of the background text on scroll.
      gsap.to(".hero-ghost-text", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: root }
  );

  // Dedicated loop hook for infinite upward slide
  useGSAP(
    () => {
      const timer = gsap.delayedCall(2.5, () => {
        const nextIndex = index + 1;

        gsap.to(containerRef.current, {
          yPercent: -nextIndex * (100 / ROTATING_WORDS.length),
          duration: 0.6,
          ease: "power3.inOut",
          onComplete: () => {
            if (nextIndex === ROTATING_WORDS.length - 1) {
              gsap.set(containerRef.current, { yPercent: 0 });
              setIndex(0);
            } else {
              setIndex(nextIndex);
            }
          },
        });
      });

      return () => {
        timer.kill();
      };
    },
    { scope: root, dependencies: [index] }
  );

  return (
    <section
      ref={root}
      className="relative overflow-hidden min-h-screen flex items-center bg-white pt-32 pb-16 text-ink"
    >
      {/* 1. Giant Outline Watermark Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <span
          className="hero-ghost-text font-display font-black text-[20vw] uppercase tracking-widest text-transparent leading-none"
          style={{ WebkitTextStroke: "1px rgba(17, 17, 17, 0.035)" }}
        >
          COLORFIT
        </span>
      </div>

      {/* 2. Soft Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45vw] h-[45vw] rounded-full bg-brand-magenta/[0.03] blur-[120px] pointer-events-none z-0" />

      {/* 3. Main Split Container */}
      <div className="container-x w-full relative z-10 flex flex-col items-center">
        {/* Top 2-Part Grid Layout */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center mb-14">
          
          {/* Left Column: Typography Block */}
          <div className="md:col-span-7 lg:col-span-7 flex flex-col items-start text-left justify-center">
            <div className="hero-eyebrow mb-8 flex items-center gap-3">
              <ColorDots size="sm" />
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-muted">
                01 — Premium Packaging Design Studio
              </p>
            </div>

            <h1 className="font-display text-[clamp(2.8rem,6.8vw,6.8rem)] font-black leading-[0.95] text-ink tracking-tighter uppercase max-w-4xl text-left w-full">
              <span className="hero-title-line block">Vibrant.</span>
              <span className="hero-title-line block">Precise.</span>
              <span className="hero-title-line block relative overflow-hidden h-[1.05em] w-full">
                <span
                  ref={containerRef}
                  className="absolute left-0 top-0 w-full flex flex-col"
                  style={{ height: `${ROTATING_WORDS.length * 100}%` }}
                >
                  {ROTATING_WORDS.map((w, idx) => (
                    <span
                      key={idx}
                      style={{ color: w.color }}
                      className="h-[1.05em] block select-none"
                    >
                      {w.text}
                    </span>
                  ))}
                </span>
              </span>
            </h1>

            <p className="hero-sub mt-8 max-w-xl text-base md:text-lg text-muted leading-relaxed font-sans">
              Colorfit is a premier packaging design studio crafting high-impact brand identities, custom product packaging, and strategic graphic designs. We combine precise color strategy with structural expertise to build sustainable, shelf-ready packaging solutions that captivate consumers.
            </p>
          </div>

          {/* Right Column: Packaging Image Mockup */}
          <div className="hero-placeholder md:col-span-5 lg:col-span-5 flex justify-center md:justify-end lg:justify-end w-full">
            <div className="relative w-full max-w-[500px] aspect-square overflow-hidden bg-transparent">
              <Image
                src="/images/mockup-hero.png"
                alt="Colorfit Brand Packaging Mockup"
                width={600}
                height={600}
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
        </div>

        {/* Bottom Centered CTA Button */}
        <div className="hero-cta">
          <Link
            href="/work"
            className="inline-flex items-center gap-6 rounded-full bg-brand-magenta px-7 py-4 font-black uppercase tracking-widest text-xs text-white hover:bg-ink hover:text-white transition-all duration-300 shadow-md group cursor-pointer"
          >
            Explore Projects
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-ink group-hover:bg-brand-magenta group-hover:text-white transition-all duration-300">
              ↗
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
