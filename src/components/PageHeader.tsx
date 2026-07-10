import AnimatedHeading from "@/components/anim/AnimatedHeading";

export default function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="container-x pt-36 pb-12 md:pt-44 md:pb-16">
      <p className="mb-5 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-muted">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        {eyebrow}
      </p>
      <AnimatedHeading
        as="h1"
        text={title}
        className="max-w-4xl 2xl:max-w-6xl font-display text-display-lg font-bold"
      />
      {intro ? (
        <p className="mt-8 max-w-2xl 2xl:max-w-4xl text-lg text-muted">{intro}</p>
      ) : null}
    </header>
  );
}
