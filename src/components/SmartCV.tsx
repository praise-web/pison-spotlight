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
    <section className="py-20 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 text-white animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Step Into the Limelight with the <span className="text-accent">Pison Smart CV</span>
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-200 max-w-3xl mx-auto">
              This is not just a CV — it's a smart, interactive, and verifiable career tool. Logos of every institution 
              are clickable and lead to their official websites for instant trust. All contact details are hyperlinked. 
              And your QR code gives employers access to your certificates, recommendations, portfolios, and video 
              introductions — securely and professionally.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/15 transition-smooth hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-200">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-10 py-6 text-lg shadow-gold transition-smooth hover:scale-105"
            >
              Order Your Smart CV Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartCV;
