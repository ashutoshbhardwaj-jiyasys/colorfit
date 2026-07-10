"use client";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  link?: {
    href: string;
    label: string;
  };
  pt?: string;
  pb?: string;
  lightText?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  link,
  pt = "pt-16 md:pt-24",
  pb = "pb-16",
  lightText = false,
}: SectionHeaderProps) {
  return (
    <div className={`container-x flex flex-col items-center text-center ${pt} ${pb}`}>
      {eyebrow && (
        <p className={`mb-4 text-sm uppercase tracking-[0.2em] font-bold ${lightText ? "text-paper/50" : "text-muted"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-display text-display-md font-black uppercase text-center max-w-4xl 2xl:max-w-6xl ${lightText ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {link && (
        <a
          href={link.href}
          className={`mt-6 inline-block text-sm font-bold underline-offset-4 hover:underline transition-colors ${lightText ? "text-white hover:text-accent" : "text-ink hover:text-accent"}`}
        >
          {link.label}
        </a>
      )}
    </div>
  );
}
