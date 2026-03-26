import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import glassBg from "@/assets/glass-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      {/* Background image */}
      <img
        src={glassBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/60" />

      {/* Floating orbs */}
      <div className="absolute top-20 left-[10%] h-64 w-64 rounded-full bg-primary/15 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-10 right-[15%] h-48 w-48 rounded-full bg-accent/15 blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="container relative mx-auto px-6 text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full glass-subtle px-5 py-2.5 text-sm text-foreground/80">
          🚀 New Batches Starting Now
        </div>

        <h1 className="mx-auto max-w-4xl text-4xl font-black leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Ace Your BTech 1st Year at{" "}
          <span className="text-primary">Affordable Prices</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Premium video lectures for BTech 1st year students. Score higher with
          expert guidance, structured curriculum, and a supportive Telegram
          community.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="h-14 rounded-2xl px-8 text-base font-semibold shadow-lg shadow-primary/25 bg-primary hover:bg-primary/90">
            <a href="#enroll">
              Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-14 rounded-2xl px-8 text-base font-semibold glass-subtle border-glass-border/30 text-foreground hover:bg-glass/40">
            <a href="#courses">View Courses</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
