import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionDots from "@/components/ui/SectionDots";

export default function GovernancePage() {
  return (
    <>
      <section className="border-b border-muted/10 bg-white">
        <Container>
          <div className="flex min-h-[45vh] flex-col items-center justify-center gap-5 py-16 text-center sm:py-20">
            <p className="text-xs uppercase tracking-[0.3em] text-muted hero-fade">
              Regulation &amp; Governance
            </p>
            <SectionDots className="justify-center hero-fade-delayed" />
            <h1 className="text-balance hero-fade-late">
              Regulatory alignment and governance
            </h1>
            <p className="max-w-2xl text-lg text-muted/90 sm:text-xl hero-fade-late">
              Oversight structures align policy, licensing, and quality
              assurance to support regulated care delivery.
            </p>
          </div>
        </Container>
      </section>

      <Section id="governance" variant="dark" tone="olive">
        <div className="space-y-10">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">
              Regulation &amp; Governance
            </p>
            <h2>Institutional oversight and compliance</h2>
            <p className="max-w-3xl text-white/85">
            Governance structures align policy, oversight, 
            and quality assurance across regulated service platforms.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="border-t border-white/15 pt-4">
                <h3>Regulatory frameworks</h3>
                <p className="mt-2 text-white/80">
                  Provincial and federal requirements mapped to program
                  controls.
                </p>
              </div>
              <div className="border-t border-white/15 pt-4">
                <h3>Licensing and oversight</h3>
                <p className="mt-2 text-white/80">
                  Licensing alignment and oversight across programs.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="border-t border-white/15 pt-4">
                <h3>Governance model</h3>
                <p className="mt-2 text-white/80">
                  Decision rights, accountability structures, and escalation
                  pathways.
                </p>
              </div>
              <div className="border-t border-white/15 pt-4">
                <h3>Quality assurance</h3>
                <p className="mt-2 text-white/80">
                  Continuous monitoring, compliance review, and evidence
                  stewardship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
