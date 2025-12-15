import { TrendingUp, Heart, Eye, Zap } from "lucide-react";

const WhyUs = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Reliable & Scalable",
      description: "Built to grow with your needs, from individual orders to high-volume fulfillment.",
    },
    {
      icon: Heart,
      title: "Customer-Centric",
      description: "Your satisfaction is our priority. We put customers first in everything we do.",
    },
    {
      icon: Eye,
      title: "Transparent Processes",
      description: "Clear communication and visibility throughout the entire fulfillment journey.",
    },
    {
      icon: Zap,
      title: "Modern E-commerce Ready",
      description: "Designed for the digital age with seamless integration and fast processing.",
    },
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Difference
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
            Why Choose Shiptraction
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're committed to excellence in every aspect of fulfillment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-background hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="text-accent" size={28} />
              </div>

              <h3 className="font-heading text-lg font-semibold text-secondary mb-3">
                {feature.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
