"use client";

import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/anim/Reveal";
import { PROJECTS } from "@/lib/data";
import SectionHeader from "@/components/SectionHeader";

export default function FeaturedWork() {
  return (
    <section id="work" className="bg-paper py-16 md:py-24">
      <div className="container-x">
        <SectionHeader
          eyebrow="Selected work"
          title="Recent projects."
          link={{ href: "/work", label: "View all work →" }}
          pt="pt-0"
          pb="pb-16"
        />

        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal
              key={p.slug}
              y={40}
              className={i % 2 === 1 ? "md:mt-20" : ""}
            >
              <Link href="/work" className="group block">
                <div
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl transition-transform duration-500 group-hover:scale-[1.01] shadow-sm bg-line"
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
                  <span className="absolute bottom-5 right-5 flex h-12 w-12 translate-y-3 items-center justify-center rounded-full bg-accent text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 shadow-md">
                    →
                  </span>
                </div>
                <div className="mt-5 flex items-baseline justify-between">
                  <h3 className="font-display text-xl font-black text-ink">
                    {p.title}
                  </h3>
                  <span className="text-sm text-muted font-bold">{p.year}</span>
                </div>
                <p className="text-sm text-muted font-medium mt-1">{p.category}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
