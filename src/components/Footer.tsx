import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 py-24">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-4xl font-bold mb-6 tracking-tight">Pison Careers</h3>
            <p className="text-muted-foreground mb-10 leading-relaxed font-light max-w-md text-lg">
              Empowering job seekers and professionals with premium career branding services that get them seen, 
              verified, and hired.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-8 tracking-tight">Our Services</h4>
            <ul className="space-y-4 text-muted-foreground font-light">
              <li><a href="#" className="hover:text-accent transition-colors text-base">Career Coaching</a></li>
              <li><a href="#" className="hover:text-accent transition-colors text-base">Interview Prep</a></li>
              <li><a href="#" className="hover:text-accent transition-colors text-base">CV Writing</a></li>
              <li><a href="#" className="hover:text-accent transition-colors text-base">LinkedIn Optimization</a></li>
              <li><a href="#" className="hover:text-accent transition-colors text-base">Smart CV</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-8 tracking-tight">Contact Us</h4>
            <ul className="space-y-5 text-muted-foreground font-light">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-base">Christore Complex, Ado Ekiti</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" strokeWidth={1.5} />
                <a href="mailto:info@pisoncareers.com" className="hover:text-accent transition-colors text-base">
                  info@pisoncareers.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" strokeWidth={1.5} />
                <a href="tel:09134896687" className="hover:text-accent transition-colors text-base">
                  0913 489 6687
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-10 text-center text-muted-foreground text-base font-light">
          <p>&copy; 2025 Pison Careers. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
