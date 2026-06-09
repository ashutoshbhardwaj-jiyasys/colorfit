import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/anim/Reveal";
import { STATS } from "@/lib/data";
import ColorDots from "@/components/ColorDots";

export const metadata: Metadata = {
  title: "About — Colorfit",
  description: "Colorfit is a packaging and design studio rooted in the belief that colour is the most powerful tool in visual communication.",
};

const STATS_COLORS = [
  "text-brand-magenta",
  "text-brand-violet",
  "text-brand-orange",
  "text-brand-sky",
];

const VALUES = [
  {
    title: "Colour Mastery",
    body: "We know colour science, psychology, and application inside-out — using colour as a strategic tool.",
    hover: "hover:bg-brand-magenta/[0.04] hover:border-brand-magenta/20 hover:text-brand-magenta"
  },
  {
    title: "Precision Craft",
    body: "Every millimetre and every hue is completely intentional. We design for absolute print precision.",
    hover: "hover:bg-brand-orange/[0.04] hover:border-brand-orange/20 hover:text-brand-orange"
  },
  {
    title: "Creative Boldness",
    body: "We push creative boundaries and explore the full brand spectrum without breaking constraints.",
    hover: "hover:bg-brand-violet/[0.04] hover:border-brand-violet/20 hover:text-brand-violet"
  },
  {
    title: "Sustainable Thinking",
    body: "Beautiful design and responsible production go hand in hand. We design packaging optimized for substrates.",
    hover: "hover:bg-brand-leaf/[0.04] hover:border-brand-leaf/20 hover:text-brand-leaf"
  }
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="The studio"
        title="A design studio rooted in colour mastery and precision."
        intro="Colorfit is a packaging and design company. Our brand reflects our conviction: vibrant, precise, and always purposeful. We treat every client's brand as if it were our own."
      />

      <section className="container-x pb-24">
        <Reveal className="grid gap-8 border-y border-line py-12 sm:grid-cols-2 md:grid-cols-4">
          {STATS.map((s, idx) => (
            <div key={s.label}>
              <div className={`font-display text-4xl font-black md:text-5xl ${STATS_COLORS[idx] || 'text-ink'}`}>
                {s.value}
              </div>
              <div className="mt-2 text-sm text-muted font-bold">{s.label}</div>
            </div>
          ))}
        </Reveal>

        <div className="mt-20 grid gap-12 md:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-display-md font-black text-ink">
              We believe design should earn its place.
            </h2>
          </Reveal>
          <Reveal className="space-y-6 text-lg text-muted">
            <p>
              Every choice we make — a color, a curve, a piece of copy — has to
              do a job: catch the eye, tell the truth about the product, and
              make someone reach out and pick it up.
            </p>
            <p>
              We treat every client&apos;s brand as if it were our own. We keep our team small and senior. You work directly with the
              people doing the work, from kickoff to final files. No handoffs,
              no telephone game.
            </p>
            <p>
              The result is design that feels inevitable in hindsight — and
              performs in the only place that matters: the real shelf.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24 border-t border-line">
        <div className="container-x">
          <div className="flex items-center gap-3 mb-10">
            <ColorDots size="sm" />
            <p className="text-sm uppercase tracking-[0.2em] text-muted font-bold">
              Our Core Values
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title} className={`bg-white p-8 transition-all duration-300 border border-transparent ${v.hover}`}>
                <h3 className="font-display text-xl font-black">{v.title}</h3>
                <p className="mt-3 text-muted text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Team / Resources contact section as per Section 12 guidelines */}
      <section className="bg-paper py-20 border-t border-line">
        <div className="container-x">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-black text-ink mb-6">Brand Contacts &amp; Resources</h2>
            <p className="text-muted mb-10">
              For all brand-related questions, approvals, and asset requests, please reach out to the relevant Colorfit team.
            </p>
            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-muted font-bold">Brand Manager</h4>
                <a href="mailto:brandteam@colorfit.in" className="mt-2 block font-display text-base font-bold text-ink hover:text-accent transition-colors">
                  brandteam@colorfit.in
                </a>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-muted font-bold">Design Queries</h4>
                <a href="mailto:design@colorfit.in" className="mt-2 block font-display text-base font-bold text-ink hover:text-accent transition-colors">
                  design@colorfit.in
                </a>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-muted font-bold">New Business</h4>
                <a href="mailto:hello@colorfit.in" className="mt-2 block font-display text-base font-bold text-ink hover:text-accent transition-colors">
                  hello@colorfit.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
