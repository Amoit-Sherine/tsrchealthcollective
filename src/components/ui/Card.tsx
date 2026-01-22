import type { ReactNode, HTMLAttributes } from "react";

type CardVariant = "glass" | "solid";
type CardTone = "white" | "bone" | "sand";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  variant?: CardVariant;
  tone?: CardTone;
  hover?: boolean;
  className?: string;
};

const toneClasses: Record<CardTone, string> = {
  white: "bg-white",
  bone: "bg-bone/55",
  sand: "bg-sand/35",
};

export default function Card({
  children,
  variant = "solid",
  tone = "white",
  hover = false,
  className = "",
  ...props
}: CardProps) {
  const baseClasses = "rounded-xl border border-muted/15 p-6 sm:p-8";
  const variantClasses =
    variant === "glass"
      ? "bg-white/90 backdrop-blur-lg shadow-glass"
      : `${toneClasses[tone]} shadow-sm`;
  const hoverClasses = hover
    ? "transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-sage/40 hover:shadow-soft motion-reduce:transform-none motion-reduce:transition-none"
    : "";

  return (
    <div
      {...props}
      className={`${baseClasses} ${variantClasses} ${hoverClasses} ${className}`}
    >
      {children}
    </div>
  );
}
