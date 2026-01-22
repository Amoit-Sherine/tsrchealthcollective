import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import SectionDots from "@/components/ui/SectionDots";

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-muted/10 bg-white">
        <Container>
          <div className="flex min-h-[45vh] flex-col items-center justify-center gap-5 py-16 text-center sm:py-20">
            <p className="text-xs uppercase tracking-[0.3em] text-muted hero-fade">
              Contact
            </p>
            <SectionDots className="justify-center hero-fade-delayed" />
            <h1 className="text-balance hero-fade-late">
              General and institutional inquiries
            </h1>
            <p className="max-w-2xl text-lg text-muted/90 sm:text-xl hero-fade-late">
            We welcome questions and feedback. 
            This form may be used for general, government, partnership, or career inquiries.
             Please do not include sensitive or protected health information.
            </p>
          </div>
        </Container>
      </section>

      <Section className="bg-olive">
        <div className="space-y-12">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-muted/15 bg-white p-6 shadow-sm">
              <h3>Inquiry paths</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>Government and institutional coordination.</li>
                <li>Partnership and collaboration inquiries.</li>
                <li>Careers and workforce inquiries.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-muted/15 bg-white p-6 shadow-sm">
              <h3>Important notice</h3>
              <p className="mt-3 text-sm text-muted">
                Do not submit protected health information or sensitive data
                through this form.
              </p>
            </div>
            <div className="rounded-2xl border border-muted/15 bg-white p-6 shadow-sm">
              <h3>Regional scope</h3>
              <p className="mt-3 text-sm text-muted">
                Regional focus across British Columbia and Canada. No site
                addresses are published.
              </p>
            </div>
          </div>

          <div className="mx-auto w-full max-w-4xl">
            <div className="rounded-2xl border border-muted/15 bg-white p-6 shadow-sm sm:p-8">
              <form className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold text-olive" htmlFor="name">
                      Full name
                    </label>
                    <input
                      className="mt-2 w-full rounded-xl border border-muted/20 bg-white px-4 py-3 text-[1.05rem] text-olive shadow-sm"
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label
                      className="text-sm font-semibold text-olive"
                      htmlFor="organization"
                    >
                      Organization
                    </label>
                    <input
                      className="mt-2 w-full rounded-xl border border-muted/20 bg-white px-4 py-3 text-[1.05rem] text-olive shadow-sm"
                      id="organization"
                      name="organization"
                      type="text"
                    />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold text-olive" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="mt-2 w-full rounded-xl border border-muted/20 bg-white px-4 py-3 text-[1.05rem] text-olive shadow-sm"
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-olive" htmlFor="topic">
                      Topic
                    </label>
                    <select
                      className="mt-2 w-full rounded-xl border border-muted/20 bg-white px-4 py-3 text-[1.05rem] text-olive shadow-sm"
                      id="topic"
                      name="topic"
                    >
                      <option>General inquiry</option>
                      <option>Government and institutional</option>
                      <option>Partnerships</option>
                      <option>Careers</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold text-olive" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="mt-2 w-full rounded-xl border border-muted/20 bg-white px-4 py-3 text-[1.05rem] text-olive shadow-sm"
                    id="message"
                    name="message"
                    rows={4}
                  />
                </div>
                <Button type="submit" variant="primary" size="lg">
                  Submit inquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
