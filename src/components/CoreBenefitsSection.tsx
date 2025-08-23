import { Shield, UserCheck, Calendar, CreditCard } from "lucide-react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const CoreBenefitsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your data stays protected"
    },
    {
      icon: UserCheck,
      title: "Verified Pros",
      description: "Every provider is background checked"
    },
    {
      icon: Calendar,
      title: "Simple Scheduling",
      description: "Book and manage sessions in a few taps"
    },
    {
      icon: CreditCard,
      title: "Pay When You Hire",
      description: "Explore for free — only pay when you're ready"
    }
  ];

  return (
    <section className="py-20 text-white relative overflow-hidden">
      <BackgroundGradientAnimation containerClassName="absolute inset-0" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors">
                <benefit.icon className="w-8 h-8 text-brand-green-light" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {benefit.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreBenefitsSection;