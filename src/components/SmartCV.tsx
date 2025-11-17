import { Button } from "@/components/ui/button";
import { Check, Link2, QrCode, Shield, Clock, FileCheck } from "lucide-react";

const features = [
  {
    icon: Link2,
    title: "Clickable Logos",
    description: "All institution logos link to official websites for instant credibility"
  },
  {
    icon: Shield,
    title: "Hyperlinked Contacts",
    description: "Phone numbers, emails, and social handles are one-click accessible"
  },
  {
    icon: QrCode,
    title: "Secure QR Code",
    description: "Final page QR leads to your verified portfolio, certificates, and recommendations"
  },
  {
    icon: Check,
    title: "ATS-Compliant",
    description: "Passes all Applicant Tracking Systems with professional 3-page design"
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Professionally designed and delivered in just 3–5 days"
  }
];

const SmartCV = () => {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden bg-background border-t border-border">
      {/* Subtle gradient mesh */}
      <div className="absolute inset-0 z-0 gradient-mesh opacity-100" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent/8 rounded-full blur-3xl animate-float" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-24 md:mb-32 animate-fade-in text-center max-w-5xl mx-auto">
          <div className="inline-block mb-10 px-6 py-3 glass-card rounded-full border border-border">
            <p className="text-sm font-medium text-muted-foreground tracking-wide">Our Premium Product</p>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-10 tracking-tight leading-[1.05]">
            Step Into the Limelight with the <span className="text-accent">Pison Smart CV</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
            This is not just a CV — it's a smart, interactive, and verifiable career tool. Logos of every institution are clickable and lead to their official websites for instant trust. All contact details are hyperlinked. And your QR code gives employers access to your certificates, recommendations, portfolios, and video introductions — securely and professionally.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group glass-card p-10 rounded-2xl border border-border hover:border-accent/40 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex mb-7">
                <feature.icon className="w-9 h-9 text-muted-foreground group-hover:text-accent transition-colors duration-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground tracking-tight">
                {feature.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="animate-fade-in text-center" style={{ animationDelay: '0.5s' }}>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-12 py-8 text-lg transition-all rounded-full shadow-gold border-0"
          >
            <FileCheck className="mr-2 h-6 w-6" />
            Order Your Smart CV Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SmartCV;
