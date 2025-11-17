import { Button } from "@/components/ui/button";
import { MessageCircle, Mail } from "lucide-react";
import heroImage from "@/assets/hero-professional.jpg";


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Subtle gradient mesh */}
      <div className="absolute inset-0 z-0 gradient-mesh opacity-100" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-20 py-32 md:py-40">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-10 px-6 py-3 glass-card rounded-full border border-border">
            <p className="text-sm font-medium text-muted-foreground tracking-wide">Premium Career Services</p>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-8 leading-[0.95] animate-fade-in tracking-tight">
            Welcome to<br/>
            <span className="text-accent">Pison Careers</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl mb-14 text-muted-foreground leading-relaxed max-w-4xl mx-auto animate-fade-in font-light" style={{ animationDelay: '0.2s' }}>
            The job market is tough, but we've got you covered. From first jobs to career shifts or promotions, 
            our professional CV writing services, cover letters, LinkedIn optimization, and coaching empower you 
            to step into the limelight to succeed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-12 py-8 text-lg transition-all rounded-full shadow-gold group border-0"
            >
              <Mail className="mr-2 h-6 w-6 group-hover:rotate-12 transition-transform" />
              Place Your Order
            </Button>
            <Button 
              size="lg" 
              className="glass-card hover:bg-muted/50 font-semibold px-12 py-8 text-lg transition-all rounded-full border border-border"
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
