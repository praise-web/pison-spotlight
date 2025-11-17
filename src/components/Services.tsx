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
    <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Our Services: Your Competitive Advantage
          </h2>
          <div className="w-24 h-1.5 bg-gradient-gold mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
            Expert solutions tailored to elevate your career journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group relative p-8 lg:p-10 border-border/50 hover:border-accent/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-accent/10 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="inline-flex p-5 rounded-2xl bg-accent/10 mb-6 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-500">
                  <service.icon className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-card-foreground group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
