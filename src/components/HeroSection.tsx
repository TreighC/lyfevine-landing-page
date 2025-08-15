import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroWellnessPro from "@/assets/hero-wellness-pro.jpg";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              Find Your Health &{" "}
              <span className="text-brand-green-light">Wellness Pro</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed animate-slide-in-left">
              AI does the heavy lifting — helping you find a pro who aligns with your goals, 
              your needs, and your life. Or, explore on your own.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <Button size="lg" className="bg-brand-green hover:bg-brand-green-dark text-white shadow-medium">
                Start Your Journey
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Browse Pros
              </Button>
            </div>

            <p className="text-white/70 text-sm">
              Free to explore. No sign up required.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={heroWellnessPro} 
                alt="Wellness Professional" 
                className="rounded-2xl shadow-strong max-w-lg w-full"
              />
              <Badge 
                variant="secondary" 
                className="absolute top-4 left-4 bg-white/95 text-brand-navy shadow-medium"
              >
                Trusted by wellness seekers
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;