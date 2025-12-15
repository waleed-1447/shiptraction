import { MapPin } from "lucide-react";
import logo from "@/assets/shiptraction-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
  ];

  return (
    <footer className="bg-secondary py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Shiptraction Logo" className="h-10 w-10" />
              <span className="font-heading text-xl font-semibold text-secondary-foreground">
                Shiptraction
              </span>
            </a>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              Modern fulfillment solutions for consumer goods and personal-use items. From product to delivery — we handle it all.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-secondary-foreground font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-secondary-foreground font-semibold mb-4">
              Contact Us
            </h4>
            <a
              href="mailto:info@shiptraction.com"
              className="text-secondary-foreground/70 hover:text-primary text-sm transition-colors block mb-3"
            >
              info@shiptraction.com
            </a>
            <div className="flex items-center gap-2 text-secondary-foreground/70 text-sm">
              <MapPin size={16} />
              <span>Alberta, Canada</span>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-8">
          <p className="text-center text-secondary-foreground/60 text-sm">
            © {currentYear} Shiptraction.com — All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
