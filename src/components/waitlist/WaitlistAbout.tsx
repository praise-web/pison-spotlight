import { Target, Heart } from "lucide-react";

const WaitlistAbout = () => {
  return (
    <section className="relative py-24 overflow-hidden border-t border-border">
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              About <span className="text-accent">Pison Careers</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We help African professionals stand out, get noticed, and achieve career success. 
              Through expertly crafted CVs, cover letters, LinkedIn optimization, and career coaching, 
              we empower you to step into the limelight and seize better opportunities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-xl border border-border hover:border-accent/30 transition-all">
              <div className="inline-flex p-3 rounded-lg bg-accent/10 mb-4">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower job seekers and professionals with top-tier career services that enhance 
                employability, confidence, and professional visibility.
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-xl border border-border hover:border-accent/30 transition-all">
              <div className="inline-flex p-3 rounded-lg bg-accent/10 mb-4">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Why We Exist</h3>
              <p className="text-muted-foreground leading-relaxed">
                Because everyone deserves a fair shot at career success — and a CV that truly represents 
                their skills, achievements, and potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistAbout;
