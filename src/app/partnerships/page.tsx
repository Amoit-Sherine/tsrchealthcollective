import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionDots from "@/components/ui/SectionDots";

export default function PartnershipsPage() {
  return (
    <>
      <section className="border-b border-muted/10 bg-white">
        <Container>
          <div className="flex min-h-[45vh] flex-col items-center justify-center gap-5 py-16 text-center sm:py-20">
            <p className="text-xs uppercase tracking-[0.3em] text-muted hero-fade">
              Partnerships
            </p>
            <SectionDots className="justify-center hero-fade-delayed" />
            <h1 className="text-balance hero-fade-late">Partnership pathways</h1>
            <p className="max-w-2xl text-lg text-muted/90 sm:text-xl hero-fade-late">
              Partnership planning focuses on shared governance,
              accountability, and long-term alignment in support of regulated
              youth residential care.
            </p>
          </div>
        </Container>
      </section>

      <Section variant="tinted" tone="bone">
        <div className="space-y-10">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              Partnership Focus
            </p>
            <h2>Aligned partnership types</h2>
            <p className="max-w-3xl">
              TSRC is building alignment-based partnerships that support youth
              residential care governance and accountability.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            <Card
              variant="solid"
              tone="white"
              hover
              className="border-muted/20 bg-white/80 shadow-[0_8px_20px_rgba(0,0,0,0.08)] backdrop-blur-md"
            >
              <h3>Government partnerships</h3>
              <p className="mt-3">
                Exploratory collaboration with ministries and health authorities
                to support regulated youth residential care.
              </p>
            </Card>
            <Card
              variant="solid"
              tone="sand"
              hover
              className="border-sand/40 bg-sand/55 shadow-[0_8px_20px_rgba(0,0,0,0.08)] backdrop-blur-md"
            >
              <h3>Indigenous partnerships</h3>
              <p className="mt-3">
                Engagement based on cultural safety, respect, and shared
                priorities.
              </p>
            </Card>
            <Card
              variant="solid"
              tone="white"
              hover
              className="border-muted/20 bg-white/80 shadow-[0_8px_20px_rgba(0,0,0,0.08)] backdrop-blur-md"
            >
              <h3>Community and institutional collaboration</h3>
              <p className="mt-3">
                Coordination with community and institutional partners that
                supports youth residential care.
              </p>
            </Card>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/contact" variant="primary">
              Partnership inquiry
            </Button>
            <Button href="/services" variant="ghost">
              Service platform
            </Button>
          </div>
        </div>
      </Section>

      <Section variant="white">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <SectionDots />
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              Collaboration Approach
            </p>
            <h2>How partnerships work</h2>
            <p>
              Partnership planning emphasizes clear accountability, defined
              decision rights, and shared commitment to regulated standards.
            </p>
            <ul className="space-y-3 text-sm text-muted">
              <li>Defined governance and reporting expectations.</li>
              <li>Quality assurance and compliance alignment.</li>
              <li>Shared planning for long-term service stability.</li>
            </ul>
          </div>
          <Card variant="glass">
            <h3>Future collaboration</h3>
            <p className="mt-3">
              We welcome structured opportunities that support regulated youth
              residential care.
            </p>
          </Card>
        </div>
      </Section>
    </>
  );
}
