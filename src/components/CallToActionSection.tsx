import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users } from "lucide-react";

const CallToActionSection = () => {
  return (
    <section className="py-32 bg-gradient-brand text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-glow opacity-30"></div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-brand-green-light/20 rounded-full blur-2xl animate-float"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Content */}
          <div className="mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold mb-8 animate-fade-in">
              Ready to Start Your <span className="text-brand-green-light">Wellness Journey?</span>
            </h2>
            <p className="text-2xl text-white/90 mb-16 leading-relaxed max-w-3xl mx-auto">
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
              <p className="text-white/90 font-medium text-lg">
                <Sparkles className="w-5 h-5 inline mr-2 text-brand-green-light" />
                Join 10,000+ wellness seekers already on their journey
              </p>
            </div>
          </div>

          {/* Professional CTA */}
          <div className="pt-8 border-t border-white/20">
            <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
              <p className="text-white/90 text-xl mb-4">
                Are you a wellness professional?
              </p>
              <a 
                href="#" 
                className="inline-flex items-center text-brand-green-light hover:text-white transition-colors text-xl font-semibold group"
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