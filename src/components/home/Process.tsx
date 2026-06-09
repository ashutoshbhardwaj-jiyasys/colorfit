"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import SectionHeader from "@/components/SectionHeader";

const STEPS = [
  {
    num: "01",
    title: "Discover",
    body: "We analyze market dynamics, competitor shelf presence, and print substrates to establish a solid design foundation.",
  },
  {
    num: "02",
    title: "Define",
    body: "We formulate the design concept, visual hierarchy, and core color psychology mapping that guide the system.",
  },
  {
    num: "03",
    title: "Design",
    body: "We build packaging surfaces, precise vector dielines, and layout graphics under strict ISO 12647 color standards.",
  },
  {
    num: "04",
    title: "Deliver",
    body: "We provide lock-ready digital templates (PDF/X-4), manage pre-press drawdowns, and guarantee shelf-ready outputs.",
  },
];

export default function Process() {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const trackEl = track.current;
      if (!trackEl) return;

      const mm = gsap.matchMedia();

      // Horizontal pinned scroll on larger screens only.
      mm.add("(min-width: 768px)", () => {
        const distance = trackEl.scrollWidth - window.innerWidth;
        const tween = gsap.to(trackEl, {
          x: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => `+=${distance}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
        return () => tween.kill();
      });

      return () => {
        mm.revert();
        ScrollTrigger.refresh();
      };
    },
    { scope: root }
  );

  return (
    <section ref={root} className="bg-ink text-paper md:h-screen md:overflow-hidden py-16 md:py-0">
      <SectionHeader
        eyebrow="How we work"
        title="A process built for shelf impact."
        pt="pt-16 md:pt-24"
        pb="pb-0"
        lightText={true}
      />

      <div
        ref={track}
        className="mt-12 flex gap-6 px-6 md:mt-20 md:flex-nowrap md:px-16"
      >
        {STEPS.map((s) => (
          <article
            key={s.num}
            className="flex w-[80vw] shrink-0 flex-col justify-between rounded-2xl border border-paper/10 bg-paper/[0.03] p-8 md:h-[44vh] md:w-[40vw] md:p-12 hover:border-accent/30 transition-colors duration-300"
          >
            <span className="font-display text-6xl font-black text-accent md:text-8xl">
              {s.num}
            </span>
            <div>
              <h3 className="font-display text-3xl font-black md:text-4xl text-white">
                {s.title}
              </h3>
              <p className="mt-4 max-w-sm text-paper/60 text-sm leading-relaxed">{s.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
