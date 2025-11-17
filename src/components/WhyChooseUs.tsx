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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Why Choose Pison Careers?</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-secondary/50 transition-smooth"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                    <Check className="w-4 h-4 text-accent-foreground" />
                  </div>
                </div>
                <p className="text-lg font-medium text-foreground">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
