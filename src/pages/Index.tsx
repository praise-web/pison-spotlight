import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import SmartCV from "@/components/SmartCV";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Capabilities />
      <SmartCV />
      <About />
      <WhyChooseUs />
      <Services />
      <HowItWorks />
      <FAQ />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
