import Reveal from "@/components/anim/Reveal";

interface ServiceRowProps {
  num: string;
  numColor: string; // Tailwind color class (e.g., 'text-brand-violet')
  title: string;
  description: string;
  tags: string[];
  extraInfo?: string;
  detailsList?: string[];
}

// Explicit map to prevent Tailwind from purging dynamically constructed bg classes
const HOVER_BG_MAP: Record<string, string> = {
  "text-brand-violet": "bg-brand-violet",
  "text-brand-magenta": "bg-brand-magenta",
  "text-brand-orange": "bg-brand-orange",
  "text-brand-sky": "bg-brand-sky",
};

export default function ServiceRow({
  num,
  numColor,
  title,
  description,
  tags,
  extraInfo,
  detailsList,
}: ServiceRowProps) {
  const hoverBg = HOVER_BG_MAP[numColor] || "bg-accent";

  return (
    <Reveal>
      <article className="group relative overflow-hidden grid gap-6 border-b border-line py-12 px-6 md:px-8 md:grid-cols-12 md:gap-10 md:py-16 transition-colors duration-500 ease-out z-10">
        {/* Sliding Background Panel */}
        <div className={`absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out -z-10 ${hoverBg}`} />

        {/* Large Colored Number */}
        <div className="md:col-span-1 z-10">
          <span className={`font-display text-2xl font-black md:text-3xl transition-colors duration-300 ${numColor} group-hover:text-white`}>
            {num}
          </span>
        </div>

        {/* Service Title */}
        <div className="md:col-span-4 z-10">
          <h2 className="font-display text-3xl font-black md:text-4xl text-ink transition-colors duration-300 group-hover:text-white">
            {title}
          </h2>
        </div>

        {/* Service Details & Tags */}
        <div className="md:col-span-7 relative min-h-[120px] md:min-h-[140px] flex items-center z-10">
          {/* Default View: description & tags */}
          <div className="w-full transition-all duration-500 ease-out transform group-hover:-translate-x-12 group-hover:opacity-0 group-hover:pointer-events-none">
            <p className="max-w-xl text-lg text-muted font-sans leading-relaxed">
              {description}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {tags.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-line px-3 py-1 text-xs text-muted font-bold bg-white/60 backdrop-blur-[2px]"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Hover View: extra details sliding in from the right */}
          <div className="inset-0 w-full h-full flex flex-col justify-center transition-all duration-500 ease-out transform translate-x-12 opacity-0 pointer-events-none group-hover:translate-x-0 group-hover:opacity-100 group-hover:pointer-events-auto">
            {extraInfo && (
              <p className="max-w-xl text-lg text-white/90 font-sans leading-relaxed font-medium">
                {extraInfo}
              </p>
            )}
            {detailsList && detailsList.length > 0 && (
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-white font-sans font-bold">
                {detailsList.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/80 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </article>
    </Reveal >
  );
}
