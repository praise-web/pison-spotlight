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
    <section className="py-32 md:py-40 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-24 md:mb-32 animate-fade-in text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            People <span className="text-accent">Talk About</span> Pison Careers
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group glass-card p-12 rounded-2xl border border-border hover:border-accent/40 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-10">
                <Quote className="w-12 h-12 text-accent/20" strokeWidth={1.5} />
              </div>
              
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed font-light italic">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center border-2 border-accent/20">
                  <span className="text-accent font-bold text-xl">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg">{testimonial.name}</p>
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
