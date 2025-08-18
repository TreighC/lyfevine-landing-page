import { Check, Sparkles, Users, Shield, Heart } from "lucide-react";

const WhyLyfevineSection = () => {
  const benefits = [
    {
      text: "AI helps you find the best fit, based on your needs and goals",
      icon: Sparkles
    },
    {
      text: "Browse manually if you prefer full control", 
      icon: Users
    },
    {
      text: "Book, message, video chat, and pay all in one place",
      icon: Heart
    },
    {
      text: "Profiles with full transparency and real reviews",
      icon: Shield
    },
    {
      text: "You only pay when you hire a pro — browsing is always free",
      icon: Check
    },
    {
      text: "All pros are verified and background checked for your safety",
      icon: Shield
    }
  ];

  return (
    <section id="why-lyfevine" className="py-32 bg-gradient-to-br from-surface via-surface-alt to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--brand-green)) 2px, transparent 0)`, 
          backgroundSize: '40px 40px' 
        }}></div>
      </div>
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-glow rounded-full blur-xl animate-float opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-accent rounded-full blur-2xl animate-float opacity-10" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-block p-1 bg-gradient-brand rounded-full mb-8 animate-pulse-glow">
            <div className="bg-surface px-8 py-3 rounded-full">
              <span className="text-brand-green font-bold text-lg">Why Choose Lyfevine?</span>
            </div>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
            Feel better, move better,<br />
            <span className="gradient-text">live better</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            With guidance that fits your life, goals, and schedule.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group flex items-start gap-6 p-10 glass-card rounded-3xl shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-3 border border-border/50 hover:border-brand-green/30 animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-brand rounded-2xl flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-foreground font-semibold leading-relaxed text-xl group-hover:text-brand-green transition-colors duration-300">
                  {benefit.text}
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