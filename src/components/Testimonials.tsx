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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">People Talk About Pison Careers</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 border-border hover:shadow-lg transition-smooth hover:-translate-y-2 bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground italic mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
