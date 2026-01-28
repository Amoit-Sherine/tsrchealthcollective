"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Service Overview", href: "/services" },
  { label: "Regulation & Governance", href: "/governance" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

type LegalId =
  | "privacy"
  | "ethics"
  | "accountability"
  | "accessibility"
  | "licensing";

type LegalItem = {
  id: LegalId;
  label: string;
  description: string;
  bullets: string[];
};

const legalDisclaimer =
  "This information is provided for transparency and will be updated as required.";

const legalItems: LegalItem[] = [
  {
    id: "privacy",
    label: "Privacy",
    description:
      "TSRC Health Collective is committed to protecting personal information in accordance with applicable privacy legislation. Information collected through this website is limited to general inquiry and administrative purposes and is handled in a manner consistent with the Personal Information Protection Act (British Columbia) and applicable federal privacy requirements.",
    bullets: [
      "Personal information is collected only where necessary and for identified purposes.",
      "Information is used and disclosed in accordance with the Personal Information Protection Act (British Columbia) and applicable federal privacy requirements.",
      "This website is not intended for the submission of protected health information.",
      "Reasonable safeguards are applied to protect information from unauthorized access or disclosure.",
    ],
  },
  {
    id: "ethics",
    label: "Ethics",
    description:
      "TSRC Health Collective maintains an ethical practice framework for youth residential care consistent with regulated requirements. Ethical practice is reflected through professional conduct, respect for individuals, and alignment with applicable regulatory and institutional standards.",
    bullets: [
      "Care practices emphasize respect, dignity, and professional responsibility.",
      "Ethical obligations are integrated into governance and operational standards.",
      "Practice expectations are designed to align with regulated care environments and public accountability.",
      "Ethical considerations inform decision-making and program design.",
    ],
  },
  {
    id: "accountability",
    label: "Accountability",
    description:
      "TSRC Health Collective maintains governance and oversight structures to support accountability within regulated youth residential care environments. Accountability includes defined roles, oversight mechanisms, and alignment with applicable regulatory requirements.",
    bullets: [
      "Governance structures support policy oversight and compliance.",
      "Accountability mechanisms align with applicable regulatory requirements.",
      "Quality assurance processes support service integrity and review.",
      "Oversight responsibilities are defined at an organizational level.",
    ],
  },
  {
    id: "accessibility",
    label: "Accessibility",
    description:
      "TSRC Health Collective is committed to providing accessible digital information. Reasonable efforts are made to align this website with recognized accessibility standards, including the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA, where feasible.",
    bullets: [
      "Accessibility is considered in website design and content presentation, with reference to WCAG 2.1 Level AA where feasible.",
      "Ongoing improvements are made to enhance usability and access.",
      "Alternative access or support may be requested where barriers are identified.",
      "Feedback related to accessibility is welcomed.",
    ],
  },
  {
    id: "licensing",
    label: "Licensing",
    description:
      "TSRC Health Collective operates within regulatory frameworks governing staffed residential and community-based care in British Columbia.\n\nService delivery is subject to applicable provincial legislation, licensing requirements, and oversight by relevant authorities.\n\nWhere services are referenced on this website, they reflect areas of intended or permitted operation in accordance with regulatory standards. No service is provided outside of approved scope or without required authorization.",
    bullets: [],
  },
];

export default function Footer() {
  const [activeLegal, setActiveLegal] = useState<LegalId | null>(null);
  const activeItem = legalItems.find((item) => item.id === activeLegal);

  return (
    <footer className="border-t border-muted/10 bg-bone/35">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-4">
            <p className="text-lg font-semibold text-olive">
              TSRC Health Collective
            </p>
            <p className="text-sm text-olive/80">
              Focused on youth residential care governance in British
              Columbia.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-olive/80">
              Navigate
            </p>
            <ul className="space-y-2 text-sm text-olive/80">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link className="no-underline hover:text-olive" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-olive/80">Legal</p>
            <ul className="space-y-2 text-sm text-olive/80">
              {legalItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className="border-0 bg-transparent p-0 text-left transition-colors hover:text-olive"
                    onClick={() => setActiveLegal(item.id)}
                    aria-haspopup="dialog"
                    aria-controls={`legal-${item.id}-dialog`}
                    aria-expanded={activeLegal === item.id}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 border-t border-muted/15 py-6 text-center text-xs text-olive/80 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <span>© 2026 TSRC Health Collective. All rights reserved.</span>
          <img
            src="/brand/logo-mark.svg"
            alt="TSRC Health Collective mark"
            className="h-8 w-auto opacity-100 sm:h-10 md:h-12"
          />
        </div>
      </Container>
      {activeItem ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:px-6"
          onClick={() => setActiveLegal(null)}
        >
          <div
            className="absolute inset-0 bg-olive/25 backdrop-blur-sm motion-reduce:animate-none animate-[modal-fade_200ms_ease-out]"
            aria-hidden="true"
          />
          <div
            className="relative z-10 w-full max-w-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div
              id={`legal-${activeItem.id}-dialog`}
              role="dialog"
              aria-modal="true"
              aria-labelledby={`legal-${activeItem.id}-title`}
              aria-describedby={`legal-${activeItem.id}-summary`}
              className="relative overflow-hidden rounded-[28px] border border-white/70 bg-white/70 shadow-glass backdrop-blur-2xl motion-reduce:animate-none animate-[modal-rise_240ms_ease-out]"
            >
              <div className="pointer-events-none absolute -top-14 right-[-10px] h-40 w-40 rounded-full bg-sand/35 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 left-[-20px] h-44 w-44 rounded-full bg-sage/30 blur-3xl" />
              <div className="relative max-h-[80vh] overflow-y-auto px-6 py-6 sm:px-8 sm:py-8">
                <div className="flex items-start justify-between gap-4">
                  <h3
                    id={`legal-${activeItem.id}-title`}
                    className="text-2xl font-semibold text-olive"
                  >
                    {activeItem.label}
                  </h3>
                  <button
                    type="button"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/70 bg-white/70 text-sm font-semibold text-olive shadow-soft transition hover:bg-white"
                    onClick={() => setActiveLegal(null)}
                    aria-label={`Close ${activeItem.label} information`}
                  >
                    <span aria-hidden="true">X</span>
                  </button>
                </div>
                <p
                  id={`legal-${activeItem.id}-summary`}
                  className="mt-4 text-sm leading-relaxed text-muted"
                >
                  {activeItem.description}
                </p>
                {activeItem.bullets.length > 0 ? (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
                    {activeItem.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
                <p className="mt-5 text-xs leading-relaxed text-muted">
                  {legalDisclaimer}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </footer>
  );
}
