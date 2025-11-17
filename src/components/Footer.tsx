import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Pison Careers</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Empowering job seekers and professionals with premium career branding services that get them seen, 
              verified, and hired.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-smooth">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-accent transition-smooth">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-accent transition-smooth">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-accent transition-smooth">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-smooth">Career Coaching</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Interview Prep</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">CV Writing</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">LinkedIn Optimization</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Smart CV</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Christore Complex, Ado Ekiti</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:info@pisoncareers.com" className="hover:text-accent transition-smooth">
                  info@pisoncareers.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:09134896687" className="hover:text-accent transition-smooth">
                  0913 489 6687
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2025 Pison Careers. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
