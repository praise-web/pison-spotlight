import { Check } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const reasons = [
  "99% Success Rate",
  "Industry-Leading Career Experts",
  "Tailored Smart CV Services",
  "Personalized Coaching",
  "Exceptional Design Quality",
  "Fast Turnaround (3–5 Days)",
  "Affordable and Transparent Pricing",
  "Customized Solutions for Every Career Stage"
];

const WhyChooseUs = () => {
  const { ref: headerRef, isVisible: headerVisible } = useIntersectionObserver();
  
  return (
    <section className="py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div ref={headerRef} className={`mb-24 transition-all duration-700 ${headerVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Why Choose Pison Careers?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {reasons.map((reason, index) => {
              const { ref, isVisible } = useIntersectionObserver();
              return (
                <div 
                  key={index}
                  ref={ref}
                  className={`flex items-start space-x-4 glass-card p-6 rounded-lg border border-border hover:border-accent/30 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}
                  style={{ animationDelay: isVisible ? `${index * 0.05}s` : '0s' }}
                >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 rounded-full border-2 border-accent flex items-center justify-center">
                    <Check className="w-3 h-3 text-accent" strokeWidth={3} />
                  </div>
                </div>
                <p className="text-base font-light text-foreground">{reason}</p>
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
