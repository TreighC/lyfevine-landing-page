import { Search, Users, PlayCircle } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      icon: Search,
      title: "Choose Your Provider",
      description: "Get smart suggestions from AI, or filter and browse providers yourself."
    },
    {
      number: "2", 
      icon: Users,
      title: "Compare and Connect",
      description: "View profiles, transparent pricing, and reviews. Book and pay seamlessly and securely."
    },
    {
      number: "3",
      icon: PlayCircle,
      title: "Start Your Journey", 
      description: "Free consultation, message and meet your pro, and discover everything handled in-app."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-brand-green rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-brand-green-light rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-brand text-white px-6 py-2 rounded-full mb-6 text-sm font-semibold">
            <span>🚀</span>
            <span>Simple Process</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Get Started in <span className="text-brand-green">Minutes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to connect with your perfect wellness professional
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center group relative">
                <div className="relative mb-10">
                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-brand-green to-brand-green-light transform translate-x-8 z-0"></div>
                  )}
                  
                  {/* Step Number Circle */}
                  <div className="relative z-10 w-20 h-20 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-strong group-hover:scale-110 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(76,175,80,0.5)]">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-14 h-14 bg-card border-2 border-border rounded-xl flex items-center justify-center mx-auto group-hover:bg-brand-green group-hover:text-white group-hover:border-brand-green transition-all duration-300 shadow-soft">
                    <step.icon className="w-7 h-7" />
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 group-hover:-translate-y-2 border border-border/50 hover:border-brand-green/30">
                  <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-brand-green transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;