import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import SectionDots from "@/components/ui/SectionDots";

export default function HeroIntro() {
  return (
    <section id="top" className="border-b border-muted/15 bg-white">
      <Container>
        <div className="flex min-h-[65vh] flex-col items-center justify-center gap-6 py-16 text-center sm:py-20">
          <SectionDots className="justify-center hero-fade" size="lg" />
          <h1 className="text-balance hero-fade">TSRC Health Collective</h1>
          <p className="max-w-2xl text-lg text-muted/90 sm:text-xl hero-fade-delayed">
            Parent organization for regulated service platforms in British
            Columbia and Canada.
          </p>
          <div className="hero-fade-late">
            <Button href="/#about" variant="primary" size="lg">
              View corporate overview
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
