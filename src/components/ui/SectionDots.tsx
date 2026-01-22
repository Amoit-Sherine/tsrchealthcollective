type SectionDotsTone = "light" | "dark";
type SectionDotsSize = "md" | "lg";

type SectionDotsProps = {
  className?: string;
  tone?: SectionDotsTone;
  size?: SectionDotsSize;
};

const toneClasses: Record<SectionDotsTone, string[]> = {
  light: ["bg-bone/80", "bg-sand/70", "bg-sage/55"],
  dark: ["bg-bone/70", "bg-sand/60", "bg-sage/50"],
};

export default function SectionDots({
  className = "",
  tone = "light",
  size = "md",
}: SectionDotsProps) {
  const colors = toneClasses[tone];
  const sizeClass = size === "lg" ? "h-4 w-4" : "h-3.5 w-3.5";

  return (
    <div aria-hidden="true" className={`flex items-center gap-2 ${className}`}>
      <span className={`${sizeClass} rounded-md ${colors[0]}`} />
      <span className={`${sizeClass} rounded-md ${colors[1]}`} />
      <span className={`${sizeClass} rounded-md ${colors[2]}`} />
    </div>
  );
}
