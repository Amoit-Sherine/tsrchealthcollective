import HeroIntro from "@/components/layout/HeroIntro";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import SectionDots from "@/components/ui/SectionDots";

export default function HomePage() {
  return (
    <>
      <HeroIntro />

      <Section id="about" variant="dark" tone="olive">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">
              Corporate Overview
            </p>
            <h2>Parent organization for regulated care platforms</h2>
            <p className="text-white/85">
            TSRC Health Collective functions as the governing organization responsible for establishing governance 
            frameworks, clinical and operational standards, and oversight for staffed residential care services
            delivered under applicable British Columbia legislation.
            </p>
            <p className="text-white/80">
              The corporate model supports future service lines while
              maintaining regulatory readiness.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/services" variant="secondary" className="border-white/20">
                Service platform
              </Button>
              <Button
                href="/partnerships"
                variant="ghost"
                className="border-white/30 text-white hover:border-white/50 hover:bg-white/10 focus-visible:ring-white/40 focus-visible:ring-offset-olive"
              >
                Partnerships
              </Button>
            </div>
          </div>
          <div className="space-y-5">
            <div className="border-t border-white/15 pt-4">
              <h3>Regulatory context</h3>
              <p className="mt-3 text-white/80">
                Programs follow provincial licensing, oversight, and privacy
                requirements for regulated delivery.
              </p>
            </div>
            <ul className="space-y-3 text-sm text-white/80">
              <li>Licensing and oversight alignment.</li>
              <li>Quality assurance and compliance controls.</li>
              <li>Information governance and privacy stewardship.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="trust" variant="white">
        <div className="space-y-10">
          <SectionDots />
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              Privacy, Ethics &amp; Accountability
            </p>
            <h2>Accountability</h2>
            <p className="max-w-3xl">
            We uphold clear standards for privacy, information governance, and ethical service delivery
            in accordance with regulatory expectations.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div
              id="privacy"
              className="scroll-mt-28 border-t border-sand/40 pt-4"
            >
              <h3>Privacy and confidentiality</h3>
              <p className="mt-3">
                Confidentiality aligned with regulatory requirements.
              </p>
            </div>
            <div className="border-t border-sand/40 pt-4">
              <h3>Information governance</h3>
              <p className="mt-3">
                Data stewardship, access controls, and documentation integrity.
              </p>
            </div>
            <div
              id="ethics"
              className="scroll-mt-28 border-t border-sand/40 pt-4"
            >
              <h3>Ethical service delivery</h3>
              <p className="mt-3">
                Professional integrity and responsible decisions across
                programs.
              </p>
            </div>
            <div
              id="accountability"
              className="scroll-mt-28 border-t border-sand/40 pt-4"
            >
              <h3>Complaints and oversight access</h3>
              <p className="mt-3">
                Clear routes for complaints and external oversight.
              </p>
            </div>
            <div
              id="accessibility"
              className="scroll-mt-28 border-t border-sand/40 pt-4"
            >
              <h3>Accessibility</h3>
              <p className="mt-3">
                Accessibility meets WCAG AA standards.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
