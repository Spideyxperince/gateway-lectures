import { BookOpen } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
            <BookOpen className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">Gateway Classes</span>
        </a>
        <div className="flex items-center gap-8">
          <a href="#courses" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Courses
          </a>
          <a href="#enroll" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Enroll Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
