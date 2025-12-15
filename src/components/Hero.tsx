import { ArrowRight, Package } from "lucide-react";
import logo from "@/assets/shiptraction-logo.png";

const Hero = () => {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-8 animate-fade-up">
            <img
              src={logo}
              alt="Shiptraction Logo"
              className="h-24 w-24 md:h-32 md:w-32"
            />
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Smart Fulfillment for Everyday Consumer Needs
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            From product to delivery — we handle it all. A complete fulfillment solution 
            designed to bring quality products directly to your doorstep with reliability and care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5"
            >
              Get Started
              <ArrowRight size={20} />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            >
              Learn More
            </a>
          </div>

          <div className="mt-16 flex items-center justify-center gap-8 text-muted-foreground animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2">
              <Package className="text-primary" size={20} />
              <span className="text-sm font-medium">End-to-End Fulfillment</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">🇨🇦 Based in Alberta, Canada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
