import { Button } from "@/components/ui/button";
import { MessageCircle, Mail } from "lucide-react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useNavigate } from "react-router-dom";


const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Shape blur gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-deep-blue/30 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gold/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[550px] h-[550px] bg-primary/15 rounded-full blur-[110px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-deep-blue/20 rounded-full blur-[90px] animate-float" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-20 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-3xl">
            <div className="inline-block mb-8 px-6 py-2.5 glass-card rounded-full border border-border">
              <p className="text-sm font-medium text-muted-foreground">Premium Career Services</p>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] animate-fade-in tracking-tight">
              Welcome to<br />Pison Careers
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 text-muted-foreground leading-relaxed animate-fade-in font-light" style={{ animationDelay: '0.2s' }}>
              The job market is tough, but we've got you covered. From first jobs to career shifts or promotions, 
              our professional CV writing services, cover letters, LinkedIn optimization, and coaching empower you 
              to <span className="text-accent font-medium">step into the limelight</span> to succeed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg" 
                className="bg-foreground hover:bg-foreground/90 text-background font-medium px-10 py-7 text-base transition-all rounded-full group border-2 border-foreground"
                onClick={() => navigate('/order')}
              >
                <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Place Your Order
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-gold/30 hover:bg-gold hover:text-background hover:border-gold font-medium px-10 py-7 text-base transition-all rounded-full group"
              >
                <MessageCircle className="mr-2 h-5 w-5 text-gold group-hover:text-background group-hover:scale-110 transition-transform" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>

          {/* Right Side - Lottie Animation */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative w-full max-w-xl lg:max-w-3xl h-[500px] lg:h-[700px]">
              <DotLottieReact
                src="https://lottie.host/81a2a9e0-0516-4cc5-9e49-694b6224dd86/SLCEy57Zb7.lottie"
                loop
                autoplay
                className="w-full h-full drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
