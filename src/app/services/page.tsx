import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import ServiceRow from "@/components/ServiceRow";
import { SERVICES } from "@/lib/data";

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
      {/* Page Header with Studio Background */}
      <header className="relative overflow-hidden border-b border-line/10 pb-16 isolate">
        {/* Subtle Horizontal Gradient of Brand Colors */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-violet/10 via-brand-magenta/5 via-brand-orange/5 via-brand-sky/5 to-brand-leaf/10 pointer-events-none -z-10" />
        
        {/* Soft Radial light blooms for studio feel */}
        <div className="absolute top-0 left-1/4 w-[50%] h-full rounded-full bg-brand-magenta/10 blur-[100px] pointer-events-none -z-10" />
        <div className="absolute top-0 right-1/4 w-[40%] h-full rounded-full bg-brand-sky/10 blur-[80px] pointer-events-none -z-10" />

        <SectionHeader
          eyebrow="What we do"
          title="Design services connecting deep strategy to the retail shelf."
          pt="pt-36 md:pt-44"
          pb="pb-6"
        />
        <div className="container-x flex flex-col items-center text-center">
          <p className="max-w-2xl 2xl:max-w-4xl text-lg text-muted leading-relaxed font-sans">
            We integrate color science, structural design, and layout precision across every format so your brand is flawless from mockup to print.
          </p>
        </div>
      </header>

      <section className="container-x pb-18">
        <div className="border-t border-line">
          {SERVICES.map((s, idx) => (
            <ServiceRow
              key={s.num}
              num={s.num}
              numColor={NUM_COLORS[idx] || "text-accent"}
              title={s.title}
              description={s.description}
              tags={s.tags}
              extraInfo={s.extraInfo}
              detailsList={s.detailsList}
            />
          ))}
        </div>
      </section>

      {/* Production & Calibration Standards block using SectionHeader */}
      <section className="bg-white py-20  border-line">
        <SectionHeader
          eyebrow="Standards"
          title="Structural & Print Standards"
          pt="pt-0"
          pb="pb-8"
        />
        <div className="container-x flex flex-col items-center text-center">
          <p className="text-muted mb-12 text-base leading-relaxed max-w-2xl 2xl:max-w-4xl">
            We hold our physical outputs to the highest industry benchmarks. All files are pre-press calibrated and cross-checked against substrate limitations before submission.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 text-left w-full max-w-4xl 2xl:max-w-6xl">
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
      </section>
    </>
  );
}
