import { Search, UserPlus, Rocket, ArrowRight } from "lucide-react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Choose Your Provider",
      description: "Get smart suggestions from AI, or filter and browse providers yourself.",
      color: "from-blue-400 to-blue-600"
    },
    {
      number: "02", 
      icon: UserPlus,
      title: "Compare and Connect",
      description: "View profiles, transparent pricing, and reviews. Book and pay seamlessly and securely.",
      color: "from-brand-green to-brand-green-dark"
    },
    {
      number: "03",
      icon: Rocket,
      title: "Start Your Journey", 
      description: "Free consultation, message and meet your pro, and discover everything handled in-app.",
      color: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-background to-surface">
      <BackgroundGradientAnimation 
        containerClassName="absolute inset-0" 
        gradientBackgroundStart="hsl(var(--background))"
        gradientBackgroundEnd="hsl(var(--surface))"
        firstColor="210, 81%, 23%"
        secondColor="142, 71%, 40%"
        thirdColor="142, 71%, 50%"
        fourthColor="160, 50%, 44%"
        fifthColor="142, 100%, 80%"
        interactive={false}
      />
      
      {/* Dark overlay for white text contrast */}
      <div className="absolute inset-0 bg-brand-navy/70 z-10"></div>

      <div className="container mx-auto px-6 relative z-20 text-white">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 animate-fade-in">
            Get Started in <span className="gradient-text">Minutes</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Simple steps to connect with your perfect wellness professional
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="group relative">
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-white/30 to-transparent transform -translate-y-1/2 z-0">
                    <ArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
                  </div>
                )}
                
                <div className="glass-card p-10 rounded-3xl text-center hover:scale-105 transition-all duration-500 border border-white/10 hover:border-white/30 animate-slide-up relative z-10"
                     style={{ animationDelay: `${index * 0.2}s` }}>
                  
                  {/* Step Number */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center font-bold text-white shadow-glow`}>
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-8 pt-6">
                    <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-glow`}>
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-green-light transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed text-lg">
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