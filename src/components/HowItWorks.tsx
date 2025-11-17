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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            How It Works – From Dream to Delivery
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 transform -translate-x-1/2" />
            
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`relative flex items-center mb-16 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <div className="bg-card p-6 rounded-xl border border-border shadow-md hover:shadow-lg transition-smooth">
                    <div className={`flex items-center mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      <step.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-card-foreground">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                
                {/* Circle indicator */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-accent rounded-full items-center justify-center shadow-gold z-10">
                  <span className="text-accent-foreground font-bold text-lg">{index + 1}</span>
                </div>
                
                {/* Mobile number */}
                <div className="md:hidden absolute -left-12 top-6 w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-gold">
                  <span className="text-accent-foreground font-bold">{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
