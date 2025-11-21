import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const NotFound = () => {
  const location = useLocation();
  const { ref, isVisible } = useIntersectionObserver();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div ref={ref} className={`text-center transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
