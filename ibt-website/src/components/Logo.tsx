interface LogoProps {
  /** Visual size. `sm` for header/footer, `lg` for hero / standalone. */
  size?: "sm" | "lg";
  className?: string;
}

const sizes = {
  sm: {
    bar: "h-8",
    word: "text-2xl",
    dot: "w-1.5 h-1.5",
    sub: "text-[10px]",
    gap: "gap-2.5",
  },
  lg: {
    bar: "h-14",
    word: "text-5xl",
    dot: "w-2.5 h-2.5",
    sub: "text-xs",
    gap: "gap-4",
  },
} as const;

/**
 * Text wordmark — "IBT" in teal with an amber accent, "Ingenieurbüro Tonn"
 * beneath. Replaces the white-background raster logo so it sits cleanly on
 * the dark surface.
 */
export default function Logo({ size = "sm", className = "" }: LogoProps) {
  const s = sizes[size];
  return (
    <span className={`inline-flex items-center ${s.gap} ${className}`}>
      {/* Accent bar: teal → amber */}
      <span
        aria-hidden="true"
        className={`${s.bar} w-[3px] rounded-full bg-gradient-to-b from-teal-light to-amber`}
      />
      <span className="flex flex-col leading-none">
        <span className="flex items-end gap-1">
          <span
            className={`font-display font-bold tracking-tight text-teal-light ${s.word}`}
          >
            IBT
          </span>
          <span
            aria-hidden="true"
            className={`${s.dot} mb-1 rounded-full bg-amber`}
          />
        </span>
        <span
          className={`mt-1.5 font-medium uppercase tracking-[0.22em] text-zinc-secondary ${s.sub}`}
        >
          Ingenieurbüro&nbsp;Tonn
        </span>
      </span>
    </span>
  );
}
