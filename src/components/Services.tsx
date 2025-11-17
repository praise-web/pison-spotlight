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
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Our Services: Your Competitive Advantage
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-8 border-border hover:shadow-lg transition-smooth hover:-translate-y-2 bg-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <service.icon className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-smooth" />
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
