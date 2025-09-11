import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, ShieldCheck, Sparkles } from "lucide-react";
import heroWellnessPro from "@/assets/hero-wellness-pro.jpg";
import GradientText from "@/components/ui/gradient-text";

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

            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={6}
              showBorder={false}
              className="font-bold text-lg text-center mx-auto lg:mx-0 drop-shadow-lg"
            >
              Free to explore. No sign up required.
            </GradientText>
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
              <div className="absolute -bottom-3 left-4 bg-white/95 backdrop-blur-sm border-2 border-transparent shadow-glow px-4 py-2 text-sm font-bold transition-all duration-300 hover:scale-105 rounded-full overflow-hidden">
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-brand-green to-brand-green-light animate-gradient opacity-20"
                  style={{
                    background: 'linear-gradient(90deg, #40ffaa, #4079ff, #40ffaa, #4079ff, #40ffaa)',
                    backgroundSize: '400% 100%',
                    animation: 'gradient 6s ease-in-out infinite'
                  }}
                ></div>
                <div className="flex items-center relative z-10">
                  <div 
                    className="w-4 h-4 mr-2"
                    style={{
                      background: 'linear-gradient(90deg, #059669, #2563eb, #059669, #2563eb, #059669)',
                      backgroundSize: '400% 100%',
                      animation: 'gradient 6s ease-in-out infinite',
                      WebkitMask: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke-width=\'2\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' d=\'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z\'/%3E%3C/svg%3E") no-repeat center',
                      mask: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke-width=\'2\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' d=\'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z\'/%3E%3C/svg%3E") no-repeat center',
                      WebkitMaskSize: 'contain',
                      maskSize: 'contain'
                    }}
                  />
                  <GradientText
                    colors={["#059669", "#2563eb", "#059669", "#2563eb", "#059669"]}
                    animationSpeed={6}
                    showBorder={false}
                    className="text-base font-bold"
                  >
                    Verified pros
                  </GradientText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;