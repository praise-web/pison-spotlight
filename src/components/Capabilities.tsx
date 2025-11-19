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
    <section className="py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-24 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            What We Do for You
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {capabilities.map((capability, index) => (
            <div 
              key={index}
              className="group glass-card p-8 rounded-lg border border-border hover:border-accent/30 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="inline-flex mb-5">
                <capability.icon className="w-7 h-7 text-muted-foreground group-hover:text-accent transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-medium text-foreground">
                {capability.title}
              </h3>
            </div>
          ))}
        </div>
        
        <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Button 
            size="lg" 
            className="bg-foreground hover:bg-foreground/90 text-background font-medium px-10 py-7 text-base rounded-full border-2 border-foreground transition-all"
          >
            Get Started Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
