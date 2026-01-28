import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import SectionDots from "@/components/ui/SectionDots";

export default function HeroIntro() {
  return (
    <section id="top" className="border-b border-muted/15 bg-white">
      <Container>
        <div className="flex min-h-[65vh] flex-col items-center justify-center gap-6 py-16 text-center sm:py-20">
          <h1 className="sr-only">Transitional Support &amp; Residential Care</h1>
          <p className="text-xs uppercase tracking-[0.3em] text-olive/75 hero-fade">
            Transitional Support &amp; Residential Care
          </p>
          <SectionDots className="justify-center hero-fade-delayed" />
          <img
            src="/brand/logo-full.svg"
            alt="TSRC logo"
            className="h-[100px] w-auto lg:h-[180px]"
          />
          <p className="max-w-2xl text-lg text-olive/75 sm:text-xl hero-fade-delayed">
            Delivering regulated care services grounded in structure and accountability.
          </p>
          <div className="hero-fade-late">
            <Button href="/#about" variant="primary" size="lg">
              View About Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
