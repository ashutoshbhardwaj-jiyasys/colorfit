"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

import ColorDots from "@/components/ColorDots";

const ITEMS = [
  "Brand Identity",
  "Packaging Design",
  "Graphic Design",
  "Art Direction",
  "Colour Strategy",
  "Systems Thinking",
];

export default function Marquee() {
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = track.current;
      if (!el) return;
      // Seamless infinite scroll: the track holds two copies, animate -50%.
      gsap.to(el, {
        xPercent: -50,
        repeat: -1,
        duration: 22,
        ease: "none",
      });
    },
    { scope: track }
  );

  const Row = () => (
    <div className="flex shrink-0 items-center">
      {ITEMS.map((item) => (
        <span key={item} className="flex items-center">
          <span className="px-10 font-display text-2xl font-black uppercase tracking-wider text-ink md:text-3xl">
            {item}
          </span>
          <ColorDots size="sm" className="mx-2" />
        </span>
      ))}
    </div>
  );

  return (
    <section className="border-y border-line bg-canvas py-8 md:py-10">
      <div className="overflow-hidden">
        <div ref={track} className="flex w-max">
          <Row />
          <Row />
        </div>
      </div>
    </section>
  );
}
