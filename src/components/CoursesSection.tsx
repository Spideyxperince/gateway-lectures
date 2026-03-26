import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const groupBundles = [
  {
    name: "Group 1 — Full Bundle",
    subjects: "Physics, Electrical, PPS, EVS, Maths",
    bestValue: true,
  },
  {
    name: "Group 2 — Full Bundle",
    subjects: "Chemistry, Electronics, Soft Skills, Mechanics, Maths",
    bestValue: false,
  },
];

const singleSubjects = [
  "Physics",
  "Electrical Engineering",
  "PPS (Programming for Problem Solving)",
  "Environmental Science (EVS)",
  "Mathematics",
  "Chemistry",
  "Electronics Engineering",
  "Soft Skills",
  "Mechanics (Engineering Mechanics)",
];

const CoursesSection = () => {
  return (
    <section id="courses" className="bg-secondary py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl font-black text-foreground md:text-4xl">
          BTech 1st Year Courses
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          Pick a full group bundle at ₹500 or enroll in any single subject for just
          ₹150. No hidden fees.
        </p>

        {/* Group Bundles */}
        <div className="mt-12">
          <h3 className="flex items-center gap-2 text-lg font-bold text-foreground">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            Group Bundles — ₹500 each
          </h3>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {groupBundles.map((bundle) => (
              <div
                key={bundle.name}
                className={`relative rounded-2xl border-2 bg-card p-6 ${
                  bundle.bestValue ? "border-primary" : "border-border"
                }`}
              >
                {bundle.bestValue && (
                  <span className="absolute -top-3 left-6 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                    Best Value
                  </span>
                )}
                <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                  Group Bundle — 5 Subjects
                </span>
                <h4 className="mt-4 text-xl font-bold text-foreground">{bundle.name}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{bundle.subjects}</p>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-black text-primary">₹500</span>
                  <span className="text-lg text-muted-foreground line-through">₹1000</span>
                </div>

                <ul className="mt-5 space-y-3">
                  {["All 5 subjects in the group", "Full syllabus video lectures", "Private Telegram Group Access"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-success" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Button asChild className="mt-6 w-full rounded-xl h-12 text-base font-semibold">
                  <a href="#enroll">Enroll in Group</a>
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Single Subjects */}
        <div className="mt-14">
          <h3 className="flex items-center gap-2 text-lg font-bold text-foreground">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            Single Subjects — ₹150 each
          </h3>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {singleSubjects.map((subject) => (
              <div
                key={subject}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                  Single Subject
                </span>
                <h4 className="mt-4 text-lg font-bold text-foreground">{subject}</h4>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-3xl font-black text-primary">₹150</span>
                  <span className="text-base text-muted-foreground line-through">₹300</span>
                </div>

                <ul className="mt-4 space-y-2">
                  {["Full syllabus video lectures", "Telegram group access"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle2 className="h-4 w-4 text-success" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Button asChild variant="secondary" className="mt-5 w-full rounded-xl h-11 font-semibold">
                  <a href="#enroll">Select Subject</a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
