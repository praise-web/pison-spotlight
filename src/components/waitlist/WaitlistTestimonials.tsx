import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Deji Adesina",
    role: "Software Engineer",
    quote: "My Smart CV opened doors I never imagined. Interviews started coming in immediately.",
  },
  {
    name: "Josephine Nwankwo",
    role: "Marketing Specialist",
    quote: "The Smart CV helped me stand out. I got multiple interviews within days!",
  },
  {
    name: "Precious Olukaiyeja",
    role: "HR Manager",
    quote: "I switched careers with ease. Recruiters noticed me instantly.",
  },
];

const WaitlistTestimonials = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-secondary/30 border-t border-border">
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Success Stories from{" "}
            <span className="text-accent">Pison Smart CV Users</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-xl border border-border hover:border-accent/30 transition-all"
            >
              <Quote className="w-8 h-8 text-accent/50 mb-4" />
              <p className="text-muted-foreground mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-accent">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WaitlistTestimonials;
