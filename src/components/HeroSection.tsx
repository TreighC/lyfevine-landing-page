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

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-in">
                Find Your Health &{" "}
                <span className="gradient-text">Wellness Pro</span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed animate-slide-in-left max-w-lg">
                AI does the heavy lifting — helping you find a pro who aligns with your goals, 
                your needs, and your life. Or, explore on your own.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="group bg-brand-green hover:bg-brand-green-dark text-white shadow-glow transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Start Your Journey
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
              >
                Browse Pros
              </Button>
            </div>

            <div className="glass-card inline-block px-6 py-3 rounded-full">
              <p className="text-white/90 text-sm font-medium">
                <Sparkles className="w-4 h-4 inline mr-2 text-brand-green-light" />
                Free to explore. No sign up required.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group animate-float">
              <div className="absolute -inset-4 bg-gradient-glow rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity"></div>
              <img 
                src={heroWellnessPro} 
                alt="Wellness Professional providing personalized health guidance" 
                className="relative rounded-3xl shadow-strong max-w-lg w-full transform group-hover:scale-105 transition-transform duration-500"
              />
              <Badge 
                variant="secondary" 
                className="absolute -bottom-3 left-4 bg-brand-green hover:bg-brand-green-dark text-white border border-white shadow-glow px-4 py-2 text-sm font-semibold animate-float transition-colors duration-300"
              >
                <ShieldCheck className="w-4 h-4 mr-1" />
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