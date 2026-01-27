import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import BadgeRail from "@/components/ui/BadgeRail";
import Button from "@/components/ui/Button";
import SectionDots from "@/components/ui/SectionDots";

type Job = {
  title: string;
  location?: string;
  type?: string;
  href: string;
};

const badges = [
  "Governance",
  "Compliance",
  "Quality assurance",
  "Ethical practice",
  "Teamwork",
  "Continuous learning",
  "Clinical alignment",
  "Data stewardship",
];

const jobs: Job[] = [];

export default function CareersPage() {
  return (
    <>
      <section className="border-b border-muted/10 bg-white">
        <Container>
          <div className="flex min-h-[45vh] flex-col items-center justify-center gap-5 py-16 text-center sm:py-20">
            <p className="text-xs uppercase tracking-[0.3em] text-muted hero-fade">
              Careers
            </p>
            <SectionDots className="justify-center hero-fade-delayed" />
            <h1 className="text-balance hero-fade-late">Work with us</h1>
            <p className="max-w-2xl text-lg text-muted/90 hero-fade-late sm:text-xl">
              Join TSRC Health Collective as we develop governance, standards,
              and oversight for youth residential care in British Columbia.
            </p>
            <div className="hero-fade-late">
              <Button href="#opportunities" variant="primary" size="lg">
                View opportunities
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Section variant="tinted" tone="bone" className="border-transparent bg-bone/50">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              Focus &amp; Values
            </p>
            <h2>What we focus on</h2>
            <p className="max-w-3xl">
              Teams support governance, structured documentation, and ethical
              practice for youth residential care.
            </p>
          </div>
          <BadgeRail items={badges} />
        </div>
      </Section>

      <Section id="opportunities" variant="white" className="border-transparent">
        <div className="space-y-8">
          <SectionDots />
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              Opportunities
            </p>
            <h2>Current opportunities</h2>
            <p className="max-w-3xl">
              Roles are posted externally as they become available. Listings
              link to the application site.
            </p>
          </div>

          <div className="rounded-2xl border border-muted/15 bg-white shadow-sm">
            {jobs.length === 0 ? (
              <p className="px-6 py-8 text-muted">
                Roles are posted as they become available.
              </p>
            ) : (
              jobs.map((job, index) => {
                const meta = [job.location, job.type].filter(Boolean).join(" | ");
                return (
                  <div
                    key={job.title}
                    className={`flex flex-col gap-4 px-6 py-6 transition-colors sm:flex-row sm:items-center sm:justify-between ${
                      index === 0 ? "" : "border-t border-muted/10"
                    } hover:bg-bone/40`}
                  >
                    <div className="space-y-1">
                      <p className="text-lg font-semibold text-olive">
                        {job.title}
                      </p>
                      {meta ? (
                        <p className="text-sm text-muted">{meta}</p>
                      ) : null}
                    </div>
                    <Button href={job.href} variant="primary">
                      Apply
                    </Button>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
