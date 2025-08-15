import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToActionSection = () => {
  return (
    <section className="py-20 bg-gradient-brand text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Join others who are already improving their health and wellness with Lyfevine.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-brand-green hover:bg-brand-green-dark text-white shadow-medium min-w-[200px]"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 min-w-[200px]"
            >
              Browse Pros
            </Button>
          </div>

          <div className="pt-6 border-t border-white/20">
            <p className="text-white/80">
              Are you a wellness pro? 
              <a href="#" className="text-brand-green-light hover:text-white transition-colors ml-2 font-semibold">
                Join now →
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;