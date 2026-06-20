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
 * Text wordmark — the "I" of IBT is drawn as a steel I-beam (Doppel-T-Träger),
 * the signature profile of structural engineering, in a teal→amber gradient.
 * "BT" follows in teal; "Ingenieurbüro Tonn" sits beneath.
 *
 * The beam is an inline SVG sized in `em` and aligned to the text baseline, so
 * it scales with the word size and stays locked to the cap height of "BT".
 */
export default function Logo({ size = "sm", className = "" }: LogoProps) {
  const s = sizes[size];
  return (
    <span className={`inline-flex flex-col leading-none ${className}`}>
      <span className={`font-display font-bold tracking-tight text-teal-light ${s.word}`}>
        {/* I-beam letter */}
        <svg
          viewBox="0 0 24 40"
          role="img"
          aria-label="I"
          className="inline-block"
          style={{ height: "0.72em", width: "0.44em", marginRight: "0.05em", verticalAlign: "baseline" }}
        >
          <defs>
            <linearGradient id="ibt-beam" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="55%" stopColor="#1D9E75" />
              <stop offset="100%" stopColor="#D4942A" />
            </linearGradient>
          </defs>
          {/* top flange · web · bottom flange */}
          <path
            d="M3 2 H21 V8 H15 V32 H21 V38 H3 V32 H9 V8 H3 Z"
            fill="url(#ibt-beam)"
          />
        </svg>
        BT
      </span>
      <span
        className={`mt-1.5 font-medium uppercase tracking-[0.22em] text-zinc-secondary ${s.sub}`}
      >
        Ingenieurbüro&nbsp;Tonn
      </span>
    </span>
  );
}
