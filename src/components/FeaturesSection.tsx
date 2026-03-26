import { Star, ShieldCheck, BookOpen, Users } from "lucide-react";

const features = [
  {
    icon: Star,
    title: "High Quality Lectures",
    description: "Crystal clear explanations by experienced educators.",
    delay: "0s",
  },
  {
    icon: ShieldCheck,
    title: "Affordable Prices",
    description: "Premium education accessible to everyone.",
    delay: "0.5s",
  },
  {
    icon: BookOpen,
    title: "Lifetime Access",
    description: "Watch anytime, anywhere, at your own pace.",
    delay: "1s",
  },
  {
    icon: Users,
    title: "Telegram Community",
    description: "Direct doubt solving and peer discussions.",
    delay: "1.5s",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-primary/8 blur-[120px]" />

      <div className="container relative mx-auto px-6">
        <h2 className="text-center text-3xl font-black text-foreground md:text-4xl">
          Why Choose <span className="text-gradient">Gateway Classes?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          Everything a BTech 1st year student needs to clear exams with confidence,
          at a price that's actually affordable.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group glass rounded-2xl p-6 transition-all duration-300 hover:glass-glow hover:-translate-y-1"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
