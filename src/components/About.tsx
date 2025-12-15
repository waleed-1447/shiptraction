import { CheckCircle } from "lucide-react";

const About = () => {
  const highlights = [
    "Product sourcing & storage",
    "Order processing & shipping",
    "Customer delivery",
    "Quality assurance",
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-6">
              Modern Fulfillment, Built for You
            </h2>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed text-center mb-12">
            <span className="text-foreground font-semibold">Shiptraction.com</span> is designed to be a modern platform for consumer goods and personal-use items, providing a complete product-to-order fulfillment cycle — from product sourcing and storage to order processing, shipping, and customer delivery. Our goal is to provide hassle-free, high-quality products to customers.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 rounded-xl bg-background hover:shadow-md transition-shadow"
              >
                <CheckCircle className="text-primary mb-3" size={28} />
                <span className="text-sm font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
