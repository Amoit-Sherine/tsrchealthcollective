import HeroIntro from "@/components/layout/HeroIntro";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import SectionDots from "@/components/ui/SectionDots";

export default function HomePage() {
  return (
    <>
      <HeroIntro />

      <Section id="about" variant="dark" tone="olive">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/85 sm:text-sm">
              About Us
            </p>
            <h2>Residential and community-based care</h2>
            <p className="text-white/85">
              TSRC Health Collective delivers youth residential and community-based
              care in British Columbia, with a focus on governance, operational
              readiness, and alignment with provincial licensing and oversight
              requirements. Our work emphasizes safe care environments, continuity
              of care, and responsible service delivery within established
              regulatory and practice frameworks used across the sector.
            </p>
          </div>
          <div className="space-y-6 lg:pt-8">
            <div className="border-t border-white/15 pt-4">
              <h3>Implementation focus</h3>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/12 p-4 text-white/90 backdrop-blur sm:p-5 lg:p-6">
              <ul className="space-y-3 text-sm">
                <li>Defined roles and oversight.</li>
                <li>Operational readiness.</li>
                <li>Information stewardship.</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/services" variant="secondary" className="border-white/20">
                Service Overview
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
              We center privacy, responsible information use, and ethical
              practice in how we design and communicate our work.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div
              id="privacy"
              className="scroll-mt-28 border-t border-sand/40 pt-4"
            >
              <h3>Privacy and confidentiality</h3>
              <p className="mt-3">
                Confidentiality is treated with care in every step of planning
                and communication.
              </p>
            </div>
            <div className="border-t border-sand/40 pt-4">
              <h3>Information stewardship</h3>
              <p className="mt-3">
                We are defining how information is collected, stored, and shared
                with respect and restraint.
              </p>
            </div>
            <div
              id="ethics"
              className="scroll-mt-28 border-t border-sand/40 pt-4"
            >
              <h3>Ethical practice</h3>
              <p className="mt-3">
                We emphasize integrity and thoughtful decision-making across our
                work.
              </p>
            </div>
            <div
              id="accountability"
              className="scroll-mt-28 border-t border-sand/40 pt-4"
            >
              <h3>Feedback and response</h3>
              <p className="mt-3">
                We are setting up clear ways to raise concerns and receive a
                response.
              </p>
            </div>
            <div
              id="accessibility"
              className="scroll-mt-28 border-t border-sand/40 pt-4"
            >
              <h3>Accessibility</h3>
              <p className="mt-3">
                Accessibility is considered from the start, with a focus on
                clarity and ease of use.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
