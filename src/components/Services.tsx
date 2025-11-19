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
    <section className="py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-24 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl text-xl font-light">
            Expert solutions tailored to elevate your career journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group relative p-10 border-border hover:border-accent/30 transition-all duration-300 bg-card/50 backdrop-blur-sm overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative z-10">
                <div className="inline-flex mb-6">
                  <service.icon className="w-8 h-8 text-muted-foreground group-hover:text-accent transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground tracking-tight">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-light">{service.description}</p>
              </div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
