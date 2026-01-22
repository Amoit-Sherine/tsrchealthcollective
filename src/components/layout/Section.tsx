"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import Container from "@/components/layout/Container";

type SectionVariant = "white" | "tinted" | "dark";
type SectionTone = "bone" | "sand" | "olive" | "muted";

type SectionProps = {
  children: ReactNode;
  id?: string;
  variant?: SectionVariant;
  tone?: SectionTone;
  className?: string;
};

const tintClasses: Record<"bone" | "sand", string> = {
  bone: "bg-bone/35",
  sand: "bg-sand/25",
};

const darkClasses: Record<"olive" | "muted", string> = {
  olive: "bg-olive",
  muted: "bg-muted",
};

export default function Section({
  children,
  id,
  variant = "white",
  tone = "bone",
  className = "",
}: SectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const backgroundClass =
    variant === "tinted"
      ? tintClasses[tone as "bone" | "sand"] ?? tintClasses.bone
      : variant === "dark"
      ? darkClasses[tone as "olive" | "muted"] ?? darkClasses.olive
      : "bg-white";

  const borderClass =
    variant === "dark" ? "border-white/10" : "border-muted/10";

  const paddingClass =
    variant === "dark" ? "py-16 sm:py-24" : "py-14 sm:py-20";

  const variantClass = variant === "dark" ? "section-dark" : "";

  return (
    <section
      id={id}
      className={`scroll-mt-28 border-y ${borderClass} ${backgroundClass} ${variantClass} ${className}`}
    >
      <Container>
        <div
          ref={ref}
          className={`${paddingClass} transition-all duration-900 ease-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          } motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none`}
        >
          {children}
        </div>
      </Container>
    </section>
  );
}
