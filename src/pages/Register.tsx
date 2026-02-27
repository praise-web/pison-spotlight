import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Register = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <div className="container mx-auto px-6 lg:px-12 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Register
          </h1>
          <div className="w-full max-w-3xl mx-auto">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeHjQL0cXGnsbfsMToLF8PAj1mSfvwKTSZ2HEAMEKqrwE2Ysg/viewform?embedded=true"
              width="100%"
              height="1200"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              title="Registration Form"
              className="rounded-lg border border-border"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
