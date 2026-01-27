import { Button } from "@/components/ui/button";
import { MessageCircle, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import slide0 from "@/assets/smart-cv-slide-0.jpeg";
import slide1 from "@/assets/smart-cv-slide-1.jpeg";
import slide2 from "@/assets/smart-cv-slide-2.jpeg";
import slide3 from "@/assets/smart-cv-slide-3.jpeg";
import slide4 from "@/assets/smart-cv-slide-4.jpeg";
import slide5 from "@/assets/smart-cv-slide-5.jpeg";
import slide6 from "@/assets/smart-cv-slide-6.jpeg";
import slide7 from "@/assets/smart-cv-slide-7.jpeg";

const slides = [slide0, slide1, slide2, slide3, slide4, slide5, slide6, slide7];


const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Shape blur gradient background */}
      <div className="absolute inset-0 z-0 animate-rotate-slow">
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
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] animate-fade-in tracking-tight">
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
                onClick={() => {
                  const smartCvSection = document.getElementById('smart-cv');
                  smartCvSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
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

          {/* Right Side - Image Slider */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <HeroSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-xl lg:max-w-2xl">
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-xl">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Smart CV Feature ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      
      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-accent w-6' 
                : 'bg-muted-foreground/40 hover:bg-muted-foreground/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
