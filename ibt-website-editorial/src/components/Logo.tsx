interface LogoProps {
  /** Visual size. `sm` for header/footer, `lg` for hero / standalone. */
  size?: "sm" | "lg";
  className?: string;
}

const sizes = {
  sm: { word: "text-2xl", sub: "text-[10px]" },
  lg: { word: "text-5xl", sub: "text-xs" },
} as const;

/**
 * Real IBT wordmark, matching the branding established on the Coming-Soon
 * page: a thin green rule above the serif "IBT", with "Ingenieurbüro Tonn"
 * set beside it in uppercase, separated by a vertical hairline.
 */
export default function Logo({ size = "sm", className = "" }: LogoProps) {
  const s = sizes[size];
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span className="inline-flex flex-col leading-none">
        <span className="h-[2px] w-full bg-amber rounded-full mb-1" />
        <span className={`font-display font-semibold tracking-wide text-zinc-primary ${s.word}`}>
          IBT
        </span>
      </span>
      <span
        className={`inline-flex flex-col font-medium uppercase tracking-[0.18em] text-zinc-hint leading-snug border-l border-zinc-borderHover pl-3 ${s.sub}`}
      >
        <span className="text-zinc-secondary">Ingenieurbüro</span>
        <span>Tonn</span>
      </span>
    </span>
  );
}
