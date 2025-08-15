import { Check } from "lucide-react";

const WhyLyfevineSection = () => {
  const benefits = [
    "AI helps you find the best fit, based on your needs and goals",
    "Browse manually if you prefer full control", 
    "Book, message, video chat, and pay all in one place",
    "Profiles with full transparency and real reviews",
    "You only pay when you hire a pro — browsing is always free",
    "All pros are verified and background checked for your safety"
  ];

  return (
    <section id="why-lyfevine" className="py-24 bg-gradient-to-br from-surface to-surface-alt relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`, backgroundSize: '20px 20px' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block p-1 bg-gradient-brand rounded-full mb-6">
            <div className="bg-surface px-6 py-2 rounded-full">
              <span className="text-brand-green font-semibold">Why Choose Lyfevine?</span>
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Feel better, move better,<br />
            <span className="text-brand-green">live better</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            With guidance that fits your life, goals, and schedule.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group flex items-start gap-4 p-8 bg-card rounded-2xl shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border border-border/50 hover:border-brand-green/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-brand rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <p className="text-foreground font-medium leading-relaxed text-lg group-hover:text-brand-green transition-colors">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLyfevineSection;