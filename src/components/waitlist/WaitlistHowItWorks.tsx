import { Button } from "@/components/ui/button";
import { Package, ClipboardList, Users, FileCheck, Briefcase } from "lucide-react";

const steps = [
  { icon: Package, title: "Choose your package" },
  { icon: ClipboardList, title: "Join the wait-list / Place your order" },
  { icon: Users, title: "Work with our career experts" },
  { icon: FileCheck, title: "Receive your Smart CV in 3–5 days" },
  { icon: Briefcase, title: "Land your dream job" },
];

const WaitlistHowItWorks = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-24 overflow-hidden bg-secondary/30 border-t border-border">
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            From Dream to <span className="text-accent">Delivery</span>
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 w-16 h-16 rounded-full bg-background border-2 border-accent flex items-center justify-center mb-4">
                    <step.icon className="w-7 h-7 text-accent" />
                  </div>
                  <span className="text-xs text-accent font-medium mb-1">Step {index + 1}</span>
                  <p className="text-sm font-medium">{step.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-10 py-7 text-base rounded-full"
            onClick={scrollToWaitlist}
          >
            🚀 Join the Wait-list & Be Among the First to Launch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WaitlistHowItWorks;
