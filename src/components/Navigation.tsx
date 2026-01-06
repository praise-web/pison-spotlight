import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  //useEffect(() => {
    //const checkAuth = async () => {
      //const { data: { session } } = await supabase.auth.getSession();
      
      // If not logged in and not already on waitlist, login, or admin pages, redirect to waitlist
      //const publicPaths = ['/waitlist', '/login', '/admin'];
      //if (!session && !publicPaths.includes(location.pathname)) {
        //navigate('/waitlist');
      //}
    //};

    //checkAuth();

    //const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      //const publicPaths = ['/waitlist', '/login', '/admin'];
      //if (!session && !publicPaths.includes(location.pathname)) {
        //navigate('/waitlist');
      //}
    //});

    //return () => subscription.unsubscribe();
  //}, [navigate, location.pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="text-2xl font-bold tracking-tight">
            Pison <span className="text-gold">Careers</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
            >
              Home
            </NavLink>
            <NavLink
              to="/smart-cv"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
            >
              Smart CV
            </NavLink>
            <Button 
              size="sm" 
              className="bg-foreground text-background hover:bg-foreground/90"
              onClick={() => navigate('/order')}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <NavLink
                to="/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                activeClassName="text-foreground"
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/smart-cv"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                activeClassName="text-foreground"
                onClick={() => setIsOpen(false)}
              >
                Smart CV
              </NavLink>
              <Button 
                size="sm" 
                className="bg-foreground text-background hover:bg-foreground/90 w-full"
                onClick={() => {
                  navigate('/order');
                  setIsOpen(false);
                }}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
