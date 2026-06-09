"use client";

import Reveal from "@/components/anim/Reveal";
import { SERVICES } from "@/lib/data";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";

const hoverClasses: Record<string, { bg: string; text: string; num: string }> = {
  "01": { bg: "hover:bg-brand-violet/[0.04] hover:border-brand-violet/20", text: "group-hover:text-brand-violet", num: "text-brand-violet" },
  "02": { bg: "hover:bg-brand-magenta/[0.04] hover:border-brand-magenta/20", text: "group-hover:text-brand-magenta", num: "text-brand-magenta" },
  "03": { bg: "hover:bg-brand-orange/[0.04] hover:border-brand-orange/20", text: "group-hover:text-brand-orange", num: "text-brand-orange" },
  "04": { bg: "hover:bg-brand-sky/[0.04] hover:border-brand-sky/20", text: "group-hover:text-brand-sky", num: "text-brand-sky" },
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-canvas">
      <div className="container-x">
        <SectionHeader
          eyebrow="What we do"
          title="Four disciplines, one coherent system."
          link={{ href: "/services", label: "All services →" }}
          pt="pt-0"
          pb="pb-16"
        />

        <Reveal stagger className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
          {SERVICES.map((s) => {
            const style = hoverClasses[s.num] || { bg: "hover:bg-canvas", text: "group-hover:text-accent", num: "text-accent" };
            return (
              <div
                key={s.num}
                data-reveal-child
                className={`group relative overflow-hidden bg-white p-8 border border-transparent transition-all duration-300 ${style.bg} md:p-12`}
              >
                {/* Backdrop Image */}
                <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden opacity-[0.05] group-hover:opacity-[0.10] transition-all duration-700 ease-out">
                  <Image
                    src={s.bgImage}
                    alt=""
                    fill
                    className="object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-start justify-between">
                      <span className={`font-display text-sm font-bold ${style.num}`}>
                        {s.num}
                      </span>
                      <span className={`text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${style.text}`}>
                        ↗
                      </span>
                    </div>
                    <h3 className={`mt-8 font-display text-2xl font-black md:text-3xl transition-colors duration-300 ${style.text}`}>
                      {s.title}
                    </h3>
                    <p className="mt-4 max-w-md text-muted text-sm leading-relaxed">{s.description}</p>
                  </div>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-line bg-white/60 backdrop-blur-[2px] px-3 py-1 text-xs text-muted"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
