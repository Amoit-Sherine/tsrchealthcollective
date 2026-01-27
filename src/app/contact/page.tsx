import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import ContactForm from "@/components/contact/ContactForm";
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
              TSRC Health Collective welcomes questions and feedback. This form
              may be used for general, government, partnership, or career
              inquiries. Please do not include sensitive or protected health
              information.
            </p>
          </div>
        </Container>
      </section>

      <Section className="!bg-olive">
        <div className="space-y-12">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/25 bg-white/12 p-6 shadow-[0_10px_28px_rgba(0,0,0,0.25)] backdrop-blur-lg sm:p-7">
              <h3 className="!text-white">Inquiry paths</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                <li>Government and institutional coordination.</li>
                <li>Partnership and collaboration inquiries.</li>
                <li>Careers and workforce inquiries.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/25 bg-white/12 p-6 shadow-[0_10px_28px_rgba(0,0,0,0.25)] backdrop-blur-lg sm:p-7">
              <h3 className="!text-white">Important notice</h3>
              <p className="mt-3 text-sm !text-white/80">
                Do not submit protected health information or sensitive data
                through this form.
              </p>
            </div>
            <div className="rounded-2xl border border-white/25 bg-white/12 p-6 shadow-[0_10px_28px_rgba(0,0,0,0.25)] backdrop-blur-lg sm:p-7">
              <h3 className="!text-white">Regional scope</h3>
              <p className="mt-3 text-sm !text-white/80">
                Regional focus across British Columbia. No site addresses are
                published.
              </p>
            </div>
          </div>

          <div className="mx-auto w-full max-w-4xl">
            <div className="rounded-2xl border border-white/30 bg-white/82 p-6 shadow-[0_8px_20px_rgba(0,0,0,0.12)] backdrop-blur-md sm:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
