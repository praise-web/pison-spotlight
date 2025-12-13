import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WaitlistHero from "@/components/waitlist/WaitlistHero";
import WaitlistIncentives from "@/components/waitlist/WaitlistIncentives";
import WaitlistAbout from "@/components/waitlist/WaitlistAbout";
import WaitlistWhyChoose from "@/components/waitlist/WaitlistWhyChoose";
import WaitlistServices from "@/components/waitlist/WaitlistServices";
import WaitlistHowItWorks from "@/components/waitlist/WaitlistHowItWorks";
import WaitlistFAQ from "@/components/waitlist/WaitlistFAQ";
import WaitlistTestimonials from "@/components/waitlist/WaitlistTestimonials";
import WaitlistCountdown from "@/components/waitlist/WaitlistCountdown";

const SmartCVWaitlist = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WaitlistHero />
      <WaitlistIncentives />
      <WaitlistAbout />
      <WaitlistWhyChoose />
      <WaitlistServices />
      <WaitlistHowItWorks />
      <WaitlistFAQ />
      <WaitlistTestimonials />
      <WaitlistCountdown />
      <Footer />
    </div>
  );
};

export default SmartCVWaitlist;
