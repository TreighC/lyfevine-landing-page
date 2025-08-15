import { Badge } from "@/components/ui/badge";

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

  return (
    <section id="services" className="py-20 bg-surface-alt">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Explore Health & Wellness Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Whether you're ready to dive in or just browsing for inspiration, 
            Lyfevine offers a wide range of services to support your lifestyle.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {services.map((service, index) => (
              <Badge 
                key={index}
                variant="secondary"
                className="px-6 py-3 text-base bg-card border border-border text-foreground hover:bg-brand-green hover:text-white transition-all duration-300 cursor-pointer shadow-soft hover:shadow-medium hover:scale-105"
              >
                {service}
              </Badge>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-border/50 hover:border-brand-green/30">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white text-xl">💪</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Physical Wellness</h3>
              <p className="text-muted-foreground">Personal training, yoga, massage therapy, and self-defense to keep your body strong and healthy.</p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-border/50 hover:border-brand-green/30">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white text-xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Mental Wellness</h3>
              <p className="text-muted-foreground">Meditation, life coaching, and cognitive training to strengthen your mental clarity and focus.</p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-border/50 hover:border-brand-green/30">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white text-xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Emotional Wellness</h3>
              <p className="text-muted-foreground">Therapy, counseling, and emotional support to help you process and heal from life's challenges.</p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-border/50 hover:border-brand-green/30">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white text-xl">🙏</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Spiritual Wellness</h3>
              <p className="text-muted-foreground">Energy healing, spiritual guidance, and practices to connect with your inner self and purpose.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessServicesSection;