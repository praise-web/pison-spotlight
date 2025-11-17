import { Button } from "@/components/ui/button";
import { MessageCircle, Mail } from "lucide-react";
import heroImage from "@/assets/hero-professional.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 gradient-hero opacity-95 z-10" />
        <img 
          src={heroImage} 
          alt="Professional African businessman" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl text-white animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Welcome to <span className="text-accent">Pison Careers</span>
            <br />
            Your Path to Career Success
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed max-w-2xl">
            The job market is tough, but we've got you covered. From first jobs to career shifts or promotions, 
            our professional CV writing services, cover letters, LinkedIn optimization, and coaching empower you 
            to <span className="text-accent font-semibold">step into the limelight</span> to succeed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg shadow-gold transition-smooth hover:scale-105"
            >
              <Mail className="mr-2 h-5 w-5" />
              Place Your Order
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-6 text-lg transition-smooth hover:scale-105"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
