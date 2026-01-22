import type { ReactNode } from "react";
import Container from "@/components/layout/Container";
import Chip from "@/components/ui/Chip";

type HeroChip = {
  label: string;
  tone?: "sage" | "sand" | "bone" | "olive" | "muted";
};

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  chips?: HeroChip[];
  actions?: ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  chips = [],
  actions,
}: PageHeroProps) {
  return (
    <section className="border-b border-muted/10 bg-white">
      <Container>
        <div className="py-12 sm:py-16">
          <div className="space-y-6">
            {eyebrow ? (
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                {eyebrow}
              </p>
            ) : null}
            {chips.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {chips.map((chip) => (
                  <Chip key={chip.label} tone={chip.tone}>
                    {chip.label}
                  </Chip>
                ))}
              </div>
            ) : null}
            <h1 className="text-balance">{title}</h1>
            <p className="max-w-2xl text-lg text-muted sm:text-xl">
              {subtitle}
            </p>
            {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
