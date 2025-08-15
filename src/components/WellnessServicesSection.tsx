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
                className="px-6 py-3 text-base bg-card hover:bg-brand-green hover:text-white transition-colors cursor-pointer shadow-soft hover:shadow-medium"
              >
                {service}
              </Badge>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-shadow">
              <h3 className="text-xl font-semibold text-foreground mb-4">Physical Wellness</h3>
              <p className="text-muted-foreground">Personal training, yoga, massage therapy, and self-defense to keep your body strong and healthy.</p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-shadow">
              <h3 className="text-xl font-semibold text-foreground mb-4">Mental Wellness</h3>
              <p className="text-muted-foreground">Meditation, life coaching, and energy healing to nurture your mental and emotional well-being.</p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-shadow">
              <h3 className="text-xl font-semibold text-foreground mb-4">Nutritional Health</h3>
              <p className="text-muted-foreground">Expert nutrition guidance and health coaching to fuel your body and optimize your lifestyle.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessServicesSection;