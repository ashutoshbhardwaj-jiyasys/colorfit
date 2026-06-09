"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins once on the client.
interface GSAPCoreWithGlobals {
  globals: () => Record<string, unknown>;
}

if (typeof window !== "undefined" && !((gsap.core as unknown as GSAPCoreWithGlobals).globals().ScrollTrigger)) {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
