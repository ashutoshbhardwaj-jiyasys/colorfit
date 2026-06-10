import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";
import ColorDots from "@/components/ColorDots";

export const metadata: Metadata = {
  title: "Contact — Colorfit",
  description: "Start a brand, packaging, or graphic design project with Colorfit.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header with Studio Background */}
      <header className="relative overflow-hidden border-b border-line/10 pb-16 mb-16 isolate">
        {/* Subtle Horizontal Gradient of Brand Colors */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-violet/10 via-brand-magenta/5 via-brand-orange/5 via-brand-sky/5 to-brand-leaf/10 pointer-events-none -z-10" />
        
        {/* Soft Radial light blooms for studio feel */}
        <div className="absolute top-0 left-1/4 w-[50%] h-full rounded-full bg-brand-magenta/10 blur-[100px] pointer-events-none -z-10" />
        <div className="absolute top-0 right-1/4 w-[40%] h-full rounded-full bg-brand-sky/10 blur-[80px] pointer-events-none -z-10" />

        <SectionHeader
          eyebrow="Start a project"
          title="Let's build something worth noticing."
          pt="pt-36 md:pt-44"
          pb="pb-6"
        />
        <div className="container-x flex flex-col items-center text-center">
          <p className="max-w-2xl text-lg text-muted leading-relaxed font-sans">
            Tell us a little about your product and where you want to take it. We reply to all inquiries within two business days.
          </p>
        </div>
      </header>

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
              <div className="mt-3 flex flex-wrap gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-paper hover:bg-brand-magenta hover:text-white border border-line text-ink transition-all duration-300 shadow-sm group"
                  aria-label="Instagram"
                >
                  <i className="fa-brands fa-instagram text-lg transition-transform duration-300 group-hover:scale-110"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-paper hover:bg-brand-violet hover:text-white border border-line text-ink transition-all duration-300 shadow-sm group"
                  aria-label="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin-in text-lg transition-transform duration-300 group-hover:scale-110"></i>
                </a>
                <a
                  href="https://wa.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-paper hover:bg-brand-sky hover:text-white border border-line text-ink transition-all duration-300 shadow-sm group"
                  aria-label="WhatsApp"
                >
                  <i className="fa-brands fa-whatsapp text-lg transition-transform duration-300 group-hover:scale-110"></i>
                </a>
              </div>
              <ColorDots size="sm" className="mt-6" />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
