import { BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-glass-border/20 bg-footer py-16">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      
      <div className="container mx-auto grid grid-cols-1 gap-10 px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 border border-primary/30">
              <BookOpen className="h-5 w-5 text-primary" />
            </div>
            <span className="text-xl font-bold text-foreground">Gateway Classes</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-footer-foreground">
            Providing high-quality, affordable video lectures for BTech 1st year
            students. Master all subjects with lifetime access and dedicated Telegram
            support.
          </p>
        </div>

        <div>
          <h4 className="text-base font-bold text-foreground">Quick Links</h4>
          <ul className="mt-4 space-y-3">
            <li><a href="#features" className="text-sm text-footer-foreground hover:text-primary transition-colors">Why Choose Us</a></li>
            <li><a href="#courses" className="text-sm text-footer-foreground hover:text-primary transition-colors">Our Courses</a></li>
            <li><a href="#enroll" className="text-sm text-footer-foreground hover:text-primary transition-colors">How to Enroll</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-base font-bold text-foreground">Support</h4>
          <p className="mt-4 text-sm text-footer-foreground">
            Email: spideyxperience@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
