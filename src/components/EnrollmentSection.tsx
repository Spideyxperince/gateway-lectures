import { useState } from "react";
import { QrCode, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import qrCode from "@/assets/qr-code.jpg";

const courses = [
  "Group 1 — Full Bundle (₹500)",
  "Group 2 — Full Bundle (₹500)",
  "Physics (₹150)",
  "Electrical Engineering (₹150)",
  "PPS (₹150)",
  "Environmental Science (₹150)",
  "Mathematics (₹150)",
  "Chemistry (₹150)",
  "Electronics Engineering (₹150)",
  "Soft Skills (₹150)",
  "Mechanics (₹150)",
];

const steps = [
  { num: 1, title: "Scan QR Code", desc: "Open your UPI app (GPay, PhonePe, Paytm) and scan the QR above." },
  { num: 2, title: "Make Payment", desc: "Pay the exact amount for your selected course." },
  { num: 3, title: "Submit Details", desc: "Fill the form with your Transaction ID / UTR number for verification." },
];

const EnrollmentSection = () => {
  const [selectedCourse, setSelectedCourse] = useState("");

  const getAmount = () => {
    if (!selectedCourse) return "";
    return selectedCourse.includes("500") ? "500" : "150";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Details submitted! We'll verify your payment and grant access shortly.");
  };

  return (
    <section id="enroll" className="relative py-24 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/6 blur-[150px]" />

      <div className="container relative mx-auto px-6">
        <h2 className="text-center text-3xl font-black text-foreground md:text-4xl">
          Complete Your <span className="text-primary">Enrollment</span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center text-muted-foreground">
          Follow these 3 simple steps to get instant access to your classes.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left: QR + Steps */}
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center gap-2 text-lg font-bold text-foreground">
              <QrCode className="h-5 w-5 text-primary" />
              Scan to Pay
            </div>

            <div className="mt-6 flex items-center justify-center rounded-2xl border border-glass-border/20 bg-background/30 p-4">
              <img
                src={qrCode}
                alt="UPI QR Code for payment"
                className="h-60 w-60 rounded-xl object-cover"
                loading="lazy"
                width={240}
                height={240}
              />
            </div>

            <div className="mt-8 space-y-6">
              {steps.map((step) => (
                <div key={step.num} className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-bold text-primary">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{step.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Payment Form */}
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center gap-2 text-lg font-bold text-foreground">
              <span className="text-primary">💳</span>
              Payment Details
            </div>

            <div className="mt-4 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-200">
              <p className="font-bold">⚠️ Important — This is compulsory:</p>
              <p className="mt-1 text-amber-200/80">
                After payment completion, fill this form and take a screenshot of{" "}
                <strong className="text-amber-200">both the payment confirmation and this filled form</strong>.
                Send both screenshots to our email address given in the Support section
                below. Without this, your access cannot be verified.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <Label className="text-foreground/80 font-medium">Full Name</Label>
                  <Input placeholder="John Doe" className="mt-1.5 rounded-xl bg-background/40 border-glass-border/30 text-foreground placeholder:text-muted-foreground" required />
                </div>
                <div>
                  <Label className="text-foreground/80 font-medium">Email Address</Label>
                  <Input type="email" placeholder="john@example.com" className="mt-1.5 rounded-xl bg-background/40 border-glass-border/30 text-foreground placeholder:text-muted-foreground" required />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <Label className="text-foreground/80 font-medium">Telegram Handle</Label>
                  <Input placeholder="@ username" className="mt-1.5 rounded-xl bg-background/40 border-glass-border/30 text-foreground placeholder:text-muted-foreground" required />
                </div>
                <div>
                  <Label className="text-foreground/80 font-medium">Transaction ID / UTR</Label>
                  <Input placeholder="e.g. 123456789012" className="mt-1.5 rounded-xl bg-background/40 border-glass-border/30 text-foreground placeholder:text-muted-foreground" required />
                </div>
              </div>

              <div>
                <Label className="text-foreground/80 font-medium">Select Course</Label>
                <Select value={selectedCourse} onValueChange={setSelectedCourse} required>
                  <SelectTrigger className="mt-1.5 rounded-xl bg-background/40 border-glass-border/30 text-foreground">
                    <SelectValue placeholder="Choose a course..." />
                  </SelectTrigger>
                  <SelectContent className="glass-strong rounded-xl border-glass-border/30">
                    {courses.map((c) => (
                      <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-foreground/80 font-medium">Amount Paid (₹)</Label>
                <Input
                  value={getAmount()}
                  readOnly
                  placeholder="Auto-filled"
                  className="mt-1.5 rounded-xl bg-background/40 border-glass-border/30 text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <Button type="submit" size="lg" className="w-full rounded-2xl h-14 text-base font-semibold bg-primary shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all text-primary-foreground">
                Submit Details <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentSection;
