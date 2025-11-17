import { Button } from "@/components/ui/button";
import { MessageCircle, Mail } from "lucide-react";
import heroImage from "@/assets/hero-professional.jpg";


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Subtle gradient mesh */}
      <div className="absolute inset-0 z-0 gradient-mesh opacity-100" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-20 py-32">
        <div className="max-w-5xl">
          <div className="inline-block mb-8 px-6 py-2.5 glass-card rounded-full border border-border">
            <p className="text-sm font-medium text-muted-foreground">Premium Career Services</p>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] animate-fade-in tracking-tight">
            Welcome to Pison Careers
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-muted-foreground leading-relaxed max-w-3xl animate-fade-in font-light" style={{ animationDelay: '0.2s' }}>
            The job market is tough, but we've got you covered. From first jobs to career shifts or promotions, 
            our professional CV writing services, cover letters, LinkedIn optimization, and coaching empower you 
            to <span className="text-accent font-medium">step into the limelight</span> to succeed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-foreground hover:bg-foreground/90 text-background font-medium px-10 py-7 text-base transition-all rounded-full group border-2 border-foreground"
            >
              <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Place Your Order
            </Button>
            <Button 
              size="lg" 
              className="glass-card hover:bg-muted/50 font-medium px-10 py-7 text-base transition-all rounded-full border border-border"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
