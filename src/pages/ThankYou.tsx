import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { CheckCircle, Clock, Mail, Share2, Home, MessageCircle } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const ThankYou = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { orderId, fullName } = (location.state as { orderId?: string; fullName?: string }) || {};
  const { ref: pageRef, isVisible: pageVisible } = useIntersectionObserver();

  const handleWhatsAppClick = () => {
    const phoneNumber = "2348123911469"; // Nigerian format without leading 0
    const message = encodeURIComponent(
      `Hello Pison Careers! I just placed an order for Smart CV.\n\nOrder ID: ${orderId || 'N/A'}\nName: ${fullName || 'N/A'}\n\nI'd like to continue with my order.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div ref={pageRef} className={`min-h-screen bg-background flex items-center justify-center px-6 py-12 transition-all duration-700 ${pageVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
      {/* Background gradient effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-deep-blue/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-3xl relative z-10">
        {/* Success Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gold/20 rounded-full blur-2xl animate-pulse" />
            <div className="relative bg-gradient-to-br from-gold to-gold/80 p-6 rounded-full">
              <CheckCircle className="w-16 h-16 text-gold-foreground" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gold to-gold/60 bg-clip-text text-transparent">
            Order Received!
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-2">
            You're now one step closer to standing out.
          </p>
          <p className="text-muted-foreground text-lg">
            Your request for the Pison Smart CV has been successfully submitted.
          </p>
          {orderId && (
            <p className="text-sm text-muted-foreground mt-2">
              Order ID: <span className="font-mono text-foreground">{orderId}</span>
            </p>
          )}
        </div>

        {/* WhatsApp CTA */}
        <div className="bg-gradient-to-r from-green-600/20 to-green-500/10 backdrop-blur-sm border border-green-500/30 rounded-lg p-6 mb-8 text-center">
          <MessageCircle className="w-10 h-10 text-green-500 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Continue Your Order on WhatsApp
          </h3>
          <p className="text-muted-foreground mb-4">
            Chat with us directly to complete your payment and get updates on your Smart CV.
          </p>
          <Button
            onClick={handleWhatsAppClick}
            className="gap-2 bg-green-600 hover:bg-green-700 text-white"
          >
            <MessageCircle className="w-4 h-4" />
            Continue on WhatsApp
          </Button>
        </div>

        {/* Next Steps Card */}
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Here's what's next:</h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-deep-blue/10 rounded-lg">
              <div className="mt-1">
                <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-gold" />
                </div>
              </div>
              <div>
                <p className="text-foreground font-medium">Our experts will begin processing your CV</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-deep-blue/10 rounded-lg">
              <div className="mt-1">
                <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
              </div>
              <div>
                <p className="text-foreground font-medium">Delivery: 3–5 working days</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-deep-blue/10 rounded-lg">
              <div className="mt-1">
                <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
              </div>
              <div>
                <p className="text-foreground font-medium">We'll reach out if we need more info</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-3">Didn't upload a CV?</h3>
          <p className="text-muted-foreground mb-4">
            Send it to{" "}
            <a 
              href="mailto:smartcv@pisoncareers.com" 
              className="text-gold hover:text-gold/80 underline"
            >
              smartcv@pisoncareers.com
            </a>{" "}
            with your full name as subject.
          </p>
          <p className="text-sm text-muted-foreground">
            While we work, you can prep your portfolio or recommendation letters if you'd like them included on your Smart CV QR page.
          </p>
        </div>

        {/* Referral Section */}
        <div className="bg-gradient-to-r from-deep-blue/20 to-gold/10 backdrop-blur-sm border border-border rounded-lg p-6 mb-8 text-center">
          <Share2 className="w-8 h-8 text-gold mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Know someone who needs a powerful, verified CV too?
          </h3>
          <p className="text-muted-foreground mb-4">
            Send them here 👉
          </p>
          <Button
            variant="outline"
            onClick={() => navigate("/order")}
            className="border-gold/50 hover:bg-gold/10"
          >
            Smart CV Order Page
          </Button>
        </div>

        {/* Closing Message */}
        <div className="text-center mb-8">
          <p className="text-lg text-foreground/90 mb-2">
            Thank you for trusting Pison Careers.
          </p>
          <p className="text-xl font-semibold bg-gradient-to-r from-gold to-gold/60 bg-clip-text text-transparent">
            You've just stepped into the limelight. The world is watching.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            onClick={() => navigate("/")}
            className="gap-2 bg-gradient-to-r from-gold to-gold/80 hover:from-gold/90 hover:to-gold/70"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Button>
          <Button
            variant="outline"
            onClick={handleWhatsAppClick}
            className="gap-2 border-green-500/50 hover:bg-green-500/10 text-green-600"
          >
            <MessageCircle className="w-4 h-4" />
            Contact on WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
