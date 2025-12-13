import { FileText, Mail, Linkedin, Target, TrendingUp } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Professional CV Writing & Design",
    items: ["Showcase your achievements clearly", "Optimized for recruiters and ATS"],
  },
  {
    icon: Mail,
    title: "Cover Letter Writing & Design",
    items: ["Professional, personalized letters that open doors"],
  },
  {
    icon: Linkedin,
    title: "LinkedIn Optimization",
    items: ["Boost your profile visibility", "Attract recruiters and relevant opportunities"],
  },
  {
    icon: Target,
    title: "Career Coaching",
    items: ["Interview prep, career transitions, and strategy", "Personalized support to achieve your goals"],
  },
  {
    icon: TrendingUp,
    title: "Results-Driven Approach",
    items: ["Not just a CV — a career profile that gets attention, interviews, and offers"],
  },
];

const WaitlistServices = () => {
  return (
    <section className="relative py-24 overflow-hidden border-t border-border">
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Smart CV + Career Services:{" "}
            <span className="text-accent">Your Competitive Advantage</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl border border-border hover:border-accent/30 transition-all group"
            >
              <div className="inline-flex p-3 rounded-lg bg-accent/10 mb-4 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WaitlistServices;
