import { Button } from "@/components/ui/button";
import { Check, Link2, QrCode, Shield, Clock, FileCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  
  return (
    <section id="smart-cv" className="relative py-32 overflow-hidden bg-background border-t border-border">
      {/* Subtle gradient mesh */}
      <div className="absolute inset-0 z-0 gradient-mesh opacity-100" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-16 animate-fade-in">
          <div className="inline-block mb-6 px-6 py-2.5 glass-card rounded-full border border-border">
            <p className="text-sm font-medium text-muted-foreground">Our Premium Product</p>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight max-w-4xl">
            Step Into the Limelight with the <span className="text-accent">Pison Smart CV</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl font-light leading-relaxed">
            This is not just a CV — it's a smart, interactive, and verifiable career tool. Logos of every institution are clickable and lead to their official websites for instant trust. All contact details are hyperlinked. And your QR code gives employers access to your certificates, recommendations, portfolios, and video introductions — securely and professionally.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-6xl">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group glass-card p-8 rounded-lg border border-border hover:border-accent/30 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex mb-5">
                <feature.icon className="w-7 h-7 text-muted-foreground group-hover:text-accent transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-medium mb-2 text-foreground tracking-tight">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-10 py-7 text-base transition-all rounded-full border-2 border-accent"
            onClick={() => navigate('/order')}
          >
            <FileCheck className="mr-2 h-5 w-5" />
            Order Your Smart CV Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SmartCV;
