import { FileText, Mail, Linkedin, Target, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: FileText,
    title: "Professional CV Writing & Design",
    description: "Your CV is your first impression. Let's make it count with a professional design that sets you apart from the crowd."
  },
  {
    icon: Mail,
    title: "Cover Letter Writing & Design",
    description: "A well-crafted cover letter communicates confidence, professionalism, and enthusiasm. We'll write one that opens doors."
  },
  {
    icon: Linkedin,
    title: "LinkedIn Optimization",
    description: "Your LinkedIn is your online CV. We'll help you shine where it matters — building visibility and recruiter engagement."
  },
  {
    icon: Target,
    title: "Career Coaching Services",
    description: "From interview prep to career transitions, we walk with you. Gain clarity, confidence, and the strategy to move forward."
  },
  {
    icon: TrendingUp,
    title: "Results-Driven Approach",
    description: "We don't just create documents. We build career profiles that get interviews, offers, and attention."
  }
];

const Services = () => {
  return (
    <section className="py-32 md:py-40 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-24 md:mb-32 animate-fade-in text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-xl md:text-2xl font-light">
            Expert solutions tailored to elevate your career journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group relative p-12 border-border hover:border-accent/40 transition-all duration-500 bg-card/80 backdrop-blur-sm overflow-hidden rounded-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative z-10">
                <div className="inline-flex mb-8">
                  <service.icon className="w-10 h-10 text-muted-foreground group-hover:text-accent transition-colors duration-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold mb-5 text-foreground tracking-tight">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg font-light">{service.description}</p>
              </div>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
