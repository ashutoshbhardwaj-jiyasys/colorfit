"use client";

import { createElement, useRef, type ElementType } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

type Props = {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  /** Trigger on scroll into view instead of immediately on mount. */
  onScroll?: boolean;
};

/**
 * Word-by-word mask reveal. Each word sits in an overflow-hidden box and
 * slides up from below. No paid GSAP plugins required.
 */
export default function AnimatedHeading({
  text,
  as = "h2",
  className,
  delay = 0,
  onScroll = false,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const words = text.split(" ");

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const inners = el.querySelectorAll<HTMLElement>(".line-inner");

      gsap.to(inners, {
        yPercent: 0,
        duration: 1,
        delay,
        ease: "power4.out",
        stagger: 0.06,
        scrollTrigger: onScroll
          ? { trigger: el, start: "top 88%", once: true }
          : undefined,
      });

    },
    { scope: ref }
  );

  return createElement(
    as,
    { ref, className },
    words.map((word, i) =>
      createElement(
        "span",
        { key: i, className: "line-mask inline-block align-top" },
        createElement(
          "span",
          { className: "line-inner inline-block pr-[0.25em]" },
          word
        )
      )
    )
  );
}
