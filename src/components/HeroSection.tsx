import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, ShieldCheck, Sparkles } from "lucide-react";
import heroWellnessPro from "@/assets/hero-wellness-pro.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video 
        className="absolute inset-0 w-full h-full object-cover scale-105"
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src="/wellness-hero-video.mp4" type="video/mp4" />
        <source src="/placeholder-wellness-video.mp4" type="video/mp4" />
      </video>
      
      {/* Dynamic Overlay */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>

      <div className="relative z-10 container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-10">
            <div className="space-y-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl heading-hero text-white animate-fade-in">
                Find Your Health &{" "}
                <span className="gradient-text">Wellness Pro</span>
              </h1>
              
              <p className="text-lg sm:text-xl body-large text-white/90 animate-slide-in-left max-w-2xl mx-auto lg:mx-0">
                AI does the heavy lifting — helping you find a pro who aligns with your goals, 
                your needs, and your life. Or, explore on your own.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start max-w-md mx-auto lg:mx-0">
              <Button 
                size="lg" 
                className="group bg-brand-green hover:bg-brand-green-dark text-white shadow-glow transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg cta-text"
              >
                Start Your Journey
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-lg cta-text transition-all duration-300 hover:scale-105"
              >
                Browse Pros
              </Button>
            </div>

            <div className="glass-card inline-block px-6 py-3 rounded-full mx-auto lg:mx-0">
              <p className="text-white/90 caption-text">
                Free to explore. No sign up required.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group animate-float max-w-lg w-full">
              {/* Enhanced glow effect */}
              <div className="absolute -inset-6 bg-gradient-glow rounded-3xl blur-2xl opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
              
              {/* Image container with better proportions */}
              <div className="relative overflow-hidden rounded-3xl shadow-strong">
                <img 
                  src={heroWellnessPro} 
                  alt="Wellness Professional providing personalized health guidance" 
                  className="w-full h-[450px] sm:h-[500px] lg:h-[550px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Subtle overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Enhanced badge positioning */}
              <Badge 
                variant="secondary" 
                className="absolute -bottom-4 left-6 bg-brand-green hover:bg-brand-green-dark text-white border border-white shadow-glow px-5 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105"
              >
                <ShieldCheck className="w-4 h-4 mr-2" />
                Verified pros
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;