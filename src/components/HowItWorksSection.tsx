import { Search, UserPlus, Rocket } from "lucide-react";
import InteractiveAnimatedArrowIcon from "@/components/ui/interactive-animated-arrow-icon";

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
    <section className="py-32 relative overflow-hidden bg-brand-navy">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
           <h2 className="text-5xl lg:text-6xl font-bold mb-8 animate-fade-in text-white">
             Get Started in <span className="text-brand-green-light">Minutes</span>
           </h2>
           <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
             Simple steps to connect with your perfect wellness professional
           </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="group relative">
                {/* Interactive Animated Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-12 -translate-y-1/2 z-0">
                    <div className="relative">
                      {/* Glow effect background */}
                      <div className="absolute inset-0 bg-green-400/20 rounded-full blur-lg animate-pulse"></div>
                      {/* Arrow with brighter color */}
                       <InteractiveAnimatedArrowIcon 
                        size={64} 
                        color="#10b981"
                        className="relative z-10 drop-shadow-lg"
                       />
                    </div>
                  </div>
                )}
                
                <div className="glass-card p-10 rounded-3xl text-center hover:scale-105 transition-all duration-500 border border-white/10 hover:border-white/30 animate-slide-up relative z-10 h-full flex flex-col"
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
                   <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-green-light transition-colors text-contrast-light">
                     {step.title}
                   </h3>
                   <p className="text-white/90 leading-relaxed text-lg text-contrast-light flex-grow">
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