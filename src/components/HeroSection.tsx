import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-secondary py-24 md:py-32">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-20 text-6xl">🎓</div>
        <div className="absolute top-32 right-32 text-5xl">📚</div>
        <div className="absolute bottom-20 left-1/4 text-4xl">✏️</div>
        <div className="absolute top-16 left-1/2 text-5xl">🎓</div>
        <div className="absolute bottom-32 right-1/4 text-6xl">📖</div>
      </div>

      <div className="container relative mx-auto px-6 text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2 text-sm text-muted-foreground shadow-sm">
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
          <Button asChild size="lg" className="h-14 rounded-xl px-8 text-base font-semibold shadow-lg shadow-primary/25">
            <a href="#enroll">
              Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-14 rounded-xl px-8 text-base font-semibold bg-card">
            <a href="#courses">View Courses</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
