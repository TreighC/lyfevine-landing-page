import { Shield, UserCheck, Calendar, CreditCard } from "lucide-react";

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
    <section className="py-20 relative overflow-hidden bg-gray-50">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-glow">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
               <h3 className="text-xl font-semibold mb-3 text-foreground text-contrast">
                 {benefit.title}
               </h3>
               <p className="text-muted-foreground leading-relaxed text-contrast">
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