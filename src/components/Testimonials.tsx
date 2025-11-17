import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Deji Adesina",
    role: "Software Engineer",
    quote: "Pison Careers showed me how much room for improvement I had. Their coaching gave me confidence — and job offers."
  },
  {
    name: "Josephine Nwankwo",
    role: "Marketing Specialist",
    quote: "After revamping my CV and LinkedIn, I got multiple interviews in a week. Highly recommended!"
  },
  {
    name: "Precious Olukaiyeja",
    role: "HR Manager",
    quote: "They personalized my documents perfectly for a career shift. Recruiters noticed me right away."
  }
];

const Testimonials = () => {
  return (
    <section className="py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-24 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            People Talk About Pison Careers
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group glass-card p-10 rounded-lg border border-border hover:border-accent/30 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-8">
                <Quote className="w-10 h-10 text-accent/30" strokeWidth={1.5} />
              </div>
              
              <p className="text-base text-muted-foreground mb-8 leading-relaxed font-light italic">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20">
                  <span className="text-accent font-semibold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground font-light">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
