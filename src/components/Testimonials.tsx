import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Deji Adesina",
    role: "Software Engineer",
    content: "Pison Careers showed me how much room for improvement I had. Their coaching gave me confidence — and job offers.",
    rating: 5
  },
  {
    name: "Josephine Nwankwo",
    role: "Marketing Specialist",
    content: "After revamping my CV and LinkedIn, I got multiple interviews in a week. Highly recommended!",
    rating: 5
  },
  {
    name: "Precious Olukaiyeja",
    role: "HR Manager",
    content: "They personalized my documents perfectly for a career shift. Recruiters noticed me right away.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">People Talk About Pison Careers</h2>
          <div className="w-24 h-1.5 bg-gradient-gold mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 text-lg">
            Hear from professionals who stepped into the limelight
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group relative p-8 lg:p-10 border-border/50 hover:border-accent/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote decoration */}
              <div className="absolute top-6 right-6 text-8xl text-accent/5 font-serif leading-none">"</div>
              
              <div className="relative z-10">
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-muted-foreground italic mb-8 leading-relaxed text-lg">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t border-border/50 pt-6 flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center text-accent-foreground font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
