"use client";

import { useRef, type ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Max tilt in degrees. */
  max?: number;
}

/**
 * Subtle 3D tilt on pointer move (desktop / fine pointers only).
 * Children wrapped in `.tilt-layer` lift toward the viewer on hover.
 */
export default function TiltCard({ children, className = "", max = 7 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--rx", `${px * max * 2}deg`);
    el.style.setProperty("--ry", `${-py * max * 2}deg`);
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`tilt-card ${className}`}
    >
      {children}
    </div>
  );
}
