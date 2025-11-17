import { Target, Heart } from "lucide-react";

const About = () => {
  return (
    <section className="py-32 md:py-40 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-24 md:mb-32 animate-fade-in text-center">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-10 tracking-tight">
              About <span className="text-accent">Pison Careers</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light max-w-4xl mx-auto">
              At Pison Careers, we're dedicated to helping job seekers thrive in a competitive world. With expert CV writing, 
              cover letter crafting, LinkedIn optimization, and personalized career coaching, we empower you to step into the 
              limelight and succeed — whether landing your first job, switching careers, or chasing a promotion.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-12 rounded-2xl border border-border hover:border-accent/40 transition-all duration-500">
              <Target className="w-12 h-12 text-accent mb-8" strokeWidth={1.5} />
              <h3 className="text-3xl font-bold mb-6 text-foreground tracking-tight">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-lg font-light">
                Our mission is to empower job seekers and professionals with top-tier career services that enhance their 
                employability, confidence, and success in the job market.
              </p>
            </div>
            
            <div className="glass-card p-12 rounded-2xl border border-border hover:border-accent/40 transition-all duration-500">
              <Heart className="w-12 h-12 text-accent mb-8" strokeWidth={1.5} />
              <h3 className="text-3xl font-bold mb-6 text-foreground tracking-tight">Why We Exist</h3>
              <p className="text-muted-foreground leading-relaxed text-lg font-light">
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
