import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import WorkGrid from "@/components/WorkGrid";

export const metadata: Metadata = {
  title: "Work — Colorfit",
  description: "Selected branding, packaging, and graphic design projects showcasing colour mastery and precision design.",
};

export default function WorkPage() {
  return (
    <div className="bg-canvas min-h-screen pb-32">
      {/* Page Header with Studio Background */}
      <header className="relative overflow-hidden border-b border-line/10 pb-16 isolate">
        {/* Subtle Horizontal Gradient of Brand Colors */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-violet/10 via-brand-magenta/5 via-brand-orange/5 via-brand-sky/5 to-brand-leaf/10 pointer-events-none -z-10" />
        
        {/* Soft Radial light blooms for studio feel */}
        <div className="absolute top-0 left-1/4 w-[50%] h-full rounded-full bg-brand-magenta/10 blur-[100px] pointer-events-none -z-10" />
        <div className="absolute top-0 right-1/4 w-[40%] h-full rounded-full bg-brand-sky/10 blur-[80px] pointer-events-none -z-10" />

        <SectionHeader
          eyebrow="Selected work"
          title="Brands we've helped become impossible to ignore."
          pt="pt-36 md:pt-44"
          pb="pb-6"
        />
        <div className="container-x flex flex-col items-center text-center">
          <p className="max-w-2xl 2xl:max-w-4xl text-lg text-muted leading-relaxed font-sans">
            A curated showcase of packaging systems, brand identities, and graphic layouts crafted with colour mastery and precision.
          </p>
        </div>
      </header>

      {/* Grid Section */}
      <section className="container-x mt-16">
        <WorkGrid />
      </section>
    </div>
  );
}
