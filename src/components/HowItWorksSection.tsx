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
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get Started in Minutes
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  {/* Step Number */}
                  <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-medium group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto group-hover:bg-brand-green-light group-hover:text-white transition-colors">
                    <step.icon className="w-6 h-6" />
                  </div>

                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-border transform translate-x-8"></div>
                  )}
                </div>

                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;