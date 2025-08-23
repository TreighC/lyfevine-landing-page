import { Dumbbell, Brain, Heart, Sparkles } from "lucide-react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

console.log("WellnessServicesSection loaded successfully");

const WellnessServicesSection = () => {
  const services = [
    "Personal Training",
    "Nutrition", 
    "Massage Therapy",
    "Yoga",
    "Self-Defense",
    "Health Coaching",
    "Meditation",
    "Life Coaching",
    "Energy Healing"
  ];

  const healthCategories = [
    {
      icon: Dumbbell,
      title: "Physical Health",
      description: "Strengthen your body, improve fitness, and enhance physical performance",
      gradient: "from-red-400 to-orange-500"
    },
    {
      icon: Brain,
      title: "Mental Health", 
      description: "Sharpen your mind, reduce stress, and improve cognitive function",
      gradient: "from-blue-400 to-purple-500"
    },
    {
      icon: Heart,
      title: "Emotional Health",
      description: "Balance emotions, build resilience, and enhance emotional intelligence", 
      gradient: "from-pink-400 to-rose-500"
    },
    {
      icon: Sparkles,
      title: "Spiritual Health",
      description: "Connect with purpose, find inner peace, and explore spiritual growth",
      gradient: "from-green-400 to-teal-500"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-surface">
      <BackgroundGradientAnimation 
        containerClassName="absolute inset-0" 
        gradientBackgroundStart="hsl(var(--surface))"
        gradientBackgroundEnd="hsl(var(--background))"
        firstColor="210, 81%, 24%"
        secondColor="142, 71%, 42%"
        thirdColor="142, 71%, 52%"
        fourthColor="160, 50%, 48%"
        fifthColor="142, 100%, 82%"
        interactive={false}
      />
      
      {/* Subtle overlay for better contrast */}
      <div className="absolute inset-0 bg-surface/60 z-10"></div>

      <div className="container mx-auto px-6 relative z-30">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-8 animate-fade-in">
            Explore Health & <span className="gradient-text">Wellness Services</span>
          </h2>
          
          {/* Services Tags */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <span 
                key={index}
                className="glass-card px-6 py-3 rounded-full text-foreground font-medium border border-border/50 hover:border-brand-green/50 transition-all duration-300 hover:scale-105 hover:shadow-glow animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service}
              </span>
            ))}
          </div>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're ready to dive in or just browsing for inspiration, Lyfevine offers a wide range of services to support your lifestyle.
          </p>
        </div>

        {/* Health Categories */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {healthCategories.map((category, index) => (
              <div 
                key={index}
                className="group glass-card p-8 rounded-3xl text-center hover:scale-105 transition-all duration-500 border border-border/50 hover:border-brand-green/30 hover:shadow-strong animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-glow`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-brand-green transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessServicesSection;