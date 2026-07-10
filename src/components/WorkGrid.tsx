"use client";

import Image from "next/image";
import Reveal from "@/components/anim/Reveal";
import { PROJECTS } from "@/lib/data";

export default function WorkGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6">
      {PROJECTS.map((p, i) => (
        <Reveal
          key={`${p.slug}-${i}`}
          y={40}
          className="w-full"
        >
          {/* <Link href="/work" className="group block cursor-pointer"> */}
          <div className="group block">
            <div className="relative aspect-[1/1] overflow-hidden rounded-2xl shadow-sm bg-line">
              {/* Product Mockup Image or Video */}
              {p.video ? (
                <video
                  src={p.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              ) : (
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              )}

              {/* Hover Overlay Details */}
              <div className="absolute inset-0 bg-ink/80 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 backdrop-blur-[2px]">
                <h3 className="text-white font-display text-lg md:text-xl font-black uppercase text-center tracking-wider max-w-xs leading-snug">
                  {p.title}
                </h3>
                <p className="text-white/60 text-xs uppercase tracking-[0.2em] mt-2 mb-6 text-center">
                  {p.category}
                </p>
                {/* <span className="text-accent hover:text-white border-b border-accent hover:border-white text-xs font-bold uppercase tracking-widest transition-colors duration-300">
                  View Project
                </span> */}
              </div>
            </div>
          </div>
          {/* </Link> */}
        </Reveal>
      ))}
    </div>
  );
}
