import { BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-footer py-16 text-footer-foreground">
      <div className="container mx-auto grid grid-cols-1 gap-10 px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
              <BookOpen className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary-foreground">Gateway Classes</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            Providing high-quality, affordable video lectures for BTech 1st year
            students. Master all subjects with lifetime access and dedicated Telegram
            support.
          </p>
        </div>

        <div>
          <h4 className="text-base font-bold text-primary-foreground">Quick Links</h4>
          <ul className="mt-4 space-y-3">
            <li><a href="#features" className="text-sm hover:text-primary-foreground transition-colors">Why Choose Us</a></li>
            <li><a href="#courses" className="text-sm hover:text-primary-foreground transition-colors">Our Courses</a></li>
            <li><a href="#enroll" className="text-sm hover:text-primary-foreground transition-colors">How to Enroll</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-base font-bold text-primary-foreground">Support</h4>
          <p className="mt-4 text-sm">
            Email: spideyxperience@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
