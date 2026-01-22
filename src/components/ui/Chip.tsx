import type { ReactNode } from "react";

type ChipTone = "sage" | "sand" | "bone" | "olive" | "muted";

type ChipProps = {
  children: ReactNode;
  tone?: ChipTone;
  className?: string;
};

const toneClasses: Record<ChipTone, string> = {
  sage: "border-sage/40 bg-sage/20 text-olive",
  sand: "border-sand/50 bg-sand/25 text-olive",
  bone: "border-bone/80 bg-bone/70 text-olive",
  olive: "border-olive/30 bg-olive/10 text-olive",
  muted: "border-muted/30 bg-muted/10 text-muted",
};

export default function Chip({
  children,
  tone = "sage",
  className = "",
}: ChipProps) {
  return (
    <span
      className={`inline-flex items-center rounded-xl border px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${toneClasses[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
