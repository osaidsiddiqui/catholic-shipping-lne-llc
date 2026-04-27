import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const footerServices = [
  "Ocean Freight", "Air Freight", "Import Customs Clearance", "Export Documentation",
  "Cargo Consolidation", "Door-to-Door Delivery", "Warehousing & Storage", "Hazardous Cargo",
];

const footerLinks = [
  { to: "/", label: "Home" }, { to: "/about", label: "About" }, { to: "/services", label: "Services" },
  { to: "/fleet", label: "Fleet" }, { to: "/tracking", label: "Tracking" }, { to: "/contact", label: "Contact" },
];

const Footer = () => (
  <footer className="bg-dark-navy border-t-2 border-gold">
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-center mb-8">
        <img src="/images/logo.png" alt="Royaume Shipping Line" className="h-20 w-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-primary-foreground">
        <div>
          <h3 className="font-cinzel text-gold text-lg mb-3">Royaume Shipping Line</h3>
          <p className="font-source text-sm text-primary-foreground/70 leading-relaxed">
            Connecting Continents. Delivering Excellence. Your trusted partner for international shipping, import/export, and cargo logistics from Miami to the world.
          </p>
        </div>

        <div>
          <h4 className="font-raleway font-bold text-gold text-sm uppercase tracking-wider mb-3">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {footerLinks.map((l) => (
              <Link key={l.to} to={l.to} className="font-source text-sm text-primary-foreground/70 hover:text-gold transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-raleway font-bold text-gold text-sm uppercase tracking-wider mb-3">Our Services</h4>
          <div className="flex flex-col gap-2">
            {footerServices.map((s) => (
              <span key={s} className="font-source text-sm text-primary-foreground/70">{s}</span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-raleway font-bold text-gold text-sm uppercase tracking-wider mb-3">Contact Info</h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
            <span className="flex items-center gap-2"><MapPin size={16} className="text-gold shrink-0" /> Miami, FL, USA</span>
            <a href="tel:7864467444" className="flex items-center gap-2 hover:text-gold transition-colors font-bold"><Phone size={16} className="text-gold shrink-0" /> (786) 446-7444</a>
            <span className="text-xs text-primary-foreground/50">Calls answered by Virtual Receptionist</span>
            <a href="mailto:royaumeshippinglinellc@gmail.com" className="flex items-center gap-2 hover:text-gold transition-colors break-all"><Mail size={16} className="text-gold shrink-0" /> royaumeshippinglinellc@gmail.com</a>
          </div>
        </div>
      </div>

      <div className="border-t border-gold/30 mt-10 pt-6 text-center">
        <p className="font-source text-xs text-primary-foreground/50">© 2025 Royaume Shipping Line Import Export LLC. All Rights Reserved. Miami, FL.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
