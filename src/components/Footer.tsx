import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter, Facebook } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Footer = () => {
  const { ref: companyRef, isVisible: companyVisible } = useIntersectionObserver();
  const { ref: servicesRef, isVisible: servicesVisible } = useIntersectionObserver();
  const { ref: contactRef, isVisible: contactVisible } = useIntersectionObserver();
  
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div ref={companyRef} className={`md:col-span-2 transition-all duration-700 ${companyVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-3xl font-bold mb-4 tracking-tight">Pison Careers</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed font-light max-w-md">
              Empowering job seekers and professionals with premium career branding services that get them seen, 
              verified, and hired.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div ref={servicesRef} className={`transition-all duration-700 ${servicesVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: servicesVisible ? '0.1s' : '0s' }}>
            <h4 className="text-base font-semibold mb-6 tracking-tight">Our Services</h4>
            <ul className="space-y-3 text-muted-foreground font-light">
              <li><a href="#" className="hover:text-accent transition-colors">Career Coaching</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Interview Prep</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">CV Writing</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">LinkedIn Optimization</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Smart CV</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div ref={contactRef} className={`transition-all duration-700 ${contactVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: contactVisible ? '0.2s' : '0s' }}>
            <h4 className="text-base font-semibold mb-6 tracking-tight">Contact Us</h4>
            <ul className="space-y-4 text-muted-foreground font-light">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>Christore Complex, Ado Ekiti</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" strokeWidth={1.5} />
                <a href="mailto:info@pisoncareers.com" className="hover:text-accent transition-colors">
                  info@pisoncareers.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" strokeWidth={1.5} />
                <a href="tel:09134896687" className="hover:text-accent transition-colors">
                  0913 489 6687
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm font-light">
          <p>&copy; 2025 Pison Careers. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
