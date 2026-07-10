"use client";

import Link from "next/link";
import { NAV_LINKS } from "@/lib/nav";
import BrandLogo from "@/components/BrandLogo";
import ColorDots from "@/components/ColorDots";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-ink text-paper overflow-hidden">
      <div className="container-x pt-8 pb-4 md:pt-12 relative z-10">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <Link href="/" className="hover:opacity-90 transition-opacity">
              <BrandLogo light={true} />
            </Link>
            <p className="mt-3 max-w-xs 2xl:max-w-sm text-sm text-paper/60">
              Vibrant, precise, and purposeful packaging and design systems.
            </p>
            <ColorDots className="mt-5" size="sm" />
          </div>

          <div>
            <h3 className="mb-4 text-xs uppercase tracking-[0.2em] text-paper/40">
              Navigate
            </h3>
            <ul className="space-y-2 text-sm text-paper/80">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-accent">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs uppercase tracking-[0.2em] text-paper/40">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-paper/80">
              <li>
                <a href="mailto:hello@colorfit.in" className="hover:text-accent">
                  hello@colorfit.in
                </a>
              </li>
              <li>
                <a href="mailto:design@colorfit.in" className="hover:text-accent">
                  design@colorfit.in
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs uppercase tracking-[0.2em] text-paper/40">
              Social
            </h3>
            <ul className="space-y-3 text-sm text-paper/80">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 hover:text-brand-magenta transition-colors duration-300 group"
                >
                  <i className="fa-brands fa-instagram text-base opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all"></i>
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 hover:text-brand-violet transition-colors duration-300 group"
                >
                  <i className="fa-brands fa-linkedin-in text-base opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all"></i>
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 hover:text-brand-sky transition-colors duration-300 group"
                >
                  <i className="fa-brands fa-whatsapp text-base opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all"></i>
                  WhatsApp Business
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-paper/10" />

        <div className="mt-8 flex flex-col gap-2 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Colorfit Packaging and Designs. All rights reserved.</p>
          <p>Crafted With ❤️ By <a href="https://jiyasys.com" target="_blank" rel="noopener noreferrer" className="text-brand-magenta hover:underline font-semibold transition-all">Jiyasys Softwares</a>.</p>
        </div>
      </div>

      {/* Soft Semi-Sphere Glow at the bottom center behind the watermark */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[30%] w-[60vw] h-[30vw] rounded-t-full bg-gradient-to-t from-brand-magenta/[0.08] via-brand-sky/[0.03] to-transparent blur-[100px] pointer-events-none z-0" />

      {/* Giant Colored Watermark Text at the end of the viewport */}
      <div className="relative w-full overflow-hidden leading-none select-none pointer-events-none z-10 mt-8 md:mt-12 -mb-[3.5vw]">
        <style>{`
          .watermark-letter {
            transition: color 0.3s ease, opacity 0.3s ease;
          }
          .watermark-letter:hover {
            color: var(--letter-color) !important;
            opacity: 1 !important;
          }
        `}</style>
        <div className="text-[15vw] font-display font-black text-center tracking-wider leading-none text-transparent">
          <span className="watermark-letter opacity-80 pointer-events-auto cursor-default" style={{ WebkitTextStroke: "1.5px var(--letter-color)", "--letter-color": "#F0047F" } as React.CSSProperties}>C</span>
          <span className="watermark-letter opacity-80 pointer-events-auto cursor-default" style={{ WebkitTextStroke: "1.5px var(--letter-color)", "--letter-color": "#F26522" } as React.CSSProperties}>O</span>
          <span className="watermark-letter opacity-80 pointer-events-auto cursor-default" style={{ WebkitTextStroke: "1.5px var(--letter-color)", "--letter-color": "#7B3FA0" } as React.CSSProperties}>L</span>
          <span className="watermark-letter opacity-80 pointer-events-auto cursor-default" style={{ WebkitTextStroke: "1.5px var(--letter-color)", "--letter-color": "#3B9EDC" } as React.CSSProperties}>O</span>
          <span className="watermark-letter opacity-80 pointer-events-auto cursor-default" style={{ WebkitTextStroke: "1.5px var(--letter-color)", "--letter-color": "#5DBB46" } as React.CSSProperties}>R</span>
          <span className="watermark-letter opacity-80 pointer-events-auto cursor-default" style={{ WebkitTextStroke: "1.5px var(--letter-color)", "--letter-color": "#F7C82A" } as React.CSSProperties}>F</span>
          <span className="watermark-letter opacity-80 pointer-events-auto cursor-default" style={{ WebkitTextStroke: "1.5px var(--letter-color)", "--letter-color": "#F05A5B" } as React.CSSProperties}>I</span>
          <span className="watermark-letter opacity-80 pointer-events-auto cursor-default" style={{ WebkitTextStroke: "1.5px var(--letter-color)", "--letter-color": "#2BBCD4" } as React.CSSProperties}>T</span>
        </div>
      </div>
    </footer>
  );
}
