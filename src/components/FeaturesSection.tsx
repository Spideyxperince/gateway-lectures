import { Star, ShieldCheck, BookOpen, Users } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const features = [
  { icon: Star, title: "High Quality Lectures", description: "Crystal clear explanations by experienced educators. Free samples available on demand." },
  { icon: ShieldCheck, title: "Affordable Prices", description: "Premium education accessible to everyone." },
  { icon: BookOpen, title: "Lifetime Access", description: "Watch anytime, anywhere, at your own pace." },
  { icon: Users, title: "Telegram Community", description: "Direct doubt solving and peer discussions." },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-primary/8 blur-[120px]" />

      <div className="container relative mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-center text-3xl font-black text-foreground md:text-4xl">
            Why Choose <span className="text-primary">Gateway Classes?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Everything a BTech 1st year student needs to clear exams with confidence,
            at a price that's actually affordable.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group glass rounded-2xl p-6 transition-all duration-300 hover:glass-glow hover:-translate-y-1"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
