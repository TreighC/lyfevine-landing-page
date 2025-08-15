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
    <section id="why-lyfevine" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Lyfevine?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Feel better, move better, live better — with guidance that fits your life.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-soft hover:shadow-medium transition-shadow"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-brand-green rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-foreground font-medium leading-relaxed">
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