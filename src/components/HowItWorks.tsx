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
    <section className="py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-24 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground font-light">
            From Dream to Delivery
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="glass-card p-8 rounded-lg border border-border hover:border-accent/30 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20 mb-4">
                    <step.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                  </div>
                  <div className="text-4xl font-bold text-muted-foreground/20">
                    0{index + 1}
                  </div>
                </div>
                <h3 className="text-base font-semibold mb-2 text-foreground tracking-tight">{step.title}</h3>
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
