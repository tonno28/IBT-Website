import Link from "next/link";
import Icon, { type IconName } from "./Icon";

interface LeistungCardProps {
  icon: IconName;
  title: string;
  description: string;
  href: string;
  variant?: "teal" | "amber";
  price?: string;
}

export default function LeistungCard({
  icon,
  title,
  description,
  href,
  variant = "teal",
  price,
}: LeistungCardProps) {
  const accent = variant === "teal" ? "text-teal-light" : "text-amber";
  const border = variant === "teal" ? "hover:border-teal-dark/50" : "hover:border-amber/30";
  const iconBg = variant === "teal" ? "bg-teal-dark/15 text-teal-light" : "bg-amber/10 text-amber";
  const iconRing = variant === "teal" ? "ring-teal-dark/20" : "ring-amber/20";

  return (
    <Link
      href={href}
      className={`card-base ${border} hover:bg-bg-hover hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 p-6 flex flex-col gap-4 group relative overflow-hidden`}
    >
      {/* subtle accent wash on hover */}
      <span
        className={`pointer-events-none absolute -right-8 -top-8 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          variant === "teal" ? "bg-teal-dark/20" : "bg-amber/15"
        }`}
      />
      <div
        className={`relative w-11 h-11 rounded-lg ${iconBg} ring-1 ${iconRing} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}
      >
        <Icon name={icon} className="w-5 h-5" />
      </div>
      <div className="relative">
        <h3 className={`font-semibold text-zinc-primary mb-1.5 transition-colors group-hover:${accent}`}>
          {title}
        </h3>
        <p className="text-sm text-zinc-muted leading-relaxed">{description}</p>
      </div>
      {price && (
        <div className="relative mt-auto pt-3 border-t border-zinc-border flex items-center justify-between">
          <span className="text-xs text-zinc-hint stat-num">{price}</span>
          <span className={`text-xs font-medium ${accent} inline-flex items-center gap-1`}>
            Details
            <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      )}
      {!price && (
        <div className="relative mt-auto">
          <span className={`text-xs font-medium ${accent} inline-flex items-center gap-1`}>
            Mehr erfahren
            <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      )}
    </Link>
  );
}
