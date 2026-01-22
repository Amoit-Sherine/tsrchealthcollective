import Link from "next/link";
import type { ReactNode, ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-xl border font-semibold no-underline transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-reduce:transition-none motion-reduce:transform-none";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-olive bg-olive text-white shadow-sm hover:bg-olive/90 hover:shadow-soft",
  secondary:
    "border-sand/60 bg-white text-olive shadow-sm hover:border-sage/50 hover:bg-bone/60",
  ghost:
    "border-transparent bg-transparent text-olive hover:border-bone/60 hover:bg-bone/50",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3.5 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-2.5 text-base sm:text-lg",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  loading = false,
  className = "",
  disabled,
  type,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;
  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    "hover:-translate-y-0.5 active:translate-y-0",
    isDisabled ? "cursor-not-allowed opacity-60" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = loading ? "Loading" : children;
  const isHashLink =
    typeof href === "string" && (href.startsWith("#") || href.startsWith("/#"));

  if (href) {
    const linkClasses = `${classes} ${isDisabled ? "pointer-events-none" : ""}`;

    if (isHashLink) {
      return (
        <a
          aria-busy={loading}
          aria-disabled={isDisabled}
          className={linkClasses}
          href={href}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        aria-busy={loading}
        aria-disabled={isDisabled}
        className={linkClasses}
        href={href}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      {...props}
      className={classes}
      disabled={isDisabled}
      aria-busy={loading}
      type={type ?? "button"}
    >
      {content}
    </button>
  );
}
