import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import WorkGrid from "@/components/WorkGrid";

export const metadata: Metadata = {
  title: "Work — Colorfit",
  description: "Selected branding, packaging, and graphic design projects showcasing colour mastery and precision design.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected work"
        title="Brands we've helped become impossible to ignore."
        intro="A curated showcase of packaging systems, brand identities, and graphic layouts crafted with colour mastery and precision."
      />

      <section className="container-x pb-32">
        <WorkGrid />
      </section>
    </>
  );
}
