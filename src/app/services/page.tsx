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
              Service Platform
            </p>
            <SectionDots className="justify-center hero-fade-delayed" />
            <h1 className="text-balance hero-fade-late">
              Service Platform and Practice Framework
            </h1>
            <p className="max-w-2xl text-lg text-muted/90 sm:text-xl hero-fade-late">
              Service categories and practice standards for regulated care in
              British Columbia and Canada.
            </p>
          </div>
        </Container>
      </section>

      <Section id="services" variant="tinted" tone="bone">
        <div className="space-y-10">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              Service Platform
            </p>
            <h2>Service categories</h2>
            <p className="max-w-3xl">
            TSRC’s service platform is organized into three regulated service categories, 
            each operating within defined service standards and oversight requirements.
            </p>
          </div>

          <div className="space-y-10">
            <div className="border-t border-sage/30 pt-8">
              <div className="space-y-6 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-10 lg:space-y-0">
                <div className="space-y-3">
                  <h3>Residential &amp; community services</h3>
                  <p>
                    Regulated residential and community programs that follow
                    provincial standards.
                  </p>
                  <ul className="space-y-2 text-sm text-muted">
                    <li>Youth residential services.</li>
                    <li>Community-based care programs.</li>
                    <li>Supportive living models.</li>
                  </ul>
                </div>
                <details className="rounded-2xl border border-sand/50 bg-white/80 px-5 py-4 shadow-sm">
                  <summary className="details-summary">
                    How services are delivered
                    <span aria-hidden="true" className="text-muted">
                      +
                    </span>
                  </summary>
                  <div className="details-panel">
                    <ul className="space-y-2">
                      <li>Regulatory alignment and licensing requirements.</li>
                      <li>Rights-based planning and trauma-informed supports.</li>
                      <li>Community integration and continuity of care.</li>
                    </ul>
                  </div>
                </details>
              </div>
            </div>

            <div className="border-t border-sage/30 pt-8">
              <div className="space-y-6 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-10 lg:space-y-0">
                <div className="space-y-3">
                  <h3>Specialized &amp; clinical services</h3>
                  <p>
                    Clinical support services that follow regulated practice
                    standards.
                  </p>
                  <ul className="space-y-2 text-sm text-muted">
                    <li>Nursing-led services.</li>
                    <li>Mobile and community clinical supports.</li>
                    <li>Health coordination services.</li>
                  </ul>
                </div>
                <details className="rounded-2xl border border-sand/50 bg-white/80 px-5 py-4 shadow-sm">
                  <summary className="details-summary">
                    How services are delivered
                    <span aria-hidden="true" className="text-muted">
                      +
                    </span>
                  </summary>
                  <div className="details-panel">
                    <ul className="space-y-2">
                      <li>Clinical governance and practice standards.</li>
                      <li>Integrated documentation and coordination protocols.</li>
                      <li>Quality monitoring and evidence stewardship.</li>
                    </ul>
                  </div>
                </details>
              </div>
            </div>

            <div className="border-t border-sage/30 pt-8">
              <div className="space-y-6 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-10 lg:space-y-0">
                <div className="space-y-3">
                  <h3>Workforce &amp; support services</h3>
                  <p>Workforce platforms that support regulated service delivery.</p>
                  <ul className="space-y-2 text-sm text-muted">
                    <li>Care staffing services.</li>
                    <li>Workforce development.</li>
                    <li>Training and credential alignment.</li>
                  </ul>
                </div>
                <details className="rounded-2xl border border-sand/50 bg-white/80 px-5 py-4 shadow-sm">
                  <summary className="details-summary">
                    How services are delivered
                    <span aria-hidden="true" className="text-muted">
                      +
                    </span>
                  </summary>
                  <div className="details-panel">
                    <ul className="space-y-2">
                      <li>Competency-based staffing models.</li>
                      <li>Continuous training and credential pathways.</li>
                      <li>Oversight for workforce readiness.</li>
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
            The practice framework establishes shared standards for regulated care delivery,
             cultural safety, and ethical practice across all services.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="border-l-2 border-sand/60 pl-5">
                <h3>Trauma-informed practice</h3>
                <p className="mt-3">
                  Care environments focus on safety, stability, and informed
                  support.
                </p>
              </div>
              <div className="border-l-2 border-sand/60 pl-5">
                <h3>Rights-based service delivery</h3>
                <p className="mt-3">
                  Programs uphold dignity, autonomy, and informed participation.
                </p>
              </div>
              <div className="border-l-2 border-sand/60 pl-5">
                <h3>Cultural safety &amp; inclusion</h3>
                <p className="mt-3">
                  Services support respect, inclusion, and community-informed
                  care.
                </p>
              </div>
            </div>
            <div className="space-y-6 md:pt-8">
              <div className="border-l-2 border-sand/60 pl-5">
                <h3>Least-restrictive supports</h3>
                <p className="mt-3">
                  Care planning uses appropriate, least-restrictive approaches.
                </p>
              </div>
              <div className="border-l-2 border-sand/60 pl-5">
                <h3>Ethical standards</h3>
                <p className="mt-3">
                  Professional integrity and accountability guide all services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
