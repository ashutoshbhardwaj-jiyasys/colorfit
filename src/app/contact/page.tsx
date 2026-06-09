import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import ColorDots from "@/components/ColorDots";

export const metadata: Metadata = {
  title: "Contact — Colorfit",
  description: "Start a brand, packaging, or graphic design project with Colorfit.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Start a project"
        title="Let's build something worth noticing."
        intro="Tell us a little about your product and where you want to take it. We reply to all inquiries within two business days."
      />

      <section className="container-x pb-32">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <ContactForm />
          </div>

          <aside className="space-y-10 md:col-span-4 md:col-start-9">
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-muted font-bold">New Business</h2>
              <a
                href="mailto:hello@colorfit.in"
                className="mt-2 block font-display text-xl font-bold hover:text-brand-magenta transition-colors"
              >
                hello@colorfit.in
              </a>
            </div>
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-muted font-bold">Design Queries</h2>
              <a
                href="mailto:design@colorfit.in"
                className="mt-2 block font-display text-xl font-bold hover:text-brand-orange transition-colors"
              >
                design@colorfit.in
              </a>
            </div>
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-muted font-bold">Brand Approvals</h2>
              <a
                href="mailto:brandteam@colorfit.in"
                className="mt-2 block font-display text-xl font-bold hover:text-brand-violet transition-colors"
              >
                brandteam@colorfit.in
              </a>
            </div>
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-muted font-bold">Studio</h2>
              <p className="mt-2 font-display text-xl font-bold text-ink">
                Remote-first
                <span className="block text-sm text-muted font-normal mt-1">Based in South Asia, working worldwide.</span>
              </p>
            </div>
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-muted font-bold">Follow Us</h2>
              <div className="mt-2 flex flex-wrap gap-4 font-display text-base font-bold">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-magenta transition-colors">Instagram</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-violet transition-colors">LinkedIn</a>
                <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="hover:text-brand-sky transition-colors">WhatsApp</a>
              </div>
              <ColorDots size="sm" className="mt-6" />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
