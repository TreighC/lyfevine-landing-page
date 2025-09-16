import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToActionSection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-brand-navy">
      <div className="container mx-auto px-6 text-center relative z-10 text-white">
        <div className="max-w-5xl mx-auto">
          {/* Main Content */}
          <div className="mb-8">
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
                Get Started Today
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/50 text-white bg-white/10 hover:bg-white/20 min-w-[250px] px-8 py-4 text-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                Browse Pros
              </Button>
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