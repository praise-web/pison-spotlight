import { Button } from "@/components/ui/button";
import { Check, Link2, QrCode, Shield, Clock } from "lucide-react";

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
    <section className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 text-white">
            <div className="inline-block mb-6 px-6 py-2 glass-card rounded-full">
              <p className="text-sm font-medium text-accent">Featured Product</p>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Step Into the Limelight with the
              <br />
              <span className="text-gradient">Pison Smart CV</span>
            </h2>
            
            <p className="text-lg md:text-xl leading-relaxed text-gray-200 max-w-4xl mx-auto">
              This is not just a CV — it's a smart, interactive, and verifiable career tool. Logos of every institution 
              are clickable and lead to their official websites for instant trust. All contact details are hyperlinked. 
              And your QR code gives employers access to your certificates, recommendations, portfolios, and video 
              introductions — securely and professionally.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="glass-card p-8 rounded-2xl hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-4 rounded-xl bg-accent/20 mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-12 py-7 text-lg shadow-gold transition-all hover:scale-105 hover:shadow-2xl group"
            >
              Order Your Smart CV Now
              <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartCV;
