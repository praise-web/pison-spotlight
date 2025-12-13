import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { FileCheck } from "lucide-react";

const WaitlistCountdown = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2026-01-05T00:00:00");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from("waitlist")
        .insert([{ email, name }]);

      if (error) {
        if (error.code === "23505") {
          toast.error("This email is already on the waitlist!");
        } else {
          throw error;
        }
      } else {
        toast.success("You've been added to the waitlist! Check your email for confirmation.");
        setEmail("");
        setName("");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section id="waitlist-form" className="relative py-24 overflow-hidden border-t border-border">
      <div className="absolute inset-0 gradient-mesh opacity-100" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Launching <span className="text-accent">January 5, 2026</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12">Don't Miss Out</p>
          
          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-4 mb-16 max-w-lg mx-auto">
            {timeBlocks.map((block, index) => (
              <div
                key={index}
                className="glass-card p-4 rounded-xl border border-accent/30"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent">
                  {String(block.value).padStart(2, "0")}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                  {block.label}
                </div>
              </div>
            ))}
          </div>
          
          {/* Waitlist Form */}
          <div className="glass-card p-8 rounded-2xl border border-border max-w-md mx-auto mb-8">
            <h3 className="text-xl font-semibold mb-6">Join the Wait-list</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-left">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div className="text-left">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium py-6 rounded-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Joining..." : "🔥 Join the Smart CV Wait-list Now"}
              </Button>
            </form>
          </div>
          
          {/* Order CTA */}
          <Button
            size="lg"
            variant="outline"
            className="font-medium px-10 py-7 text-base rounded-full border-2 border-accent/50 text-accent hover:bg-accent/10"
            onClick={() => navigate('/order')}
          >
            <FileCheck className="mr-2 h-5 w-5" />
            Order Your Smart CV
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WaitlistCountdown;
