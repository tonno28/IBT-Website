import Link from "next/link";

interface LeistungCardProps {
  icon: React.ReactNode;
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
  const iconBg = variant === "teal" ? "bg-teal-dark/20 text-teal-light" : "bg-amber/15 text-amber";

  return (
    <Link
      href={href}
      className={`card-base ${border} hover:bg-bg-hover p-6 flex flex-col gap-4 group`}
    >
      <div className={`w-10 h-10 rounded-lg ${iconBg} flex items-center justify-center text-xl`}>
        {icon}
      </div>
      <div>
        <h3 className={`font-semibold text-zinc-primary mb-1.5 group-hover:${accent} transition-colors`}>
          {title}
        </h3>
        <p className="text-sm text-zinc-muted leading-relaxed">{description}</p>
      </div>
      {price && (
        <div className="mt-auto pt-3 border-t border-zinc-border flex items-center justify-between">
          <span className="text-xs text-zinc-hint">{price}</span>
          <span className={`text-xs font-medium ${accent}`}>Details →</span>
        </div>
      )}
      {!price && (
        <div className="mt-auto">
          <span className={`text-xs font-medium ${accent} group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1`}>
            Mehr erfahren
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      )}
    </Link>
  );
}
