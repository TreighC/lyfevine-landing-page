import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users } from "lucide-react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const CallToActionSection = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-section-final">
      <BackgroundGradientAnimation 
        containerClassName="absolute inset-0" 
        gradientBackgroundStart="hsl(var(--brand-navy) / 0.05)"
        gradientBackgroundEnd="hsl(var(--brand-navy))"
        firstColor="210, 81%, 20%"
        secondColor="142, 71%, 40%"
        thirdColor="142, 71%, 50%"
        fourthColor="160, 50%, 45%"
        fifthColor="142, 100%, 80%"
        interactive={false}
      />
      
      {/* Enhanced darker overlay for white text contrast */}
      <div className="absolute inset-0 bg-brand-navy/85 z-10"></div>

      <div className="container mx-auto px-6 text-center relative z-20 text-white">
        <div className="max-w-5xl mx-auto">
          {/* Main Content */}
          <div className="mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold mb-8 animate-fade-in text-contrast-light">
              Ready to Start Your <span className="text-brand-green-light">Wellness Journey?</span>
            </h2>
            <p className="text-2xl text-white/95 mb-16 leading-relaxed max-w-3xl mx-auto text-contrast-light">
              Join thousands who are already improving their health and wellness with Lyfevine.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="group bg-brand-green hover:bg-brand-green-dark text-white shadow-glow min-w-[250px] px-8 py-4 text-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                <Sparkles className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
                Get Started Today
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="glass-card border-white/30 text-white hover:bg-white/10 min-w-[250px] px-8 py-4 text-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                <Users className="mr-3 w-6 h-6" />
                Browse Pros
              </Button>
            </div>

            {/* Social Proof */}
            <div className="glass-card inline-block px-8 py-4 rounded-full mb-12">
              <p className="text-white/95 font-medium text-lg text-contrast-light">
                <Sparkles className="w-5 h-5 inline mr-2 text-brand-green-light" />
                Join 10,000+ wellness seekers already on their journey
              </p>
            </div>
          </div>

          {/* Professional CTA */}
          <div className="pt-8 border-t border-white/20">
            <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
              <p className="text-white/95 text-xl mb-4 text-contrast-light">
                Are you a wellness professional?
              </p>
              <a 
                href="#" 
                className="inline-flex items-center text-brand-green-light hover:text-white transition-colors text-xl font-semibold group text-contrast-light"
              >
                Join our platform and grow your practice
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;