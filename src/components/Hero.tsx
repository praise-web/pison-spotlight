import { Button } from "@/components/ui/button";
import { MessageCircle, Mail } from "lucide-react";
import heroImage from "@/assets/hero-professional.jpg";


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background mesh */}
      <div className="absolute inset-0 z-0 gradient-mesh opacity-30" />
      
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90 z-10" />
        <img 
          src={heroImage} 
          alt="Professional African businessman" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 py-20">
        <div className="max-w-4xl text-white">
          <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <p className="text-sm font-medium text-accent">Premium Career Services</p>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            Welcome to Pison Careers
            <br />
            <span className="text-gradient">Your Path to Career Success</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-10 text-gray-200 leading-relaxed max-w-3xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            The job market is tough, but we've got you covered. From first jobs to career shifts or promotions, 
            our professional CV writing services, cover letters, LinkedIn optimization, and coaching empower you 
            to <span className="text-accent font-semibold">step into the limelight</span> to succeed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-10 py-7 text-lg shadow-gold transition-all hover:scale-105 hover:shadow-xl group"
            >
              <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Place Your Order
            </Button>
            <Button 
              size="lg" 
              className="glass-card text-white hover:bg-white/20 font-semibold px-10 py-7 text-lg transition-all hover:scale-105 border-white/30"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
    </section>
  );
};

export default Hero;
