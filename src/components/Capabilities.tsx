import { FileText, Target, Linkedin, Mail, FileCheck, MessageSquare, TrendingUp, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const services = [
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
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">What We Do for You</h2>
          <div className="w-24 h-1.5 bg-gradient-gold mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
            Comprehensive career services designed to elevate your professional presence
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group relative p-6 lg:p-8 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-3 border-border/50 bg-card/50 backdrop-blur-sm cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:via-accent/10 group-hover:to-accent/5 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="mb-4 inline-flex p-4 rounded-2xl bg-accent/10 group-hover:bg-accent/20 transition-all duration-500 group-hover:scale-110">
                  <service.icon className={`w-10 h-10 lg:w-12 lg:h-12 ${service.color} transition-transform duration-500`} />
                </div>
                <h3 className="font-semibold text-sm md:text-base text-card-foreground group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
          >
            Get Started Now
            <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
