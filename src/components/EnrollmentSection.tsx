import { useState } from "react";
import { QrCode, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import qrCode from "@/assets/qr-code.jpg";

const courses = [
  "Group 1 — Full Bundle (₹500)", "Group 2 — Full Bundle (₹500)",
  "Physics (₹150)", "Electrical Engineering (₹150)", "PPS (₹150)",
  "Environmental Science (₹150)", "Mathematics (₹150)", "Chemistry (₹150)",
  "Electronics Engineering (₹150)", "Soft Skills (₹150)", "Mechanics (₹150)",
];

const steps = [
  { num: 1, title: "Scan QR Code", desc: "Open your UPI app (GPay, PhonePe, Paytm) and scan the QR above." },
  { num: 2, title: "Make Payment", desc: "Pay the exact amount for your selected course." },
  { num: 3, title: "Submit Details", desc: "Fill the form with your Transaction ID / UTR number for verification." },
];

const EnrollmentSection = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const getAmount = () => (!selectedCourse ? "" : selectedCourse.includes("500") ? "500" : "150");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Details submitted! We'll verify your payment and grant access shortly.");
  };

  return (
    <section id="enroll" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/6 blur-[150px]" />

      <div className="container relative mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-center text-3xl font-black text-foreground md:text-4xl">
            <span className="text-primary">Enrollment</span>
          </h2>
          <div className="mx-auto mt-8 max-w-lg glass rounded-2xl p-8 text-center">
            <p className="text-xl font-semibold text-foreground">🚫 No service is available now.</p>
            <p className="mt-3 text-muted-foreground">Please check back later. Thank you for your patience!</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default EnrollmentSection;
