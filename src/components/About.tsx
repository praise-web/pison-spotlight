import { Target, Heart } from "lucide-react";

const About = () => {
  return (
    <section className="py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-24 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">About Pison Careers</h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-3xl">
              At Pison Careers, we're dedicated to helping job seekers thrive in a competitive world. With expert CV writing, 
              cover letter crafting, LinkedIn optimization, and personalized career coaching, we empower you to step into the 
              limelight and succeed — whether landing your first job, switching careers, or chasing a promotion.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-10 rounded-lg border border-border hover:border-accent/30 transition-all duration-300">
              <Target className="w-10 h-10 text-muted-foreground mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-semibold mb-4 text-foreground tracking-tight">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                Our mission is to empower job seekers and professionals with top-tier career services that enhance their 
                employability, confidence, and success in the job market.
              </p>
            </div>
            
            <div className="glass-card p-10 rounded-lg border border-border hover:border-accent/30 transition-all duration-300">
              <Heart className="w-10 h-10 text-muted-foreground mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-semibold mb-4 text-foreground tracking-tight">Why We Exist</h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                We are committed to helping individuals step into the limelight of better opportunities and achieve their 
                career goals through high-quality CV design, LinkedIn optimization, and expert coaching.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
