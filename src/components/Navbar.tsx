"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "@/lib/gsap";
import { NAV_LINKS } from "@/lib/nav";
import BrandLogo from "@/components/BrandLogo";

export default function Navbar() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);

  useGSAP(
    () => {
      const header = headerRef.current;
      if (!header) return;

      // Subtle scaling or movement on scroll.
      const bg = ScrollTrigger.create({
        start: "top -20",
        toggleClass: { targets: header, className: "nav-scrolled" },
      });

      return () => {
        bg.kill();
      };
    },
    { scope: headerRef }
  );

  return (
    <header
      ref={headerRef}
      className="fixed top-4 left-4 right-4 z-50 transition-all duration-300 mx-auto max-w-container animate-fade-in"
    >
      <div className="flex h-16 items-center justify-between rounded-full bg-[#111111]/70 border border-white/10 px-6 backdrop-blur-lg text-white shadow-xl transition-all duration-300 [&.nav-scrolled]:bg-[#111111]/90 [&.nav-scrolled]:shadow-2xl">
        <Link
          href="/"
          className="hover:opacity-90 transition-opacity"
          onClick={() => setOpen(false)}
        >
          <BrandLogo light={true} />
        </Link>

        {/* Desktop center nav pill (exactly like the screenshot) */}
        <nav className="hidden items-center gap-1 bg-[#222222]/40 border border-white/5 rounded-full px-2 py-1.5 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-1.5 text-[11px] font-black uppercase tracking-widest rounded-full transition-all duration-300 ${
                  active
                    ? "bg-white text-ink"
                    : "text-white/75 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop right capsule CTA button (exactly like the screenshot) */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-brand-magenta border border-transparent hover:border-white/5 px-4 py-1.5 font-black uppercase tracking-widest text-[9px] text-white hover:bg-[#222222]/40 hover:text-white transition-all duration-300 shadow-md group cursor-pointer"
          >
            Start a project
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-ink group-hover:bg-brand-magenta group-hover:text-white transition-all duration-300">
              ↗
            </span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-6">
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-white transition-all duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-3 block h-0.5 w-6 bg-white transition-all duration-300 ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden rounded-3xl border border-white/10 bg-[#111111]/90 backdrop-blur-lg md:hidden mt-2 ${
          open ? "max-h-96" : "max-h-0"
        } transition-[max-height] duration-500 ease-out-expo`}
      >
        <nav className="flex flex-col gap-1 py-4 px-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 font-display text-xl font-bold uppercase tracking-wider text-white/80 hover:text-white border-b border-white/5 last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 flex justify-center">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="w-full py-2.5 px-6 inline-flex items-center justify-center gap-3 rounded-full bg-brand-magenta border border-transparent hover:border-white/5 text-white font-black uppercase tracking-widest text-xs hover:bg-[#222222]/40 hover:text-white transition-all duration-300 group"
            >
              Start a project
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-ink group-hover:bg-brand-magenta group-hover:text-white transition-all duration-300">
                ↗
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
