import { Button } from "@/components/ui/button";
import { Link2, Phone, QrCode, Award, FolderOpen, Shield, Clock, CheckCircle2, Users } from "lucide-react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: Link2,
    title: "Verified Institution Logos",
    description: "Every school, workplace, and certification you list has its official logo included — and each one is clickable, linking directly to the institution's official website."
  },
  {
    icon: Phone,
    title: "Clickable Contact Details",
    description: "Phone numbers, email addresses, and social media links are all interactive. No need to copy-paste. One click and you're reached."
  },
  {
    icon: QrCode,
    title: "QR Code Verification Page",
    description: "The final page features a unique QR code that opens your secure document vault — employers can verify your credentials, view portfolios, recommendation letters, and even watch a video introduction."
  },
  {
    icon: Award,
    title: "Visual Trust, Instant Impression",
    description: "Visual branding through logos builds instant recognition and credibility — before they even read a word."
  },
  {
    icon: FolderOpen,
    title: "Built-In Portfolio Access",
    description: "Writers, designers, developers, doctors — show them what you've done. From pitch decks to project reports, your CV gives a direct link to proof of excellence."
  },
  {
    icon: Shield,
    title: "Secure, Private, Custom",
    description: "All verification links and files are stored in your private Google Drive folder or a secured Pison backend — only accessible through your QR code."
  }
];

const benefits = [
  { icon: Clock, text: "Fast Delivery" },
  { icon: CheckCircle2, text: "ATS-Friendly" },
  { icon: Award, text: "Premium Design" }
];

const audience = [
  "Job Seekers",
  "Freelancers & Consultants",
  "Tech Professionals",
  "Creatives & Portfolio Builders",
  "Professionals applying to global roles"
];

const SmartCVPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-background">
        {/* Shape blur gradient background */}
        <div className="absolute inset-0 z-0 animate-rotate-slow">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-deep-blue/30 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gold/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-1/4 w-[550px] h-[550px] bg-primary/15 rounded-full blur-[110px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-deep-blue/20 rounded-full blur-[90px] animate-float" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="inline-block mb-6 px-6 py-2.5 glass-card rounded-full border border-border">
              <p className="text-sm font-medium text-muted-foreground">The Future of CVs</p>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight">
              Pison Smart CV — <br />
              <span className="text-gradient">Your Digital Identity in a PDF</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light leading-relaxed">
              Say goodbye to basic CVs. The Pison Smart CV is a sleek, 3-page digital portfolio that verifies your career story, connects instantly to your institutions, and gives recruiters proof of who you are in seconds.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-foreground text-background hover:bg-foreground/90 px-10 py-7 text-base rounded-full"
                onClick={() => navigate('/order')}
              >
                📩 GET STARTED
              </Button>
              <Button size="lg" variant="outline" className="glass-card border-border px-10 py-7 text-base rounded-full hover:border-gold/30">
                📞 BOOK A CALL
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes It Smart Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-16 text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              What Makes It <span className="text-gold">"Smart"?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-lg border border-border hover:border-gold/30 transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex mb-5">
                  <feature.icon className="w-8 h-8 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Banner */}
      <section className="py-16 glass-card border-y border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <benefit.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                <span className="text-lg font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-float" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              Why It <span className="text-gold">Matters</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-6 font-light leading-relaxed">
              Recruiters today don't have time.
            </p>
            <p className="text-2xl font-semibold mb-12">
              They're scanning for proof, presence, and personality.
            </p>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              The Pison Smart CV delivers all three — <span className="text-gold font-medium">instantly</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Who Is It For Section */}
      <section className="py-32 glass-card border-y border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Users className="w-12 h-12 text-gold mx-auto mb-6" strokeWidth={1.5} />
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Who Is It For?
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {audience.map((item, index) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-lg border border-border hover:border-gold/30 transition-all duration-300 text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-gold mx-auto mb-3" strokeWidth={1.5} />
                  <p className="text-base font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 gradient-mesh opacity-100" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Ready to Step Into <br />
              <span className="text-gradient">the Limelight?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-4 font-light">
              Book your Pison Smart CV now.
            </p>
            <p className="text-2xl font-semibold mb-12">
              Show them you're not just employable. You're <span className="text-gold">exceptional</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-foreground text-background hover:bg-foreground/90 px-10 py-7 text-base rounded-full"
                onClick={() => navigate('/order')}
              >
                📩 GET STARTED
              </Button>
              <Button size="lg" variant="outline" className="glass-card border-border px-10 py-7 text-base rounded-full hover:border-gold/30">
                📞 BOOK A CALL
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SmartCVPage;
