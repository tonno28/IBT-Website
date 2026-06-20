import Link from "next/link";

interface LeistungCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  variant?: "electric" | "warm";
  price?: string;
}

const icons: Record<string, JSX.Element> = {
  energy: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  home: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  ),
  calc: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z" />
    </svg>
  ),
  thermo: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
    </svg>
  ),
  shield: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  wind: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.249 2.249 0 0017.5 15.687v-.543c0-.794-.409-1.538-1.086-1.964l-.405-.253a2.25 2.25 0 01-.921-2.952l.2-.398c.341-.682.188-1.506-.36-2.022l-.928-.873a2.25 2.25 0 00-2.833-.199l-.16.108a2.25 2.25 0 01-2.473 0l-.16-.108" />
    </svg>
  ),
};

export default function LeistungCard({
  icon,
  title,
  description,
  href,
  variant = "electric",
  price,
}: LeistungCardProps) {
  const isElectric = variant === "electric";
  const accentColor = isElectric ? "text-electric" : "text-warm";
  const accentBg    = isElectric ? "bg-electric/8 border-electric/20" : "bg-warm/8 border-warm/20";
  const hoverBorder = isElectric
    ? "hover:border-electric/40 hover:shadow-[0_0_30px_rgba(6,214,160,0.07)]"
    : "hover:border-warm/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.07)]";

  return (
    <Link
      href={href}
      className={`group card ${hoverBorder} p-6 flex flex-col gap-4`}
    >
      {/* Icon */}
      <div className={`w-10 h-10 rounded-xl border ${accentBg} ${accentColor} flex items-center justify-center shrink-0`}>
        {icon}
      </div>

      {/* Text */}
      <div className="flex-1">
        <h3 className={`font-display font-semibold text-ink-bright mb-2 text-base transition-colors group-hover:${accentColor}`}>
          {title}
        </h3>
        <p className="text-sm text-ink-muted leading-relaxed">{description}</p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-line-dim">
        {price
          ? <span className="font-mono text-xs text-ink-ghost">{price}</span>
          : <span />
        }
        <span className={`text-xs font-medium ${accentColor} flex items-center gap-1 transition-transform group-hover:translate-x-0.5`}>
          Details
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
