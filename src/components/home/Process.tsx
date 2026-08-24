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
  return (
    <section id="process" className="bg-ink text-paper py-16 md:py-24">
      <div className="container-x">
        <SectionHeader
          eyebrow="How we work"
          title="A process built for shelf impact."
          pt="pt-0"
          pb="pb-16"
          lightText={true}
        />

        {/* Static 4-up grid: 1 col mobile / 2 col tablet / 4 col desktop. No pin, no horizontal scroll. */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {STEPS.map((s) => (
            <article
              key={s.num}
              className="flex h-full flex-col justify-between rounded-2xl border border-paper/10 bg-paper/[0.03] p-8 transition-colors duration-300 hover:border-accent/30 xl:min-h-[340px] 2xl:p-10"
            >
              <span className="font-display text-6xl font-black text-accent md:text-7xl 2xl:text-8xl">
                {s.num}
              </span>
              <div className="mt-10">
                <h3 className="font-display text-3xl font-black text-white md:text-4xl">
                  {s.title}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/60">
                  {s.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
