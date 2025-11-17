import { Search, ShoppingCart, Users, FileCheck, Briefcase } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Choose your Service",
    description: "Browse our professional career services and select what you need"
  },
  {
    icon: ShoppingCart,
    title: "Place your Order",
    description: "Complete a simple form with your career details and requirements"
  },
  {
    icon: Users,
    title: "Work with Our Experts",
    description: "Our team collaborates with you to craft the perfect materials"
  },
  {
    icon: FileCheck,
    title: "Receive Your Documents",
    description: "Get your professionally crafted CV, cover letter, or profile in 3-5 days"
  },
  {
    icon: Briefcase,
    title: "Land Your Dream Job",
    description: "Step into the limelight with confidence and secure that role"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-32 md:py-40 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-24 md:mb-32 animate-fade-in text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
            <span className="text-accent">How It Works</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            From Dream to Delivery
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="glass-card p-10 rounded-2xl border border-border hover:border-accent/40 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-8">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center border-2 border-accent/20 mb-6">
                    <step.icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
                  </div>
                  <div className="text-5xl font-bold text-accent/20">
                    0{index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3 text-foreground tracking-tight">{step.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
