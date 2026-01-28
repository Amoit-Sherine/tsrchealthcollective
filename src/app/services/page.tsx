import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionDots from "@/components/ui/SectionDots";

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-muted/10 bg-white">
        <Container>
          <div className="flex min-h-[45vh] flex-col items-center justify-center gap-5 py-16 text-center sm:py-20">
            <p className="text-xs uppercase tracking-[0.3em] text-muted hero-fade">
              Service Overview
            </p>
            <SectionDots className="justify-center hero-fade-delayed" />
            <h1 className="text-balance hero-fade-late">
              Residential &amp; Community Care Services
            </h1>
            <p className="max-w-2xl text-lg text-muted/90 sm:text-xl hero-fade-late">
              A regulated care service focus aligned with provincial licensing and
              oversight requirements in British Columbia.
            </p>
          </div>
        </Container>
      </section>

      <Section id="services" variant="tinted" tone="bone">
        <div className="space-y-10">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              Service Overview
            </p>
            <h2>Service focus</h2>
            <p className="max-w-3xl">
              TSRC Health Collective's current service focus is youth residential
              and community-based care in British Columbia. Service planning
              prioritizes stability, continuity of care, and collaboration with
              existing community systems.
            </p>
          </div>

          <div className="space-y-10">
            <div className="border-t border-sage/30 pt-8">
              <div className="space-y-6 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-10 lg:space-y-0">
                <div className="space-y-4">
                  <h3>Youth residential &amp; community services</h3>
                  <p>
                    Scope includes staffed youth residential care,
                    community-based programs, and supportive living models.
                  </p>
                  <ul className="space-y-2 text-sm text-muted">
                    <li>Youth residential care.</li>
                    <li>Community-based care programs.</li>
                    <li>Supportive living models.</li>
                  </ul>
                </div>
                <details className="rounded-2xl border border-sand/50 bg-white/80 px-5 py-4 shadow-sm">
                  <summary className="details-summary">
                    Program foundations
                    <span aria-hidden="true" className="text-muted">
                      +
                    </span>
                  </summary>
                  <div className="details-panel">
                    <ul className="space-y-2">
                      <li>Provincial standards and oversight alignment.</li>
                      <li>Rights-based planning and trauma-informed supports.</li>
                      <li>Community integration and continuity of care.</li>
                    </ul>
                  </div>
                </details>
              </div>
            </div>
            <div className="border-t border-sage/30 pt-8">
              <div className="space-y-6 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-10 lg:space-y-0">
                <div className="space-y-4">
                  <h3>Community engagement and workforce readiness</h3>
                  <p>
                    Readiness and collaboration are reflected in the priorities
                    below.
                  </p>
                  <ul className="space-y-2 text-sm text-muted">
                    <li>Trauma-informed practice.</li>
                    <li>Cultural safety.</li>
                    <li>Professional standards.</li>
                  </ul>
                </div>
                <details className="rounded-2xl border border-sand/50 bg-white/80 px-5 py-4 shadow-sm">
                  <summary className="details-summary">
                    Readiness foundations
                    <span aria-hidden="true" className="text-muted">
                      +
                    </span>
                  </summary>
                  <div className="details-panel">
                    <ul className="space-y-2">
                      <li>Community integration.</li>
                      <li>Shared planning expectations.</li>
                      <li>Clear staff training expectations.</li>
                    </ul>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="framework" variant="white">
        <div className="space-y-10">
          <div className="space-y-4">
            <SectionDots />
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              Practice Framework
            </p>
            <h2>Practice principles</h2>
            <p className="max-w-3xl">
              The practice framework establishes shared standards for youth
              residential care, cultural safety, and ethical practice.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="border-l-2 border-sand/60 pl-5">
                <h3>Trauma-informed practice</h3>
                <p className="mt-3">
                  Care environments prioritize safety, stability, and informed
                  support.
                </p>
              </div>
              <div className="border-l-2 border-sand/60 pl-5">
                <h3>Rights-based practice</h3>
                <p className="mt-3">
                  Programs uphold dignity, autonomy, and informed participation.
                </p>
              </div>
              <div className="border-l-2 border-sand/60 pl-5">
                <h3>Cultural safety &amp; inclusion</h3>
                <p className="mt-3">
                  The framework supports respect, inclusion, and
                  community-informed care.
                </p>
              </div>
            </div>
            <div className="space-y-6 md:pt-8">
              <div className="border-l-2 border-sand/60 pl-5">
                <h3>Least-restrictive supports</h3>
                <p className="mt-3">
                  Care planning emphasizes appropriate, least-restrictive
                  approaches.
                </p>
              </div>
              <div className="border-l-2 border-sand/60 pl-5">
                <h3>Ethical standards</h3>
                <p className="mt-3">
                  Professional integrity and accountability guide practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
