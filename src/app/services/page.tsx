import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/anim/Reveal";
import { SERVICES } from "@/lib/data";
import ColorDots from "@/components/ColorDots";

export const metadata: Metadata = {
  title: "Services — Colorfit",
  description:
    "Brand identity design, structural and surface packaging design, graphic systems, and art direction.",
};

const NUM_COLORS = [
  "text-brand-violet",
  "text-brand-magenta",
  "text-brand-orange",
  "text-brand-sky",
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What we do"
        title="Design services connecting deep strategy to the retail shelf."
        intro="We integrate color science, structural design, and layout precision across every format so your brand is flawless from mockup to print."
      />

      <section className="container-x pb-24">
        <div className="border-t border-line">
          {SERVICES.map((s, idx) => (
            <Reveal key={s.num}>
              <article className="group grid gap-6 border-b border-line py-12 md:grid-cols-12 md:gap-10 md:py-16">
                <div className="md:col-span-1">
                  <span className={`font-display text-sm font-black ${NUM_COLORS[idx] || 'text-accent'}`}>
                    {s.num}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h2 className="font-display text-3xl font-black md:text-4xl text-ink">
                    {s.title}
                  </h2>
                </div>
                <div className="md:col-span-7">
                  <p className="max-w-xl text-lg text-muted font-sans leading-relaxed">{s.description}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-line px-3 py-1 text-xs text-muted font-bold"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Production & Calibration Standards block as per Section 07 guidelines */}
      <section className="bg-white py-20 border-t border-line">
        <div className="container-x">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <ColorDots size="sm" />
              <h2 className="font-display text-2xl font-black text-ink">Structural &amp; Print Standards</h2>
            </div>
            <p className="text-muted mb-10 text-base leading-relaxed">
              We hold our physical outputs to the highest industry benchmarks. All files are pre-press calibrated and cross-checked against substrate limitations before submission.
            </p>
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="border border-line rounded-xl p-6 hover:border-brand-magenta/30 transition-colors duration-300">
                <h3 className="font-display font-black text-lg text-ink">Dieline &amp; Bleed standards</h3>
                <p className="text-muted text-sm mt-3 leading-relaxed">
                  All dielines are built in vector formats (AI/EPS) with separate locked layers for artwork, creases, cuts, and bleeds. We maintain a minimum of 3mm bleed on all live edges and a 4mm safety margin.
                </p>
              </div>
              <div className="border border-line rounded-xl p-6 hover:border-brand-orange/30 transition-colors duration-300">
                <h3 className="font-display font-black text-lg text-ink">Colour Calibration (Delta-E)</h3>
                <p className="text-muted text-sm mt-3 leading-relaxed">
                  We use ISO 12647 as our baseline printing standard. Brand color consistency is strictly managed with Delta-E limits (ΔE ≤ 2.0 for primary Magenta/Black, and ΔE ≤ 3.0 for secondary palette).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
