import { Star, ShieldCheck, BookOpen, Users } from "lucide-react";

const features = [
  {
    icon: Star,
    title: "High Quality Lectures",
    description: "Crystal clear explanations by experienced educators.",
  },
  {
    icon: ShieldCheck,
    title: "Affordable Prices",
    description: "Premium education accessible to everyone.",
  },
  {
    icon: BookOpen,
    title: "Lifetime Access",
    description: "Watch anytime, anywhere, at your own pace.",
  },
  {
    icon: Users,
    title: "Telegram Community",
    description: "Direct doubt solving and peer discussions.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-card py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl font-black text-foreground md:text-4xl">
          Why Choose Gateway Classes?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          Everything a BTech 1st year student needs to clear exams with confidence,
          at a price that's actually affordable.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-border bg-secondary/50 p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card">
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
