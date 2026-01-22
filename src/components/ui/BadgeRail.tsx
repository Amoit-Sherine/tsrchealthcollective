type BadgeRailProps = {
  items: string[];
  className?: string;
};

export default function BadgeRail({ items, className = "" }: BadgeRailProps) {
  const toneClasses = ["bg-olive", "bg-muted"];
  const toneForIndex = (index: number) => toneClasses[index % toneClasses.length];

  return (
    <div className={`badge-rail ${className}`}>
      <div className="badge-track">
        {items.map((label, index) => (
          <span
            key={label}
            className={`badge-item flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-white/15 px-3 text-center text-[0.72rem] font-semibold leading-snug text-white shadow-soft sm:h-28 sm:w-28 sm:text-sm ${toneForIndex(
              index
            )}`}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
