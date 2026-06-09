"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/anim/Reveal";
import { PROJECTS } from "@/lib/data";

const CATEGORIES = [
  { id: "all", label: "All Work" },
  { id: "brand", label: "Brand Identity" },
  { id: "packaging", label: "Packaging Design" },
  { id: "graphic", label: "Graphic Design" },
];

export default function WorkGrid() {
  const [selected, setSelected] = useState("all");

  const filteredProjects = PROJECTS.filter((p) => {
    if (selected === "all") return true;
    const catLower = p.category.toLowerCase();
    return catLower.includes(selected);
  });

  return (
    <div className="space-y-12">
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-3 border-b border-line pb-6">
        {CATEGORIES.map((cat) => {
          const isActive = selected === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelected(cat.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 border ${
                isActive
                  ? "bg-ink border-ink text-white"
                  : "bg-white border-line text-muted hover:border-ink hover:text-ink cursor-pointer"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
        {filteredProjects.map((p, i) => (
          <Reveal
            key={`${selected}-${p.slug}`}
            y={40}
            className={i % 2 === 1 ? "md:mt-20" : ""}
          >
            <Link href="/work" className="group block">
              <div
                className={`relative aspect-[4/3] overflow-hidden rounded-2xl transition-transform duration-500 group-hover:scale-[1.01] shadow-sm ${p.tile}`}
              >
                {/* Visual title inside mockups */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-3xl font-black uppercase tracking-widest opacity-80 scale-90 group-hover:scale-100 transition-transform duration-500">
                    {p.title}
                  </span>
                </div>
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

      {filteredProjects.length === 0 && (
        <div className="py-20 text-center text-muted">
          No projects found in this category.
        </div>
      )}
    </div>
  );
}
