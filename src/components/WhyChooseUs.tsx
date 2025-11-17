import { Check } from "lucide-react";

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
  return (
    <section className="py-32 md:py-40 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-24 md:mb-32 animate-fade-in text-center">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Why Choose <span className="text-accent">Pison Careers?</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className="flex items-start space-x-5 glass-card p-8 rounded-2xl border border-border hover:border-accent/40 transition-all duration-500"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-7 h-7 rounded-full border-2 border-accent flex items-center justify-center">
                    <Check className="w-4 h-4 text-accent" strokeWidth={3} />
                  </div>
                </div>
                <p className="text-lg font-light text-foreground">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
