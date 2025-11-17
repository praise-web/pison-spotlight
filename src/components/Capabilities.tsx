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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">What We Do for You</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-lg transition-smooth hover:-translate-y-2 border-border bg-card group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <service.icon className={`w-12 h-12 mx-auto mb-4 ${service.color} group-hover:scale-110 transition-smooth`} />
              <h3 className="font-semibold text-sm md:text-base text-card-foreground">{service.title}</h3>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 shadow-md hover:shadow-lg transition-smooth"
          >
            Get Started Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
