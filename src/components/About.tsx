import { Target, Heart } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">About Pison Careers</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-8" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Pison Careers, we're dedicated to helping job seekers thrive in a competitive world. With expert CV writing, 
              cover letter crafting, LinkedIn optimization, and personalized career coaching, we empower you to step into the 
              limelight and succeed — whether landing your first job, switching careers, or chasing a promotion.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-card p-8 rounded-xl border border-border shadow-md hover:shadow-lg transition-smooth">
              <Target className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to empower job seekers and professionals with top-tier career services that enhance their 
                employability, confidence, and success in the job market.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl border border-border shadow-md hover:shadow-lg transition-smooth">
              <Heart className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Why We Exist</h3>
              <p className="text-muted-foreground leading-relaxed">
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
