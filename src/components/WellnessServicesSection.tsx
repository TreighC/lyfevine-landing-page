import { Dumbbell, Brain, Heart, Sparkles } from "lucide-react";

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
    <section className="py-32 bg-gradient-to-br from-surface to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-glow rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-accent rounded-full blur-2xl opacity-15 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
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