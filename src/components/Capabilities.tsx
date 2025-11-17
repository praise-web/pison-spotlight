import { FileText, Target, Linkedin, Mail, FileCheck, MessageSquare, TrendingUp, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const capabilities = [
  { icon: FileText, title: "CV Writing", color: "text-accent" },
  { icon: Target, title: "ATS CV Service", color: "text-accent" },
  { icon: Linkedin, title: "LinkedIn Optimization", color: "text-accent" },
  { icon: Mail, title: "Cover Letter Writing", color: "text-accent" },
  { icon: FileCheck, title: "Tailored Cover Letter", color: "text-accent" },
  { icon: MessageSquare, title: "Interview Preparation", color: "text-accent" },
  { icon: TrendingUp, title: "Career Coaching", color: "text-accent" },
  { icon: RefreshCw, title: "CV Revamp", color: "text-accent" },
];

const Capabilities = () => {
  return (
    <section className="py-32 md:py-40 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-24 md:mb-32 animate-fade-in text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            What We <span className="text-accent">Do for You</span>
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 max-w-7xl mx-auto">
          {capabilities.map((capability, index) => (
            <div 
              key={index}
              className="group glass-card p-10 rounded-2xl border border-border hover:border-accent/40 transition-all duration-500"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="inline-flex mb-7">
                <capability.icon className="w-9 h-9 text-muted-foreground group-hover:text-accent transition-colors duration-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                {capability.title}
              </h3>
            </div>
          ))}
        </div>
        
        <div className="animate-fade-in text-center" style={{ animationDelay: '0.3s' }}>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-12 py-8 text-lg rounded-full transition-all shadow-gold border-0"
          >
            Get Started Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
