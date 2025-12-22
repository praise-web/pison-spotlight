import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link2, QrCode, Shield, FileCheck, Clock, Video, Layout, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const features = [
  { icon: Link2, text: "Clickable Institution Logos" },
  { icon: Shield, text: "Hyperlinked Contacts" },
  { icon: QrCode, text: "Secure QR Code Verification" },
  { icon: Video, text: "Video Resumes & Portfolios" },
  { icon: Layout, text: "Premium 3-Page Layout" },
  { icon: CheckCircle, text: "ATS-Compliant Design" },
  { icon: Clock, text: "Fast 3-5 Day Delivery" },
];

const WaitlistHero = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];
  
  const scrollToWaitlist = () => {
    document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 gradient-mesh opacity-100" />
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block mb-8 px-6 py-2.5 glass-card rounded-full border border-accent/30">
            <p className="text-sm font-medium text-accent">🚀 Launching January 5, 2026</p>
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight">
            Step Into the Limelight with the{" "}
            <span className="text-accent">Pison Smart CV</span>
          </h1>
          
          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed font-light">
            The Pison Smart CV is more than a CV — it's a professional career tool built for the African job market. 
            Designed to get you noticed, verified, and hired.
          </p>
          
          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-3 mb-12 max-w-md mx-auto">
            {timeBlocks.map((block, index) => (
              <div
                key={index}
                className="glass-card p-3 rounded-xl border border-accent/30"
              >
                <div className="text-2xl md:text-3xl font-bold text-accent">
                  {String(block.value).padStart(2, "0")}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                  {block.label}
                </div>
              </div>
            ))}
          </div>
          
          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-4 py-2 glass-card rounded-full border border-border hover:border-accent/30 transition-colors"
              >
                <feature.icon className="w-4 h-4 text-accent" />
                <span className="text-sm text-foreground">{feature.text}</span>
              </div>
            ))}
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-6 sm:px-10 py-6 text-sm sm:text-base rounded-full border-2 border-accent whitespace-normal h-auto text-center"
              onClick={() => navigate('/order')}
            >
              <FileCheck className="mr-2 h-5 w-5" />
              Order Your Smart CV Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-medium px-6 sm:px-10 py-6 text-sm sm:text-base rounded-full border-2 border-accent/50 text-accent hover:bg-accent/10 hover:text-white whitespace-normal h-auto text-center transition-colors"
              onClick={scrollToWaitlist}
            >
              🔥 Join the Wait-list & Unlock Early Bird Discounts
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistHero;
