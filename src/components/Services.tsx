import { ShoppingBag, User } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: ShoppingBag,
      title: "Consumer Goods",
      description: "Everyday essential products sourced and delivered with care for your household needs.",
      status: "Coming Soon",
    },
    {
      icon: User,
      title: "Personal Usage Items",
      description: "Products for personal and daily use, carefully curated for quality and convenience.",
      status: "Coming Soon",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
            What We Offer
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our range of fulfillment services designed to meet your everyday needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-6 right-6">
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                  {service.status}
                </span>
              </div>

              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary" size={32} />
              </div>

              <h3 className="font-heading text-xl font-semibold text-secondary mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
