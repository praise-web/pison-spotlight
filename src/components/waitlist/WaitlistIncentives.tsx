import { Button } from "@/components/ui/button";
import { BadgePercent, Users, Ticket, BookOpen } from "lucide-react";

const incentives = [
  {
    icon: BadgePercent,
    title: "Early Bird Discounts",
    items: [
      "Basic Package: ₦10,000 → 5% off",
      "Standard Package: ₦15,000 → 5% off",
      "Premium Package: ₦20,000 → 5% off",
    ],
  },
  {
    icon: Users,
    title: "Private Career Community Access",
    items: [
      "Early tips & insights",
      "Weekly job market updates",
      "Career micro-lessons",
      "Networking with career-focused professionals",
    ],
  },
  {
    icon: Ticket,
    title: "Free Ticket",
    items: ["Career Clinic, Abeokuta — March 2026"],
  },
  {
    icon: BookOpen,
    title: "Free Mini Career Toolkit",
    items: ["Templates, guides, and resources to level up your job search"],
  },
];

const WaitlistIncentives = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-24 overflow-hidden bg-secondary/30 border-t border-border">
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Wait-List Benefits <span className="text-accent">You Can't Miss</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Joining the wait-list gives you exclusive early access to Pison Smart CV along with powerful career-boosting perks.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {incentives.map((incentive, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl border border-border hover:border-accent/30 transition-all group"
            >
              <div className="inline-flex p-3 rounded-lg bg-accent/10 mb-4">
                <incentive.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{incentive.title}</h3>
              <ul className="space-y-2">
                {incentive.items.map((item, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-6 sm:px-10 py-6 text-sm sm:text-base rounded-full whitespace-normal h-auto text-center"
            onClick={scrollToWaitlist}
          >
            🚀 Join the Smart CV Wait-list Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WaitlistIncentives;
