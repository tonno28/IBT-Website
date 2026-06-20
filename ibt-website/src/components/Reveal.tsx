"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

type RevealVariant = "up" | "left" | "right" | "scale";

interface RevealProps {
  children: ReactNode;
  /** Direction the element animates in from. */
  variant?: RevealVariant;
  /** Delay in ms — use to stagger siblings. */
  delay?: number;
  /** Render as a different element (default div). */
  as?: ElementType;
  className?: string;
}

/**
 * Scroll-reveal wrapper. Adds `is-visible` once the element enters the
 * viewport (one-shot). Styling lives in globals.css under `[data-reveal]`.
 */
export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  as,
  className = "",
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced-motion: reveal immediately.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal={variant === "up" ? "" : variant}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={className}
    >
      {children}
    </Tag>
  );
}
