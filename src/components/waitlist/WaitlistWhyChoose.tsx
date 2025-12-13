import { Check } from "lucide-react";

const reasons = [
  "99% Success Rate in getting interviews",
  "Crafted by industry-leading career experts",
  "Tailored Smart CV services for all career stages",
  "Personalized coaching & guidance",
  "Exceptional design quality",
  "Fast turnaround (3–5 days)",
  "Affordable, transparent pricing",
  "Career solutions built specifically for African professionals",
];

const WaitlistWhyChoose = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-secondary/30 border-t border-border">
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Why <span className="text-accent">Pison Smart CV?</span>
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-center gap-4 glass-card p-5 rounded-xl border border-border hover:border-accent/30 transition-all"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <span className="text-foreground">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistWhyChoose;
